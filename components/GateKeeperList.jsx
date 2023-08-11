import React from 'react'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'
import Link from 'next/link'

const getGateKeepers = async () => {
    try{
        const res = await fetch('http://localhost:3000/api/gatekeepers',
        {
        cache: "no-store",
        });

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
    {gatekeepers.map((t, index) => (
    <div key={index}    className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
        <div>
            <h2 className='font-bold'>{t.name}</h2>
            <h2>{t.onDuty}</h2>
            <h2>Thika data center</h2>
            </div>
        <div className='flex gap-2'>
            <RemoveBtn/>
            <Link href={'/editGateKeeper/${t.id}'}>
                <HiPencilAlt size={24}/>
            </Link>
            </div> 
    </div>
    ))}
    </>

  )
}

export default GateKeeperList