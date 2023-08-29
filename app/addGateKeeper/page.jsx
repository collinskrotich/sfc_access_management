'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react'
import React from 'react'

export default function AddGateKeeper() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [staffNo, setStaffNo] = useState("");
  const [station, setStation] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !phone || !station || !staffNo) {
      alert("Please fill all fields");
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

  return (
    <div className='mt-8'>  
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

        <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>
            Add Guard
        </button>

    </form>
    </div>
  )
}
