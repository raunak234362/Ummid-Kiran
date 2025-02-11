/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { account } from "../appwrite";

function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Check if user is already logged in
  useEffect(() => {
    const checkUserSession = async () => {
      try {
        await account.get();
        router.push("/admin"); // Redirect if already logged in
      } catch (err) {
        console.log("No active session found", err);
      } finally {
        setLoading(false);
      }
    };
    checkUserSession();
  }, [router]);

  const login = async (data) => {
    console.log(data);
    try {
      await account.createEmailPasswordSession(data.email, data.password);
      alert("Login successful!");
      router.push("/admin");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  if (loading) return <div className="h-screen flex justify-center items-center text-white">Loading...</div>;

  return (
    <div className="h-screen bg-gradient-to-b from-blue-gray-600 to-blue-600 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center font-bold mb-5 text-2xl">Login</h2>
        <form onSubmit={handleSubmit(login)} className="space-y-4">
          <div>
            <label className="block font-semibold">Email:</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-semibold">Password:</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded-lg"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
