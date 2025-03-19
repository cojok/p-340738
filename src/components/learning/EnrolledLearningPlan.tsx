
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

export const EnrolledLearningPlan: React.FC = () => {
  const [activeTab, setActiveTab] = useState("learning-plan");
  const isMobile = useIsMobile();
  const location = useLocation();

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

  return (
    <div
      className="bg-[rgba(243,243,247,1)] flex flex-col items-center min-h-screen w-full overflow-x-hidden"
      aria-label="Learning Plan Page"
    >
      <Header title="Finanzierung und Investition" />
      <div className="w-full max-w-[1920px] px-4 sm:px-6 md:px-12 lg:px-16 flex-1">
        {isMobile ? (
          <div className="flex flex-col w-full gap-[24px] max-w-full h-full">
            <ScrollArea className="flex-1 w-full py-6 md:py-12">
              <CourseInfo
                courseCode="FI01-QI"
                courseTitle="Finanzierung und Investition"
                credits={5}
                status="Enrolled"
              />
              <div className="flex w-full items-stretch flex-wrap mt-8 max-w-full">
                <div className="w-full flex-1 max-w-full">
                  <TabNavigation
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                  />
                  {activeTab === "learning-plan" && (
                    <LearningPlanContent
                      dateRange="14th October to 20th October"
                      onOverviewEdit={() => {}}
                    />
                  )}
                  {activeTab === "course-info" && (
                    <CourseInfoContent />
                  )}
                </div>
              </div>
            </ScrollArea>
            <div className="w-full mb-6">
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
              minSize={50} 
              maxSize={80}
              className="overflow-hidden"
            >
              <ScrollArea className="h-full py-12">
                <CourseInfo
                  courseCode="FI01-QI"
                  courseTitle="Finanzierung und Investition"
                  credits={5}
                  status="Enrolled"
                />
                <div className="flex w-full items-stretch flex-wrap mt-8 max-w-full">
                  <div className="w-full max-w-full">
                    <TabNavigation
                      activeTab={activeTab}
                      onTabChange={handleTabChange}
                    />
                    {activeTab === "learning-plan" && (
                      <LearningPlanContent
                        dateRange="14th October to 20th October"
                        onOverviewEdit={() => {}}
                      />
                    )}
                    {activeTab === "course-info" && (
                      <CourseInfoContent />
                    )}
                  </div>
                </div>
              </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle className="mx-2 md:mx-4" />
            <ResizablePanel 
              defaultSize={30} 
              minSize={20} 
              maxSize={40}
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
