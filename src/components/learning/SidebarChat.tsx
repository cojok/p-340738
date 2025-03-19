
import React from "react";

export const SidebarChat: React.FC = () => {
  return (
    <div className="flex w-full h-full">
      <div className="bg-white flex flex-col w-full p-6 rounded-[32px] h-full max-md:max-w-full">
        <div className="w-full">
          <div className="flex w-full justify-between items-center mb-6">
            <div className="text-[rgba(16,16,25,1)] text-base font-normal">
              Let us learn together:
            </div>
            <button 
              className="bg-black flex items-center justify-center w-6 h-6 rounded-full border-black border-solid border-4" 
              aria-label="Synthea assistant"
            >
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74aa56ac63d853a42399482d6866d039d2c723bb?placeholderIfAbsent=true" 
                className="w-6 h-6 aspect-square" 
                alt="Synthea icon" 
              />
            </button>
          </div>
          <div className="flex flex-col gap-2 text-sm text-[#303746] font-normal">
            <button className="w-full flex items-center backdrop-blur-md bg-[#E5F1FA] gap-2.5 py-3 px-6 rounded-[24px_24px_24px_4px] text-left">
              Asking questions about the course content
            </button>
            <button className="w-full flex items-center backdrop-blur-md bg-[#E5F1FA] gap-2.5 py-3 px-6 rounded-[4px_24px_24px_4px] text-left">
              Exam Trainer
            </button>
            <button className="w-full flex items-center backdrop-blur-md bg-[#E5F1FA] gap-2.5 py-3 px-6 rounded-[4px_24px_24px_4px] text-left">
              Deep Dialog Learning
            </button>
            <button className="w-full flex items-center backdrop-blur-md bg-[#E5F1FA] gap-2.5 py-3 px-6 rounded-[4px_24px_24px_24px] text-left">
              Testing my Pre-Knowledge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
