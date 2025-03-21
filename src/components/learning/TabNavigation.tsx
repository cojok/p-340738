
import React, { useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check for tab parameter in URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    
    if (tabParam === 'course-info' || tabParam === 'learning-plan') {
      onTabChange(tabParam);
    }
  }, [location.search, onTabChange]);

  const handleTabChange = (value: string) => {
    // Update URL with tab parameter
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('tab', value);
    navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    
    onTabChange(value);
  };

  return (
    <div className="bg-[rgba(243,243,247,1)] min-h-[72px] w-full rounded-[24px_24px_0px_0px] max-w-full relative overflow-hidden">
      <Tabs 
        value={activeTab} 
        onValueChange={handleTabChange}
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
            <span className="block px-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">Learning Plan</span>
          </TabsTrigger>
          <TabsTrigger 
            value="course-info" 
            className={`z-10 flex-1 h-[72px] text-base flex items-center justify-center transition-all duration-300 rounded-[24px_24px_0_0] 
              ${activeTab === "course-info" 
                ? "bg-white text-[#101019] font-medium border-0 data-[state=active]:bg-white data-[state=active]:shadow-none" 
                : "text-[#626293] border-0 bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-[#101019]"}`}
          >
            <span className="block px-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">Course Info</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      {/* White background beneath the active tab */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-white rounded-t-none"></div>
      {/* Create the proper tab corner effect for both states */}
      {activeTab === "learning-plan" ? (
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-[rgba(243,243,247,1)] rounded-br-[24px]"></div>
      ) : (
        <div className="absolute bottom-0 left-0 w-6 h-6 bg-[rgba(243,243,247,1)] rounded-bl-[24px]"></div>
      )}
    </div>
  );
};
