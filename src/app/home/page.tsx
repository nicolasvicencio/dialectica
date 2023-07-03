import { Container } from "@/components";
import Link from "next/link";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <Container>
      <main className="pattern-background w-full min-h-screen">
        <section className="p-4 flex flex-col gap-10 items-center justify-center h-full text-gray-700">
          <Link
            href="/createchat"
            className="bg-white p-4 rounded-xl max-w-fit  animate-fade animate-delay-[4000ms] animate-ease-linear hover:bg-stone-200 trainsition-all"
          >
            <h3>Crea una nueva conversación</h3>
          </Link>
        </section>
      </main>
    </Container>
  );
}
