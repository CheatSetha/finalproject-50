'use client'
import Image from "next/image"
import Link from "next/link"
import React from "react"
import SettingIcon from "./icon/SettingIcon"
import { useTheme } from "next-themes"

export default function SettingNavMenu() {
    // call theme   
    const {theme} = useTheme()
    console.log(theme);
    return (
        <div className='w-[318px] max-sm:hidden  dark:bg-slate-800 dark:text-white bg-white rounded-[16px]  p-3'>
            <h3 className='text-base s'>
                <Image
                    src={"/assets/icons/arrow-circle-left.svg"}
                    alt='arrow-circle-left'
                    height={24}
                    width={24}
                    className='inline mr-2 dark:invert'
                />
                Back
            </h3>
            <section className='p-3 space-y-5 mt-10'>
                <ul className='menu rounded-box'>
                    <li className="hover:bg-gray-300 hover:rounded-[16px]">
                        <Link href={'/profile/setting'}>
                            <h1>
                                {" "}
                                <Image
                                    src={"/assets/icons/profile-circle.svg"}
                                    alt='arrow-circle-left'
                                    height={24}
                                    width={24}
                                    className='inline mr-2 dark:invert'
                                />{" "}
                                Profile Management
                            </h1>
                        </Link>
                    </li>
                    <li>
                        <details open>
                            <summary className={'dark:hover:bg-gray-300 hover:rounded-[16px] '}>
                                <Link className=""
                                      href={'/profile/setting/generalsetting'}>
                                   
                                   <SettingIcon  stroke={theme === 'dark'?'white': 'black'}/> <span className="inline ml-2.5"> General setting</span>
                                
                                </Link>
                            </summary>
                            <ul>
                                <li className="hover:bg-gray-300 hover:rounded-[16px]">
                                    <Link href={"/profile/setting/passwordandemail"}>Password and Email</Link>
                                </li>
                                <li className="hover:bg-gray-300 active:text-white hover:rounded-[16px]">
                                    <Link href={"/profile/setting/moreinfo "}>More information</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </section>
        </div>
    )
}
