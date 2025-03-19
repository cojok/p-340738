
import React from "react";
import { Header } from "@/components/learning/Header";
import { CourseInfo } from "@/components/learning/CourseInfo";

const Overview = () => {
  const weeks = [
    {
      week: 1,
      title: "Introduction to Social Policy",
      description: "This week introduces the fundamental concepts and history of social policy, exploring its evolution and importance in modern society."
    },
    {
      week: 2,
      title: "Basic Concepts",
      description: "Explore core theoretical frameworks and models that underpin social policy analysis and development."
    },
    {
      week: 3,
      title: "Welfare State Models",
      description: "Compare and contrast different welfare state models from around the world and their social, economic, and political implications."
    },
    {
      week: 4,
      title: "Policy Analysis Methods",
      description: "Learn analytical tools and methodologies used to evaluate social policy effectiveness and outcomes."
    },
    {
      week: 5,
      title: "Contemporary Challenges",
      description: "Address current social policy challenges including inequality, demographic changes, and technological disruption."
    },
    {
      week: 6,
      title: "Future Perspectives",
      description: "Explore emerging trends and future directions in social policy development and implementation."
    }
  ];

  return (
    <div className="bg-[rgba(243,243,247,1)] flex flex-col overflow-hidden items-center min-h-screen">
      <Header title="Sozialpolitik I" />
      <div className="w-full max-w-[1920px] px-[72px] max-md:px-5 py-12">
        <CourseInfo
          courseCode="SP01-QI"
          courseTitle="Sozialpolitik I"
          credits={5}
          status="Enrolled"
        />
        
        <div className="bg-white w-full p-10 rounded-[32px] mt-8 max-md:p-5">
          <h2 className="text-[#1D1B20] text-xl font-medium mb-6">Course Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeks.map((week) => (
              <div 
                key={week.week} 
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#E5F1FA] text-[#303746] px-3 py-1 rounded-full text-sm font-medium">
                    Week {week.week}
                  </div>
                </div>
                <h3 className="text-[#1D1B20] text-lg font-medium mb-2">{week.title}</h3>
                <p className="text-[#626293] text-sm">{week.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
