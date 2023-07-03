import { supabase } from "@/services/supabase";
import { SessionStoreType } from "@/types/types";
import { create } from "zustand";

export const useSessionStore = create<SessionStoreType>((set, get) => ({
  session: null,
  getSession: async function () {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.log({ errorGetSession: error });
      return;
    }
    if (data) {
      set((state: any) => ({ ...state, session: data }));
    }
  },
  authStateChanged: async function () {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      set((state: any) => ({ ...state, session: session }));
    });

    return () => subscription.unsubscribe();
  },
}));
