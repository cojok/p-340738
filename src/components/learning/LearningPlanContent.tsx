
import React from "react";
import { LearningModule } from "./LearningModule";
import { Button } from "@/components/ui/button";
import { PenLine, BookOpen, PlayCircle, FileCheck, FileVideo, BookText, CheckSquare, CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LearningPlanContentProps {
  dateRange: string;
  sectionTitle: string;
  onOverviewEdit?: () => void;
}

export const LearningPlanContent: React.FC<LearningPlanContentProps> = ({
  dateRange,
  sectionTitle,
  onOverviewEdit,
}) => {
  const navigate = useNavigate();
  
  const handleOverviewClick = () => {
    // Navigate to the overview page
    navigate('/overview');
  };

  return (
    <div className="bg-white w-full p-10 rounded-[0px_0px_32px_32px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full gap-6 pb-2 max-md:max-w-full">
        <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="text-sm text-[#626293] font-normal leading-[1.3]">
              Your Weekly Learning Plan
            </div>
            <div className="flex w-full items-center justify-between gap-4 mt-2 max-md:flex-wrap max-md:max-w-full">
              <h2 className="text-[#101019] text-2xl font-semibold">
                {dateRange}
              </h2>
              <Button 
                variant="outline" 
                onClick={handleOverviewClick}
                className="h-10 flex items-center justify-center gap-2 text-sm font-normal border-[#626293] text-[#626293] hover:bg-gray-50"
              >
                <PenLine className="w-4 h-4" />
                <span>overview and edit</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 rounded-3xl max-md:max-w-full">
        <div className="w-full overflow-hidden rounded-3xl max-md:max-w-full">
          <h2 className="text-[#1D1B20] text-xl font-medium">
            {sectionTitle}
          </h2>
          <div className="flex w-full flex-col items-stretch justify-center mt-6 max-md:max-w-full">
            {/* Current Week - Only 2 Units with Video Materials and Quizzes */}
            <LearningModule
              title="Unit 1: Finanzwirtschaftliche Grundlagen"
              introduction="Dieses Modul führt in die grundlegenden Konzepte der Finanzwirtschaft ein. Studieren Sie das Kursbuch zu den Themen Grundprinzipien und Bestandteile der Finanzwirtschaft und schauen Sie sich die begleitenden Lehrvideos an."
              resources={[
                { 
                  type: "Video",
                  title: "Einführung in die Finanzwirtschaft",
                  icon: <FileVideo className="w-5 h-5" />,
                  bgColor: "bg-[rgba(216,206,233,1)]",
                  description: "25 min"
                },
                { 
                  type: "Course Book",
                  title: "Grundprinzipien der Finanzwirtschaft",
                  icon: <BookText className="w-5 h-5" />,
                  bgColor: "bg-[rgba(253,243,186,1)]",
                  description: "15 pages"
                },
                {
                  type: "Quiz",
                  title: "Grundlagen-Quiz",
                  icon: <CheckSquare className="w-5 h-5" />,
                  bgColor: "bg-[rgba(248,216,190,1)]",
                  description: "10 questions"
                }
              ]}
              videoIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/69a9695462c8f935bf5841327e8a3cc663e4b6c7?placeholderIfAbsent=true"
              audioIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a690391e763b1003a3cc30ac2346e5013d24eb29?placeholderIfAbsent=true"
              practiceIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d9e93f45438008d90ed010e196ad77b19069ba44?placeholderIfAbsent=true"
              chatIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6685ec8eceee80e952eedfd31a027cb5420bfd5e?placeholderIfAbsent=true"
            />
            
            <LearningModule
              title="Unit 2: Statische Verfahren der Investitionsrechnung"
              introduction="In diesem Modul werden statische Verfahren der Investitionsrechnung behandelt. Lesen Sie das Kursbuch zu den Themen Kostenvergleichsrechnung, Gewinnvergleichsrechnung, Rentabilitätsvergleichsrechnung und statische Amortisationsdauerrechnung und schauen Sie sich die dazugehörigen Videos an."
              resources={[
                { 
                  type: "Video",
                  title: "Kostenvergleichsrechnung in der Praxis",
                  icon: <FileVideo className="w-5 h-5" />,
                  bgColor: "bg-[rgba(216,206,233,1)]",
                  description: "20 min"
                },
                { 
                  type: "Video",
                  title: "Vergleich statischer Investitionsverfahren",
                  icon: <FileVideo className="w-5 h-5" />,
                  bgColor: "bg-[rgba(216,206,233,1)]",
                  description: "15 min"
                },
                {
                  type: "Quiz",
                  title: "Übungsaufgaben zur Amortisationsrechnung",
                  icon: <CheckSquare className="w-5 h-5" />,
                  bgColor: "bg-[rgba(248,216,190,1)]",
                  description: "5 exercises"
                }
              ]}
              videoIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/69a9695462c8f935bf5841327e8a3cc663e4b6c7?placeholderIfAbsent=true"
              audioIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0b3e2648cf54f95b8484ce6ec4c46ff033704dc2?placeholderIfAbsent=true"
              practiceIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f275ede79db99bafb182a6d5fb570db9688c1595?placeholderIfAbsent=true"
              chatIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6685ec8eceee80e952eedfd31a027cb5420bfd5e?placeholderIfAbsent=true"
            />
            
            {/* Future Content - Not for current week */}
            <div className="bg-[rgba(243,243,247,0.6)] mt-8 p-6 rounded-3xl">
              <h3 className="text-[#626293] text-base font-medium mb-4">Upcoming Content</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[#626293]">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Unit 3: Klassische dynamische Verfahren der Investitionsrechnung</span>
                </div>
                <div className="flex items-center gap-3 text-[#626293]">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Unit 4: Wiederholung und Quizzes - Investitionsrechnung</span>
                </div>
                <div className="flex items-center gap-3 text-[#626293]">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Unit 5: Wiederholung und Quizzes - Unternehmensfinanzierung</span>
                </div>
                <div className="flex items-center gap-3 text-[#626293]">
                  <CalendarCheck className="w-5 h-5" />
                  <span>Unit 6: Klausurvorbereitung und Wissenstest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
