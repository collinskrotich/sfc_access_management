import React from 'react'

function page() {
  return (
    <div className='mt-8'>

    
    <form className='flex flex-col gap-3'>
        <input 
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Full Name'        
        />
        
        <input 
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Email'        
        />

        <input 
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Role'        
        />

        <input 
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='User Password'        
        />

        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>
            Add user
        </button>

    </form>
    </div>
  )
}

export default page