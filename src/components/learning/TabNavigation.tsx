
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
    <div className="bg-[rgba(243,243,247,1)] min-h-[72px] w-full rounded-[24px_24px_0px_0px] max-md:max-w-full relative">
      <Tabs 
        value={activeTab} 
        onValueChange={onTabChange}
        className="w-full"
      >
        <TabsList className="bg-transparent w-full h-[72px] flex border-0 p-0 rounded-[24px_24px_0_0] overflow-visible">
          <TabsTrigger 
            value="learning-plan" 
            className={`z-10 flex-1 h-[72px] text-base flex items-center justify-center transition-all duration-300 rounded-[24px_24px_0_0] 
              ${activeTab === "learning-plan" 
                ? "bg-white text-[#101019] font-medium border-0 data-[state=active]:bg-white data-[state=active]:shadow-none" 
                : "text-[#626293] border-0 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-[#101019]"}`}
          >
            Learning Plan
          </TabsTrigger>
          <TabsTrigger 
            value="course-info" 
            className={`z-10 flex-1 h-[72px] text-base flex items-center justify-center transition-all duration-300 rounded-[24px_24px_0_0] 
              ${activeTab === "course-info" 
                ? "bg-white text-[#101019] font-medium border-0 data-[state=active]:bg-white data-[state=active]:shadow-none" 
                : "text-[#626293] border-0 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-[#101019]"}`}
          >
            Course Info
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {/* This div creates the white rounded corner that connects to the main content */}
      <div className={`absolute bottom-0 left-0 w-full h-6 ${activeTab === "course-info" 
        ? "bg-white rounded-t-none rounded-b-[0px_24px]" // Rounded on bottom-right when course-info is active
        : "bg-white rounded-t-none rounded-b-[24px_0px]"}`} // Rounded on bottom-left when learning-plan is active
      />
    </div>
  );
};
