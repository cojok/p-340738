import React from "react";

interface ResourceCardProps {
  type: "Videos" | "Audio" | "Practice";
  iconSrc: string;
  bgColor: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  type,
  iconSrc,
  bgColor,
}) => {
  return (
    <div
      className="bg-white flex overflow-hidden flex-1 shrink basis-[0%] px-2 rounded-2xl"
      aria-label={`${type} resource`}
    >
      <div className="flex w-full flex-col overflow-hidden items-center justify-center flex-1 shrink basis-[0%] px-3 py-6">
        <div
          className={`${bgColor} flex w-10 items-center justify-center flex-wrap h-10 rounded-full`}
        >
          <div className="self-stretch flex min-h-10 w-8 flex-col items-center justify-center grow shrink my-auto px-1 py-2.5">
            <img
              src={iconSrc}
              className="aspect-[1] object-contain w-full"
              alt={`${type} icon`}
            />
          </div>
        </div>
        <div className="overflow-hidden text-sm text-[#313149] font-medium whitespace-nowrap tracking-[0.1px] leading-[1.4] mt-2">
          {type}
        </div>
      </div>
    </div>
  );
};
