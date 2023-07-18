'use client'
import {useTheme} from "next-themes";
import React from "react";
import {IoIosArrowDropleft} from "react-icons/io";
import {SIdeSettingNav} from "@/components/SIdeSettingNav";

export default function Page() {
    const {theme, setTheme} = useTheme();
    //handle change theme on click


    return (
        <div className="w-[90%] mx-auto bg-white dark:bg-slate-800 p-5 rounded-[16px] ">
            <h1 className="font-semibold dark:text-white text-[32px] max-sm:hidden ">General Setting</h1>
            <div className="max-sm:drawer md:hidden block  ">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="drawer-button">
                        <h1 className="font-semibold  dark:text-white text-[32px]"><IoIosArrowDropleft
                            className={'inline mr-2'}/>
                            General Setting</h1>
                    </label>
                </div>
                <SIdeSettingNav/>
            </div>
            <p className="mt-5 font-light dark:text-white mb-3">Choose your langauge</p>
            <select className="select bg-white dark:bg-slate-400 dark:text-white select-bordered w-full max-w-xs">

                <option selected>Khmer</option>
                <option className="">English</option>
            </select>
            <h2 className="my-3 font-light dark:text-white ">Appearance </h2>
            <p className="mb-3 dark:text-white ">Customize your experience with our website by choosing between dark
                mode
                and light mode</p>
            <div className="flex space-x-5">
                <div className="cursor-pointer dark:text-white" onClick={() => setTheme('dark')}>
                    <div className="w-20 h-20 mb-2 bg-slate-400 rounded-[16px]">
                        <div className="rounded-[16px] p-2 w-16 h-16 relative top-4 left-4 bg-black">
                            <p className="text-white">ABC</p>
                        </div>
                    </div>
                    Dark Mode
                </div>
                <div className="cursor-pointer dark:text-white" onClick={() => setTheme('light')}>
                    <div className="w-20 h-20 bg-slate-400 mb-2 rounded-[16px]">
                        <div className="rounded-[16px] p-2 w-16 h-16 relative top-4 left-4 bg-white">
                            <p className="dark:text-black">ABC</p>
                        </div>
                    </div>
                    light Mode
                </div>
            </div>
            <button className="bg-red-400 mt-6 p-2.5 rounded-[16px] text-white">save change</button>

        </div>
    );
}
