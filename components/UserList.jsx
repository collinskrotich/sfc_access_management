"use client";

import React, { useEffect, useState } from 'react'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'
import Link from 'next/link'

// const getUsers = async () => {
//     try{
//         const res = await fetch('/api/users',
//         {
//         cache: "no-store",
//         });

//         if (!res.ok) {
//             throw new Error("Failed to fetch users!");
//         }
//         return res.json();
//     }
//     catch(error) {
//         console.log("Error loading users:", error);
//     }   
// }


function UserList() {

    // const { rusers } = await getUsers();

    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      };
  
      fetchUsers();
    }, []);

  return (
    <>
    {users.map((user) => (
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        
        <div>
            <h2 className='font-bold' key={user.id}>{user.fullname}</h2>
            <h2>{user.email}</h2>
            <h2>{user.role}</h2>
        </div>

        <div className='flex gap-2'>

            <RemoveBtn/>
            <Link href={'/editUser/123'}>
                <HiPencilAlt size={24}/>
            </Link>

        </div> 

    </div>
    ))}
    </>
    
  )
}

export default UserList