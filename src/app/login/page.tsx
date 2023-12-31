"use client";
import { RegisterForm } from "@/components";
import { supabase } from "@/services/supabase";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { ClipLoader } from "react-spinners";

export default async function page() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  async function signInWithGoogle() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://dialectica.vercel.app/main",
      },
    });
    if (error) {
      console.log(error);
      return;
    }
    if (data) {
      setLoading(false);
    }
  }

  async function singInWithGithub() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "https://dialectica.vercel.app/main",
      },
    });
    if (error) {
      console.log(error);
      return;
    }
    if (data) {
      setLoading(false);
    }
  }

  if (loading)
    return (
      <div className="pattern-background-2 h-screen w-screen flex justify-center items-center">
        <section className="bg-white p-10 w-[30%] rounded-md text-black flex-col flex gap-4 shadow-xl animate-fade-up ">
          <ClipLoader />
        </section>
      </div>
    );

  return (
    <div className="pattern-background-2 h-screen w-screen flex justify-center items-center">
      <section className="bg-white p-10 w-[30%] rounded-md text-black flex-col flex gap-4 shadow-xl animate-fade-up ">
        <RegisterForm />
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
          onClick={signInWithGoogle}
        >
          <FcGoogle className="w-7 h-7" /> Ingresa con Google
        </button>
      </section>
    </div>
  );
}
