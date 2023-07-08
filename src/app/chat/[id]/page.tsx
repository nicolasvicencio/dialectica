"use client";
import { ChatBubble, Container, InputComponent, TopBar } from "@/components";
import { useGlobalStore } from "@/store/store";
import { Message } from "@/types/types";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";

type Props = {};

export default function page({}: Props) {
  const pathName = usePathname();
  const [messages, setMessages] = useState<Message[] | null>([]);
  const id = pathName.split("/").reverse()[0];
  const { getMessages } = useGlobalStore();

  useEffect(() => {
    getMessages(id).then((res) => setMessages(res!));
  }, []);

  if (!messages)
    return (
      <Container>
        <main className="pattern-background h-screen w-screen flex justify-center items-center">
          <DotLoader color="hsla(168, 67%, 53%, 1)" />
        </main>
      </Container>
    );

  return (
    <Container>
      <main className="pattern-background h-screen w-full flex flex-col ">
        <TopBar />
        <section className="p-6 max-h-[85%] h-screen w-full  flex flex-col gap-4 overflow-y-auto overflow-x-hidden ">
          {messages.map((message, i) => {
            if (i !== 0) {
              return <ChatBubble key={message.id} message={message} />;
            }
          })}
        </section>
        <div>
          <InputComponent />
        </div>
      </main>
    </Container>
  );
}
