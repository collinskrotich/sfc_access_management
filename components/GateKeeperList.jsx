'use client'
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';

async function getGateKeepers() {
    try {
        const res = await fetch('/api/gatekeepers', {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch gatekeepers!');
        }
        return res.json();
    } catch (error) {
        console.error('Error loading gatekeepers:', error);
        throw error; // Re-throw the error to be caught higher up
    }
}

function GateKeeperList() {
  const [gatekeepers, setGateKeepers] = useState([]);
  const [error, setError] = useState(null); // Add an error state
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    getGateKeepers()
        .then((data) => {
            setGateKeepers(data.gatekeepers);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
      }, []);

      if (error) {
          return <div>Error loading gatekeepers: {error.message}</div>;
      }
      
 

  return (
      <>
          {loading ? (
              <p>Loading...</p>
          ) : (
              gatekeepers.map((t) => (
                  <div
                      key={t._id}
                      className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'
                  >
                      <div>
                          <h2 className='font-bold'>{t.name}</h2>
                          <h2>On Duty: {t.onDuty ? 'Yes' : 'No'}</h2>
                          <h2>Thika data center</h2>
                          <h2>Created at: {t.createdAt}</h2>
                      </div>
                      <div className='flex gap-2'>
                          <RemoveBtn />
                          <Link href={`/editGateKeeper/${t._id}`}>
                              <HiPencilAlt size={24} />
                          </Link>
                      </div>
                  </div>
              ))
          )}
      </>
  );
}

export default GateKeeperList;