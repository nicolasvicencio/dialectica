"use client";
import chatHelper from "@/helpers/chatHelper";
import { supabase } from "@/services/supabase";
import { Chat } from "@/types/types";
import { useEffect, useState } from "react";

export default function useChats(): {
  loading: boolean;
  chats: Chat[] | undefined;
} {
  const [loading, setLoading] = useState<boolean>(true);
  const [chats, setChats] = useState<Chat[] | undefined>();

  useEffect(() => {
    chatHelper.getChats().then((res) => {
      setChats(res);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    chats,
  };
}
