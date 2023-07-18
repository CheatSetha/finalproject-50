"use client"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import SettingIcon from "./icon/SettingIcon"
import { useTheme } from "next-themes"

export const SIdeSettingNav = () => {
	const { theme, setTheme } = useTheme()

	return (
		<div className='drawer-side mt-[60px] z-50'>
			<label
				htmlFor='my-drawer'
				className='drawer-overlay'
			></label>
			<ul className='menu p-4 w-80 dark:bg-black h-full bg-base-200 text-base-content'>
				{/* Sidebar content here */}

				{/*<ul className='menu rounded-box'>*/}
				<li className='hover:bg-gray-300 dark:text-white hover:rounded-[16px]'>
					<Link href={"/profile/setting"}>
						<h1>
							{" "}
							<Image
								src={"/assets/icons/profile-circle.svg"}
								alt='arrow-circle-left'
								height={24}
								width={24}
								className='inline mr-2'
							/>{" "}
							Profile Management
						</h1>
					</Link>
				</li>
				<li>
					<details open>
						<summary
							className={
								"dark:hover:bg-gray-300 dark:text-white  hover:rounded-[16px] "
							}
						>
							<Link
								className=''
								href={"/profile/setting/generalsetting"}
							>
								{" "}
								<SettingIcon  stroke={theme === "dark" ? "white" : "black"} />
								<span className="ml-2.5">General setting</span>
							</Link>
						</summary>
						<ul>
							<li className='hover:bg-gray-300 dark:text-white  hover:rounded-[16px]'>
								<Link href={"/profile/setting/passwordandemail"}>
									Password and Email
								</Link>
							</li>
							<li className='hover:bg-gray-300 dark:text-white  active:text-white hover:rounded-[16px]'>
								<Link href={"/profile/setting/moreinfo"}>More information</Link>
							</li>
						</ul>
					</details>
				</li>
			</ul>
		</div>
	)
}
