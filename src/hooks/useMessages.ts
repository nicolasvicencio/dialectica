"use client";
import messagesHelper from "@/helpers/messagesHelper";
import { Message } from "@/types/types";
import { useEffect, useState } from "react";

export default function useMessages(chat_id: string): {
  loading: boolean;
  messages: Message[] | undefined;
} {
  const [loading, setLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[] | undefined>();

  useEffect(() => {
    messagesHelper.getMessages(chat_id).then((res) => {
      setMessages(res);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    messages,
  };
}
