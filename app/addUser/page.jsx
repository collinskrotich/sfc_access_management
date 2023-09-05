'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddUser() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !role || !password) {
      setError("Please fill all fields");
      return;
    }

    try {

      const resUserExists = await fetch('api/userExists', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      })

      const { user } = await resUserExists.json();

      if (user) {
        setError("From the email, User already exists!")
        return;
      }

      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, role, password }),
    });
      
    if (res.ok) {
      const form = e.target;
      form.reset();
      router.push("/users")
      
    }else {
      throw new Error("Failed to create a user");
    }
  } catch (error) {
    console.log("Error during registration",error);
  }
};

const handleCancelClick = () => {
  // Redirect to the home page
  router.push('/users');
};

  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold my-4'>
                New User
            </h1> 
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

        { error && (
            <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
            {error}
            </div>
        )}

     <div className='flex justify-between'>
        <button type='button' onClick={handleCancelClick} className='bg-gray-500 text-white py-2 px-4 rounded'>
          Cancel
        </button>
        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded'>
          Submit
        </button>
      </div>

    </form>
    </div>
    </div>
  )
}
