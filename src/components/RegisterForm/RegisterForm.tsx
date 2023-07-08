import { supabase } from "@/services/supabase";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

type Props = {};

export default function RegisterForm({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function signInWithEmail(e: FormEvent) {
    e.preventDefault();
    supabase.auth
      .signInWithPassword({ email, password })
      .then(({ data, error }) => {
        if (error) {
          setError(error.message);
        }
      });
  }

  async function createEmailAccount(e: FormEvent) {
    e.preventDefault();
    supabase.auth.signUp({ email, password }).then(({ data, error }) => {
      if (error) {
        setError(error.message);
      }
      if (data) {
        setNewAccount(false);
      }
    });
  }

  return (
    <>
      <h3 className="text-gray-900 text-xl text-center">Ingresar </h3>
      <section className="flex flex-col gap-4">
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
        {!newAccount && (
          <button
            onClick={() => setNewAccount(true)}
            className="text-xs text-gray-600 self-end hover:text-gray-500"
          >
            Crear cuenta
          </button>
        )}{" "}
        <p className={`${error ? "text-red-400 text-center" : " hidden "}`}>
          {error}
        </p>
        {!newAccount ? (
          <button
            onClick={signInWithEmail}
            className="text-gray-500 hover:text-gray-700 border py-2 hover:bg-gray-200 rounded-md"
          >
            Ingresar
          </button>
        ) : (
          <button
            onClick={createEmailAccount}
            className="text-gray-500 hover:text-gray-700"
          >
            Crear Cuenta
          </button>
        )}
      </section>
    </>
  );
}
