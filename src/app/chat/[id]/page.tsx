"use client";
import { ChatBubble, InputComponent, TopBar } from "@/components";
import useMessages from "@/hooks/useMessages";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { PacmanLoader } from "react-spinners";

type Props = {};

export default function page({}: Props) {
  const pathName = usePathname();
  const id = pathName.split("/").reverse()[0];
  const searchParams = useSearchParams();
  const chat_name = searchParams.get("chat_name");
  const target_language = searchParams.get("target_language");
  const { loading, messages } = useMessages(id);

  if (loading)
    return (
      <main className="pattern-background h-screen w-screen flex justify-center items-center">
        <PacmanLoader className="text-sky-400" />
      </main>
    );
  return (
    <main className="pattern-background h-screen w-full flex flex-col  ">
      <TopBar chat_name={chat_name!} target_language={target_language!} />
      <section className="p-5 h-full w-full  flex flex-col">
        {messages &&
          messages.map((message) => <ChatBubble message={message} />)}
      </section>
      <div>
        <InputComponent />
      </div>
    </main>
  );
}
