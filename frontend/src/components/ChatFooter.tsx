
import { ChatInput } from "@/components/ChatInput";
import { useConversation } from "@/contexts/ConversationContext";

export const ChatFooter = () => {
  const { handleSendMessage, isLoading } = useConversation();

  return (
    <div className="glass-effect fixed bottom-0 left-0 right-0 p-4 z-10">
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
};
