"use client";
import { useGlobalStore } from "@/store/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function TopBar() {
  const searchParams = useSearchParams();
  const chat_name = searchParams.get("chat_name");
  const target_language = searchParams.get("target_language");
  const chat_id = searchParams.get("chat_id");
  const router = useRouter();
  const { deleteChat } = useGlobalStore();

  function handleDelete() {
    router.push("/");
    deleteChat(chat_id!);
  }

  return (
    <div className="  w-full py-3 px-4  bg-white flex justify-between items-center shadow-md">
      <div className="flex flex-col items-start ">
        <h2 className="text-sm text-sky-800 font-semibold">{chat_name}</h2>
        <span className="text-gray-500 text-[0.7rem]">
          Target_language <b>{target_language}</b>
        </span>
      </div>
      <button onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#777"
          className="w-6 h-6 hover:bg-gray-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}
