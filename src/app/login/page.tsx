"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { account } from "../appwrite";

interface LoginFormInputs {
  email: string;
  password: string;
}

function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // Check if user is already logged in
  useEffect(() => {
    const checkUserSession = async (): Promise<void> => {
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

  const login: SubmitHandler<LoginFormInputs> = async (data) => {
    console.log(data);
    try {
      await account.createEmailPasswordSession(data.email, data.password);
      alert("Login successful!");
      router.push("/admin");
      //eslint-disable-next-line
    } catch (err: any) {
      console.error("Login failed:", err);
      if (err.response && err.response.message) {
        alert(`Login failed: ${err.response.message}`);
      } else {
        alert("Login failed. Please check your credentials.");
      }
    }
  };

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );

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
            {errors.email?.message && (
              <p className="text-red-500 text-sm">
                {String(errors.email.message)}
              </p>
            )}
          </div>

          <div>
            <label className="block font-semibold">Password:</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded-lg"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {String(errors.password.message)}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
