
import { Tab } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import {HiOutlineBellAlert} from 'react-icons/hi2';

async function getAccess() {
    try {
      const res = await fetch('/api/access', {
        cache: 'no-store',
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch accesses!');
      }
      return res.json();
    } catch (error) {
      console.log('Error loading accesses:', error);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }

export default function Recents () {
      const [access, setAccess] = useState([]);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        getAccess()
          .then((data) => {
            setAccess(data.access);
          })
          .catch((err) => {
            setError(err);
          });
      }, []);
    
      if (error) {
        return <div>Error loading accesses: {error.message}</div>;
      }  

  return (
    <div className="pl-60 pt-10">
        <h1 className='text-xl font-bold'>Recent Access</h1>
        <table class="table-auto min-w-full text-center text-sm font-light border-separate border border-slate-400 ...">
          
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
            <th class="border border-slate-300 ...">Full Name</th>
            <th class="border border-slate-300 ...">Staff ID / National ID</th>
            <th class="border border-slate-300 ...">Phone Number</th>
            <th class="border border-slate-300 ...">Reason for Access</th>
            <th class="border border-slate-300 ...">Company</th>
            <th class="border border-slate-300 ...">Department</th>
            <th class="border border-slate-300 ...">Access Granted</th>
            <th class="border border-slate-300 ...">Access Granted By</th>
            <th class="border border-slate-300 ...">Time In</th>
            </tr>
        </thead>

        <tbody>
            {access.map((order) => (
                        <tr key={order._id}>
                        <td class="border border-slate-300 ...">{order.fullName}</td>
                        <td class="border border-slate-300 ...">{order.idNo || order.staffNo}</td>
                        <td class="border border-slate-300 ...">{order.phoneNo}</td>
                        <td class="border border-slate-300 ...">{order.reason}</td>
                        <td class="border border-slate-300 ...">{order.company}</td>
                        <td class="border border-slate-300 ...">{order.department}</td>
                        <td class="border border-slate-300 ...">{order.accessGranted}</td>
                        <td class="border border-slate-300 ...">{order.accessGrantedBy}</td>
                        <td class="border border-slate-300 ...">{order.timeIn}</td>
                        </tr>
            ))}
        </tbody>
        </table>
    </div>
  )
}

