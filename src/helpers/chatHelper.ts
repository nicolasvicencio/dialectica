import { Chat } from "@/types/types";
import { supabase } from "../services/supabase";

export default {
  createNewChat: async function (chat: Chat): Promise<Chat[] | undefined> {
    const { data, error } = await supabase
      .from("chat")
      .insert([
        {
          chat_name: chat.chat_name,
          target_language: chat.target_language,
        },
      ])
      .select();

    if (error) {
      console.log({ errorInsertChat: error });
    }
    if (data) {
      return data;
    }
  },
  getChats: async function (): Promise<Chat[] | undefined> {
    const { data, error } = await supabase.from("chat").select();
    if (error) {
      console.log({ errorGetChats: error });
      return;
    }
    if (data) {
      return data;
    }
  },
  deleteChat: async function (id: string) {
    const { error } = await supabase.from("chat").delete().eq("id", id);

    if (error) {
      console.log({ errorDeleteChat: error });
      return;
    }
  },
};
