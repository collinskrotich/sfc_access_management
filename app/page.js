"use client";
import Fab from '@/components/TopCards';
import Recents from '@/components/Recents';
import { Sidebar } from '@/components/Sidebar'
import SummaryCards from '@/components/summaryCards';

export default function Home() {
  return (
    <div>
      <Sidebar/>
      <Fab/>   
      <SummaryCards/>
      <Recents/>
    </div>
  )
}