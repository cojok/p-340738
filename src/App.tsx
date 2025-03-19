
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import Overview from "./pages/Overview";
import NotFound from "./pages/NotFound";
import { EnrolledLearningPlan } from "./components/learning/EnrolledLearningPlan";
import ContentPage from "./pages/course/ContentPage";
import ObjectivesPage from "./pages/course/ObjectivesPage";
import ExamsPage from "./pages/course/ExamsPage";
import GoodToKnowPage from "./pages/course/GoodToKnowPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/learning-plan" element={<EnrolledLearningPlan />} />
            
            {/* Course Info Pages */}
            <Route path="/course/content" element={<ContentPage />} />
            <Route path="/course/objectives" element={<ObjectivesPage />} />
            <Route path="/course/exams" element={<ExamsPage />} />
            <Route path="/course/good-to-know" element={<GoodToKnowPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
