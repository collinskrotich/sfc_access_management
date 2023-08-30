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
    currentDateTime.getMinutes() // Minutes
  }`;

  return (
  <div className='pl-60 flex justify-between pt-4'>

    <h2 className='text-xl'>{formattedDateTime} </h2>
    <div className='flex flex-row'>
      <div className='pr-2'>Hello Collins</div>
      <div className='relative'>
        <img className='w-10 h-10 rounded-full' src='avatar.jpg' alt='avatar' />
      </div>
    </div>

  </div>

  )
}

export default Header