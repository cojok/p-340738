
import React from "react";
import { FileVideo, BookText, CheckSquare, FileCheck, BookOpen, PlayCircle } from "lucide-react";

interface Resource {
  type: string;
  title: string;
  icon?: React.ReactNode;
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
  // Helper function to get icon based on resource type
  const getIconByType = (type: string) => {
    switch (type) {
      case 'Video':
        return <FileVideo className="w-5 h-5" />;
      case 'Course Book':
        return <BookText className="w-5 h-5" />;
      case 'Quiz':
        return <CheckSquare className="w-5 h-5" />;
      case 'Cycle':
        return <PlayCircle className="w-5 h-5" />;
      case 'Exam Trainer':
        return <FileCheck className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[rgba(243,243,247,1)] dark:bg-[#1A1F2C] flex w-full flex-col items-stretch justify-center p-4 md:p-6 rounded-3xl max-w-full mb-6">
      <div className="w-full max-w-full">
        <h3 className="text-[#101019] dark:text-white text-base font-medium tracking-[0.15px] max-w-full break-words">
          {title}
        </h3>
        <div className="flex w-full flex-col lg:flex-row items-stretch gap-4 md:gap-6 mt-4 md:mt-6 max-w-full">
          <div className="w-full lg:w-[60%] max-w-full">
            <div className="bg-white dark:bg-[#222222] w-full flex-1 p-4 md:p-6 rounded-2xl max-w-full">
              <h4 className="text-[#313149] dark:text-gray-200 text-base font-medium leading-[1.4] tracking-[0.15px] max-w-full">
                Introduction
              </h4>
              <div className="text-[#626293] dark:text-gray-300 text-sm font-normal leading-[22px] tracking-[0.25px] mt-2 max-w-full">
                <p className="break-words">{introduction}</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex-1">
            {resources && resources.length > 0 ? (
              <div className="flex flex-col gap-4 w-full">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-white dark:bg-[#222222] p-3 md:p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full overflow-hidden">
                    <div className={`${resource.bgColor} p-2 md:p-3 rounded-xl flex-shrink-0 mb-2 sm:mb-0`}>
                      {resource.icon || getIconByType(resource.type)}
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <h5 className="text-[#313149] dark:text-gray-200 font-medium text-sm truncate">{resource.type}</h5>
                      <p className="text-[#626293] dark:text-gray-300 text-sm truncate">{resource.title}</p>
                    </div>
                    <div className="text-xs text-[#626293] dark:text-gray-300 bg-[rgba(243,243,247,1)] dark:bg-[#333333] py-1 px-2 rounded-full whitespace-nowrap flex-shrink-0 mt-2 sm:mt-0 w-full sm:w-auto text-center sm:text-left">
                      {resource.description}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4 items-center justify-center h-full bg-white dark:bg-[#222222] p-6 rounded-2xl">
                <p className="text-[#626293] dark:text-gray-300 text-center">No resources available for this module.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
