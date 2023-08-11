import React from 'react'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'
import Link from 'next/link'


function UserList() {
  return (
    <>
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5'>
        <div>
            <h2>Employee name</h2>
            <div>Employee number</div>
            </div>
        <div>
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