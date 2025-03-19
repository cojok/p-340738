
import React from "react";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/components/ThemeProvider";
import { Toggle } from "@/components/ui/toggle";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();

  const handleBackClick = () => {
    // When on the Overview page, navigate to Learning Plan
    navigate("/learning-plan");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="bg-[rgba(243,243,247,1)] dark:bg-[#1A1F2C] flex min-h-28 w-full max-w-[1920px] items-center gap-6 flex-wrap px-4 sm:px-6 lg:px-[72px] max-md:px-5"
      aria-label="Course header"
    >
      <div className="self-stretch flex items-center gap-2.5 w-10 my-auto">
        <button
          className="self-stretch flex w-10 items-center overflow-hidden justify-center my-auto"
          aria-label="Go back to Learning Plan"
          onClick={handleBackClick}
        >
          <div className="self-stretch flex min-h-10 w-10 items-center gap-2.5 justify-center my-auto rounded-xl hover:bg-[#E5E4F5] dark:hover:bg-[#2A2F3C] transition-colors">
            <ArrowLeft className="h-4 w-4 text-[#626293] dark:text-gray-300" />
          </div>
        </button>
      </div>
      <div className="flex-1 self-stretch min-w-0 min-h-10 text-xl sm:text-2xl text-[#626293] dark:text-gray-300 font-medium tracking-[0px] leading-[1.4] my-auto max-md:max-w-full truncate">
        {title}
      </div>
      {!isMobile ? (
        <div className="self-stretch flex items-center gap-4 my-auto">
          <button
            className="self-stretch flex items-center overflow-hidden justify-center w-10 my-auto"
            aria-label="Notifications"
          >
            <div className="self-stretch flex min-h-10 w-10 items-center gap-2.5 justify-center my-auto rounded-xl hover:bg-[#E5E4F5] dark:hover:bg-[#2A2F3C] transition-colors">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/947f80fb3f47e4b061f112f399cb9e3efd16f8da?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt="Notifications icon"
              />
            </div>
          </button>
          <Toggle
            pressed={theme === "dark"}
            onPressedChange={toggleTheme}
            className="self-stretch flex items-center overflow-hidden justify-center w-10 my-auto"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="self-stretch flex min-h-10 w-10 items-center gap-2.5 justify-center my-auto rounded-xl hover:bg-[#E5E4F5] dark:hover:bg-[#2A2F3C] transition-colors">
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-[#626293] dark:text-gray-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#626293] dark:text-gray-300" />
              )}
            </div>
          </Toggle>
          <button
            className="self-stretch flex items-center gap-2 justify-center my-auto rounded-xl"
            aria-label="Synthea assistant"
          >
            <div className="self-stretch flex min-h-10 items-center gap-2 justify-center my-auto px-2 rounded-xl hover:bg-[#E5E4F5] dark:hover:bg-[#2A2F3C] transition-colors">
              <div className="bg-black self-stretch flex min-h-6 items-center gap-2.5 justify-center w-6 h-6 my-auto rounded-full border-black border-solid border-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74aa56ac63d853a42399482d6866d039d2c723bb?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6 flex-1 shrink basis-[0%]"
                  alt="Synthea icon"
                />
              </div>
              <div className="text-black dark:text-white text-center text-sm font-normal leading-[1.3] tracking-[0.5px] self-stretch my-auto">
                Syntea
              </div>
            </div>
          </button>
        </div>
      ) : null}
    </div>
  );
};
