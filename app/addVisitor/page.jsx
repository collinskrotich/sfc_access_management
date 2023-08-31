'use client';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddVisitor() {

  const [fullName, setFullName] = useState("");
  const [idNo, setIdNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [reason, setReason] = useState("");
  const [company, setCompany] = useState("");
//   const [department, setDepartment] = useState("");
  const [accessGranted, setAccessGranted] = useState("");
  const [accessGrantedBy, setAccessGrantedBy] = useState("");
  const [timeIn, setTimeIn] = useState("");
//   const [timeOut, setTimeOut] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !idNo || !phoneNo || !reason || !company || !accessGranted || !accessGrantedBy || !timeIn ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, idNo, phoneNo, reason, company, accessGranted, accessGrantedBy, timeIn }),
    });
      
    if (res.ok) {
      router.push("/");
    }else {
      throw new Error("Failed to create new visitor access");
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
         placeholder='Visitor Full Name'        
        />
        
        <input 
         onChange={(e) => setIdNo(e.target.value)}
         value={idNo}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='ID Number'        
        />

        <input 
         onChange={(e) => setPhoneNo(e.target.value)}
         value={phoneNo}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Phone Number'        
        />

{/* fullName, idNo, phoneNo, reason, company, department, accessGranted, accessGrantedBy, timeIn, timeOut */}

        <input
         onChange={(e) => setReason(e.target.value)}
         value={reason}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Reason for access'        
        />

        <input
         onChange={(e) => setCompany(e.target.value)}
         value={company}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Affiliation/Company'        
        />

        <input
         onChange={(e) => setAccessGranted(e.target.value)}
         value={accessGranted}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Access Granted'        
        />

        <input
         onChange={(e) => setAccessGrantedBy(e.target.value)}
         value={accessGrantedBy}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Access Granted By'        
        />

        <input
         onChange={(e) => setTimeIn(e.target.value)}
         value={timeIn}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Time In'        
        />

        <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>
            Create 
        </button>

    </form>
    </div>
  )
}
