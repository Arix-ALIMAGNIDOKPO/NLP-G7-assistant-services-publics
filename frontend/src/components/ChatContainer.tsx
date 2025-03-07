
import { ChatMessage } from "@/components/ChatMessage";
import { useConversation } from "@/contexts/ConversationContext";
import { Loader2 } from "lucide-react";

export const ChatContainer = () => {
  const { messages, isLoading } = useConversation();

  return (
    <main className="flex-1 overflow-y-auto pt-28 pb-24">
      <div className="max-w-2xl mx-auto space-y-6 px-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isLoading && (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="h-6 w-6 text-violet-500 animate-spin" />
            <span className="ml-2 text-sm text-gray-500">L'IA réfléchit...</span>
          </div>
        )}
      </div>
    </main>
  );
};
