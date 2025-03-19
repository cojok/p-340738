
import React from "react";
import { Header } from "@/components/learning/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ObjectivesPage: React.FC = () => {
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
          <div className="flex items-center mb-6">
            <Target className="h-6 w-6 text-green-600 mr-2" />
            <h1 className="text-2xl font-semibold">Learning Objectives</h1>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-xl">
              <h2 className="text-xl font-medium text-green-900 mb-4">Qualifikationsziele des Moduls Investition und Finanzierung</h2>
              <p className="mb-4">Nach erfolgreichem Abschluss sind die Studierenden in der Lage,</p>
              <ul className="space-y-3">
                {[
                  "die fundamentalen Grundlagen der Investitionsrechnung wiederzugeben.",
                  "einschlägige Fachbegriffe im Gebiet der Investitionstheorie, insbesondere die Unterscheidung von statischen und dynamischen Verfahren, zu erklären.",
                  "die wichtigsten Verfahren der Investitionsrechnung selbstständig anzuwenden.",
                  "bestimmte Investitionsprojekte zu beurteilen und aus einer Mehrzahl an Gestaltungsalternativen gegenüber anderen auszuwählen.",
                  "die einschlägigen Fachbegriffe im Gebiet der Finanzierung, insbesondere die Unterscheidung von Eigen- und Fremdfinanzierung sowie die Außen- und Innenfinanzierung, zu erläutern.",
                  "das Zusammenspiel von Unternehmen und Kapitalmärkten bei der Finanzierung von Kapitalgesellschaften zu verstehen."
                ].map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 shrink-0 mt-0.5" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Progress Tracking</h3>
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Investment Calculation Basics</h4>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">3/3 Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Investment Theory Terminology</h4>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">2/3 Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full w-2/3"></div>
                  </div>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Financing Fundamentals</h4>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">1/3 Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ObjectivesPage;
