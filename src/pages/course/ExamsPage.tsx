
import React from "react";
import { Header } from "@/components/learning/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ExamsPage: React.FC = () => {
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
            <FileText className="h-6 w-6 text-blue-600 mr-2" />
            <h1 className="text-2xl font-semibold">Exams & Grades</h1>
          </div>
          
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
        </div>
      </ScrollArea>
    </div>
  );
};

export default ExamsPage;
