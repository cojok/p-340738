
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

  // Check if there's a selected week in the location state
  useEffect(() => {
    // If location state contains a selectedWeek, we can use it to highlight that week
    if (location.state && location.state.selectedWeek) {
      // Ensure we're showing the learning plan tab
      setActiveTab("learning-plan");
      // You could add additional state here to scroll to or highlight the selected week
      console.log("Selected week:", location.state.selectedWeek);
    }
  }, [location.state]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="bg-[rgba(243,243,247,1)] flex flex-col items-center min-h-screen w-full"
      aria-label="Learning Plan Page"
    >
      <Header title="Finanzierung und Investition" />
      <div className="w-full max-w-[1920px] px-16 max-md:px-5 flex-1">
        {isMobile ? (
          <div className="flex flex-col w-full gap-[24px] max-md:max-w-full h-full">
            <ScrollArea className="flex-1 w-full py-12">
              <CourseInfo
                courseCode="FI01-QI"
                courseTitle="Finanzierung und Investition"
                credits={5}
                status="Enrolled"
              />
              <div className="flex w-full items-stretch flex-wrap mt-8 max-md:max-w-full">
                <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
                  <TabNavigation
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                  />
                  {activeTab === "learning-plan" && (
                    <LearningPlanContent
                      dateRange="14th October to 20th October"
                      sectionTitle="2. Statische Verfahren der Investitionsrechnung"
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
          >
            <ResizablePanel defaultSize={70} minSize={50}>
              <ScrollArea className="h-full py-12">
                <CourseInfo
                  courseCode="FI01-QI"
                  courseTitle="Finanzierung und Investition"
                  credits={5}
                  status="Enrolled"
                />
                <div className="flex w-full items-stretch flex-wrap mt-8 max-md:max-w-full">
                  <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
                    <TabNavigation
                      activeTab={activeTab}
                      onTabChange={handleTabChange}
                    />
                    {activeTab === "learning-plan" && (
                      <LearningPlanContent
                        dateRange="14th October to 20th October"
                        sectionTitle="2. Statische Verfahren der Investitionsrechnung"
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
            <ResizableHandle withHandle className="mx-6" />
            <ResizablePanel defaultSize={30} minSize={20}>
              <ScrollArea className="h-full py-12 pr-0">
                <SidebarChat />
              </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>
    </div>
  );
};
