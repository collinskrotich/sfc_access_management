'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function EditUserForm({id, fullName, email, role }) {
    const [newFullName, setNewFullName] = useState(fullName);
    const [newEmail, setNewEmail] = useState(email);
    const [newRole, setNewRole] = useState(role);
    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(`/api/users/${id}`,
        {
          method: 'PUT',
          headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ newFullName, newEmail, newRole}),
      });

      if(!response.ok) {
        throw new Error('Failed to update user!');
      }

      router.refresh();
      router.push("/");
      
      } catch (error) {
        console.log(error)
      }
    };
   
  return (
    <div className='mt-8'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

        <input 
         onChange={(e) => setNewFullName(e.target.value)}
         value={newFullName}

         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Full Name'        
        />
        
        <input 
        onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}

         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Email'        
        />

        <input 
        onChange={(e) => setNewRole(e.target.value)}
          value={newRole}

         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Role'        
        />


        <button type='submit' className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>
            Update User
        </button>

        </form>
        </div>
  )
}

export default EditUserForm