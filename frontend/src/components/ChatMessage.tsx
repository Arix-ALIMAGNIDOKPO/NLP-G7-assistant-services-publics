
import { Message } from "@/utils/types";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.type === "user";

  return (
    <div
      className={cn(
        "flex gap-4 group animate-message-fade-in elastic-hover",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-xl shadow-lg ring-1 ring-white/50",
          isUser 
            ? "gradient-purple shadow-violet-500/10" 
            : "gradient-purple shadow-violet-500/10"
        )}
      >
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>
      <div
        className={cn(
          "flex-1 p-4 transition-all message-transition relative",
          isUser
            ? "glass-effect rounded-2xl rounded-tr-lg shadow-lg shadow-violet-500/5"
            : "glass-effect rounded-2xl rounded-tl-lg shadow-lg shadow-violet-500/5"
        )}
      >
        <p className="text-sm leading-relaxed text-gray-700">{message.content}</p>
        <div className="mt-2 flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="text-xs text-gray-400">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};
