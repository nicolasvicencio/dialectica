"use client";
import { useGlobalStore } from "@/store/store";
import { Chat } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

type Props = {
  chat: Chat;
};

export default function ChatNavItem({ chat }: Props) {
  const { navOpen, getLastLine } = useGlobalStore();
  const [lastLine, setLastLine] = useState<any>("");

  useEffect(() => {
    getLastLine(chat.id!).then((res) => setLastLine(res));
  }, []);

  return (
    <Link
      key={chat.id}
      href={{
        pathname: `/chat/${chat.id}`,
        query: {
          chat_name: chat.chat_name,
          target_language: chat.target_language,
          chat_id: chat.id,
        },
      }}
      className="flex items-center justify-between gap-4 text-xs hover:bg-stone-200 p-2 pl-4 transition-all "
    >
      <div className="w-10 min-w-fit min-h-fit h-10 rounded-full bg-sky-600 flex justify-center items-center text-white font-bold text-xs ">
        En
      </div>
      <div className={`${navOpen && "hidden "}  lg:block flex-grow`}>
        <h4 className="font-semibold text-sky-700 text-left">
          {chat.chat_name.toUpperCase()}
        </h4>
        <p className="text-gray-500 line-clamp-1  ">
          {lastLine ? (
            lastLine.slice(0, 33)
          ) : (
            <PulseLoader size={5} color={"#0284C7"} className="text-left" />
          )}
        </p>
      </div>
      <div className="hidden lg-block rounded-xl w-7 h-5 lg:flex lg:justify-center lg:items-center text-sky-600 font-bold lg:self-center">
        ⌥
      </div>
    </Link>
  );
}
