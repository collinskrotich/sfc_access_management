"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <div className='flex-grow'>      
        <Sidebar />     
      </div>

     <Footer/>
  </div>
  )
}