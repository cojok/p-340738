
import React from "react";
import { Header } from "@/components/learning/Header";
import { CourseInfo } from "@/components/learning/CourseInfo";
import { ArrowRight } from "lucide-react";
import { SidebarChat } from "@/components/learning/SidebarChat";
import { useIsMobile } from "@/hooks/use-mobile";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

const Overview = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const weeks = [
    {
      week: 1,
      title: "Introduction to Social Policy",
      description: "This week introduces the fundamental concepts and history of social policy, exploring its evolution and importance in modern society."
    },
    {
      week: 2,
      title: "Basic Concepts",
      description: "Explore core theoretical frameworks and models that underpin social policy analysis and development."
    },
    {
      week: 3,
      title: "Welfare State Models",
      description: "Compare and contrast different welfare state models from around the world and their social, economic, and political implications."
    },
    {
      week: 4,
      title: "Policy Analysis Methods",
      description: "Learn analytical tools and methodologies used to evaluate social policy effectiveness and outcomes."
    },
    {
      week: 5,
      title: "Contemporary Challenges",
      description: "Address current social policy challenges including inequality, demographic changes, and technological disruption."
    },
    {
      week: 6,
      title: "Future Perspectives",
      description: "Explore emerging trends and future directions in social policy development and implementation."
    }
  ];

  const handleWeekClick = (week: number) => {
    // Navigate to the learning plan with this week selected
    navigate('/learning-plan', { state: { selectedWeek: week } });
  };

  return (
    <div className="bg-[rgba(243,243,247,1)] flex flex-col items-center min-h-screen">
      <Header title="Sozialpolitik I" />
      <div className="w-full max-w-[1920px] px-16 max-md:px-5 flex-1">
        {isMobile ? (
          <div className="flex flex-col w-full gap-6 h-full">
            <ScrollArea className="flex-1 w-full py-12">
              <CourseInfo
                courseCode="SP01-QI"
                courseTitle="Sozialpolitik I"
                credits={5}
                status="Enrolled"
              />
              
              <div className="bg-white w-full p-10 rounded-[32px] mt-8 max-md:p-5">
                <h2 className="text-[#1D1B20] text-xl font-medium mb-8">Course Overview</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {weeks.map((week) => (
                    <div 
                      key={week.week} 
                      className="bg-[#F1F0FB] p-6 rounded-2xl transition-shadow hover:shadow-md cursor-pointer group"
                      onClick={() => handleWeekClick(week.week)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-[#E5F1FA] text-[#303746] px-3 py-1 rounded-full text-sm font-medium">
                            Week {week.week}
                          </div>
                        </div>
                        <ArrowRight className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                      </div>
                      <h3 className="text-[#1D1B20] text-lg font-medium mb-2">{week.title}</h3>
                      <p className="text-[#626293] text-sm">{week.description}</p>
                    </div>
                  ))}
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
              <ScrollArea className="h-full py-12 pr-6">
                <CourseInfo
                  courseCode="SP01-QI"
                  courseTitle="Sozialpolitik I"
                  credits={5}
                  status="Enrolled"
                />
                
                <div className="bg-white w-full p-10 rounded-[32px] mt-8 max-md:p-5">
                  <h2 className="text-[#1D1B20] text-xl font-medium mb-8">Course Overview</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {weeks.map((week) => (
                      <div 
                        key={week.week} 
                        className="bg-[#F1F0FB] p-6 rounded-2xl transition-shadow hover:shadow-md cursor-pointer group"
                        onClick={() => handleWeekClick(week.week)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="bg-[#E5F1FA] text-[#303746] px-3 py-1 rounded-full text-sm font-medium">
                              Week {week.week}
                            </div>
                          </div>
                          <ArrowRight className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                        </div>
                        <h3 className="text-[#1D1B20] text-lg font-medium mb-2">{week.title}</h3>
                        <p className="text-[#626293] text-sm">{week.description}</p>
                      </div>
                    ))}
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

export default Overview;
