
import { useQuery } from '@tanstack/react-query';
import { 
  fetchLearningPlanById, 
  fetchAllLearningPlans, 
  fetchLearningActivitiesByPlanId,
  getMockLearningPlan,
  getMockLearningActivities
} from '../services/api.service';
import { LearningPlan, LearningActivity } from '../types/api.types';
import { toast } from 'sonner';
import { parseISO, format, addWeeks, addDays, startOfWeek } from 'date-fns';

export const useLearningPlan = (planId?: string) => {
  // Fetch learning plan
  const { 
    data: learningPlan, 
    isLoading: isLoadingPlan,
    error: planError 
  } = useQuery({
    queryKey: ['learningPlan', planId],
    queryFn: async () => {
      try {
        if (planId) {
          return await fetchLearningPlanById(planId);
        } else {
          // If no specific plan ID, fetch all and return the first active one
          const plans = await fetchAllLearningPlans();
          const activePlan = plans.find(plan => plan.status === 'active');
          return activePlan || plans[0]; // Return first active plan or first plan
        }
      } catch (error) {
        console.error('Error fetching learning plan:', error);
        // Use mock data as fallback and show toast notification
        toast.error('Unable to load learning plan data. Showing cached data instead.');
        return getMockLearningPlan();
      }
    },
    retry: 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Fetch activities for this plan
  const {
    data: activities,
    isLoading: isLoadingActivities,
    error: activitiesError
  } = useQuery({
    queryKey: ['learningActivities', learningPlan?.id],
    queryFn: async () => {
      try {
        if (!learningPlan?.id) return [];
        return await fetchLearningActivitiesByPlanId(learningPlan.id);
      } catch (error) {
        console.error('Error fetching learning activities:', error);
        // Use mock data as fallback and show toast notification
        toast.error('Unable to load learning activities. Showing cached data instead.');
        return getMockLearningActivities();
      }
    },
    enabled: !!learningPlan?.id,
    retry: 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Calculate estimated completion date based on current date and learning plan
  const estimatedCompletionDate = learningPlan ? calculateEstimatedCompletionDate(learningPlan) : null;

  return {
    learningPlan,
    activities,
    estimatedCompletionDate,
    isLoading: isLoadingPlan || isLoadingActivities,
    hasError: !!planError || !!activitiesError
  };
};

// Helper function to calculate estimated completion date
export const calculateEstimatedCompletionDate = (plan: LearningPlan | { weeklyHours?: number }): string => {
  try {
    // Always calculate based on the current date
    const today = new Date();
    
    // If the plan has a fixed duration in weeks, use that
    const courseDurationWeeks = 6; // Standard course duration
    
    // Adjust weeks based on weekly study hours (more hours = faster completion)
    let adjustedWeeks = courseDurationWeeks;
    
    // Check if weeklyLearningHours or weeklyHours is available
    const weeklyHours = 'weeklyLearningHours' in plan ? plan.weeklyLearningHours : (plan.weeklyHours || 8);
    
    if (weeklyHours) {
      // Basic adjustment - this could be more sophisticated
      if (weeklyHours > 10) {
        adjustedWeeks = Math.max(4, adjustedWeeks - 2); // Faster but minimum 4 weeks
      } else if (weeklyHours < 5) {
        adjustedWeeks = adjustedWeeks + 2; // Slower
      }
    }
    
    // Calculate the estimated end date from today
    const estimatedEndDate = addWeeks(today, adjustedWeeks);
    
    // Format as "1st October to 19th October" (like in the Overview page)
    // We'll use today as the start date and estimated end date as the end date
    const startDay = format(today, 'do');
    const startMonth = format(today, 'MMMM');
    const endDay = format(estimatedEndDate, 'do');
    const endMonth = format(estimatedEndDate, 'MMMM');
    
    return `${startDay} ${startMonth} to ${endDay} ${endMonth}`;
  } catch (error) {
    console.error('Error calculating completion date:', error);
    
    // Fallback: Calculate a default date 6 weeks from now
    const today = new Date();
    const fallbackDate = addWeeks(today, 6);
    const startDay = format(today, 'do');
    const startMonth = format(today, 'MMMM');
    const endDay = format(fallbackDate, 'do');
    const endMonth = format(fallbackDate, 'MMMM');
    
    return `${startDay} ${startMonth} to ${endDay} ${endMonth}`;
  }
};
