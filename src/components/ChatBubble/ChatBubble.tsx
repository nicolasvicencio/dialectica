import { Message } from "@/types/types";
import parseDate from "@/utils/parseDate";
import React from "react";

type Props = {
  message: Message;
};

export default function ChatBubble({ message }: Props) {
  const { role } = message;
  const isUser = role === "user" ? true : false;
  return (
    <div
      className={`
       ${
         isUser ? "bg-sky-500 text-white self-end" : "bg-white text-gray-800"
       } p-4 text-sm  rounded-lg shadow-xl max-w-[40%]`}
    >
      <p>{message.content}</p>
      <span className="text-xs text-gray-500">
        {parseDate(message.created_at!)}
      </span>
    </div>
  );
}