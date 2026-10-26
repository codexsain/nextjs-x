"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function loginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({

    email: "",
    password: "",

  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const onLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();

    try {
      setLoading(true)
      const response = await axios.post("/api/users/login-b", user)
      console.log("login success", response.data)
      router.push("/profile")
      


    } catch (error: any) {
      console.log("login error", error.response.data.error )
    } finally {
      setLoading(false)
    }

  }



  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Log in to Your Account
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Log in  to get started
          </p>
        </div>

        <form onSubmit={onLogin} className="space-y-5">

          {/* Name */}


          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              Email
            </label>

            <input
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password"> Password </label>

            <input
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Button */}
          <button
            disabled={buttonDisabled}
            type="submit"
            className={`w-full rounded-lg py-3 text-sm font-medium transition-all duration-200 
    ${buttonDisabled
                ? 'bg-gray-300 text-gray-900 cursor-not-allowed opacity-75 shadow-none'
                : 'bg-black text-white hover:bg-gray-800 active:scale-[0.99] shadow-sm'
              }`}

          >
            {loading ? "Loading..." : "Log in"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="font-medium text-black hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}
