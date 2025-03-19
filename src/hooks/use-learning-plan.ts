
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

  return {
    learningPlan,
    activities,
    isLoading: isLoadingPlan || isLoadingActivities,
    hasError: !!planError || !!activitiesError
  };
};
