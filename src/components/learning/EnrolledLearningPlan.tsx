
import React, { useState } from "react";
import { Header } from "./Header";
import { CourseInfo } from "./CourseInfo";
import { TabNavigation } from "./TabNavigation";
import { LearningPlanContent } from "./LearningPlanContent";
import { SidebarChat } from "./SidebarChat";
import { useIsMobile } from "@/hooks/use-mobile";

export const EnrolledLearningPlan: React.FC = () => {
  const [activeTab, setActiveTab] = useState("learning-plan");
  const isMobile = useIsMobile();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="bg-[rgba(243,243,247,1)] flex flex-col overflow-hidden items-center"
      aria-label="Learning Plan Page"
    >
      <Header title="Sozialpolitik I" />
      <div className="flex w-full max-w-[1920px] items-stretch flex-wrap gap-[40px_72px] flex-1 h-full px-[72px] max-md:max-w-full max-md:px-5">
        <main className="min-w-60 w-full flex-1 shrink basis-[0%] py-12 rounded-[32px] max-md:max-w-full">
          <CourseInfo
            courseCode="SP01-QI"
            courseTitle="Sozialpolitik I"
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
                  sectionTitle="2. Basic Concepts"
                />
              )}
              {activeTab === "course-info" && (
                <div className="bg-white min-w-[420px] w-full p-10 rounded-[0px_0px_32px_32px] max-md:max-w-full max-md:px-5">
                  <h2 className="text-[#1D1B20] text-xl font-medium tracking-[0px]">
                    Course Information
                  </h2>
                  <p className="text-[#626293] mt-4">
                    This section would contain detailed course information.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
        {isMobile ? null : (
          <aside className="w-1/3">
            <SidebarChat />
          </aside>
        )}
        {isMobile && (
          <div className="w-full mt-6">
            <SidebarChat />
          </div>
        )}
      </div>
    </div>
  );
};
