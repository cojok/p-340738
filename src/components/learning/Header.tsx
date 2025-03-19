import React from "react";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div
      className="bg-[rgba(243,243,247,1)] flex min-h-28 w-full max-w-[1920px] items-center gap-6 flex-wrap px-[72px] max-md:max-w-full max-md:px-5"
      aria-label="Course header"
    >
      <div className="self-stretch flex items-center gap-2.5 w-10 my-auto">
        <button
          className="self-stretch flex w-10 items-center overflow-hidden justify-center my-auto"
          aria-label="Go back"
        >
          <div className="self-stretch flex min-h-10 w-10 items-center gap-2.5 justify-center my-auto rounded-xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ebe5e4885442710564d5401d87c1f03d5a0760?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
              alt="Back arrow"
            />
          </div>
        </button>
      </div>
      <div className="flex-1 self-stretch min-w-60 min-h-10 text-2xl text-[#626293] font-medium tracking-[0px] leading-[1.4] shrink basis-[0%] my-auto max-md:max-w-full">
        {title}
      </div>
      <div className="self-stretch flex items-center gap-4 my-auto">
        <button
          className="self-stretch flex items-center overflow-hidden justify-center w-10 my-auto"
          aria-label="Notifications"
        >
          <div className="self-stretch flex min-h-10 w-10 items-center gap-2.5 justify-center my-auto rounded-xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/947f80fb3f47e4b061f112f399cb9e3efd16f8da?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
              alt="Notifications icon"
            />
          </div>
        </button>
        <button
          className="self-stretch flex items-center overflow-hidden justify-center w-10 my-auto"
          aria-label="Settings"
        >
          <div className="self-stretch flex min-h-10 w-10 items-center gap-2.5 justify-center my-auto rounded-xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c39ab6db1400465d0274ce76c6dbaeb8358a2a5?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
              alt="Settings icon"
            />
          </div>
        </button>
        <button
          className="self-stretch flex items-center gap-2 justify-center my-auto rounded-xl"
          aria-label="Synthea assistant"
        >
          <div className="self-stretch flex min-h-10 items-center gap-2 justify-center my-auto px-2 rounded-xl">
            <div className="bg-black self-stretch flex min-h-6 items-center gap-2.5 justify-center w-6 h-6 my-auto rounded-full border-black border-solid border-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74aa56ac63d853a42399482d6866d039d2c723bb?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6 flex-1 shrink basis-[0%]"
                alt="Synthea icon"
              />
            </div>
            <div className="text-black text-center text-sm font-normal leading-[1.3] tracking-[0.5px] self-stretch my-auto">
              Syntea
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
