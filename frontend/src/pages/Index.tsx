
import { useState } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatContainer } from "@/components/ChatContainer";
import { ChatFooter } from "@/components/ChatFooter";
import { ChatHistory } from "@/components/ChatHistory";
import { ConversationProvider } from "@/contexts/ConversationContext";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ConversationProvider>
      <div className="flex flex-col h-screen">
        <ChatHistory 
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        
        <ChatHeader onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <ChatContainer />
        <ChatFooter />
      </div>
    </ConversationProvider>
  );
};

export default Index;
