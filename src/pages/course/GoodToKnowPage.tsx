
import React from "react";
import { Header } from "@/components/learning/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, BookOpen, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const GoodToKnowPage: React.FC = () => {
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
            <HelpCircle className="h-6 w-6 text-teal-600 mr-2" />
            <h1 className="text-2xl font-semibold">Good To Know</h1>
          </div>
          
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
        </div>
      </ScrollArea>
    </div>
  );
};

export default GoodToKnowPage;
