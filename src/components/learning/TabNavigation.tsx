
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="bg-[rgba(243,243,247,1)] min-h-[72px] w-full text-base font-normal rounded-[24px_24px_0px_0px] max-md:max-w-full">
      <div className="relative flex min-h-12 w-full items-stretch justify-between flex-1 h-full max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0afb42b8979e9ad3a98d502415b39246b29f2dc8?placeholderIfAbsent=true"
          className="aspect-[25.64] object-contain w-[1232px] absolute z-0 min-w-60 rounded-[24px_24px_24px_24px] inset-0 max-md:max-w-full"
          alt="Tab background"
        />
        <Tabs 
          value={activeTab} 
          onValueChange={onTabChange}
          className="flex w-full min-h-12"
        >
          <TabsList className="bg-transparent w-full h-full flex">
            <TabsTrigger 
              value="learning-plan" 
              className={`flex-1 min-h-12 text-base flex items-center justify-center ${activeTab === "learning-plan" ? "text-[#101019]" : "text-[#626293]"}`}
            >
              Learning Plan
            </TabsTrigger>
            <TabsTrigger 
              value="course-info" 
              className={`flex-1 min-h-12 text-base flex items-center justify-center ${activeTab === "course-info" ? "text-[#101019]" : "text-[#626293]"}`}
            >
              Course Info
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="bg-white flex min-h-6 w-full rounded-[0px_32px_0px_0px] max-md:max-w-full" />
    </div>
  );
};
