
import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { CourseInfo } from "./CourseInfo";
import { TabNavigation } from "./TabNavigation";
import { LearningPlanContent } from "./LearningPlanContent";
import { SidebarChat } from "./SidebarChat";
import { useIsMobile } from "@/hooks/use-mobile";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { useLocation } from "react-router-dom";
import { CourseInfoContent } from "./CourseInfoContent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLearningPlan } from "@/hooks/use-learning-plan";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { format, parseISO, startOfWeek, addDays } from "date-fns";

export const EnrolledLearningPlan: React.FC = () => {
  const [activeTab, setActiveTab] = useState("learning-plan");
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Extract potential learningPlanId from URL search params
  const searchParams = new URLSearchParams(location.search);
  const learningPlanId = searchParams.get('planId') || undefined;
  
  // Fetch learning plan data
  const { learningPlan, activities, isLoading, hasError, estimatedCompletionDate } = useLearningPlan(learningPlanId);

  // Format date range for display using current week
  const getCurrentWeekDateRange = () => {
    const today = new Date();
    const currentWeekStart = startOfWeek(today, { weekStartsOn: 1 });
    const currentWeekEnd = addDays(currentWeekStart, 6);
    return `${format(currentWeekStart, "do MMMM")} to ${format(currentWeekEnd, "do MMMM")}`;
  };

  // Check if there's a tab parameter in the URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    
    if (tabParam === 'course-info' || tabParam === 'learning-plan') {
      setActiveTab(tabParam);
    }
    
    // Check if there's a selected week in the location state
    if (location.state && location.state.selectedWeek) {
      // Ensure we're showing the learning plan tab
      setActiveTab("learning-plan");
      // You could add additional state here to scroll to or highlight the selected week
      console.log("Selected week:", location.state.selectedWeek);
    }
  }, [location.search, location.state]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Loading state UI
  const renderLoadingState = () => (
    <div className="w-full flex flex-col gap-4 p-4 sm:p-6">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-60 w-full" />
    </div>
  );

  // Error state UI
  const renderErrorState = () => (
    <div className="w-full p-4 sm:p-6 flex flex-col items-center justify-center gap-4 text-center">
      <AlertCircle className="h-12 w-12 text-red-500" />
      <h3 className="text-xl font-medium text-red-500">Failed to load data</h3>
      <p className="text-gray-500">
        Unable to connect to the learning plan service. Please try again later.
      </p>
    </div>
  );

  return (
    <div
      className="bg-[rgba(243,243,247,1)] flex flex-col items-center min-h-screen w-full overflow-hidden"
      aria-label="Learning Plan Page"
    >
      <Header title={learningPlan?.title || "Loading..."} />
      <div className="w-full max-w-[1920px] px-2 sm:px-6 md:px-12 lg:px-16 flex-1 pb-6">
        {isMobile ? (
          <div className="flex flex-col w-full gap-[24px] max-w-full h-full">
            <ScrollArea className="flex-1 w-full py-4 md:py-12 overflow-visible">
              <CourseInfo
                courseCode={learningPlan?.courseCode || "DLBLOFUI-01"}
                courseTitle={learningPlan?.title || "Loading..."}
                credits={5}
                status={learningPlan?.status || "Loading"}
              />
              <div className="flex w-full items-stretch mt-4 sm:mt-8 max-w-full overflow-visible">
                <div className="w-full max-w-full overflow-visible">
                  <TabNavigation
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                  />
                  <div className="w-full overflow-hidden">
                    {activeTab === "learning-plan" && (
                      isLoading ? renderLoadingState() :
                      hasError ? renderErrorState() :
                      <LearningPlanContent
                        dateRange={getCurrentWeekDateRange()}
                        onOverviewEdit={() => {}}
                        activities={activities || []}
                        estimatedCompletionDate={estimatedCompletionDate}
                      />
                    )}
                    {activeTab === "course-info" && (
                      <CourseInfoContent />
                    )}
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="w-full">
              <SidebarChat />
            </div>
          </div>
        ) : (
          <ResizablePanelGroup 
            direction="horizontal" 
            className="min-h-[800px] h-full rounded-lg"
            onLayout={(sizes) => {
              // Store the sizes in localStorage for persistence
              window.localStorage.setItem('panel-layout', JSON.stringify(sizes))
            }}
          >
            <ResizablePanel 
              defaultSize={70} 
              minSize={40} 
              maxSize={80}
              className="overflow-hidden"
            >
              <ScrollArea className="h-full py-12">
                <CourseInfo
                  courseCode={learningPlan?.courseCode || "DLBLOFUI-01"}
                  courseTitle={learningPlan?.title || "Loading..."}
                  credits={5}
                  status={learningPlan?.status || "Loading"}
                />
                <div className="flex w-full items-stretch flex-wrap mt-8 max-w-full overflow-hidden">
                  <div className="w-full max-w-full overflow-hidden">
                    <TabNavigation
                      activeTab={activeTab}
                      onTabChange={handleTabChange}
                    />
                    <div className="w-full overflow-hidden">
                      {activeTab === "learning-plan" && (
                        isLoading ? renderLoadingState() :
                        hasError ? renderErrorState() :
                        <LearningPlanContent
                          dateRange={getCurrentWeekDateRange()}
                          onOverviewEdit={() => {}}
                          activities={activities || []}
                          estimatedCompletionDate={estimatedCompletionDate}
                        />
                      )}
                      {activeTab === "course-info" && (
                        <CourseInfoContent />
                      )}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle className="mx-2 md:mx-4" />
            <ResizablePanel 
              defaultSize={30} 
              minSize={20} 
              maxSize={60}
              className="overflow-hidden"
            >
              <ScrollArea className="h-full py-6 md:py-12 pr-0">
                <SidebarChat />
              </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>
    </div>
  );
};
