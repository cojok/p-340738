
import React from "react";

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
}

export const LearningModule: React.FC<LearningModuleProps> = ({
  title,
  introduction,
  resources,
}) => {
  return (
    <div className="bg-[rgba(243,243,247,1)] flex w-full flex-col items-stretch justify-center p-4 md:p-6 rounded-3xl max-md:max-w-full mb-6">
      <div className="w-full max-md:max-w-full">
        <h3 className="text-[#101019] text-base font-medium tracking-[0.15px] max-md:max-w-full">
          {title}
        </h3>
        <div className="flex w-full flex-col md:flex-row items-stretch gap-4 md:gap-6 flex-wrap mt-4 md:mt-6 max-md:max-w-full">
          <div className="w-full md:min-w-60 md:w-[60%] lg:w-[760px] max-md:max-w-full">
            <div className="bg-white w-full flex-1 p-4 md:p-6 rounded-2xl max-md:max-w-full">
              <h4 className="text-[#313149] text-base font-medium leading-[1.4] tracking-[0.15px] max-md:max-w-full">
                Introduction
              </h4>
              <div className="text-[#626293] text-sm font-normal leading-[22px] tracking-[0.25px] mt-2 max-md:max-w-full">
                <p>{introduction}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:min-w-60 md:w-[35%] flex-1 shrink basis-[0%]">
            {resources && (
              <div className="flex flex-col gap-4">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-white p-3 md:p-4 rounded-2xl flex items-center gap-3">
                    <div className={`${resource.bgColor} p-2 md:p-3 rounded-xl flex-shrink-0`}>
                      {resource.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[#313149] font-medium text-sm truncate">{resource.type}</h5>
                      <p className="text-[#626293] text-sm truncate">{resource.title}</p>
                    </div>
                    <div className="text-xs text-[#626293] bg-[rgba(243,243,247,1)] py-1 px-2 rounded-full whitespace-nowrap">
                      {resource.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
