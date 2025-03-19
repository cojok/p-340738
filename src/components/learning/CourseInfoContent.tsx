
import React, { useState } from "react";
import { ArrowRight, ArrowDown, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface StyledLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  download?: boolean;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children, icon, className, download = false }) => {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer" 
      className={cn(
        "inline-flex items-center text-purple-600 hover:text-purple-800 gap-2 hover:underline transition-colors py-1 px-1",
        "border border-transparent hover:border-purple-200 rounded",
        className
      )}
      download={download}
    >
      {icon && <span className="inline-flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </a>
  );
};

export const CourseInfoContent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const courseDescription = "Die Studierenden widmen sich im ersten Teil dieses Kurses der Investitionsseite und damit der Frage der Analyse und Generierung finanzwirtschaftlicher Werte. Behandelt werden zunächst die Grundlagen, Annahmen und Ziele der Investitionstheorie sowie deren Anwendung im praktischen Kontext. Eine Abgrenzung von statischen und dynamischen Verfahren dient der grundsätzlichen Einordnung der Methoden, wobei der Fokus auf den dynamischen Verfahren liegt. Gegenstand der Investitionsanalyse ist die wirtschaftliche Beurteilung der Vorteilhaftigkeit von Zahlungsströmen, welche aus unternehmerischen Entscheidungen jedweder Art resultieren können.";

  return (
    <div className="bg-white w-full p-10 rounded-[0px_0px_32px_32px] max-md:max-w-full max-md:px-5">
      <h2 className="text-[#1D1B20] text-xl font-medium mb-6">
        Course description
      </h2>
      
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="mb-6"
      >
        <div className="text-[#626293]">
          <p className={`${!isOpen ? "line-clamp-3" : ""}`}>
            {courseDescription}
          </p>
          <CollapsibleTrigger asChild>
            <button className="text-purple-600 hover:text-purple-800 hover:underline focus:outline-none mt-1">
              {isOpen ? "Less" : "More"}
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <p className="text-[#626293] mt-4">
            Der zweite Teil des Moduls widmet sich der Finanzierungsseite, also der Beschaffung finanzieller Mittel für Investitionen. Neben den Finanzierungsformen stehen hier insbesondere die Einsatzgebiete sowie der Umgang mit Kennzahlen und finanziellen Steuerungsmodellen im Vordergrund. Besondere Berücksichtigung erfahren die Instrumente der Aussenfinanzierung, wie z.B. Kredite, Anleihen oder Leasing, aber auch die Innenfinanzierung sowie spezifische Herausforderungen nicht-börsennotierter Unternehmen.
          </p>
        </CollapsibleContent>
      </Collapsible>
      
      <div className="mb-8">
        <StyledLink 
          href="https://res.cloudinary.com/iubh/image/upload/v1630568577/15%20-%20Dokumente/Weiterbildungen/Kurshandbücher/DLBLOFUI-01_Invesition_und_Finanzierung_FS_P_IWe_oECTS_26.08.2021_btnnxg.pdf"
          icon={<ArrowDown className="h-4 w-4" />}
          download
        >
          Module handbook
        </StyledLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/course/content" className="bg-[#F1F0FB] p-6 rounded-2xl hover:bg-[#E8E6F8] transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-purple-200 p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#6b21a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Content</h3>
            </div>
            <ArrowRight className="text-gray-400" />
          </div>
          <p className="mt-2 text-sm text-gray-600">12 chapters and 20 Quizzes</p>
        </Link>
        
        <Link to="/course/objectives" className="bg-[#F1F0FB] p-6 rounded-2xl hover:bg-[#E8E6F8] transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-200 p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H21V21H3V3Z" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 9H21" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21V9" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Objectives</h3>
            </div>
            <ArrowRight className="text-gray-400" />
          </div>
          <p className="mt-2 text-sm text-gray-600">18 learning goals</p>
        </Link>
        
        <Link to="/course/exams" className="bg-[#F1F0FB] p-6 rounded-2xl hover:bg-[#E8E6F8] transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-200 p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Exams & grades</h3>
            </div>
            <ArrowRight className="text-gray-400" />
          </div>
          <p className="mt-2 text-sm text-gray-600">2 exam types</p>
        </Link>
        
        <Link to="/course/good-to-know" className="bg-[#F1F0FB] p-6 rounded-2xl hover:bg-[#E8E6F8] transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-teal-200 p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15848 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17H12.01" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Good to know</h3>
            </div>
            <ArrowRight className="text-gray-400" />
          </div>
          <p className="mt-2 text-sm text-gray-600">Additional helpful information</p>
        </Link>
      </div>
    </div>
  );
};
