import React, { useState } from "react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="bg-[rgba(243,243,247,1)] min-h-[72px] w-full text-base font-normal text-center tracking-[0.1px] leading-[1.3] rounded-[24px_24px_0px_0px] max-md:max-w-full">
      <div className="relative flex min-h-12 w-full items-stretch justify-between flex-1 h-full max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0afb42b8979e9ad3a98d502415b39246b29f2dc8?placeholderIfAbsent=true"
          className="aspect-[25.64] object-contain w-[1232px] absolute z-0 min-w-60 rounded-[24px_24px_24px_24px] inset-0 max-md:max-w-full"
          alt="Tab background"
        />
        <button
          className={`self-stretch z-0 min-h-12 min-w-60 gap-2 ${
            activeTab === "learning-plan" ? "text-[#101019]" : "text-[#626293]"
          } h-full flex-1 shrink basis-[0%] px-4 max-md:max-w-full`}
          onClick={() => onTabChange("learning-plan")}
          aria-selected={activeTab === "learning-plan"}
          role="tab"
        >
          Learning Plan
        </button>
        <button
          className={`self-stretch z-0 min-h-12 min-w-60 gap-2 ${
            activeTab === "course-info" ? "text-[#101019]" : "text-[#626293]"
          } h-full flex-1 shrink basis-[0%] px-4 max-md:max-w-full`}
          onClick={() => onTabChange("course-info")}
          aria-selected={activeTab === "course-info"}
          role="tab"
        >
          Course Info
        </button>
      </div>
      <div className="bg-white flex min-h-6 w-full rounded-[0px_32px_0px_0px] max-md:max-w-full" />
    </div>
  );
};
