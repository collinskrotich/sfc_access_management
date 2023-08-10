"use client";
import Footer from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <Sidebar />     
      </div>

      <footer className='flex justify-center items-center w-full h-24 border-t'>
      <p>© 2023 - All Rights Reserved</p>
      </footer>
  </div>
  )
}