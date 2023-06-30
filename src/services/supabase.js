import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

supabase
  .channel("custom-chats-channel")
  .on(
    "postgres_changes",
    { event: "*", schema: "plubic", table: "chat" },
    (payload) => {
      console.log(payload);
    }
  )
  .subscribe();
