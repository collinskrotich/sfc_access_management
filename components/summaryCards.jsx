import React from 'react';

const SummaryCards = () => {
    return (
      <div className='grid lg:grid-cols-6 gap-4 py-12 pl-60'>
                <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold '>9</p>
                <p className='text-gray-600'>No of Users</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-4 rounded-lg'>
                <span>+20%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold '>34</p>
                <p className='text-gray-600'>No of accesses</p>
            </div>
            <p className='bg-red-200 flex justify-center items-center p-4 rounded-lg'>
                <span>-40%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold '>4</p>
                <p className='text-gray-600'>Data centres</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-4 rounded-lg'>
                <span>0%</span>
            </p>
        </div>
      </div>
)}

export default SummaryCards



