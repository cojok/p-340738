
import React from "react";
import { ResourceCard } from "./ResourceCard";

interface Resource {
  type: string;
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  description: string;
}

interface LearningModuleProps {
  title: string;
  introduction: string;
  resources?: Resource[];
  videoIconSrc: string;
  audioIconSrc: string;
  practiceIconSrc: string;
  chatIconSrc: string;
}

export const LearningModule: React.FC<LearningModuleProps> = ({
  title,
  introduction,
  resources,
  videoIconSrc,
  audioIconSrc,
  practiceIconSrc,
  chatIconSrc
}) => {
  return (
    <div className="bg-[rgba(243,243,247,1)] flex w-full flex-col items-stretch justify-center p-6 rounded-3xl max-md:max-w-full max-md:px-5 mb-6">
      <div className="w-full max-md:max-w-full">
        <h3 className="text-[#101019] text-base font-medium tracking-[0.15px] max-md:max-w-full">
          {title}
        </h3>
        <div className="flex w-full items-stretch gap-6 flex-wrap mt-6 max-md:max-w-full">
          <div className="min-w-60 w-[760px] max-md:max-w-full">
            <div className="bg-white w-full flex-1 p-6 rounded-2xl max-md:max-w-full max-md:px-5">
              <h4 className="text-[#313149] text-base font-medium leading-[1.4] tracking-[0.15px] max-md:max-w-full">
                Introduction
              </h4>
              <div className="flex w-full flex-col items-stretch text-sm font-normal justify-between flex-1 mt-2 max-md:max-w-full">
                <p className="text-[#626293] leading-[22px] tracking-[0.25px] max-md:max-w-full">
                  {introduction}
                </p>
                <button className="flex items-center text-black text-center tracking-[0.5px] leading-[1.3] justify-center mt-7 rounded-xl">
                  <div className="self-stretch bg-[rgba(218,218,231,1)] min-h-8 gap-4 px-4 rounded-xl my-[8px]">
                    View script
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-60 flex-1 shrink basis-[0%]">
            {resources ? (
              <div className="flex flex-col gap-4">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-white p-4 rounded-2xl flex items-center gap-3">
                    <div className={`${resource.bgColor} p-3 rounded-xl`}>
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-[#313149] font-medium text-sm">{resource.type}</h5>
                      <p className="text-[#626293] text-sm">{resource.title}</p>
                    </div>
                    <div className="text-xs text-[#626293] bg-[rgba(243,243,247,1)] py-1 px-2 rounded-full">
                      {resource.description}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="flex w-full items-center gap-2">
                  <div className="self-stretch flex min-w-60 w-full items-stretch gap-4 flex-1 shrink basis-[0%] my-auto">
                    <div className="flex min-w-60 w-full gap-4 h-full flex-1 shrink basis-[0%]">
                      <div className="flex gap-4 flex-1 shrink basis-4">
                        <ResourceCard type="Videos" iconSrc={videoIconSrc} bgColor="bg-[rgba(216,206,233,1)]" />
                      </div>
                      <ResourceCard type="Audio" iconSrc={audioIconSrc} bgColor="bg-[rgba(253,243,186,1)]" />
                      <ResourceCard type="Practice" iconSrc={practiceIconSrc} bgColor="bg-[rgba(248,216,190,1)]" />
                    </div>
                  </div>
                </div>
                <div className="bg-white flex w-full items-center gap-2 text-sm text-[#313149] font-medium tracking-[0.1px] leading-[1.4] justify-center mt-4 p-6 rounded-2xl max-md:px-5">
                  <img src={chatIconSrc} className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" alt="Chat icon" />
                  <div className="self-stretch my-auto">
                    Conversational Learning
                  </div>
                </div>
              </>
            )}
            
            <div className="bg-white flex w-full items-center gap-2 text-sm text-[#313149] font-medium tracking-[0.1px] leading-[1.4] justify-center mt-4 p-6 rounded-2xl max-md:px-5">
              <img src={chatIconSrc} className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" alt="Chat icon" />
              <div className="self-stretch my-auto">
                Conversational Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
