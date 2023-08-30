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
    }, 1000); // Update every 1 second

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
  } ${
    currentDateTime.getHours() // Hours
  }:${
    currentDateTime.getMinutes() // Minutes
  }:${
    currentDateTime.getSeconds() // Seconds
  }`;

  return (
  //   <header className='bg-gray-400 text-white p-4 text-center'>
  //     <Link className='text-2xl font-semibold' href={"/"}>GateKeeper Dashboard</Link>
  // </header>

  
  <div className='pl-60 flex justify-between pt-4'>

    <h2>{formattedDateTime} </h2>
    <div className='flex flex-row'>
      <div className='pr-2'>Welcome back, Collins</div>
    </div>

  </div>

  )
}

export default Header