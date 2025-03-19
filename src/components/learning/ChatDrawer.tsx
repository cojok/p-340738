
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { PenLine, ArrowRight, MessageSquare, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

interface Message {
  id?: string;
  content: string;
  role: "user" | "assistant";
  timestamp?: Date;
}

interface ApiRequestPayload {
  message: string;
  courseCode: string;
  conversationHistory: {
    role: "user" | "assistant";
    content: string;
  }[];
}

interface ChatDrawerProps {
  children: React.ReactNode;
  courseCode?: string;
}

const API_BASE_URL = "http://localhost:3000"; // Can be updated to the actual base URL

export const ChatDrawer: React.FC<ChatDrawerProps> = ({ children, courseCode = "c0a80121-7ac0-4e1c-9ab1-97f2e2b6598f" }) => {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! How would you like to adjust your learning plan?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToApi = async (messageText: string): Promise<string> => {
    setIsLoading(true);
    
    try {
      // Convert messages to the format expected by the API
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      
      const payload: ApiRequestPayload = {
        message: messageText,
        courseCode,
        conversationHistory
      };
      
      console.log("Sending to API:", payload);
      
      const response = await fetch(`${API_BASE_URL}/chat/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }
      
      const data = await response.json();
      console.log("API response:", data);
      
      // Return the bot's response message
      return data.content || data.message || "I'm not sure how to respond to that.";
    } catch (error) {
      console.error("Error calling chat API:", error);
      toast.error("Failed to send message. Please try again.");
      
      // Fallback responses for testing when API is not available
      const fallbackResponses: { [key: string]: string } = {
        "increase": "I've updated your plan to include more daily activities. Your new estimated completion date is now earlier. You can check your updated schedule on the learning plan page.",
        "decrease": "I've adjusted your plan to have fewer daily activities. Your estimated completion date has been updated. You can view the changes on your learning plan page.",
        "date": "I've optimized your learning schedule to match your desired completion date. The daily workload has been adjusted accordingly.",
        "exam": "Your exam preparation has been prioritized in the learning plan. I've added more practice sessions closer to your exam date.",
      };
      
      // Check for keywords in the user's message for fallback response
      const messageLower = messageText.toLowerCase();
      if (messageLower.includes("increase")) {
        return fallbackResponses.increase;
      } else if (messageLower.includes("decrease") || messageLower.includes("less")) {
        return fallbackResponses.decrease;
      } else if (messageLower.includes("date") || messageLower.includes("complete by")) {
        return fallbackResponses.date;
      } else if (messageLower.includes("exam") || messageLower.includes("test")) {
        return fallbackResponses.exam;
      }
      
      return "I'll help you adjust your learning plan. Could you specify what changes you'd like to make?";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      role: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    const messageText = inputValue; // Store the input value before clearing it
    setInputValue("");
    
    try {
      // Call API and get response
      const apiResponse = await sendMessageToApi(messageText);
      
      // Add assistant response
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        content: apiResponse,
        role: "assistant",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error handling message:", error);
    }
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
          {messages.map((message, index) => (
            <div 
              key={message.id || `msg-${index}`}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === "user" 
                    ? "bg-[#626293] text-white" 
                    : "bg-[#F1F0FB] text-[#303746]"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-[#F1F0FB] text-[#303746]">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                </div>
              </div>
            </div>
          )}
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
            disabled={isLoading}
          />
          <Button 
            onClick={handleSendMessage}
            size="icon"
            className="bg-[#626293] hover:bg-[#4e4e75] text-white"
            disabled={isLoading}
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
