'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddUser() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !role || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, role, password }),
    });
      
    if (res.ok) {
      router.push("/");
    }else {
      throw new Error("Failed to create a user");
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className='mt-8'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
         onChange={(e) => setFullName(e.target.value)}
         value={fullName}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Full Name'        
        />
        
        <input 
         onChange={(e) => setEmail(e.target.value)}
         value={email}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Email'        
        />

        <input 
         onChange={(e) => setRole(e.target.value)}
         value={role}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Role'        
        />

        <input
         onChange={(e) => setPassword(e.target.value)}
         value={password}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Password'        
        />

        <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>
            Add user
        </button>

    </form>
    </div>
  )
}
