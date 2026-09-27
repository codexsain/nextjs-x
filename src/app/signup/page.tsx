"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios} from "axios";

export default function signupPage() {
  const [user , setUser] = React.useState({
    
    email: "",
    password: "",
    username: "",

  })

  const onSignup = async () => {

  }
  
   



return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create an Account
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Sign up to get started
          </p>
        </div>

        <form className="space-y-5">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="username">
               
               Username

            </label>

            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(e) => setUser({...user , username: e.target.value})}
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              Email
            </label>

            <input
              id="email"
              value={user.email}
              onChange={(e) => setUser({...user , email: e.target.value})}
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
              onChange={(e) => setUser({...user , password: e.target.value})}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Button */}
          <button
            onClick={onSignup}
            type="submit"
            className="w-full rounded-lg bg-black py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-black hover:underline">
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
}
