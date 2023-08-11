import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-gray-400 text-white p-4 text-center'>
      <Link className='text-2xl font-semibold' href={"/"}>Dashboard</Link>
  </header>
  )
}

export default Header