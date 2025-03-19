
import { LearningPlan, LearningActivity } from '../types/api.types';
import { toast } from 'sonner';

const API_BASE_URL = 'http://localhost:3000';

// Helper function to handle API errors
const handleApiError = (error: any, fallbackMessage: string) => {
  console.error(error);
  toast.error(fallbackMessage);
  throw error;
};

// Function to fetch with timeout and error handling
const fetchWithTimeout = async (url: string, options: RequestInit = {}, timeout = 8000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    
    clearTimeout(id);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    clearTimeout(id);
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
};

// Learning Plans API functions
export const fetchAllLearningPlans = async (): Promise<LearningPlan[]> => {
  try {
    return await fetchWithTimeout(`${API_BASE_URL}/learning-plans`);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch learning plans');
  }
};

export const fetchLearningPlanById = async (id: string): Promise<LearningPlan> => {
  try {
    return await fetchWithTimeout(`${API_BASE_URL}/learning-plans/${id}`);
  } catch (error) {
    return handleApiError(error, `Failed to fetch learning plan with ID: ${id}`);
  }
};

// Learning Activities API functions
export const fetchAllLearningActivities = async (): Promise<LearningActivity[]> => {
  try {
    return await fetchWithTimeout(`${API_BASE_URL}/learning-activities`);
  } catch (error) {
    return handleApiError(error, 'Failed to fetch learning activities');
  }
};

export const fetchLearningActivityById = async (id: string): Promise<LearningActivity> => {
  try {
    return await fetchWithTimeout(`${API_BASE_URL}/learning-activities/${id}`);
  } catch (error) {
    return handleApiError(error, `Failed to fetch learning activity with ID: ${id}`);
  }
};

// Function to fetch learning activities for a specific learning plan
export const fetchLearningActivitiesByPlanId = async (planId: string): Promise<LearningActivity[]> => {
  try {
    const allActivities = await fetchAllLearningActivities();
    return allActivities.filter(activity => activity.learningPlanId === planId);
  } catch (error) {
    return handleApiError(error, `Failed to fetch activities for learning plan: ${planId}`);
  }
};

// Fallback mock data with consistent dates in case the API is unreachable
export const getMockLearningPlan = (): LearningPlan => ({
  id: 'mock-plan-id',
  userId: 1,
  courseCode: 'FI01-QI',
  title: 'Finanzierung und Investition',
  status: 'active',
  startDate: '2024-10-01',
  endDate: '2024-10-19',
  weeklyLearningHours: 10
});

export const getMockLearningActivities = (): LearningActivity[] => [
  {
    id: 'mock-activity-1',
    learningPlanId: 'mock-plan-id',
    activityType: 'Video',
    title: 'Einführung in die Finanzwirtschaft',
    description: '25 min'
  },
  {
    id: 'mock-activity-2',
    learningPlanId: 'mock-plan-id',
    activityType: 'Course Book',
    title: 'Grundprinzipien der Finanzwirtschaft',
    description: '15 pages'
  },
  {
    id: 'mock-activity-3',
    learningPlanId: 'mock-plan-id',
    activityType: 'Quiz',
    title: 'Grundlagen-Quiz',
    description: '10 questions'
  },
  {
    id: 'mock-activity-4',
    learningPlanId: 'mock-plan-id',
    activityType: 'Cycle',
    title: 'Anwendungsübungen - Finanzwirtschaft',
    description: '5 exercises'
  },
  {
    id: 'mock-activity-5',
    learningPlanId: 'mock-plan-id',
    activityType: 'Exam Trainer',
    title: 'Klausurvorbereitung - Grundlagen',
    description: '15 practice questions'
  }
];
