"use Client";
import { Disclosure } from '@headlessui/react';
import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi";

// import icons from react-icons
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
    MdLogout
} from "react-icons/md";   

import {BsFillBuildingsFill} from "react-icons/bs";
import {GiStaticGuard} from "react-icons/gi";
import { CgProfile} from "react-icons/cg";
import { FaRegComments} from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <div>
        <Disclosure as="nav">
            <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-gray-900">
                <GiHamburgerMenu 
                className="block md:hidden h-6 w-6" 
                aria-hidden="true"
                />
            </Disclosure.Button>
            <div className='p-6 w-1/2 h-screen bg-white z-20 fixed top-0 left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
                <div className='flex flex-col justify-start items-center'>
                    <h1 className='text-base text-center cursor-pointer font-bold text-teal-600 border-b border-gray-300 pb-4 w-full'> GateKeeper Dashboard</h1>
                    <div className='my-4 border-b border-gray-100 pb-4'>
                        <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                            <MdOutlineSpaceDashboard className='text-2xl text-gray-600 group-hover:text-white' />
                            <h3 className='text-base text-gray-600 group-hover:text-white font-semibold'>
                                Dashboard
                            </h3>
                        </div>

                        <Link href={"/gatekeepers"} className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                            <GiStaticGuard className='text-2xl text-gray-600 group-hover:text-white' />
                            <h1 className='text-base text-gray-600 group-hover:text-white font-semibold'>
                                GateKeepers
                            </h1>
                        </Link>

                        <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                            <BsFillBuildingsFill className='text-2xl text-gray-600 group-hover:text-white' />
                            <h3 className='text-base text-gray-600 group-hover:text-white font-semibold'>
                                DataCenters
                            </h3>
                        </div>

                        <Link href={"/users"} className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                            <CgProfile className='text-2xl text-gray-600 group-hover:text-white' />
                            <h1 className='text-base text-gray-600 group-hover:text-white font-semibold'>
                                Entrants
                            </h1>
                        </Link>


                        <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                            <MdOutlineAnalytics className='text-2xl text-gray-600 group-hover:text-white' />
                            <h3 className='text-base text-gray-600 group-hover:text-white font-semibold'>
                                Analytics</h3>
                        </div>

                        <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                            <MdOutlineIntegrationInstructions className='text-2xl text-gray-600 group-hover:text-white' />
                            <h3 className='text-base text-gray-600 group-hover:text-white font-semibold'>
                                Integrations</h3>
                        </div>

                        <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                            <BiMessageSquareDots className='text-2xl text-gray-600 group-hover:text-white' />
                            <h3 className='text-base text-gray-600 group-hover:text-white font-semibold'>
                                Messages</h3>
                        </div>
                        </div>

                        {/* Settings and more */}

                        <div className='my-4 border-b border-gray-100 pb-4 max-w-full'>
                            <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                                <MdOutlineSettings className='text-2xl text-gray-600 group-hover:text-white' />
                                <h3 className='text-base text-gray-600 group-hover:text-white font-semibold'>
                                    Settings
                                </h3>
                            </div>

                            <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                                <MdOutlineMoreHoriz className='text-2xl text-gray-600 group-hover:text-white' />
                                <h3 className='text-base text-gray-600 group-hover:text-white font-semibold'>
                                    More
                                </h3>
                            </div>

                        </div>

                        {/* Logout section */}

                        <div className='my-4 w-full'>
                        <div className='flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                                <MdLogout className='text-2xl text-gray-600 group-hover:text-white' />
                                <h3 className='text-base text-gray-600 group-hover:text-white font-semibold'>
                                    Logout
                                </h3>
                            </div>


                        </div>

                    
                </div>
            </div>
        </Disclosure>
    </div>
  )
}
