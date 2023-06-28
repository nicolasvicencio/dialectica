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
    if (data) {
      console.log(data);
    }
  },
  getChats: async function (): Promise<Chat[] | undefined> {
    const { data, error } = await supabase.from("chat").select();
    if (error) {
      console.log(error);
    }
    if (data) {
      return data;
    }
  },
};
