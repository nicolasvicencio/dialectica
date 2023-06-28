import { Chat } from "@/components/types/types";
import { supabase } from "../services/supabase";

export default {
  createNewChat: async function (chat: Chat) {
    const { data, error } = await supabase.from("chat").insert([
      {
        chat_name: chat.chat_name,
        target_language: chat.target_language,
      },
    ]);
    if (error) {
      return;
    }
    if (data) {
      return data;
    }
  },
  getChats: async function (): Promise<Chat[] | undefined> {
    const { data, error } = await supabase.from("chat").select();
    if (error) {
      return;
    }
    if (data) {
      return data;
    }
  },
};
