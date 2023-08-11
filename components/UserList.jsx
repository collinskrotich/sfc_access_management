import React from 'react'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'
import Link from 'next/link'

const getUsers = async () => {
    try{
        const res = await fetch('http://localhost:3000/api/users',
        {
        cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch users!");
        }
        return res.json();
    }
    catch(error) {
        console.log("Error loading users:", error);
    }   
}


async function UserList() {

    const { rusers } = await getUsers();

  return (
    <>
    {rusers.map((t) => (
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold'>{t.fullname}</h2>
            <h2>{t.email}</h2>
            <h2>{t.role}</h2>

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