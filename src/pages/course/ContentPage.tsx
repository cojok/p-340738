
import React from "react";
import { Header } from "@/components/learning/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ContentPage: React.FC = () => {
  return (
    <div className="bg-[rgba(243,243,247,1)] flex flex-col items-center min-h-screen w-full">
      <Header title="Finanzierung und Investition" />
      <ScrollArea className="w-full max-w-[1200px] px-6 md:px-16 py-12 flex-1">
        <Link to="/learning-plan?tab=course-info">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Course Info
          </Button>
        </Link>
        
        <div className="bg-white w-full p-8 rounded-xl">
          <h1 className="text-2xl font-semibold mb-6">Module Content</h1>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h2 className="text-xl font-medium text-purple-900 mb-4">Lehrinhalt des Moduls</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                <li>Einführung in die Investitionstheorie</li>
                <li>Methoden der Investitionsrechnung</li>
                <li>Einführung in die Finanzierung</li>
                <li>Kennzahlen</li>
                <li>Langfristige Finanzplanung</li>
                <li>Fremdkapitalfinanzierung</li>
                <li>Eigenkapitalfinanzierung</li>
              </ul>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Chapters Overview</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((chapter) => (
                  <div key={chapter} className="border p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-sm text-gray-500">Chapter {chapter}</span>
                        <h4 className="font-medium">
                          {chapter === 1 && "Introduction to Investment Theory"}
                          {chapter === 2 && "Investment Calculation Methods"}
                          {chapter === 3 && "Introduction to Financing"}
                          {chapter === 4 && "Key Performance Indicators"}
                          {chapter === 5 && "Long-term Financial Planning"}
                          {chapter === 6 && "Equity and Debt Financing"}
                        </h4>
                      </div>
                      <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                        {chapter <= 3 ? "Videos & Reading" : chapter <= 5 ? "Quizzes" : "Exam Prep"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ContentPage;
