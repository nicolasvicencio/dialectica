"use client";
import React, { FormEvent, useState } from "react";

type Props = {};

export default function InputComponent({}: Props) {
  const [message, setMessage] = useState<string>("");
  async function handleSumbit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div className="w-4/5 flex justify-center items-center absolute bottom-6 right-0 left-0">
      <form action="" className="flex gap-6" onSubmit={(e) => handleSumbit(e)}>
        <input type="text" placeholder="Write your message" className="" />
        <button type="submit" className="bg-white rounded-md p-2">
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
