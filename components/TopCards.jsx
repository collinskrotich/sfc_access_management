import Link from 'next/link';
import React from 'react'

const items = ["Thika data center", "Athi River", "Limuru", "SCC", "Konza"];


export default function TopCards() {
  return (
    <div className='pl-60 flex gap-3 pt-10'>
        <div className="GeneralAppWelcome w-190 h-72 pl-10 pr-6 py-6 bg-green-200 rounded-2xl justify-end items-center gap-6 inline-flex">
  <div className=" flex-col justify-start items-start gap-6 inline-flex">
    <div className=" flex-col justify-start items-start gap-2 flex">
      <div className="Welcomebackfabiana text-gray-800 text-2xl font-bold leading-9">Welcome back <br/>Admin User !</div>
      <div className="Ifyouaregoingto w-80 text-gray-800 text-sm font-normal leading-snug">Give access to staff and visitors</div>
    </div>
    <div className="Button px-4 py-1.5 bg-green-600 rounded-lg shadow justify-center items-center inline-flex">
      <Link href={"/addStaff"}  className="Text text-center text-white text-sm font-bold leading-normal">Staff Access</Link>
    </div>
    <div className="Button px-4 py-1.5 bg-yellow-600 rounded-lg shadow justify-center items-center inline-flex">
      <Link href={"/addVisitor"}  className="Text text-center text-white text-sm font-bold leading-normal">Visitor Access</Link>
    </div>
  </div>
  <div className="IllustrationSeo w-72 h-52 relative flex-col justify-start items-start flex">
    <div className="IllustrationShape01 w-72 h-52 opacity-20 justify-center items-center inline-flex" />
    <img className="Character12" src="illustration_seo.png" />
  </div>
</div>

<div className="GeneralBankingIncome w-72 h-72 bg-blue-300 rounded-2xl flex-col justify-start items-center inline-flex">
  <div className=" self-stretch p-6 justify-between items-start gap-6 inline-flex">
    <div className=" flex-col justify-start items-start gap-2 inline-flex">
      <div className="Totalactiveusers text-emerald-800 text-sm font-bold leading-snug">Guest Entrants</div>
      <div className="765 text-emerald-800 text-3xl font-bold leading-10">21</div>
      <div className=" justify-start items-center gap-1 inline-flex">
        <div className="IconIcTrendingUp w-5 h-5 relative" />
        <div className=" justify-start items-start flex">
          <div className="Totalactiveusers text-emerald-800 text-sm font-bold leading-snug">+20%</div>
          <div className="Totalactiveusers opacity-70 text-emerald-800 text-sm font-normal leading-snug"> than last month</div>
        </div>
      </div>
    </div>
    <div className=" p-3 bg-emerald-700 rounded-full shadow justify-start items-start flex">
      <div className="IconIcDiagonalArrowLeftDown w-6 h-6 relative" />
    </div>
  </div>
  <div className="ChartType w-72 h-28 pr-px justify-center items-center inline-flex">
    <div className=" w-72 h-28 relative">
    </div>
  </div>
</div>

<div className="GeneralBankingIncome w-72 h-72 bg-amber-400 rounded-2xl flex-col justify-start items-center inline-flex">
  <div className=" self-stretch p-6 justify-between items-start gap-6 inline-flex">
    <div className=" flex-col justify-start items-start gap-2 inline-flex">
      <div className="Totalactiveusers text-emerald-800 text-sm font-bold leading-snug">Staff entrants</div>
      <div className="765 text-emerald-800 text-3xl font-bold leading-10">45</div>
      <div className=" justify-start items-center gap-1 inline-flex">
        <div className="IconIcTrendingUp w-5 h-5 relative" />
        <div className=" justify-start items-start flex">
          <div className="Totalactiveusers text-emerald-800 text-sm font-bold leading-snug">+14%</div>
          <div className="Totalactiveusers opacity-70 text-emerald-800 text-sm font-normal leading-snug"> than last month</div>
        </div>
      </div>
    </div>
    <div className=" p-3 bg-emerald-700 rounded-full shadow justify-start items-start flex">
      <div className="IconIcDiagonalArrowLeftDown w-6 h-6 relative" />
    </div>
  </div>
  <div className="ChartType w-72 h-28 pr-px justify-center items-center inline-flex">
    <div className=" w-72 h-28 relative">
    </div>
  </div>
</div>

<div className="GeneralBankingIncome w-72 h-72 bg-amber-100 rounded-2xl flex-col justify-start items-center inline-flex pr-10">
  <div className=" self-stretch p-6 justify-between items-start gap-6 inline-flex">
    <div className=" flex-col justify-start items-start gap-2 inline-flex">
      <div className="Totalactiveusers text-yellow-800 text-sm font-bold leading-snug">Data centers</div>
      <div className="765 text-yellow-800 text-3xl font-bold leading-10">8</div>
      <div className=" justify-start items-center gap-1 inline-flex">
        <div className="IconIcTrendingDown w-5 h-5 relative" />
        <div className=" justify-start items-start flex">
          <div className="Totalactiveusers text-yellow-800 text-sm font-bold leading-snug">-</div>
          <div className="Totalactiveusers opacity-70 text-yellow-800 text-sm font-normal leading-snug"> 
          
          <ol>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ol>
        
        </div>
        </div>
      </div>
    </div>
    <div className=" p-3 bg-yellow-600 rounded-full shadow justify-start items-start flex">
      <div className="IconIcDiagonalArrowRightUp w-6 h-6 relative" />
    </div>
  </div>

  <div className="ChartType w-72 h-28 pr-px justify-center items-center inline-flex">
    <div className=" w-72 h-28 relative">
    </div>
  </div>
</div>

    </div>
  )
}
