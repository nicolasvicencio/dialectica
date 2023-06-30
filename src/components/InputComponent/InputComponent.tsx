"use client";
import { ROLE } from "@/constants/constans";
import { useGlobalStore } from "@/constants/store/store";
import { useSearchParams } from "next/navigation";
import React, { FormEvent, useState } from "react";

type Props = {};

export default function InputComponent({}: Props) {
  const [message, setMessage] = useState<string>("");
  const searchParams = useSearchParams();
  const chat_id = searchParams.get("id");
  const { sendMessageToGPT, createNewMessage } = useGlobalStore();

  async function handleSumbit(e: FormEvent) {
    e.preventDefault();
    if (message === "") {
      return;
    }

    const newMessage = {
      role: ROLE.User,
      content: message,
    };

    const response = await createNewMessage({
      chatId: chat_id!,
      message: newMessage,
    });

    if (response) {
      sendMessageToGPT(chat_id!);
    }
  }

  return (
    <div className=" flex items-center">
      <form
        action=""
        className="flex gap-6 w-full px-6 pb-3"
        onSubmit={(e) => handleSumbit(e)}
      >
        <input
          type="text"
          placeholder="Write your message"
          onChange={(e) => setMessage(e.target.value)}
          className="w-full shadow-sm border border-stone-300"
        />
        <button type="submit" className="bg-white rounded-md p-2 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="tex-gray-400"
            className="w-6 h-6 gray-500"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
