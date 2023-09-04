"use client";

import { useSession } from 'next-auth/react';

import Fab from '@/components/TopCards';
import Recents from '@/components/RecentAccess';
import { Sidebar } from '@/components/Sidebar'
import Header from '@/components/Header';

export default function Home() {
    const {data: session, status } = useSession();
    console.log("DASHBOARD SESSION", session);
  return (
    <div>
      <Sidebar/>
      <Header />
      <Fab/>   
      <Recents/>
    </div>
  )
}