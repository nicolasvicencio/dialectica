"use client";
import useChats from "@/hooks/useChats";
import Link from "next/link";
import React from "react";

type Props = {};

export default function NavBar({}: Props) {
  const { loading, chats } = useChats();

  return (
    <div className="min-h-screen hidden md:w-[25%] md:flex md:flex-col bg-white shadow-2xl ">
      <header className="h-full ">
        <div className="flex gap-1 justify-around items-center  shadow-md py-2 pb-3 px-6 border-b border-b-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <div className="relative flex justify-between items-center">
            <input type="text" placeholder="Search Chat" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-400 right-0  absolute pr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
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
            <div className="flex justify-center items-center text-gray-500 text-base">
              <h3>Create Chat</h3>
            </div>
          </Link>

          {!loading &&
            chats &&
            chats.map((chat) => (
              <Link
                key={chat.id}
                href={{
                  pathname: `/chat/${chat.id}`,
                  query: {
                    chat_name: chat.chat_name,
                    target_language: chat.target_language,
                  },
                }}
                className="flex items-center gap-4 text-xs hover:bg-stone-200 p-2 px-4 transition-all "
              >
                <div className="w-10 h-10 rounded-full bg-sky-600 flex justify-center items-center text-white font-bold text-xs">
                  En
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {chat.chat_name.toUpperCase()}
                  </h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor si Lorem ipsu....
                  </p>
                </div>
              </Link>
            ))}
        </div>
        )
      </header>
    </div>
  );
}
