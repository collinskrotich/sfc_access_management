'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineTrash } from 'react-icons/hi';

export default function RemoveBtn( {id} ) {
  const router = useRouter();
  
  const removeUser = async () => {
    const confirmed = confirm("Are you sure?");

    if(confirmed) {
      const res = await fetch(`/api/users?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok){
        router.refresh();     
      }
    }
  };
    
  return (
    <button onClick={removeUser} className='text-red-400'>
        <HiOutlineTrash size={24}/>
    </button>
    )
  
}
