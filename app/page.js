"use client";
import Fab from '@/components/Fab';
import { Sidebar } from '@/components/Sidebar'
import SummaryCards from '@/components/summaryCards';

export default function Home() {
  return (
    <div>
      <Sidebar/>
      <Fab/>   
      <SummaryCards/>
    </div>
  )
}