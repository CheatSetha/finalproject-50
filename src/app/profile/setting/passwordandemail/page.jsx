'use client'
import React from "react";
import {useSession} from "next-auth/react";
import {IoIosArrowDropleft} from "react-icons/io";
import {SIdeSettingNav} from "@/components/SIdeSettingNav";

export default function Page() {
    const {data: session} = useSession()
    return (
        <div className="w-[90%] lg:w-[100%] mx-auto rounded-[16px] p-5 dark:bg-slate-800 bg-white">
            <h1 className="font-semibold text-[32px] dark:text-white max-sm:hidden mb-3">Password and Email</h1>
            <div className="max-sm:drawer md:hidden block ">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="drawer-button">
                        <h1 className="font-semibold mb-6 dark:text-white text-[32px]"><IoIosArrowDropleft
                            className={'inline mr-2.5'}/>
                            Password and Email</h1>
                    </label>
                </div>
                <SIdeSettingNav/>
            </div>
            <p className="font-light mb-3 dark:text-white ">{session ? session.user.email : "setha@photostad.co"}</p>
            <h2 className="text-[24px] font-semibold dark:text-white ">Change Password</h2>
            <div className="my-6">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-light text-gray-900 dark:text-white"
                >
                    Current password
                </label>
                <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300  w-full text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-light text-gray-900 dark:text-white"
                >
                    New Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-light text-gray-900 dark:text-white"
                >
                    Confirm new password
                </label>
                <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>
            <button className="btn-util mt-3  text-white">
                save change
            </button>
        </div>
    );
}
