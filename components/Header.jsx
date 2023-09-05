'use client'

import { useSession } from 'next-auth/react';

import React, { useEffect, useState } from 'react';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

export default function Header() {
  const { data: session } = useSession();

  const currentDateTime = new Date(); // Get the current date and time

  const formattedDay = daysOfWeek[currentDateTime.getDay()];

  const [formattedDateTime, setFormattedDateTime] = useState(getFormattedDateTime);

    function getFormattedDateTime() {
      const currentDateTime = new Date();
      return `${
        currentDateTime.getDate()
      }-${
        months[currentDateTime.getMonth()]
      }-${
        currentDateTime.getFullYear()
      } | ${
        currentDateTime.getHours()
      }:${
        currentDateTime.getMinutes().toString().padStart(2, '0')
      }:${
        currentDateTime.getSeconds().toString().padStart(2, '0')
      }`;
    }

    useEffect(() => {
      const intervalId = setInterval(() => {
        setFormattedDateTime(getFormattedDateTime);
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);


  return (
    <div className='pl-60 flex justify-between pt-4'>

      <h2 className='text-xl'>{formattedDay}, {formattedDateTime} </h2>
      <div className='flex flex-row'>
        <div className='pr-4'>Hello {session?.user.role}</div>
        <div className='relative pr-4'>
          <img className='w-8 h-8 rounded-full ' src='avatar.jpg' alt='avatar' />
          <span className="absolute top-0 left-8 transform -translate-y-1/2 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </div>

    </div>
  );
}
