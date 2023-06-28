import { supabase } from "@/services/supabase";
import { Message } from "@/types/types";

export default {
  getMessages: async function (id: string): Promise<Message[] | undefined> {
    const { data, error } = await supabase
      .from("messages")
      .select()
      .eq("chat_id", id);
    if (error) {
      console.log({ errorGetMessages: error });
      return;
    }
    if (data) {
      return data;
    }
  },

  createNewMessage: async function ({
    chatId,
    message,
  }: {
    chatId: string;
    message: Message;
  }): Promise<Message[] | undefined> {
    console.log(message);
    const { data, error } = await supabase
      .from("messages")
      .insert([
        { chat_id: chatId, role: message.role, content: message.content },
      ])
      .select();

    if (error) {
      console.log({ errorInsertMessage: error });
    }
    if (data) {
      return data;
    }
  },
};
