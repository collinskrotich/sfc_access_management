import React from 'react'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'
import Link from 'next/link'


function GateKeeperList() {
  return (
    <>
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold'>Guard full name</h2>
            <h2>Guard staff number</h2>
            <h2>Guard station</h2>
            </div>
        <div className='flex gap-2'>
            <RemoveBtn/>
            <Link href={'/editGateKeeper/123'}>
                <HiPencilAlt size={24}/>
            </Link>
            </div> 
    </div>
    </>
  )
}

export default GateKeeperList