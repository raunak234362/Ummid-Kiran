/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useForm } from "react-hook-form";
import { account, ID } from "../appwrite";
import { redirect } from "next/navigation";

function page() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const login = async (data) => {
      console.log(data)
        try {
          const session = await account.createEmailPasswordSession(data.email, data.password);
          redirect("/admin");
          alert("Login successful!");
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <div className="h-screen bg-gradient-to-b from-blue-gray-600 to-blue-600 mx-auto p-4">
      <div className="text-white text-center text-2xl font-bold py-4">
        Welcome Back to the Umeed Kiran Admin Portal
      </div>
      <div className="w-full flex h-full justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg w-5/12">
          <h2 className="text-center font-bold my-5 text-2xl">Login</h2>
          <form onSubmit={handleSubmit(login)} className="space-y-4">
            <div>
              <label>Email:</label>
              <input
                type="email"
                className="w-full border border-blue-gray-300 p-2 rounded-lg"
                {...register("email", { required: "Email is required" })}
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                className="w-full border border-blue-gray-300 p-2 rounded-lg"
                {...register("password", { required: "Password is required" })}
              />
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
    </div>
  )
}

export default page
