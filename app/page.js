"use client";

import Fab from '@/components/TopCards';
import Recents from '@/components/RecentAccess';
import { Sidebar } from '@/components/Sidebar'
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  return (
    <div>
      {/* <Sidebar/>
      <Header />
      <Fab/>   
      <Recents/> */}
      <LoginForm/>
    </div>
  )
}