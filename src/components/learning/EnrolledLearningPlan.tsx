
import React, { useState } from "react";
import { Header } from "./Header";
import { CourseInfo } from "./CourseInfo";
import { TabNavigation } from "./TabNavigation";
import { LearningPlanContent } from "./LearningPlanContent";
import { SidebarChat } from "./SidebarChat";
import { useIsMobile } from "@/hooks/use-mobile";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const EnrolledLearningPlan: React.FC = () => {
  const [activeTab, setActiveTab] = useState("learning-plan");
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleOverviewEdit = () => {
    navigate("/overview");
  };

  return (
    <div
      className="bg-[rgba(243,243,247,1)] flex flex-col overflow-hidden items-center h-screen"
      aria-label="Learning Plan Page"
    >
      <Header title="Sozialpolitik I" />
      <div className="w-full max-w-[1920px] px-[72px] max-md:px-5 flex-1 overflow-hidden">
        {isMobile ? (
          <div className="flex flex-col w-full gap-[40px] max-md:max-w-full">
            <main className="min-w-60 w-full py-12 rounded-[32px] max-md:max-w-full">
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
                      onOverviewEdit={handleOverviewEdit}
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
                      <div className="flex flex-col gap-4 mt-6">
                        <div className="bg-white p-4 border border-gray-100 rounded-xl">
                          <h3 className="text-[#1D1B20] font-medium">Course Objectives</h3>
                          <p className="text-[#626293] mt-2 text-sm">Understand the fundamental concepts of social policy and its importance in modern society.</p>
                        </div>
                        <div className="bg-white p-4 border border-gray-100 rounded-xl">
                          <h3 className="text-[#1D1B20] font-medium">Required Materials</h3>
                          <p className="text-[#626293] mt-2 text-sm">Core textbook: "Introduction to Social Policy" by J. Smith (2022)</p>
                        </div>
                        <div className="bg-white p-4 border border-gray-100 rounded-xl">
                          <h3 className="text-[#1D1B20] font-medium">Assessment Methods</h3>
                          <p className="text-[#626293] mt-2 text-sm">60% Final Exam, 30% Term Paper, 10% Participation</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </main>
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
              <main className="min-w-60 w-full py-12 rounded-[32px] max-md:max-w-full h-full">
                <CourseInfo
                  courseCode="SP01-QI"
                  courseTitle="Sozialpolitik I"
                  credits={5}
                  status="Enrolled"
                />
                <div className="flex w-full items-stretch flex-wrap mt-8 max-md:max-w-full h-full">
                  <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full h-full">
                    <TabNavigation
                      activeTab={activeTab}
                      onTabChange={handleTabChange}
                    />
                    {activeTab === "learning-plan" && (
                      <LearningPlanContent
                        dateRange="14th October to 20th October"
                        sectionTitle="2. Basic Concepts"
                        onOverviewEdit={handleOverviewEdit}
                      />
                    )}
                    {activeTab === "course-info" && (
                      <div className="bg-white min-w-[420px] w-full p-10 rounded-[0px_0px_32px_32px] max-md:max-w-full max-md:px-5">
                        <h2 className="text-[#1D1B20] text-xl font-medium tracking-[0px]">
                          Course Information
                        </h2>
                        <p className="text-[#626293] mt-4">
                          This course provides an introduction to the principles of social policy.
                        </p>
                        <div className="flex flex-col gap-4 mt-6">
                          <div className="bg-white p-4 border border-gray-100 rounded-xl">
                            <h3 className="text-[#1D1B20] font-medium">Course Objectives</h3>
                            <p className="text-[#626293] mt-2 text-sm">Understand the fundamental concepts of social policy and its importance in modern society.</p>
                          </div>
                          <div className="bg-white p-4 border border-gray-100 rounded-xl">
                            <h3 className="text-[#1D1B20] font-medium">Required Materials</h3>
                            <p className="text-[#626293] mt-2 text-sm">Core textbook: "Introduction to Social Policy" by J. Smith (2022)</p>
                          </div>
                          <div className="bg-white p-4 border border-gray-100 rounded-xl">
                            <h3 className="text-[#1D1B20] font-medium">Assessment Methods</h3>
                            <p className="text-[#626293] mt-2 text-sm">60% Final Exam, 30% Term Paper, 10% Participation</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </main>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="h-full py-12 pr-0">
                <SidebarChat />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        )}
      </div>
    </div>
  );
};
