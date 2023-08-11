import React from 'react'

function EditUserForm() {
  return (
    <div className='mt-8'>  
    <form className='flex flex-col gap-3'>
        <input 
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Employee Name'        
        />
        
        <input 
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Employee EK No'        
        />

        <input 
         className='border border-slate-500 px-8 py-2'
         type='text'
         placeholder='Employee National ID'        
        />

        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit text-center'>
            Update Employee
        </button>

    </form>
    </div>
  )
}

export default EditUserForm