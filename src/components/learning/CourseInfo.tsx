import React from "react";

interface CourseInfoProps {
  courseCode: string;
  courseTitle: string;
  credits: number;
  status: string;
}

export const CourseInfo: React.FC<CourseInfoProps> = ({
  courseCode,
  courseTitle,
  credits,
  status,
}) => {
  return (
    <div className="flex w-full gap-6 max-md:max-w-full">
      <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          <div className="gap-2 text-xs text-[#626293] font-normal whitespace-nowrap tracking-[0.15px] leading-[1.3]">
            {courseCode}
          </div>
          <h1 className="text-[#101019] text-[28px] font-semibold tracking-[0px] mt-1 max-md:max-w-full">
            {courseTitle}
          </h1>
        </div>
        <div className="flex w-full gap-1 text-xs font-normal tracking-[0.15px] leading-[1.3] flex-wrap mt-4 max-md:max-w-full">
          <div className="bg-[rgba(240,172,116,1)] flex min-h-6 items-center overflow-hidden text-black whitespace-nowrap justify-center rounded-2xl">
            <div className="self-stretch gap-2 my-auto px-2">{status}</div>
          </div>
          <div className="bg-[rgba(218,218,231,1)] flex min-h-6 items-center overflow-hidden text-black justify-center rounded-2xl">
            <div className="self-stretch gap-2 my-auto px-2">
              {credits} credits
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
