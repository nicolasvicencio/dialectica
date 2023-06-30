"use client";
import { ChatBubble, InputComponent, TopBar } from "@/components";
import { useGlobalStore } from "@/constants/store/store";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { DotLoader } from "react-spinners";

type Props = {};

export default function page({}: Props) {
  const pathName = usePathname();
  const id = pathName.split("/").reverse()[0];
  const { loading, messages, getMessages } = useGlobalStore();

  useEffect(() => {
    getMessages(id);
  }, []);

  if (loading)
    return (
      <main className="pattern-background h-screen w-screen flex justify-center items-center">
        <DotLoader color="hsla(168, 67%, 53%, 1)" />
      </main>
    );

  return (
    <main className="pattern-background h-screen w-full flex flex-col  ">
      <TopBar />
      <section className="p-5 h-full w-full  flex flex-col gap-4">
        {messages &&
          messages.map((message, i) => {
            if (i !== 0) {
              return <ChatBubble key={message.id} message={message} />;
            }
          })}
      </section>
      <div>
        <InputComponent />
      </div>
    </main>
  );
}
