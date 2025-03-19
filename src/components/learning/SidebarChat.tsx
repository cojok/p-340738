
import React from "react";
import { PenLine, PlayCircle, ListTodo, MessageSquare, BookOpen } from "lucide-react";
import { useLocation } from "react-router-dom";

export const SidebarChat: React.FC = () => {
  const location = useLocation();
  const isLearningPlanPage = location.pathname === "/learning-plan";

  return (
    <div className="flex w-full h-full">
      <div className="bg-white flex flex-col w-full p-6 rounded-[24px] h-full max-md:max-w-full">
        <div className="w-full">
          {isLearningPlanPage ? (
            <>
              <div className="flex w-full justify-between items-center mb-6">
                <div className="text-[#1A1F2C] text-lg font-medium">
                  Let us learn together:
                </div>
              </div>
              <div className="flex flex-col gap-4 text-base text-[#303746] font-normal">
                <button className="w-full flex items-center backdrop-blur-md bg-[#F5F5F7] gap-2.5 py-4 px-6 rounded-[20px] text-left hover:bg-[#EDEDF0] transition-colors">
                  <span className="text-[#1A1F2C]">Asking questions about the course content</span>
                </button>
                <button className="w-full flex items-center backdrop-blur-md bg-[#F5F5F7] gap-2.5 py-4 px-6 rounded-[20px] text-left hover:bg-[#EDEDF0] transition-colors">
                  <span className="text-[#1A1F2C]">Deep Dialog Learning</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex w-full justify-between items-center mb-6">
                <div className="text-[#1A1F2C] text-lg font-medium">
                  What would you like to do next?
                </div>
              </div>
              <div className="flex flex-col gap-4 text-base text-[#303746] font-normal">
                <button className="w-full flex items-center backdrop-blur-md bg-[#F5F5F7] gap-3 py-4 px-5 rounded-[20px] text-left hover:bg-[#EDEDF0] transition-colors">
                  <PenLine className="w-5 h-5 text-[#626293]" />
                  <span className="text-[#1A1F2C]">Edit my Learning Plan</span>
                </button>
                <button className="w-full flex items-center backdrop-blur-md bg-[#F5F5F7] gap-3 py-4 px-5 rounded-[20px] text-left hover:bg-[#EDEDF0] transition-colors">
                  <PlayCircle className="w-5 h-5 text-[#626293]" />
                  <span className="text-[#1A1F2C]">Continue Learning</span>
                </button>
                <button className="w-full flex items-center backdrop-blur-md bg-[#F5F5F7] gap-3 py-4 px-5 rounded-[20px] text-left hover:bg-[#EDEDF0] transition-colors">
                  <ListTodo className="w-5 h-5 text-[#626293]" />
                  <span className="text-[#1A1F2C]">Test my Knowledge</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
