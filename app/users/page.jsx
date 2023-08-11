import UserList from '@/components/UserList'
import Link from 'next/link'
import React from 'react'

const Users = () => {
  return (
    <>
    <nav className='flex justify-between items-center bg-teal-500 px-8 py-3'>
      <Link className='text-white font-bold' href={"/"}>Home</Link>
      <Link className="bg-white p-2" href={"/addUser"}>Add User</Link>     
    </nav>
      <div>
        <UserList/>
      </div>
    </>
  )
}

export default Users