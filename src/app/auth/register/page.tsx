"use client";
import { useState } from "react";
export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
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
    <main className="flex min-h-screen flex-col items-center justify-center px-11 lg:px-24 mx-auto">
      <div className="bg-white backdrop-blur-lg text-black p-10 flex flex-col rounded-2xl gap-4 w-full lg:w-fit">
        <h1 className="text-3xl font-sans font-bold text-center">
          Selamat Datang!
        </h1>
        <p className="text-center text-xs">
          Silahkan masukkan email, nama dan password anda
        </p>
        <form
          action=""
          className="flex flex-col w-full gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="rounded text-black px-3 py-1 bg-[#E8F0FE]"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nama" className="text-sm">
              Nama
            </label>
            <input
              type="text"
              name="name"
              className="rounded text-black px-3 py-1 bg-[#E8F0FE]"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="rounded text-black px-3 py-1 bg-[#E8F0FE]"
              onChange={handleChange}
            />
          </div>
          <button
            className="rounded bg-blue-500 px-3 py-2 text-white"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="flex justify-between">
          Sudah punya akun?{" "}
          <a href="/auth/login" className="text-blue-500">
            Masuk
          </a>
        </div>
      </div>
    </main>
  );
}
