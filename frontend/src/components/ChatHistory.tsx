
import { Button } from "@/components/ui/button";
import { ChevronLeft, Clock, Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useConversation } from "@/contexts/ConversationContext";

interface ChatHistoryProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ChatHistory = ({
  isOpen,
  onToggle,
}: ChatHistoryProps) => {
  const { 
    conversations, 
    handleSelectConversation, 
    handleNewConversation, 
    handleDeleteConversation 
  } = useConversation();

  return (
    <div
      className={cn(
        "glass-effect fixed h-full top-0 overflow-hidden transition-all duration-300 ease-in-out z-20",
        isOpen ? "left-0 w-80" : "-left-80 w-80"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-semibold text-lg bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
            Historique
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
        
        <div className="p-4">
          <Button 
            onClick={handleNewConversation}
            className="w-full bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white shadow-md"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nouvelle conversation
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-2 px-3 space-y-2">
          {conversations.map((convo) => (
            <div
              key={convo.id}
              className={cn(
                "p-3 rounded-xl cursor-pointer elastic-hover message-transition",
                convo.selected
                  ? "bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-200"
                  : "hover:bg-gray-100"
              )}
              onClick={() => handleSelectConversation(convo.id)}
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-sm truncate pr-2">{convo.title}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteConversation(convo.id);
                  }}
                >
                  <Trash2 className="h-3 w-3 text-gray-400" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 truncate">{convo.preview}</p>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <Clock className="h-3 w-3 mr-1" />
                {convo.timestamp.toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
