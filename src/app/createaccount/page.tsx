"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

type Props = {};

export default function page({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const supabase = createClientComponentClient();

  async function singInWithGithub() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log({ errorGitHub: error });
    }
  }

  async function singInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.log({ errorGoogle: error });
    }
  }

  async function singInWithEmail(e: FormEvent) {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Tienes que completar todos los campos");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log({ errorEmail: error });
    }
  }

  return (
    <div className="pattern-background-2 h-screen w-screen flex justify-center items-center">
      <section className="bg-white p-10 rounded-md text-black flex-col flex gap-4 shadow-xl animate-fade-up ">
        <h3 className="text-gray-900 text-xl text-center">Registrarse</h3>
        <form className="flex flex-col gap-4" onSubmit={singInWithEmail}>
          <div className="flex flex-col gap-2  ">
            <label htmlFor="email" className="text-xs">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="Ingrese su email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="password" className="text-xs">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className={`${error ? "text-red-400 text-center" : " hidden "}`}>
            {error}
          </p>

          <button type="submit" className="text-gray-500 hover:text-gray-700">
            Registrarse
          </button>
        </form>
        <div className="flex gap-2 items-center ">
          <span className="h-[0.10rem] bg-gray-500 w-full"></span>
          <p className="text-gray-500">O</p>
          <span className="h-[0.10rem] bg-gray-500 w-full"></span>
        </div>
        <button
          onClick={singInWithGithub}
          className=" rounded-md text-gray-600 px-4 py-2  w-30 h-30  z-10 border border-gray-300 flex justify-center items-center gap-2 hover:bg-gray-200"
        >
          <AiFillGithub color="black" className="w-7 h-7" />
          Ingresa con GitHub
        </button>
        <button
          className=" rounded-md text-gray-600 px-4 py-2  w-30 h-30  z-10 border border-gray-300 flex justify-center items-center gap-2 hover:bg-gray-200"
          onClick={singInWithGoogle}
        >
          <FcGoogle className="w-7 h-7" /> Ingresa con Google
        </button>
      </section>
    </div>
  );
}
