"use client";
import { useGlobalStore } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { getSession } = useGlobalStore();
  const router = useRouter();

  useEffect(() => {
    getSession().then((res) => {
      if (res.session) {
        router.push("/main");
      }
    });
  }, []);

  return (
    <main className="pattern-background-2 w-full min-h-screen overflow-y-auto ">
      <main className="flex flex-col-reverse items-center w-screen md:flex-row md:w-[80%] md:mx-auto min-h-full">
        <section className="flex flex-col justify-center p-6 md:w-1/2 gap-20">
          <div className="flex flex-col gap-4 animate-fade-right animate-ease-in">
            <h1 className="text-gray-900 text-2xl text-semibold">
              Dialectica, Utiliza la inteligencia artificial como tu compañero
              de idiomas!
            </h1>
            <p className="text-zinc-700">
              ¡Bienvenido a <b className="text-blue-700">Dialectica!</b> La
              plataforma en línea diseñada para ayudarte a practicar y mejorar
              tus habilidades en idiomas de una manera interactiva y efectiva.
              Ya sea que estés aprendiendo un nuevo idioma o deseas perfeccionar
              tus conocimientos existentes, nuestro innovador sistema de
              inteligencia artificial está aquí para ayudarte.
            </p>
            <div className="my-4">
              <Link
                href="/login"
                className="bg-blue-600 py-2 px-4 rounded-full hover:bg-white hover:text-blue-600 transition-all"
              >
                Ingresar!
              </Link>
            </div>
          </div>

          <nav className="flex flex-col md:flex-row gap-20">
            <div className="flex flex-col gap-4 animate-fade-right animate-delay-1000 animate-ease-in">
              <h3 className="text-semibold text-gray-800 text-xl">
                Mejora tus habilidades lingüísticas en mas de{" "}
                <b className="text-blue-700">15 idiomas!</b>
              </h3>
              <p className="text-zinc-700">
                Dialectica te ofrece la oportunidad única de mantener
                conversaciones reales con una inteligencia artificial avanzada,
                capaz de comprender y corregir tus errores gramaticales y
                lingüísticos.
              </p>
            </div>
            <div className="flex flex-col gap-4 animate-fade-right animate-delay-[2000ms] animate-ease-in">
              <h3 className="text-semibold text-gray-800 text-xl">
                Los errores <b className="text-blue-800">no importan!</b>{" "}
                practica cuando quieras y donde quieras!
              </h3>
              <p className="text-zinc-700">
                A través de una experiencia de aprendizaje inmersiva, podrás
                practicar tus habilidades lingüísticas en un entorno seguro y
                sin miedo a cometer errores.
              </p>
            </div>
          </nav>
        </section>
        <section className="flex justify-end items-center w-1/2 animate-fade-left animate-delay-[3000ms] animate-ease-in">
          <img src="/hero.png" alt="" className="pl-20 rounded-xl" />
        </section>
      </main>
    </main>
  );
}
