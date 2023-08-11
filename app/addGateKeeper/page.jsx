import React from 'react'

function page() {
  return (
    <div className='mt-8'>

    
    <form className='flex flex-col gap-3'>
        <input 
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Guard Full Name'        
        />
        
        <input 
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Guard Staff No'        
        />

        <input 
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Guard station'        
        />

        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>
            Add Guard
        </button>

    </form>
    </div>
  )
}

export default page