
export interface LearningPlan {
  id: string;
  userId: number;
  courseCode: string;
  title: string;
  status: 'active' | 'paused' | 'completed';
  startDate: string;
  endDate: string;
  weeklyLearningHours: number;
}

export interface Resource {
  type: string;
  title: string;
  description: string;
  bgColor: string;
}

export type ActivityType = 'Video' | 'Quiz' | 'Cycle' | 'Exam Trainer' | 'Course Book';

export interface LearningActivity {
  id: string;
  learningPlanId: string;
  activityType: ActivityType;
  title: string;
  description: string;
  customDescription?: string;
  videoId?: string;
  quizId?: string;
  cycleId?: string;
  examTrainerId?: string;
}

export interface LearningModule {
  id: string;
  title: string;
  introduction: string;
  resources: Resource[];
}
