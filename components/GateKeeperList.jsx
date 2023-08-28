import React from 'react'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'
import Link from 'next/link'

const getGateKeepers = async () => {
    try{
        const res = await fetch('http://localhost:3001/api/gatekeepers',
        
        {
        cache: "no-store",
        }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch gatekeeeper!");
        }
        return res.json();
        
    }
    catch(error) {
        console.log("Error loading gatekeepers:", error);
    }   
}


async function GateKeeperList() {

    const { gatekeepers } = await getGateKeepers();

  return (
    <>
    {gatekeepers.map((t) => (
    <div key={t._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold'>{t.name}</h2>
            <h2>On Duty: {t.onDuty ? 'Yes' : 'No'}</h2>
            <h2>Thika data center</h2>
            <h2>Created at: {t.createdAt}</h2>
            </div>
        <div className='flex gap-2'>
            <RemoveBtn/>
            <Link href={'/editGateKeeper/123'}>
                <HiPencilAlt size={24}/>
            </Link>
            </div> 
    </div>
    ))}
    </>
  )
}

export default GateKeeperList