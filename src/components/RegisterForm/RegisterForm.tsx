import { supabase } from "@/services/supabase";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

type Props = {};

export default function RegisterForm({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function createEmailAccount(e: FormEvent) {
    e.preventDefault();
    supabase.auth
      .signInWithPassword({ email, password })
      .then(({ data, error }) => {
        if (error) {
          setError(error.message);
        }
        if (data) {
          router.push("/home");
        }
      });
  }

  return (
    <>
      <h3 className="text-gray-900 text-xl text-center">Ingresar </h3>
      <form className="flex flex-col gap-4" onSubmit={createEmailAccount}>
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
          Ingresar/Registrarse
        </button>
      </form>
    </>
  );
}
