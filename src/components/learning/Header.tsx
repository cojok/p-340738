
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    // When on the Overview page, navigate to Learning Plan
    navigate("/learning-plan");
  };

  return (
    <div
      className="bg-[rgba(243,243,247,1)] dark:bg-[#1A1F2C] flex min-h-28 w-full max-w-[1920px] items-center gap-6 flex-wrap px-[72px] max-md:px-5"
      aria-label="Course header"
    >
      <div className="self-stretch flex items-center gap-2.5 w-10 my-auto">
        <button
          className="self-stretch flex w-10 items-center overflow-hidden justify-center my-auto"
          aria-label="Go back to Learning Plan"
          onClick={handleBackClick}
          tabIndex={0}
        >
          <div className="self-stretch flex min-h-10 w-10 items-center gap-2.5 justify-center my-auto rounded-xl hover:bg-[#E5E4F5] dark:hover:bg-[#3F3F5F] transition-colors">
            <ArrowLeft className="h-4 w-4 text-[#626293] dark:text-[#A9A9D2]" />
          </div>
        </button>
      </div>
      <div className="flex-1 self-stretch min-w-60 min-h-10 text-2xl text-[#626293] dark:text-[#A9A9D2] font-medium tracking-[0px] leading-[1.4] shrink basis-[0%] my-auto max-md:max-w-full">
        {title}
      </div>
      <div className="self-stretch flex items-center gap-4 my-auto">
        <ThemeToggle />
        
        <button
          className="self-stretch flex items-center overflow-hidden justify-center w-10 my-auto"
          aria-label="Notifications"
          tabIndex={0}
        >
          <div className="self-stretch flex min-h-10 w-10 items-center gap-2.5 justify-center my-auto rounded-xl hover:bg-[#E5E4F5] dark:hover:bg-[#3F3F5F] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/947f80fb3f47e4b061f112f399cb9e3efd16f8da?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch my-auto dark:invert"
              alt="Notifications icon"
            />
          </div>
        </button>
        <button
          className="self-stretch flex items-center overflow-hidden justify-center w-10 my-auto"
          aria-label="Settings"
          tabIndex={0}
        >
          <div className="self-stretch flex min-h-10 w-10 items-center gap-2.5 justify-center my-auto rounded-xl hover:bg-[#E5E4F5] dark:hover:bg-[#3F3F5F] transition-colors">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c39ab6db1400465d0274ce76c6dbaeb8358a2a5?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch my-auto dark:invert"
              alt="Settings icon"
            />
          </div>
        </button>
        <button
          className="self-stretch flex items-center gap-2 justify-center my-auto rounded-xl"
          aria-label="Synthea assistant"
          tabIndex={0}
        >
          <div className="self-stretch flex min-h-10 items-center gap-2 justify-center my-auto px-2 rounded-xl hover:bg-[#E5E4F5] dark:hover:bg-[#3F3F5F] transition-colors">
            <div className="bg-black self-stretch flex min-h-6 items-center gap-2.5 justify-center w-6 h-6 my-auto rounded-full border-black border-solid border-4 dark:border-white">
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
    </div>
  );
};
