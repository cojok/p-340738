
import React from "react";

export const SidebarChat: React.FC = () => {
  return (
    <div className="flex w-full items-start flex-col h-full">
      <div className="flex items-top overflow-hidden justify-center h-full w-8 max-md:hidden">
        <div className="self-stretch w-1 my-auto">
          <div className="bg-[rgba(218,218,231,1)] flex shrink-0 h-12 rounded-[48px]" />
        </div>
      </div>
      <div className="bg-white flex min-w-[260px] flex-col items-start justify-start w-full p-6 rounded-[32px] h-full max-md:max-w-full max-md:px-5">
        <div className="w-full max-md:max-w-full">
          <div className="flex w-full gap-[40px_100px] justify-between max-md:max-w-full">
            <div className="text-[rgba(16,16,25,1)] text-base font-normal leading-[1.3] tracking-[0.1px] text-center">
              Let us learn together:
            </div>
            <button className="bg-black flex min-h-6 items-center gap-2.5 justify-center w-6 h-6 rounded-full border-black border-solid border-4" aria-label="Synthea assistant">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/74aa56ac63d853a42399482d6866d039d2c723bb?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 flex-1 shrink basis-[0%]" alt="Synthea icon" />
            </button>
          </div>
          <div className="flex w-full flex-col text-sm text-[#303746] font-normal tracking-[0.25px] leading-[1.6] mt-6 max-md:max-w-full">
            <button className="self-stretch flex items-center backdrop-blur-md bg-[#E5F1FA] gap-2.5 pt-[11px] pb-3 px-6 rounded-[24px_24px_24px_4px] max-md:px-5 text-left">
              Asking questions about the course content
            </button>
            <button className="self-stretch flex items-center backdrop-blur-md bg-[#E5F1FA] gap-2.5 mt-2 pt-[11px] pb-3 px-6 rounded-[4px_24px_24px_4px] max-md:px-5 text-left">
              Exam Trainer
            </button>
            <button className="self-stretch flex items-center backdrop-blur-md bg-[#E5F1FA] gap-2.5 mt-2 pt-[11px] pb-3 px-6 rounded-[4px_24px_24px_4px] max-md:px-5 text-left">
              Deep Dialog Learning
            </button>
            <button className="self-stretch flex items-center backdrop-blur-md bg-[#E5F1FA] gap-2.5 mt-2 pt-[11px] pb-3 px-6 rounded-[4px_24px_24px_24px] max-md:px-5 text-left">
              Testing my Pre-Knowledge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
