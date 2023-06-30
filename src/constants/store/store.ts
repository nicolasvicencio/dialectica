import { supabase } from "@/services/supabase";
import { Chat, Message, StoreType } from "@/types/types";
import { create } from "zustand";
import { CONFIG_MESSAGES, ROLE, API_URL } from "../constans";
import useGPT from "@/hooks/useGTP";

export const useGlobalStore = create<StoreType>((set, get) => ({
  chats: [],
  messages: [],
  loading: true,
  getChats: async () => {
    set((state) => ({ ...state, loading: true }));
    const { data, error } = await supabase.from("chat").select();
    if (error) {
      console.log({ errorGetChats: error });
      return;
    }
    if (data) {
      set((state) => ({
        ...state,
        chats: data,
        loading: false,
      }));
    }
  },
  createNewChat: async function (chat: Chat) {
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
      get().getChats();
      return data;
    }
  },
  deleteChat: async function (id: string) {
    const { error } = await supabase.from("chat").delete().eq("id", id);

    if (error) {
      console.log({ errorDeleteChat: error });
      return;
    }
    get().getChats();
  },

  // Config first message from chat

  configNewChat: async function (chat: Chat) {
    const parsedMessageContent = {
      role: ROLE.User,
      content: `{{ ${chat.target_language} }}`,
    };

    await get().createNewMessage({
      chatId: chat.id!,
      message: parsedMessageContent,
    });

    const requestMessage = [...CONFIG_MESSAGES, parsedMessageContent];
    const response = await useGPT({ url: API_URL, body: requestMessage });
    const newMessage = await get().createNewMessage({
      chatId: chat.id!,
      message: response,
    });

    if (newMessage) {
      get().getMessages(chat.id!);
      return newMessage[0];
    }
  },
  getMessages: async function (id: string) {
    set((state) => ({ ...state, loading: true }));
    const { data, error } = await supabase
      .from("messages")
      .select()
      .eq("chat_id", id);
    if (error) {
      console.log({ errorGetMessages: error });
      return;
    }
    if (data) {
      set((state) => ({
        ...state,
        messages: data,
        loading: false,
      }));
    }
  },
  createNewMessage: async function ({ chatId, message }) {
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
      get().getMessages(chatId);
      return data;
    }
  },
  sendMessageToGPT: async function (chat_id: string) {
    const messages = get().messages;

    const parsedMessages = messages?.map((message) => ({
      role: message.role,
      content: message.content,
    }));

    //@ts-ignore
    const requestMessage = [...CONFIG_MESSAGES, ...parsedMessages];
    const response = await useGPT({ url: API_URL, body: requestMessage });

    if (response) {
      console.log({ openairesponse: response });
    }
  },
}));