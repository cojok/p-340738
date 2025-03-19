
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { PenLine, ArrowRight, MessageSquare, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  sender: "user" | "system";
  timestamp: Date;
}

interface ChatDrawerProps {
  children: React.ReactNode;
}

export const ChatDrawer: React.FC<ChatDrawerProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! How would you like to adjust your learning plan?",
      sender: "system",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate system response after a short delay
    setTimeout(() => {
      const systemResponses: { [key: string]: string } = {
        "increase": "I've updated your plan to include more daily activities. Your new estimated completion date is now earlier. You can check your updated schedule on the learning plan page.",
        "decrease": "I've adjusted your plan to have fewer daily activities. Your estimated completion date has been updated. You can view the changes on your learning plan page.",
        "date": "I've optimized your learning schedule to match your desired completion date. The daily workload has been adjusted accordingly.",
        "exam": "Your exam preparation has been prioritized in the learning plan. I've added more practice sessions closer to your exam date.",
      };
      
      // Check for keywords in the user's message to determine response
      let responseContent = "I'll help you adjust your learning plan. Could you specify what changes you'd like to make? Would you like to increase or decrease your daily workload, set a specific completion date, or focus on exam preparation?";
      
      const userMessageLower = inputValue.toLowerCase();
      if (userMessageLower.includes("increase")) {
        responseContent = systemResponses.increase;
      } else if (userMessageLower.includes("decrease") || userMessageLower.includes("less")) {
        responseContent = systemResponses.decrease;
      } else if (userMessageLower.includes("date") || userMessageLower.includes("complete by")) {
        responseContent = systemResponses.date;
      } else if (userMessageLower.includes("exam") || userMessageLower.includes("test")) {
        responseContent = systemResponses.exam;
      }
      
      const systemMessage: Message = {
        id: `system-${Date.now()}`,
        content: responseContent,
        sender: "system",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, systemMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Different content based on mobile or desktop
  const renderContent = () => (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#626293]" />
          <span>Edit Learning Plan</span>
        </h2>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === "user" 
                    ? "bg-[#626293] text-white" 
                    : "bg-[#F1F0FB] text-[#303746]"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            size="icon"
            className="bg-[#626293] hover:bg-[#4e4e75] text-white"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  // Use Sheet for desktop and Drawer for mobile
  return isMobile ? (
    <Drawer>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="h-[80vh]">
        {renderContent()}
      </DrawerContent>
    </Drawer>
  ) : (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-[400px] p-0 h-screen">
        {renderContent()}
      </SheetContent>
    </Sheet>
  );
};
