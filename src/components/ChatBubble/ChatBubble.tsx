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
         isUser
           ? "bg-yellow-100 text-gray-500 self-end animate-fade-left animate-ease-linear rounded-tr-none "
           : "bg-white text-gray-500  animate-fade-right animate-ease-linear rounded-tl-none "
       } p-2 px-3 text-xs  rounded-lg shadow-md md:max-w-[40%] max-w-[60%] w-fit`}
    >
      <p>{message.content}</p>
      <section className="flex justify-end">
        <span className="text-sx text-gray-400 hover:text-gray-500 cursor-default text-right bg-red">
          {parseDate(message.created_at!)}
        </span>
      </section>
    </div>
  );
}
