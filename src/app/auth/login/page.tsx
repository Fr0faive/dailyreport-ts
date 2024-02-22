"use client";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-24 mx-auto">
      <div className="bg-white text-black p-10 flex flex-col rounded-2xl gap-4">
        <h1 className="text-3xl font-sans font-bold text-center">
          Selamat Datang!
        </h1>
        <p className="text-center text-xs">
          Silahkan masukkan email dan password anda
        </p>
        <form
          action=""
          className="flex flex-col w-full gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="rounded text-black px-3 py-1 bg-[#E8F0FE]"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="rounded text-black px-3 py-1 bg-[#E8F0FE]"
              onChange={handleChange}
            />
          </div>

          <button
            className="rounded bg-blue-500 px-3 py-1 text-white"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between">
          Belum punya akun?{" "}
          <a href="/auth/register" className="text-blue-500">
            Daftar
          </a>
        </div>
      </div>
    </main>
  );
}
