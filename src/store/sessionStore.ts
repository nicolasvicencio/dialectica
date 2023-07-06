import { supabase, supabaseNextAuth } from "@/services/supabase";
import { SessionStoreType } from "@/types/types";
import { create } from "zustand";

export const useSessionStore = create<SessionStoreType>((set, get) => ({
  session: "",
  getSession: async function () {
    const { data, error } = await supabaseNextAuth.from("users").select();
    if (error) {
      console.log({ errorGetSession: error });
      return;
    }
  },
}));
