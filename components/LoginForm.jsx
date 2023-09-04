'use client'

import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                email,
                password,
                callbackUrl: '/dashboard'
            });

            // router.push('/dashboard')

            if(res.error) {
                setError("Invalid credentials");
                return;
            }
        } catch (error) {
            console.log(error)
            
        }
    }

  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold my-4'>
                Login Details
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <input 
                onChange={(e) => setEmail(e.target.value)}
                type='text' 
                placeholder='Email'
                />

                <input 
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Password'
                 />

                <button type='submit'
                className='bg-green-600 font-bold text-white py-2 px-6 text-center cursor-pointer'>
                    Login
                </button>

                { error && (
                    <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
                    {error}
                    </div>
        )}
            </form>

        </div>
    </div>
  )
}
