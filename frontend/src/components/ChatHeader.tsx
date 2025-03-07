
import { Button } from "@/components/ui/button";
import { Bot, Menu } from "lucide-react";

interface ChatHeaderProps {
  onToggleSidebar: () => void;
}

export const ChatHeader = ({ onToggleSidebar }: ChatHeaderProps) => {
  return (
    <header className="glass-effect flex items-center justify-between p-4 z-10 fixed top-0 left-0 right-0">
      <div className="flex items-center gap-4 mx-auto max-w-2xl w-full">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggleSidebar}
          className="rounded-xl hover:bg-gray-100"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </Button>
        
        <div className="relative">
          <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center shadow-lg shadow-violet-500/20 ring-1 ring-white">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
        </div>
        <div>
          <h1 className="font-semibold text-lg bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Assistant Services Publics
          </h1>
          <p className="text-sm text-gray-500">En ligne</p>
        </div>
      </div>
    </header>
  );
};
