export interface Chat {
  id?: string;
  created_at?: string;
  updated_at?: string;
  chat_name: string;
  target_language: string;
  user_id?: string;
}

export interface Message {
  id?: string;
  created_at?: string;
  chat_id?: string;
  content: string;
  role: string;
}

export interface OpenAIMessage {
  role: string;
  content: string;
}

export interface StoreType {
  chats: Chat[];
  messages: Message[];
  loading: boolean;
  navOpen: boolean;
  toogleNavOpen: () => void;
  getChats: () => Promise<void>;
  createNewChat: (chat: Chat) => Promise<void | Chat[]>;
  deleteChat: (id: string) => Promise<void>;
  configNewChat: (chat: Chat) => Promise<void | Message>;
  getMessages: (id: string) => Promise<void | Message[]>;
  createNewMessage: ({
    chat_id,
    message,
  }: {
    chat_id: string;
    message: Message;
  }) => Promise<void | Message[]>;
  sendMessageToGPT: (chat_id: string) => Promise<void>;
  getLastLine: (chat_id: string) => Promise<{ content: any }[] | null>;
}
