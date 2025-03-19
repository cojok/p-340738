
import React, { useState, useEffect } from "react";
import { Header } from "@/components/learning/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowDown, ExternalLink, Menu, Target, FileText, HelpCircle, CheckCircle, Calendar, Clock, BookOpen, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

const PageContent: React.FC<{ pageType: string }> = ({ pageType }) => {
  switch (pageType) {
    case "content":
      return (
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
          
          <div className="mb-6">
            <StyledLink 
              href="https://res.cloudinary.com/iubh/image/upload/v1630568577/15%20-%20Dokumente/Weiterbildungen/Kurshandbücher/DLBLOFUI-01_Invesition_und_Finanzierung_FS_P_IWe_oECTS_26.08.2021_btnnxg.pdf"
              icon={<ArrowDown className="h-4 w-4" />}
              download
            >
              Download module handbook
            </StyledLink>
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
      );
    case "objectives":
      return (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-xl">
            <h2 className="text-xl font-medium text-green-900 mb-4">Kursziele</h2>
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
      );
    case "exams":
      return (
        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h2 className="text-xl font-medium text-blue-900 mb-4">Exam Types</h2>
            <div className="space-y-4">
              <div className="border border-blue-200 bg-white p-5 rounded-lg">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium text-gray-900">Written Exam</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Final • 80%</span>
                </div>
                <p className="text-gray-600 mt-2">120-minute written exam covering all course material. Calculator allowed, no additional materials.</p>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>June 15, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>10:00 - 12:00</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-blue-200 bg-white p-5 rounded-lg">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium text-gray-900">Quizzes</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Ongoing • 20%</span>
                </div>
                <p className="text-gray-600 mt-2">Six weekly online quizzes. Best 5 out of 6 will count towards your final grade.</p>
                <div className="grid grid-cols-6 gap-2 mt-4">
                  {[1, 2, 3, 4, 5, 6].map((quiz) => (
                    <div key={quiz} className={`text-center py-1 px-2 rounded text-xs ${quiz <= 3 ? "bg-green-100 text-green-800" : quiz <= 4 ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`}>
                      Quiz {quiz}
                      {quiz <= 3 && <span className="block mt-1">Completed</span>}
                      {quiz === 4 && <span className="block mt-1">In progress</span>}
                      {quiz > 4 && <span className="block mt-1">Upcoming</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Grade Distribution</CardTitle>
                <CardDescription>Previous semester results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-end justify-between px-2">
                  {["1.0", "1.3", "1.7", "2.0", "2.3", "2.7", "3.0", "3.3", "3.7", "4.0", "5.0"].map((grade, i) => {
                    const heights = [70, 85, 95, 100, 90, 75, 60, 40, 30, 20, 15];
                    return (
                      <div key={grade} className="flex flex-col items-center">
                        <div style={{ height: `${heights[i]}%` }} className="w-6 bg-blue-500 rounded-t"></div>
                        <span className="text-xs mt-1">{grade}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Exam Resources</CardTitle>
                <CardDescription>Preparation materials</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { name: "Practice Exam 2022", type: "PDF", status: "Available" },
                    { name: "Practice Exam 2021", type: "PDF", status: "Available" },
                    { name: "Formula Sheet", type: "PDF", status: "Available" },
                    { name: "Mock Test", type: "Online", status: "Opens May 20" },
                    { name: "Review Session", type: "Live", status: "June 10" }
                  ].map((resource, i) => (
                    <li key={i} className="flex justify-between items-center p-2 border-b">
                      <div>
                        <div className="font-medium">{resource.name}</div>
                        <div className="text-xs text-gray-500">{resource.type}</div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${resource.status === "Available" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                        {resource.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    case "goodtoknow":
      return (
        <div className="space-y-8">
          <div className="bg-teal-50 p-6 rounded-xl">
            <h2 className="text-xl font-medium text-teal-900 mb-4">Additional Information</h2>
            <p className="text-gray-700 mb-4">
              This section contains helpful information about the course that doesn't fit into other categories. 
              Here you'll find practical advice, learning tips, and other resources to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-teal-600" />
                  Recommended Books
                </CardTitle>
                <CardDescription>Additional reading materials</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    { title: "Principles of Corporate Finance", author: "Brealey, Myers & Allen", year: "2020", note: "Primary reference" },
                    { title: "Fundamentals of Financial Management", author: "Brigham & Houston", year: "2019", note: "For beginners" },
                    { title: "Investments", author: "Bodie, Kane & Marcus", year: "2018", note: "Advanced topics" },
                  ].map((book, i) => (
                    <li key={i} className="border-b pb-3">
                      <div className="font-medium">{book.title}</div>
                      <div className="text-sm text-gray-600">{book.author} ({book.year})</div>
                      <div className="text-xs bg-teal-100 text-teal-800 inline-block mt-1 px-2 py-0.5 rounded">{book.note}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-teal-600" />
                  Office Hours
                </CardTitle>
                <CardDescription>Get help from instructors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { name: "Prof. Dr. Schmidt", time: "Tuesday 14:00-16:00", room: "Building A, Room 305" },
                    { name: "Dr. Müller", time: "Wednesday 10:00-12:00", room: "Building B, Room 210" },
                    { name: "Tutor: Jana Weber", time: "Thursday 14:00-16:00", room: "Online (Zoom)" },
                  ].map((person, i) => (
                    <li key={i} className="flex p-2 border-b">
                      <Calendar className="h-5 w-5 text-gray-400 mr-3 shrink-0 mt-1" />
                      <div>
                        <div className="font-medium">{person.name}</div>
                        <div className="text-sm text-gray-600">{person.time}</div>
                        <div className="text-sm text-gray-600">{person.room}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Course Timeline & Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute h-full w-0.5 bg-teal-200 left-4 top-0"></div>
                  <ul className="space-y-6">
                    {[
                      { date: "April 3", title: "Course Start", description: "Introduction and course overview" },
                      { date: "April 17", title: "First Assignment Due", description: "Basic investment calculations" },
                      { date: "May 15", title: "Midterm Quiz", description: "Covers weeks 1-6 material" },
                      { date: "May 29", title: "Group Project Start", description: "Investment analysis case study" },
                      { date: "June 10", title: "Review Session", description: "Exam preparation" },
                      { date: "June 15", title: "Final Exam", description: "Written exam, 120 minutes" },
                    ].map((event, i) => (
                      <li key={i} className="ml-8 relative">
                        <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                          <span className="text-white text-xs">{i+1}</span>
                        </div>
                        <div className="font-medium">{event.title} <span className="text-teal-600">({event.date})</span></div>
                        <div className="text-sm text-gray-600">{event.description}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    default:
      return <div>Select a section to view content</div>;
  }
};

export const ContentPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("content");
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Parse the section from URL search params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
    }
  }, [location.search]);
  
  const getSectionTitle = () => {
    switch (activeSection) {
      case "content": return "Module Content";
      case "objectives": return "Learning Objectives";
      case "exams": return "Exams & Grades";
      case "goodtoknow": return "Good To Know";
      default: return "Course Information";
    }
  };
  
  const getSectionIcon = () => {
    switch (activeSection) {
      case "content": return <ExternalLink className="h-5 w-5 text-purple-600" />;
      case "objectives": return <Target className="h-5 w-5 text-green-600" />;
      case "exams": return <FileText className="h-5 w-5 text-blue-600" />;
      case "goodtoknow": return <HelpCircle className="h-5 w-5 text-teal-600" />;
      default: return <Menu className="h-5 w-5" />;
    }
  };
  
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
          <h1 className="text-2xl font-semibold mb-6">Course Information</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { id: "content", label: "Module Content", icon: <ExternalLink className="h-4 w-4" />, color: "purple" },
              { id: "objectives", label: "Learning Objectives", icon: <Target className="h-4 w-4" />, color: "green" },
              { id: "exams", label: "Exams & Grades", icon: <FileText className="h-4 w-4" />, color: "blue" },
              { id: "goodtoknow", label: "Good To Know", icon: <HelpCircle className="h-4 w-4" />, color: "teal" }
            ].map(section => (
              <div 
                key={section.id} 
                className={`border p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 ${activeSection === section.id ? `border-${section.color}-500 bg-${section.color}-50` : 'border-gray-200'}`}
                onClick={() => setActiveSection(section.id)}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <span className="font-medium">{section.label}</span>
                </div>
              </div>
            ))}
          </div>
          
          {isMobile ? (
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    {getSectionIcon()}
                    <span>View {getSectionTitle()}</span>
                  </span>
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="flex items-center gap-2">
                    {getSectionIcon()}
                    {getSectionTitle()}
                  </DrawerTitle>
                </DrawerHeader>
                <ScrollArea className="h-[70vh] px-4">
                  <PageContent pageType={activeSection} />
                </ScrollArea>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    {getSectionIcon()}
                    <span>View {getSectionTitle()}</span>
                  </span>
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[min(90vw,800px)] sm:max-w-[min(90vw,800px)] overflow-auto">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    {getSectionIcon()}
                    {getSectionTitle()}
                  </SheetTitle>
                  <SheetDescription>
                    View detailed information about this section
                  </SheetDescription>
                </SheetHeader>
                <ScrollArea className="mt-6 h-[calc(100vh-10rem)]">
                  <PageContent pageType={activeSection} />
                </ScrollArea>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ContentPage;
