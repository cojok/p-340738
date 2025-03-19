
import React from "react";
import { PenLine, PlayCircle, ListTodo } from "lucide-react";

export const SidebarChat: React.FC = () => {
  return (
    <div className="flex w-full h-full">
      <div className="bg-white flex flex-col w-full p-6 rounded-[24px] h-full max-md:max-w-full">
        <div className="w-full">
          <div className="flex w-full justify-between items-center mb-6">
            <div className="text-[rgba(16,16,25,1)] text-base font-medium">
              What would you like to do next?
            </div>
            <button 
              className="bg-black flex items-center justify-center w-8 h-8 rounded-full border-black border-solid border" 
              aria-label="Synthea assistant"
            >
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74aa56ac63d853a42399482d6866d039d2c723bb?placeholderIfAbsent=true" 
                className="w-8 h-8 aspect-square" 
                alt="Synthea icon" 
              />
            </button>
          </div>
          <div className="flex flex-col gap-3 text-sm text-[#303746] font-normal">
            <button className="w-full flex items-center bg-[#1A1F2C] text-white gap-2.5 py-3 px-4 rounded-[16px] text-left hover:bg-[#282E3C] transition-colors">
              <div className="bg-[#E5DEFF] p-1.5 rounded-full">
                <PenLine className="w-3.5 h-3.5 text-[#1A1F2C]" />
              </div>
              <span>Edit my Learning Plan</span>
            </button>
            <button className="w-full flex items-center backdrop-blur-md bg-[#F5F5F7] gap-2.5 py-3 px-4 rounded-[16px] text-left hover:bg-[#EDEDF0] transition-colors">
              <PlayCircle className="w-5 h-5 text-[#626293]" />
              <span>Continue Learning</span>
            </button>
            <button className="w-full flex items-center backdrop-blur-md bg-[#F5F5F7] gap-2.5 py-3 px-4 rounded-[16px] text-left hover:bg-[#EDEDF0] transition-colors">
              <ListTodo className="w-5 h-5 text-[#626293]" />
              <span>Test my Knowledge</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
