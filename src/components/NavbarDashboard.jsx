import Link from 'next/link'
import React from 'react'
import {LuLayoutDashboard} from 'react-icons/lu'
import {RiGroupLine} from 'react-icons/ri'
import {VscGraph} from 'react-icons/vsc'
import {FiFilm} from 'react-icons/fi'
import {IoSettingsOutline} from 'react-icons/io5'
import {BiUserCircle} from 'react-icons/bi'
import {SlLock} from 'react-icons/sl'
import Image from "next/image";

export default function NavbarDashbord() {
    return (
        <aside className='bg-black z-50 w-[300px] h-[100vh] fixed overflow-auto max-sm:hidden block '>
            {/* logo */}
            <div className='flex justify-center items-center h-[130px] '>
                <Image width={'223'} height={'90'} className='' src="/assets/image/logo_white.png"
                       alt="logo not found"/>
            </div>
            <div className='flex justify-center'>
                <hr className='w-[259px] text-center'/>
            </div>
            <ul className='text-white mt-16 ml-6 uppercase text-sm'>
                <Link href="">
                    <li className='mb-5 hover:bg-gray-500 py-3 px-2 rounded-xl hover:text-blue-300 mr-2'>
                        <span className='inline-block mr-6 text-[26px]'><LuLayoutDashboard/></span>
                        Dashboard
                    </li>
                </Link>
                <Link href="">
                    <li className='mb-5 hover:bg-gray-500 py-3 px-2 rounded-xl hover:text-blue-300 mr-2'>
                        <span className='inline-block mr-6 text-[26px]'><RiGroupLine/></span>
                        User management
                    </li>
                </Link>
                <Link href="">
                    <li className='mb-5 hover:bg-gray-500 py-3 px-2 rounded-xl hover:text-blue-300 mr-1 '>
                        <span className='inline-block mr-6 text-[26px]'><VscGraph/></span>
                        Reporting and statistic
                    </li>
                </Link>
                <Link href="">
                    <li className='mb-5 hover:bg-gray-500 py-3 px-1 rounded-xl hover:text-blue-300 mr-2'>
                        <span className='inline-block mr-6 text-[26px]'><FiFilm/></span>
                        Toturial Management
                    </li>
                </Link>
                <a href="#">
                    <details className="collapse">
                        <summary className="hover:bg-gray-500 py-3 px-1 rounded-xl hover:text-blue-300 mr-2"><span
                            className='inline-block mr-6 text-[26px] '><IoSettingsOutline/></span>Setting
                        </summary>
                        <div className="collapse-content mt-[25px] ml-[25px]">
                            <li className='hover:bg-gray-500 py-3 px-1 rounded-xl hover:text-blue-300 mr-2 '><span
                                className='inline-block mr-[18px] text-[25px]'><BiUserCircle/></span> profile
                            </li>
                            <li className='hover:bg-gray-500 py-3 px-1 rounded-xl hover:text-blue-300 mr-2'><span
                                className='inline-block mr-[18px] text-[25px]'><SlLock/></span>change password
                            </li>
                        </div>
                    </details>
                </a>
            </ul>
        </aside>


    )
}