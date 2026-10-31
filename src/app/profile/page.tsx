"use client";
import axios from "axios";
import Link from "next/link";
// import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function profilePage() {
  const router = useRouter()
  const [data, setData] = useState("nothing");
  const logout = async () => {

    try {
      await axios.get('/api/users/logout-b')
      toast.success('Logout successful')
      router.push('/login')
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message)
    }
  }


  const getUserData = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data.data._id);
    setData(res.data.data.username)
  }
  
  console.log(data);

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2">

      <h1>Profile</h1>
      <hr />
      <h2 className="text-xl font-bold">{data === "nothing" ? "No data available" : <Link href={`profile/${data}`}>{data}</Link>}</h2>

      <button
        onClick={logout}
        className="bg-red-400  hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        logout
      </button>

      <button
        onClick={getUserData}
        className="bg-blue-400  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get User Data
      </button>

    </div>

  );
}