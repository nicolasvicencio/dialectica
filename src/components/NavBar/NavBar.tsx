"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { ChatNavItem } from "../ChatNavItem";
import { useGlobalStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { BiLogOutCircle } from "react-icons/bi";
import { supabase } from "@/services/supabase";

export default function NavBar() {
  const { chats, getChats, getSession, navOpen, toogleNavOpen } =
    useGlobalStore();
  const router = useRouter();

  async function logOut() {
    const { error } = await supabase.auth.signOut();
    error ? console.log(error) : router.push("/");
  }

  useEffect(() => {
    getSession().then((res) => {
      if (res.session) {
        getChats();
      }
    });
  }, []);

  return (
    <div
      className={`${
        !navOpen && "absolute top-0 left-0 z-40"
      } min-h-screen w-[10%] lg:max-w-fit min-w-fit lg:min-w-[20%] max-w-fit lg:static lg:w-[25%] lg:flex lg:flex-col bg-white shadow-2xl `}
    >
      <header className="h-full ">
        <div className="flex gap-4 items-center shadow-md py-4 px-6 border-b border-b-gray-300 border-r border-r-gray-300">
          <button onClick={toogleNavOpen} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
          <div
            className={`${
              navOpen && "hidden "
            } lg:relative lg:flex lg:justify-center lg:items-center  w-full h-full`}
          >
            <Link href={"/"}>
              <h1 className="tracking-widest font-semibold text-gray-500 text-center hover:text-gray-700">
                Dialectica
              </h1>
            </Link>
          </div>
        </div>
        <div className="bg-white min-h-full h-auto flex flex-col ">
          <Link
            href={`/createchat`}
            className="flex items-center gap-4 text-xs hover:bg-stone-200 p-2 px-4 transition-all"
          >
            <div className="w-10 h-10 rounded-full flex justify-center items-center text-gray-500 border-gray-500 border  text-xl">
              +
            </div>
            <div
              className={`${
                navOpen && "hidden "
              } lg:flex lg:justify-center lg:items-center text-gray-500 text-sm`}
            >
              <h3>Crear Chat</h3>
            </div>
          </Link>

          {chats &&
            chats.map((chat) => <ChatNavItem chat={chat} key={chat.id} />)}
        </div>
      </header>
      <button
        onClick={logOut}
        className="text-gray-800 py-4 px-2 hover:text-gray-600 flex gap-1 items-center justify-center"
      >
        <BiLogOutCircle />
        Cerrar Session
      </button>
    </div>
  );
}
