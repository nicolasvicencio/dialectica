import { Message } from "@/components/types/types";
import { supabase } from "@/services/supabase";

export default {
  getMessages: async function (id: string): Promise<Message[] | undefined> {
    const { data, error } = await supabase
      .from("messages")
      .select()
      .eq("chat_id", id);
    if (error) {
      console.log(error);
      return;
    }
    if (data) {
      return data;
    }
  },
};
