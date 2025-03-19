
import React from "react";
import { LearningModule } from "./LearningModule";
import { Button } from "@/components/ui/button";
import { PenLine, CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LearningActivity } from "@/types/api.types";
import { Skeleton } from "@/components/ui/skeleton";
import { addDays, format, startOfWeek } from "date-fns";
import { ChatDrawer } from "./ChatDrawer";

interface LearningPlanContentProps {
  dateRange: string;
  onOverviewEdit?: () => void;
  activities?: LearningActivity[];
  estimatedCompletionDate?: string | null;
}

export const LearningPlanContent: React.FC<LearningPlanContentProps> = ({
  dateRange,
  onOverviewEdit,
  activities = [],
  estimatedCompletionDate = null,
}) => {
  const navigate = useNavigate();
  
  const handleOverviewClick = () => {
    navigate('/overview');
  };

  const getNextWeekDateRange = () => {
    const today = new Date();
    const currentWeekStart = startOfWeek(today, { weekStartsOn: 1 });
    const nextWeekStart = addDays(currentWeekStart, 7);
    const nextWeekEnd = addDays(nextWeekStart, 6);
    return `${format(nextWeekStart, "do MMMM")} to ${format(nextWeekEnd, "do MMMM")}`;
  };

  const displayCompletionDate = estimatedCompletionDate || format(addDays(new Date(), 42), 'dd.MM.yyyy');

  const groupActivitiesByType = (activities: LearningActivity[]) => {
    const grouped: Record<string, LearningActivity[]> = {};
    
    activities.forEach(activity => {
      const group = activity.activityType || 'Other';
      
      if (!grouped[group]) {
        grouped[group] = [];
      }
      
      grouped[group].push(activity);
    });
    
    return grouped;
  };

  const renderLearningModules = () => {
    if (!activities || activities.length === 0) {
      return (
        <div className="text-center py-6">
          <p className="text-[#626293]">No learning activities available for this period.</p>
        </div>
      );
    }

    const unit1Activities = activities.slice(0, Math.ceil(activities.length / 2));
    const unit2Activities = activities.slice(Math.ceil(activities.length / 2));

    return (
      <>
        <LearningModule
          title="Unit 1: Finanzwirtschaftliche Grundlagen"
          introduction="Dieses Modul führt in die grundlegenden Konzepte der Finanzwirtschaft ein. Studieren Sie das Kursbuch zu den Themen Grundprinzipien und Bestandteile der Finanzwirtschaft und schauen Sie sich die begleitenden Lehrvideos an."
          resources={unit1Activities.map(activity => ({
            type: activity.activityType,
            title: activity.title,
            icon: getIconForActivityType(activity.activityType),
            bgColor: getBgColorForActivityType(activity.activityType),
            description: activity.description
          }))}
        />
        
        {unit2Activities.length > 0 && (
          <LearningModule
            title="Unit 2: Statische Verfahren der Investitionsrechnung"
            introduction="In diesem Modul werden statische Verfahren der Investitionsrechnung behandelt. Lesen Sie das Kursbuch zu den Themen Kostenvergleichsrechnung, Gewinnvergleichsrechnung, Rentabilitätsvergleichsrechnung und statische Amortisationsdauerrechnung und schauen Sie sich die dazugehörigen Videos an."
            resources={unit2Activities.map(activity => ({
              type: activity.activityType,
              title: activity.title,
              icon: getIconForActivityType(activity.activityType),
              bgColor: getBgColorForActivityType(activity.activityType),
              description: activity.description
            }))}
          />
        )}
      </>
    );
  };

  const getIconForActivityType = (type: string) => {
    return null;
  };

  const getBgColorForActivityType = (type: string) => {
    switch (type) {
      case 'Video':
        return "bg-[rgba(216,206,233,1)]";
      case 'Course Book':
        return "bg-[rgba(253,243,186,1)]";
      case 'Quiz':
        return "bg-[rgba(248,216,190,1)]";
      case 'Cycle':
        return "bg-[rgba(190,228,248,1)]";
      case 'Exam Trainer':
        return "bg-[rgba(216,233,206,1)]";
      default:
        return "bg-[rgba(233,233,233,1)]";
    }
  };

  const getCurrentWeekDateRange = () => {
    const today = new Date();
    const currentWeekStart = startOfWeek(today, { weekStartsOn: 1 });
    const currentWeekEnd = addDays(currentWeekStart, 6);
    return `${format(currentWeekStart, "do MMMM")} to ${format(currentWeekEnd, "do MMMM")}`;
  };

  const displayDateRange = dateRange || getCurrentWeekDateRange();

  return (
    <div className="bg-white w-full p-4 md:p-6 lg:p-10 rounded-[0px_0px_32px_32px] max-w-full overflow-hidden">
      <div className="flex w-full gap-4 md:gap-6 pb-2 max-w-full">
        <div className="w-full max-w-full">
          <div className="flex w-full flex-col items-stretch max-w-full">
            <div className="text-sm text-[#626293] font-normal leading-[1.3]">
              Your Weekly Learning Plan
            </div>
            <div className="flex w-full items-center justify-between gap-3 mt-2 flex-wrap max-w-full">
              <h2 className="text-[#101019] text-xl md:text-2xl font-semibold break-words">
                {displayDateRange}
              </h2>
              <Button 
                variant="outline" 
                onClick={handleOverviewClick}
                className="h-10 flex items-center justify-center gap-2 text-sm font-normal border-[#626293] text-[#626293] hover:bg-gray-50 flex-shrink-0"
              >
                <PenLine className="w-4 h-4" />
                <span className="hidden sm:inline">overview and edit</span>
                <span className="sm:hidden">edit</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#F3F3F7] text-[#626293] rounded-[24px] p-4 md:p-6 my-6 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="text-sm md:text-lg">With your current settings you will finish the course on the <strong>{displayCompletionDate}</strong></span>
        <ChatDrawer>
          <Button 
            className="bg-[rgba(98,98,147,0.2)] hover:bg-[rgba(98,98,147,0.3)] text-[#626293] rounded-xl py-2 px-4 flex items-center gap-2 whitespace-nowrap"
          >
            <PenLine className="w-4 h-4" />
            <span>edit my learning plan</span>
          </Button>
        </ChatDrawer>
      </div>
      
      <div className="w-full mt-6 md:mt-8 rounded-3xl max-w-full">
        <div className="w-full overflow-hidden rounded-3xl max-w-full">
          <div className="flex w-full flex-col items-stretch justify-center mt-4 md:mt-6 max-w-full">
            {renderLearningModules()}
            
            <div className="bg-[rgba(243,243,247,0.6)] mt-6 md:mt-8 p-4 md:p-6 rounded-3xl">
              <h3 className="text-[#626293] text-base font-medium mb-4">Next Week ({getNextWeekDateRange()})</h3>
              
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="bg-[rgba(243,243,247,1)] p-4 md:p-5 rounded-xl">
                  <h4 className="text-[#313149] text-base font-medium mb-3 break-words">Unit 3: Klassische dynamische Verfahren der Investitionsrechnung</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs bg-[rgba(216,206,233,0.5)] text-[#626293] py-1 px-3 rounded-full">Video Lecture</span>
                    <span className="text-xs bg-[rgba(253,243,186,0.5)] text-[#626293] py-1 px-3 rounded-full">Course Book</span>
                    <span className="text-xs bg-[rgba(248,216,190,0.5)] text-[#626293] py-1 px-3 rounded-full">Practical Exercise</span>
                  </div>
                </div>
                
                <div className="bg-[rgba(243,243,247,1)] p-4 md:p-5 rounded-xl">
                  <h4 className="text-[#313149] text-base font-medium mb-3 break-words">Unit 4: Wiederholung und Quizzes - Investitionsrechnung</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs bg-[rgba(248,216,190,0.5)] text-[#626293] py-1 px-3 rounded-full">Quiz</span>
                    <span className="text-xs bg-[rgba(216,206,233,0.5)] text-[#626293] py-1 px-3 rounded-full">Recap Video</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-[#626293] text-base font-medium mt-6 mb-4">Future Content</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[#626293]">
                  <CalendarCheck className="w-5 h-5 flex-shrink-0" />
                  <span className="break-words">Unit 5: Wiederholung und Quizzes - Unternehmensfinanzierung</span>
                </div>
                <div className="flex items-center gap-3 text-[#626293]">
                  <CalendarCheck className="w-5 h-5 flex-shrink-0" />
                  <span className="break-words">Unit 6: Klausurvorbereitung und Wissenstest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
