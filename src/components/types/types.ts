import { LANGUAGES, ROLE } from "@/constants/constans";

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
  chat_id: string;
  content: string;
  role: typeof ROLE;
}
