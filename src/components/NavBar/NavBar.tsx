"use client";
import useChats from "@/hooks/useChats";
import Link from "next/link";
import React from "react";

type Props = {};

export default function NavBar({}: Props) {
  const { loading, chats } = useChats();

  return (
    <div className="min-h-screen hidden md:w-[25%] md:flex md:flex-col bg-white shadow-2xl">
      <header className="h-full ">
        <div className="flex gap-1 justify-around items-center  shadow-md py-6 px-6">
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
        <div className="bg-white h-full p-6 flex flex-col gap-4">
          {!loading &&
            chats &&
            chats.map((chat) => (
              <Link
                key={chat.id}
                href={`/chat/${chat.id}`}
                className="flex items-center gap-4 text-xs hover:bg-sky-200 p-2 px-4 rounded-full"
              >
                <div className="w-10 h-10 rounded-full bg-sky-600 flex justify-center items-center text-white font-bold text-xs">
                  En
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {chat.chat_name.toUpperCase()}
                  </h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing d
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
