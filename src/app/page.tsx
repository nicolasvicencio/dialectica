"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pattern-background flex justify-center items-center w-full min-h-screen">
      <section className="p-4 flex flex-col justify-between items-center h-full py-6">
        <h1 className="font-bold text-7xl text-white"></h1>
        <Link
          href="/createchat"
          className="rounded-xl p-2 bg-stone-900 opacity-40 font-semibold hover:bg-stone-700"
        >
          <h3>Create new chat to start to practice</h3>
        </Link>
      </section>
    </main>
  );
}
