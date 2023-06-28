"use client";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function ChatPage({}: Props) {
  const pathname = usePathname();
  const chat_id = pathname.split("/").reverse()[0];

  return (
    <div>
      <main className="patter-background h-full w-full">
        <h1></h1>
      </main>
    </div>
  );
}
