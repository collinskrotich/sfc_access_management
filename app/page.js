"use client";
import Fab from '@/components/TopCards';
import Recents from '@/components/Recents';
import { Sidebar } from '@/components/Sidebar'
import SummaryCards from '@/components/summaryCards';
import LoginForm from '@/components/LoginForm';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Sidebar/>
      <Header />
      <Fab/>   
      <SummaryCards/>
      <Recents/>
      {/* <LoginForm/> */}
    </div>
  )
}