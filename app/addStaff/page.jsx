'use client';

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddUser() {

  const [fullName, setFullName] = useState("");
  const [idNo, setIdNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [reason, setReason] = useState("");
  const [company, setCompany] = useState("Safaricom PLC");
  const [department, setDepartment] = useState("");
  const [accessGranted, setAccessGranted] = useState("");
  const [accessGrantedBy, setAccessGrantedBy] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !idNo || !phoneNo || !reason || !department || !accessGranted || !accessGrantedBy || !timeIn) {
      setError("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, idNo, phoneNo, reason, company, department, accessGranted, accessGrantedBy, timeIn }),
    });
      
    if (res.ok) {
      router.push("/");
    }else {
      throw new Error("Failed to create new access");
    }
  } catch (error) {
    console.log(error);
  }
};

const handleCancelClick = () => {
  // Redirect to the home page
  router.push('/');
};

const getCurrentTimestamp = () => {
  const now = new Date();
  return now.toLocaleString(); // You can format this as needed
};

useEffect(() => {
  // Set the initial value of 'timeIn' to the current timestamp when the component mounts
  setTimeIn(getCurrentTimestamp());
}, []);


  return (
    <div className='grid place-items-center h-screen'>
    <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
        <h1 className='text-xl font-bold my-4'>
            New Staff Access
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
         onChange={(e) => setIdNo(e.target.value)}
         value={idNo}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Staff ID'        
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
          readOnly
          value={company}
          className='border border-slate-500 px-8 py-2'
          type='text'
          placeholder='Safaricom PLC'
        />


        <input
         onChange={(e) => setDepartment(e.target.value)}
         value={department}
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Department'        
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

{ error && (
            <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
            {error}
            </div>
        )}

<     div className='flex justify-between'>
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
