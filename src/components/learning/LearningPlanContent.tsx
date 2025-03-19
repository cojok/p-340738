import React from "react";
import { LearningModule } from "./LearningModule";

interface LearningPlanContentProps {
  dateRange: string;
  sectionTitle: string;
}

export const LearningPlanContent: React.FC<LearningPlanContentProps> = ({
  dateRange,
  sectionTitle,
}) => {
  return (
    <div className="bg-white min-w-[420px] w-full p-10 rounded-[0px_0px_32px_32px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full gap-6 pb-2 max-md:max-w-full">
        <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="gap-2 text-sm text-[#626293] font-normal tracking-[0.5px] leading-[1.3]">
              Your Weekly Learning Plan
            </div>
            <div className="flex w-full items-center gap-4 flex-wrap mt-1 max-md:max-w-full">
              <h2 className="text-[#101019] text-2xl font-semibold tracking-[0px] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                {dateRange}
              </h2>
              <button className="self-stretch flex items-center overflow-hidden text-sm text-black font-normal text-center tracking-[0.5px] leading-[1.3] justify-center my-auto">
                <div className="self-stretch flex items-center justify-center my-auto rounded-xl">
                  <div className="self-stretch flex min-h-10 items-center gap-4 justify-center my-auto px-4 rounded-xl">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c1fffcf96d679a5451a516900e7edd40b289e7?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                      alt="Edit icon"
                    />
                    <span className="self-stretch my-auto">
                      overview and edit
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-6 rounded-3xl max-md:max-w-full">
        <div className="w-full overflow-hidden rounded-3xl max-md:max-w-full">
          <h2 className="text-[#1D1B20] text-xl font-medium tracking-[0px]">
            {sectionTitle}
          </h2>
          <div className="flex w-full flex-col items-stretch justify-center mt-6 max-md:max-w-full">
            <LearningModule
              title="2.4 The Functional View: Distributed Ledger Technologies (DLT)"
              introduction="Distributed Ledger Technologies (DLT) represent a revolutionary approach to managing and recording digital data across multiple locations or nodes simultaneously. Unlike traditional centralized databases, DLT eliminates the need for a central authority offering a decentralized system where participants..."
              videoIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/69a9695462c8f935bf5841327e8a3cc663e4b6c7?placeholderIfAbsent=true"
              audioIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a690391e763b1003a3cc30ac2346e5013d24eb29?placeholderIfAbsent=true"
              practiceIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d9e93f45438008d90ed010e196ad77b19069ba44?placeholderIfAbsent=true"
              chatIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6685ec8eceee80e952eedfd31a027cb5420bfd5e?placeholderIfAbsent=true"
            />
            <LearningModule
              title="2.5 History of Blockchain and Distributed Ledger Technology"
              introduction="The history of blockchain and Distributed Ledger Technology (DLT) begins in 2008 with the creation of Bitcoin by an anonymous person or group known as Satoshi Nakamoto. Blockchain, the underlying technology behind Bitcoin, was designed as a decentralized ledger to enable secure , peer-to-peer..."
              videoIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/69a9695462c8f935bf5841327e8a3cc663e4b6c7?placeholderIfAbsent=true"
              audioIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0b3e2648cf54f95b8484ce6ec4c46ff033704dc2?placeholderIfAbsent=true"
              practiceIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f275ede79db99bafb182a6d5fb570db9688c1595?placeholderIfAbsent=true"
              chatIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6685ec8eceee80e952eedfd31a027cb5420bfd5e?placeholderIfAbsent=true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
