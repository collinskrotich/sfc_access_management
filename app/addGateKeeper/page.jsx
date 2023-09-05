'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react'
import React from 'react'

export default function AddGateKeeper() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [staffNo, setStaffNo] = useState("");
  const [station, setStation] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !phone || !station || !staffNo) {
      setError("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/gatekeepers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, phone, staffNo, station }),
    });

    if (res.ok){
    router.push("/");
    }else {
      throw new Error("Failed to create a gatekeeper");
    }
    
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelClick = () => {
    // Redirect to the home page
    router.push('/gatekeepers');
  };

  return (
    <div className='grid place-items-center h-screen'>
    <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
        <h1 className='text-xl font-bold my-4'>
            New Visitor
        </h1>  
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
         onChange={(e) => setName(e.target.value)}
         value={name}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Guard Full Name'        
        />
        
        <input 
         onChange={(e) => setPhone(e.target.value)}
         value={phone}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Guard Phone No'        
        />

        <input 
         onChange={(e) => setStaffNo(e.target.value)}
         value={staffNo}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Guard Staff No'        
        />

        <input 
        onChange={(e) => setStation(e.target.value)}
        value={station}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Guard station'        
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
