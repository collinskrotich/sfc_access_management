import React from 'react'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'
import Link from 'next/link'


function UserList() {
  return (
    <>
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold'>Employee name</h2>
            <h2>Employee EK number</h2>
            <h2>Employee National ID</h2>
            </div>
        <div className='flex gap-2'>
            <RemoveBtn/>
            <Link href={'/editUser/123'}>
                <HiPencilAlt size={24}/>
            </Link>
            </div> 
    </div>
    </>
  )
}

export default UserList