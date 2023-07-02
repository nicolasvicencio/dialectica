"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pattern-background w-full min-h-screen">
      <section className="p-4 flex flex-col gap-10 items-center h-full py-6  text-gray-500 overflow-auto">
        <h1 className="font-bold text-7xl text-white text-center animate-fade  animate-ease-linear">
          Dialectica
        </h1>
        <article className="flex flex-col gap-6">
          <p className="bg-white p-4 rounded-xl max-w-[55%] animate-fade animate-delay-1000 animate-ease-linear">
            ¡Bienvenido a <b>Dialectica!</b> La plataforma en línea diseñada
            para ayudarte a practicar y mejorar tus habilidades en idiomas de
            una manera interactiva y efectiva. Ya sea que estés aprendiendo un
            nuevo idioma o deseas perfeccionar tus conocimientos existentes,
            nuestro innovador sistema de inteligencia artificial está aquí para
            ayudarte.
          </p>
          <p className="bg-white p-4 rounded-xl max-w-[55%] animate-fade animate-delay-[2000ms] animate-ease-linear">
            Dialectica te ofrece la oportunidad única de mantener conversaciones
            reales con una inteligencia artificial avanzada, capaz de comprender
            y corregir tus errores gramaticales y lingüísticos. A través de una
            experiencia de aprendizaje inmersiva, podrás practicar tus
            habilidades lingüísticas en un entorno seguro y sin miedo a cometer
            errores.
          </p>
          <p className="bg-yellow-100 p-4 rounded-xl max-w-[40%] self-end animate-fade animate-delay-[3000ms] animate-ease-linear ">
            Genial!
          </p>
          <Link
            href="/createchat"
            className="bg-white p-4 rounded-xl max-w-fit  animate-fade animate-delay-[4000ms] animate-ease-linear"
          >
            <h3>
              Haz click <b className="text-sky-800">Aqui! </b> para crear tu
              cuenta
            </h3>
          </Link>
        </article>
      </section>
    </main>
  );
}
