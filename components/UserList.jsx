
import React, { useState, useEffect } from 'react';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';

async function getUsers() {
  try {
    const res = await fetch('/api/users', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch users!');
    }
    return res.json();
  } catch (error) {
    console.log('Error loading users:', error);
    throw error; // Re-throw the error to handle it at a higher level
  }
}

function UserList() {
  const [rusers, setRUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setRUsers(data.rusers);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <>
      {rusers.map((t) => (
        <div key={t._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
          <div>
            <h2 className='font-bold'>{t.fullName}</h2>
            <h2>{t.email}</h2>
            <h2>{t.role}</h2>
          </div>
          <div className='flex gap-2'>
            <RemoveBtn />
            <Link href={`/editUser/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default UserList;
