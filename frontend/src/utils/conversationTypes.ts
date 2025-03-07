import { Message } from "@/utils/types";

export interface Conversation {
  id: string;
  title: string;
  preview: string;
  timestamp: Date;
  messages: Message[];
  selected?: boolean;
}

export const initialMessage: Message = {
  id: "welcome",
  type: "assistant",
  content:
    "Bonjour ! Je suis votre assistant virtuel pour les services publics. Comment puis-je vous aider aujourd'hui ?",
  timestamp: new Date(),
};

export const initialConversation: Conversation = {
  id: "default",
  title: "Nouvelle conversation",
  preview: "Bonjour ! Je suis votre assistant virtuel...",
  timestamp: new Date(),
  messages: [initialMessage],
  selected: true,
};
