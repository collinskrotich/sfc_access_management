"use client";
import { Sidebar } from '@/components/Sidebar'
import SummaryCards from '@/components/summaryCards';

export default function Home() {
  return (
    <div>
      <Sidebar/>
      <SummaryCards/>
    </div>
  )
}