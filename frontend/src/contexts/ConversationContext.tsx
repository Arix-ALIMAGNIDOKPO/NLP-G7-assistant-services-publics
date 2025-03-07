
import React, { createContext, useState, useContext, ReactNode } from "react";
import { Message } from "@/utils/types";
import { Conversation, initialMessage, initialConversation } from "@/utils/conversationTypes";
import { sendMessage } from "@/utils/apiService";
import { toast } from "sonner";

interface ConversationContextType {
  messages: Message[];
  isLoading: boolean;
  conversations: Conversation[];
  currentConversationId: string;
  handleSendMessage: (content: string) => Promise<void>;
  handleNewConversation: () => void;
  handleDeleteConversation: (id: string) => void;
  handleSelectConversation: (id: string) => void;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const ConversationProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([initialConversation]);
  const [currentConversationId, setCurrentConversationId] = useState("default");

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const currentConvo = conversations.find(c => c.id === currentConversationId);
    if (currentConvo) {
      const updatedConversations = conversations.map(c => {
        if (c.id === currentConversationId) {
          return {
            ...c,
            messages: [...c.messages, userMessage],
            preview: content,
            timestamp: new Date()
          };
        }
        return c;
      });
      setConversations(updatedConversations);
    }

    try {
      const data = await sendMessage(content);
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: data.response || data.answer || "Désolé, je n'ai pas pu comprendre votre requête.",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      
      const updatedConversations = conversations.map(c => {
        if (c.id === currentConversationId) {
          return {
            ...c,
            messages: [...c.messages, userMessage, assistantMessage],
            timestamp: new Date()
          };
        }
        return c;
      });
      setConversations(updatedConversations);
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API:", error);
      
      const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
      toast.error(`Impossible de communiquer avec l'IA: ${errorMessage}. Veuillez réessayer plus tard.`);
      
      const errorAssistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: "Désolé, je rencontre des difficultés techniques pour me connecter au serveur. Cela peut être dû à un problème de réseau ou à une maintenance temporaire. Veuillez réessayer dans quelques instants.",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorAssistantMessage]);
      
      const updatedConversations = conversations.map(c => {
        if (c.id === currentConversationId) {
          return {
            ...c,
            messages: [...c.messages, userMessage, errorAssistantMessage],
            timestamp: new Date()
          };
        }
        return c;
      });
      setConversations(updatedConversations);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewConversation = () => {
    const newId = Date.now().toString();
    const newConvo: Conversation = {
      id: newId,
      title: `Conversation ${conversations.length + 1}`,
      preview: "Nouvelle conversation",
      timestamp: new Date(),
      messages: [initialMessage],
      selected: true
    };
    
    const updatedConversations = conversations.map(c => ({
      ...c,
      selected: false
    }));
    
    setConversations([newConvo, ...updatedConversations]);
    setCurrentConversationId(newId);
    setMessages([initialMessage]);
    toast.success("Nouvelle conversation créée");
  };

  const handleDeleteConversation = (id: string) => {
    const isCurrentSelected = id === currentConversationId;
    
    const filteredConversations = conversations.filter(c => c.id !== id);
    
    if (isCurrentSelected && filteredConversations.length > 0) {
      filteredConversations[0].selected = true;
      setCurrentConversationId(filteredConversations[0].id);
      setMessages(filteredConversations[0].messages);
    }
    
    setConversations(filteredConversations);
    toast.success("Conversation supprimée");
  };

  const handleSelectConversation = (id: string) => {
    const selectedConvo = conversations.find(c => c.id === id);
    
    if (selectedConvo) {
      const updatedConversations = conversations.map(c => ({
        ...c,
        selected: c.id === id
      }));
      
      setConversations(updatedConversations);
      setCurrentConversationId(id);
      setMessages(selectedConvo.messages || [initialMessage]);
      toast.success("Conversation chargée");
    }
  };

  const value = {
    messages,
    isLoading,
    conversations,
    currentConversationId,
    handleSendMessage,
    handleNewConversation,
    handleDeleteConversation,
    handleSelectConversation
  };

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (context === undefined) {
    throw new Error("useConversation must be used within a ConversationProvider");
  }
  return context;
};
