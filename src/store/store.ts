import { supabase, supabaseNextAuth } from "@/services/supabase";
import { Chat, StoreType } from "@/types/types";
import { create } from "zustand";
import useGPT from "@/hooks/useGTP";
import { API_URL, CONFIG_MESSAGES, ROLE } from "@/constants/constans";
import { useSessionStore } from "./sessionStore";
import { Session } from "next-auth";

export const useGlobalStore = create<StoreType>((set, get) => ({
  chats: [],
  messages: [],
  loading: false,
  navOpen: true,
  toogleNavOpen: () => {
    set((state) => ({ ...state, navOpen: !state.navOpen }));
  },
  getChats: async () => {
    set((state) => ({ ...state, loading: true }));
    const { data, error } = await supabase.from("chat").select();
    // .eq("user_id", session!.user.id);
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
          // user_id: session!.user.id,
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
      chat_id: chat.id!,
      message: parsedMessageContent,
    });

    const requestMessage = [...CONFIG_MESSAGES, parsedMessageContent];
    const response = await useGPT({ url: API_URL, body: requestMessage });
    const newMessage = await get().createNewMessage({
      chat_id: chat.id!,
      message: response,
    });

    if (newMessage) {
      get().getMessages(chat.id!);
      return newMessage[0];
    }
  },
  getMessages: async function (id: string) {
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
      return data;
    }
  },
  createNewMessage: async function ({ chat_id, message }) {
    const { data, error } = await supabase
      .from("messages")
      .insert([
        { chat_id: chat_id, role: message.role, content: message.content },
      ])
      .select();

    if (error) {
      console.log({ errorInsertMessage: error });
    }
    if (data) {
      get().getMessages(chat_id);
      return data;
    }
  },
  sendMessageToGPT: async function (chat_id: string) {
    const messages = get().messages;
    const parsedMessages = messages?.map((message) => ({
      role: message.role,
      content: message.content,
    }));

    const requestMessage = [...CONFIG_MESSAGES, ...parsedMessages];
    console.log(requestMessage);
    const response = await useGPT({ url: API_URL, body: requestMessage });

    if (response) {
      const gptMessage = {
        role: response.role,
        content: response.content,
      };
      get().createNewMessage({ chat_id: chat_id, message: gptMessage });
      get().getMessages(chat_id);
    }
  },
  getLastLine: async function (chat_id: string) {
    const { data, error } = await supabase
      .from("messages")
      .select("content")
      .eq("chat_id", chat_id);

    return data![data!.length - 1]?.content;
  },
}));
