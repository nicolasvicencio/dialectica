"use client";
import { Chat } from "@/components/types/types";
import { LANGUAGES } from "@/constants/constans";
import chatHelper from "@/helpers/chatHelper";
import React, { FormEvent, useState } from "react";

type Props = {};

export default function CreatePage({}: Props) {
  const [chatName, setChatName] = useState<string>("");
  const [targetLanguage, setTargetLanguage] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (chatName === "" || targetLanguage === "") {
      setError("You have to fill all the fields");
      return;
    }

    const newChat = await chatHelper.createNewChat({
      chat_name: chatName,
      target_language: targetLanguage,
    });
  }

  return (
    <div className="pattern-background min-h-screen flex justify-center items-center animate-fade animate-once">
      <section className="bg-white rounded-xl w-[50%] p-6 py-10 shadow-2xl">
        <form
          action=""
          className="flex flex-col gap-8"
          onClick={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Chat Name</label>
            <input
              type="text"
              placeholder="ex: English practice"
              onChange={(e) => setChatName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="name">Language</label>
            <select
              name=""
              id=""
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              {LANGUAGES.map((el) => (
                <option key={el}>{el}</option>
              ))}
            </select>
          </div>
          <div className="h-4 text-center  ">
            {error && (
              <p className="p-2 text-red-400 text-md font-bold rounded-sm animate-fade-up animate-once animate-ease-linear">
                {error}
              </p>
            )}
          </div>
          <button type="submit" className="btn-primary mt-4">
            Create
          </button>
        </form>
      </section>
    </div>
  );
}
