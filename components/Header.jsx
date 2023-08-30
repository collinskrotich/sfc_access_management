'use client'
import React, { useState, useEffect } from 'react';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Header = () => {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every 5 second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDateTime = `${
    currentDateTime.getDate() // Day
  }-${
    months[currentDateTime.getMonth()] // Month
  }-${
    currentDateTime.getFullYear() // Year
  } | ${
    currentDateTime.getHours() // Hours
  }:${
    currentDateTime.getMinutes().toString().padStart(2, '0')
  }:${
    currentDateTime.getSeconds().toString().padStart(2, '0') // Seconds
  }`;

  return (
  <div className='pl-60 flex justify-between pt-4'>

    <h2 className='text-xl'>{formattedDateTime} </h2>
    <div className='flex flex-row'>
      <div className='pr-4'>Hello Collins</div>
      <div className='relative pr-4'>
        <img className='w-8 h-8 rounded-full ' src='avatar.jpg' alt='avatar' />
        <span className="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
    </div>

  </div>

  )
}

export default Header