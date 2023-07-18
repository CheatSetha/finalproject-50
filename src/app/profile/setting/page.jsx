'use client'
import Image from "next/image";
import React from "react";
import {useSession} from "next-auth/react";
import {IoIosArrowDropleft} from 'react-icons/io'
import SettingNavMenu from "@/components/SettingNavMenu";
import Link from "next/link";
import {SIdeSettingNav} from "@/components/SIdeSettingNav";

export default function Page() {
    const {data: session} = useSession()
    return (<div className="bg-white dark:bg-slate-800 shadow-md w-[90%] mx-auto p-5 rounded-[16px]">
        {/* Page content here */}
        {/*<label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>*/}
        <div className="max-sm:drawer md:hidden block ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button">
                    <h1 className="font-semibold dark:text-white text-[32px]"><IoIosArrowDropleft
                        className={'inline'}/> Profile Setting</h1>
                </label>
            </div>
            <SIdeSettingNav/>

        </div>


        <h1 className="font-semibold max-sm:hidden dark:text-white text-[32px]">Profile
            Setting</h1>
        <h2 className="mt-5 font-light dark:text-white">Profile Information</h2>
        <section className="flex flex-wrap   mt-5">
            <div className={'max-sm:w-full'}>
                <div className="mb-6">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        last name
                    </label>
                    <input
                        placeholder="Enter your last name"
                        type="text"
                        id="username"
                        name="username"
                        // defaultValue={session ? session.user.name.split(' ')[0] : 'cheat setha'}
                        value={session ? session.user.name.split(' ')[0] : 'cheat setha'}
                        className="shadow-sm bg-[whitesmoke] w-full  text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-400 dark:focus:border-red-400 dark:shadow-sm-light"
                    />
                </div>
                <div class="mb-6">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white"
                    >
                        First name
                    </label>
                    <input
                        placeholder="Enter your first name"
                        type="text"
                        id="username"
                        name="username"
                        value={session ? session.user.name.split(' ')[1] : 'cheat setha'}
                        className="shadow-sm bg-[whitesmoke]   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                </div>

                <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Select your gender
                </label>
                <select
                    id="countries"
                    className="bg-[whitesmoke] md:mb-3  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected>gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <div className={'max-sm:w-full lg:ms-32 '}>
                <div className="pf-user mt-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-36 mb-2 mx-auto h-36 object-cover rounded-full"
                         src={session ? session.user.image : "https://flxt.tmsimg.com/assets/235135_v9_bb.jpg"}
                         alt="avarta"/>
                    <Image
                        src={"/assets/icons/camera.svg"}
                        alt='arrow-circle-left'
                        height={40}
                        width={40}
                        className='relative md:top-[-70px] top-[-60px] left-[280px] md:left-[250px] bg-[whitesmoke] p-1  border-white border-[3px]  rounded-full cursor-pointer'
                    />
                </div>
                <label

                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Bio
                </label>
                <textarea
                    className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-400 h-28 dark:focus:border-red-400 dark:shadow-sm-light bg-[whitesmoke] w-full md:w-[400px] rounded-[16px]"></textarea>
            </div>


        </section>
        <button
            className="mainround p-2.5 hover:text-white hover:shadow-2xl hover:shadow-blue-600 hover:bg-[#23c483] hover:-translate-y-2 transform transition-all duration-300 ease-in-out
                                bg-[#E85854] hidden md:block text-white font-[35px] text-center py-2  rounded-[16px]  text-[17px">save
            change
        </button>
    </div>);
}
