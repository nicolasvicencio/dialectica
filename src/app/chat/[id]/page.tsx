"use client";
import useMessages from "@/hooks/useMessages";
import { usePathname } from "next/navigation";
import React from "react";
import { PacmanLoader } from "react-spinners";

type Props = {};

export default function page({}: Props) {
  const pathName = usePathname();
  const id = pathName.split("/").reverse()[0];
  const { loading, messages } = useMessages(id);

  if (loading)
    return (
      <main className="pattern-background h-screen w-screen p-10 flex justify-center items-center">
        <PacmanLoader className="text-sky-400" />
      </main>
    );
  return (
    <main className="pattern-background h-screen w-screen p-10">
      <h1>{id}</h1>
      {[0, 2, 3, 4, 5, 6, 7].map((el) => (
        <div className="bg-white p-4 text-gray-700 my-4 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          nihil.
        </div>
      ))}
    </main>
  );
}
