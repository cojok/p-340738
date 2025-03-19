import React, { useState } from "react";
import { Header } from "@/components/learning/Header";
import { CourseInfo } from "@/components/learning/CourseInfo";
import { ArrowRight, ChevronDown, ChevronUp, Calendar, PenLine, BookOpen } from "lucide-react";
import { SidebarChat } from "@/components/learning/SidebarChat";
import { useIsMobile } from "@/hooks/use-mobile";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Overview = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [openWeeks, setOpenWeeks] = useState<number[]>([]);
  
  const weekColor = "#E5DEFF"; // Soft Purple
  
  const today = new Date();
  
  const weeks = [
    {
      week: 1,
      title: "Introduction to Social Policy",
      description: "This week introduces the fundamental concepts and history of social policy, exploring its evolution and importance in modern society.",
      chapters: ["Chapter 1"],
      dateRange: getDateRange(0),
      tags: ["live session", "self-testing"]
    },
    {
      week: 2,
      title: "Basic Concepts",
      description: "Explore core theoretical frameworks and models that underpin social policy analysis and development.",
      chapters: ["Chapter 2", "Chapter 3"],
      dateRange: getDateRange(7),
      tags: ["self-testing"]
    },
    {
      week: 3,
      title: "Welfare State Models",
      description: "Compare and contrast different welfare state models from around the world and their social, economic, and political implications.",
      chapters: ["Chapter 4"],
      dateRange: getDateRange(14),
      tags: ["live session", "self-testing"]
    },
    {
      week: 4,
      title: "Policy Analysis Methods",
      description: "Learn analytical tools and methodologies used to evaluate social policy effectiveness and outcomes.",
      chapters: ["Chapter 5", "Chapter 6"],
      dateRange: getDateRange(21),
      tags: ["self-testing"]
    },
    {
      week: 5,
      title: "Contemporary Challenges",
      description: "Address current social policy challenges including inequality, demographic changes, and technological disruption.",
      chapters: ["Chapter 7"],
      dateRange: getDateRange(28),
      tags: ["live session", "self-testing"]
    },
    {
      week: 6,
      title: "Future Perspectives",
      description: "Explore emerging trends and future directions in social policy development and implementation.",
      chapters: ["Chapter 8", "Chapter 9"],
      dateRange: getDateRange(35),
      tags: ["self-testing"]
    }
  ];

  function getDateRange(daysToAdd: number): string {
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() + daysToAdd);
    
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);
    
    const formatDate = (date: Date): string => {
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const day = days[date.getDay()];
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const yy = String(date.getFullYear()).slice(2);
      
      return `${day} ${dd}.${mm}.${yy}`;
    };
    
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  }

  const toggleWeek = (week: number) => {
    if (openWeeks.includes(week)) {
      setOpenWeeks(openWeeks.filter(w => w !== week));
    } else {
      setOpenWeeks([...openWeeks, week]);
    }
  };

  const handleWeekClick = (week: number) => {
    navigate('/learning-plan', { state: { selectedWeek: week } });
  };

  const handleCurrentWeekPlanClick = () => {
    navigate('/learning-plan');
  };

  return (
    <div className="bg-[rgba(243,243,247,1)] flex flex-col items-center min-h-screen w-full">
      <Header title="Sozialpolitik I" />
      <div className="w-full max-w-[1920px] px-16 max-md:px-5 flex-1">
        {isMobile ? (
          <div className="flex flex-col w-full gap-6 h-full">
            <ScrollArea className="flex-1 w-full">
              <div className="flex w-full items-center justify-between">
                <CourseInfo
                  courseCode="SP01-QI"
                  courseTitle="Sozialpolitik I"
                  credits={5}
                  status="Enrolled"
                />
              </div>
              
              <div className="bg-white w-full p-10 rounded-[24px] mt-8 max-md:p-5">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-semibold text-[#1D1B20]">My Learning Plan</h2>
                  <Button 
                    variant="outline" 
                    onClick={handleCurrentWeekPlanClick}
                    className="h-10 flex items-center justify-center gap-2 text-sm font-normal border-[#626293] text-[#626293] hover:bg-gray-50"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>current week plan</span>
                  </Button>
                </div>
                
                <div className="bg-[#1A1F2C] text-white rounded-[24px] p-6 flex items-center justify-between mb-8">
                  <span className="text-lg">With your current settings you will be fit to finish the course on the <strong>19.10.2024</strong></span>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-[rgba(98,98,147,0.3)] hover:bg-[rgba(98,98,147,0.4)] text-white rounded-xl py-2 px-4 flex items-center gap-2"
                      >
                        <PenLine className="w-4 h-4" />
                        <span>edit my learning plan</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white rounded-[24px] p-6">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-semibold text-[#1D1B20]">Edit Learning Plan</DialogTitle>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="text-[#626293] mb-4">How would you like to adjust your learning plan?</p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 p-3 rounded-xl border border-[#E5DEFF] bg-[#F8F7FF] text-[#303746]">
                            <input type="radio" id="increase" name="schedule" className="h-4 w-4 accent-[#626293]" />
                            <label htmlFor="increase" className="flex-1 cursor-pointer">Increase my daily workload</label>
                          </div>
                          <div className="flex items-center gap-2 p-3 rounded-xl border border-[#E5DEFF] bg-[#F8F7FF] text-[#303746]">
                            <input type="radio" id="decrease" name="schedule" className="h-4 w-4 accent-[#626293]" />
                            <label htmlFor="decrease" className="flex-1 cursor-pointer">Decrease my daily workload</label>
                          </div>
                          <div className="flex items-center gap-2 p-3 rounded-xl border border-[#E5DEFF] bg-[#F8F7FF] text-[#303746]">
                            <input type="radio" id="specific" name="schedule" className="h-4 w-4 accent-[#626293]" />
                            <label htmlFor="specific" className="flex-1 cursor-pointer">Set a specific completion date</label>
                          </div>
                        </div>
                        <div className="mt-6 flex justify-end gap-2">
                          <Button variant="outline" className="border-[#626293] text-[#626293]">Cancel</Button>
                          <Button className="bg-[#1A1F2C] text-white">Apply Changes</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Accordion type="multiple" className="w-full">
                    {weeks.map((week) => (
                      <AccordionItem 
                        key={week.week} 
                        value={`week-${week.week}`}
                        className="border-0 mb-4 overflow-hidden"
                      >
                        <div className="bg-[#F1F0FB] rounded-[24px] overflow-hidden transition-all duration-300">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <div className="flex flex-col w-full">
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-2 mb-2">
                                  <div 
                                    style={{ backgroundColor: weekColor }}
                                    className="text-[#303746] px-3 py-1 rounded-full text-sm font-medium"
                                  >
                                    Week {week.week}
                                  </div>
                                </div>
                              </div>
                              <h3 className="text-[#1D1B20] text-lg font-medium text-left mb-1">{week.title}</h3>
                              <p className="text-[#626293] text-sm text-left">{week.dateRange}</p>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <div className="pt-2 border-t border-[#E8E5F7]">
                              <p className="text-[#626293] text-sm mb-4">{week.description}</p>
                              <div className="mb-4">
                                <h4 className="font-medium text-[#1D1B20] mb-2">{week.chapters.join(" and ")}</h4>
                                <div className="flex flex-wrap gap-2">
                                  {week.tags.map((tag, i) => (
                                    <span key={i} className="bg-[#F5F5F7] text-[#626293] px-3 py-1 rounded-full text-xs">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <Button 
                                onClick={() => handleWeekClick(week.week)}
                                className="w-full bg-[#F5F5F7] text-[#101019] hover:bg-[#EDEDF0] mt-2"
                              >
                                View Details
                              </Button>
                            </div>
                          </AccordionContent>
                        </div>
                      </AccordionItem>
                    ))}
                  </Accordion>
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
                <div className="flex w-full items-center justify-between">
                  <CourseInfo
                    courseCode="SP01-QI"
                    courseTitle="Sozialpolitik I"
                    credits={5}
                    status="Enrolled"
                  />
                </div>
                
                <div className="bg-white w-full p-10 rounded-[24px] mt-8 max-md:p-5">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold text-[#1D1B20]">My Learning Plan</h2>
                    <Button 
                      variant="outline" 
                      onClick={handleCurrentWeekPlanClick}
                      className="h-10 flex items-center justify-center gap-2 text-sm font-normal border-[#626293] text-[#626293] hover:bg-gray-50"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>current week plan</span>
                    </Button>
                  </div>
                  
                  <div className="bg-[#1A1F2C] text-white rounded-[24px] p-6 flex items-center justify-between mb-8">
                    <span className="text-lg">With your current settings you will be fit to finish the course on the <strong>19.10.2024</strong></span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="bg-[rgba(98,98,147,0.3)] hover:bg-[rgba(98,98,147,0.4)] text-white rounded-xl py-2 px-4 flex items-center gap-2"
                        >
                          <PenLine className="w-4 h-4" />
                          <span>edit my learning plan</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-white rounded-[24px] p-6">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-semibold text-[#1D1B20]">Edit Learning Plan</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                          <p className="text-[#626293] mb-4">How would you like to adjust your learning plan?</p>
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 p-3 rounded-xl border border-[#E5DEFF] bg-[#F8F7FF] text-[#303746]">
                              <input type="radio" id="increase-desktop" name="schedule-desktop" className="h-4 w-4 accent-[#626293]" />
                              <label htmlFor="increase-desktop" className="flex-1 cursor-pointer">Increase my daily workload</label>
                            </div>
                            <div className="flex items-center gap-2 p-3 rounded-xl border border-[#E5DEFF] bg-[#F8F7FF] text-[#303746]">
                              <input type="radio" id="decrease-desktop" name="schedule-desktop" className="h-4 w-4 accent-[#626293]" />
                              <label htmlFor="decrease-desktop" className="flex-1 cursor-pointer">Decrease my daily workload</label>
                            </div>
                            <div className="flex items-center gap-2 p-3 rounded-xl border border-[#E5DEFF] bg-[#F8F7FF] text-[#303746]">
                              <input type="radio" id="specific-desktop" name="schedule-desktop" className="h-4 w-4 accent-[#626293]" />
                              <label htmlFor="specific-desktop" className="flex-1 cursor-pointer">Set a specific completion date</label>
                            </div>
                          </div>
                          <div className="mt-6 flex justify-end gap-2">
                            <Button variant="outline" className="border-[#626293] text-[#626293]">Cancel</Button>
                            <Button className="bg-[#1A1F2C] text-white">Apply Changes</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <Accordion type="multiple" className="w-full">
                      {weeks.map((week) => (
                        <AccordionItem 
                          key={week.week} 
                          value={`week-${week.week}`}
                          className="border-0 mb-4 overflow-hidden"
                        >
                          <div className="bg-[#F1F0FB] rounded-[24px] overflow-hidden transition-all duration-300">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                              <div className="flex flex-col w-full">
                                <div className="flex items-center justify-between w-full">
                                  <div className="flex items-center gap-2 mb-2">
                                    <div 
                                      style={{ backgroundColor: weekColor }}
                                      className="text-[#303746] px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                      Week {week.week}
                                    </div>
                                  </div>
                                </div>
                                <h3 className="text-[#1D1B20] text-lg font-medium text-left mb-1">{week.title}</h3>
                                <p className="text-[#626293] text-sm text-left">{week.dateRange}</p>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <div className="pt-2 border-t border-[#E8E5F7]">
                                <p className="text-[#626293] text-sm mb-4">{week.description}</p>
                                <div className="mb-4">
                                  <h4 className="font-medium text-[#1D1B20] mb-2">{week.chapters.join(" and ")}</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {week.tags.map((tag, i) => (
                                      <span key={i} className="bg-[#F5F5F7] text-[#626293] px-3 py-1 rounded-full text-xs">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <Button 
                                  onClick={() => handleWeekClick(week.week)}
                                  className="w-full bg-[#F5F5F7] text-[#101019] hover:bg-[#EDEDF0] mt-2"
                                >
                                  View Details
                                </Button>
                              </div>
                            </AccordionContent>
                          </div>
                        </AccordionItem>
                      ))}
                    </Accordion>
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
