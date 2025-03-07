
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 w-full max-w-2xl mx-auto relative"
    >
      <div className="flex-1 flex relative">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-violet-400 hover:text-violet-500 hover:bg-violet-100/50 rounded-full z-10"
        >
          <Sparkles className="w-5 h-5" />
        </Button>
        
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tapez votre message ici..."
          className="flex-1 pl-12 pr-12 rounded-2xl border border-gray-200 bg-white shadow-sm focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-0"
          disabled={disabled}
        />
        
        <Button
          type="submit"
          disabled={!message.trim() || disabled}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-xl gradient-purple hover:opacity-90 shadow-md shadow-violet-500/20 transition-all hover:shadow-violet-500/30 h-8 w-8"
        >
          <Send className="w-4 h-4 text-white" />
        </Button>
      </div>
    </form>
  );
};
