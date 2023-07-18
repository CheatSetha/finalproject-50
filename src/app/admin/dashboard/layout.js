"use client"
import { BtnThemeToggle } from "@/components/BtnThemeToggle"
import { useTheme } from "next-themes"
import Head from "next/head"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import React, { useEffect, useState } from "react"
import { CgMenuLeft } from "react-icons/cg"

export default function Layout({ children }) {
	;<Head>
		<link
			href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css'
			rel='stylesheet'
		/>
	</Head>
	// theme check on logo
	const { theme, setTheme } = useTheme()

	const [isOpen, setIsOpen] = useState(false)
	const handleSidebarOpen = () => {
		setIsOpen(!isOpen)
	}
	// handle click anywhere beside sidebar area set isOpen to false
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				document.getElementById("default-sidebar") &&
				!document.getElementById("default-sidebar").contains(event.target)
			) {
				setIsOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const handleDropdownOpen = () => {
		//click to remove hidden class and click again to add hidden class
		setIsDropdownOpen(!isDropdownOpen)
		if (isDropdownOpen) {
			document.getElementById("dropdown-example").classList.remove("hidden")
		} else {
			document.getElementById("dropdown-example").classList.add("hidden")
		}
		// check if dropdown-example or dropdown-example2 is hidden then remove hidden class else add hidden class
		// if click on dropdown-example2 then dropdown-example will be hidden and show dropdown-example2
		// and if click on dropdown-example then dropdown-example2 will be hidden and show dropdown-example and so on
	}
	// handle click on example-dropdown to show and hide if click on example-dropdown show example-dropdown not show example-dropdown2
	// but if click on example-dropdown2 show example-dropdown2 not show example-dropdown
	const [isDropdownOpen2, setIsDropdownOpen2] = useState(false)
	const handleDropdownOpen2 = () => {
		setIsDropdownOpen2(!isDropdownOpen2)
		if (isDropdownOpen2) {
			document.getElementById("dropdown2").classList.remove("hidden")
		} else {
			document.getElementById("dropdown2").classList.add("hidden")
		}
	}
	const [isDropdownOpen3, setIsDropdownOpen3] = useState(false)
	const handleDropdownOpen3 = () => {
		setIsDropdownOpen2(!isDropdownOpen2)
		if (isDropdownOpen2) {
			document.getElementById("dropdown3").classList.remove("hidden")
		} else {
			document.getElementById("dropdown3").classList.add("hidden")
		}
	}

	return (
		<div className='bg-light dark:bg-secondary'>
			{/* side ba */}
			<aside
				id='default-sidebar'
				className={`fixed   top-0 left-0 z-50  w-[300px]  h-screen transition-transform ${
					isOpen ? "" : "-translate-x-full"
				} sm:translate-x-0`}
				aria-label='Sidebar'
			>
				<div className='h-full px-3 pb-4 overflow-y-auto bg-black  dark:bg-secondary'>
					<div className='sticky z-50 top-0  bg-black  dark:bg-secondary'>
						<div className='w-full h-[130px] flex justify-center items-center'>
							<Image
								src={"/assets/image/mainlogov2.png"}
								width={170}
								height={80}
								alt='logo'
							/>
						</div>
						<hr className='bg-white w-full dark:bg-primary' />
					</div>
					<ul className='space-y-2 font-medium mt-10 text-white uppercase dark:text-dark'>
						<li>
							<Link
								href={"/admin/dashboard"}
								className='flex items-center p-2 mb-6 text-white rounded-lg dark:text-white hover:bg-secondary  dark:hover:bg-gray-700'
							>
								<Image
									className=''
									src={"/assets/icons/element-4.svg"}
									width={24}
									height={24}
									alt='element icon'
								/>

								<span className='ml-3'>Dashboard</span>
							</Link>
						</li>
						<li>
							<Link
								href={"/admin/dashboard/usermanagement"}
								className='flex items-center mb-6 p-2 text-white rounded-lg dark:text-white hover:bg-secondary  dark:hover:bg-gray-700'
							>
								<Image
									className=''
									src={"/assets/icons/profile-2user.svg"}
									width={24}
									height={24}
									alt='element icon'
								/>
								<span className='flex-1 ml-3 whitespace-nowrap'>
									user management
								</span>
							</Link>
						</li>
						
						<li>
							<button
								onClick={handleDropdownOpen3}
								type='button'
								class='flex items-center w-full mb-6 p-2 text-whitetransition duration-75 rounded-lg group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
							>
								<Image
									className=''
									src={"/assets/icons/chart-1.svg"}
									width={24}
									height={24}
									alt='element icon'
								/>
								<span className='ml-3 uppercase'>Report and statistic</span>
								<svg
									class='w-6 h-6'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
										clip-rule='evenodd'
									></path>
								</svg>
							</button>
							<ul
								id='dropdown3'
								class='hidden py-2 space-y-2 uppercase'
							>
								<li>
									<Link
										href={"/admin/dashboard/reportandstatistic"}
										class='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
									>
										Report and statistic
									</Link>
								</li>
								<li>
									<Link
										href={
											"/admin/dashboard/reportandstatistic/certificateoverview"
										}
										class='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
									>
										Certificate overview
									</Link>
								</li>
								<li>
									<Link
										href={
											"/admin/dashboard/reportandstatistic/watermarkoverview"
										}
										class='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
									>
										Watermark overview
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link href={"/admin/dashboard/tutorialmanagement"}>
								<button
									onClick={handleDropdownOpen}
									type='button'
									class='flex items-center w-full p-2 mb-5 text-gray-900 transition duration-75 rounded-lg group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
									aria-controls='dropdown-example'
									data-collapse-toggle='dropdown-example'
								>
									<Image
										className='  '
										src={"/assets/icons/video-horizontal.svg"}
										width={24}
										height={24}
										alt='element icon'
									/>
									<span className='flex-1 ml-3 uppercase whitespace-nowrap  font-medium text-white  hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'>
										tutorial management
									</span>
									<svg
										class='w-6 h-6'
										fill='white'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clip-rule='evenodd'
										></path>
									</svg>
								</button>
							</Link>
							<ul
								id='dropdown-example'
								class='hidden py-2 space-y-2 text-white'
							>
								<li>
									<Link
										href={"/admin/dashboard/tutorialmanagement/listofrequest"}
										class='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
									>
										list of request
									</Link>
								</li>
								<li>
									<Link
										href={"/admin/dashboard/tutorialmanagement/readedrequest"}
										class='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
									>
										reviewed requests
									</Link>
								</li>
								<li>
									<Link
										href={"/admin/dashboard/tutorialmanagement/unread"}
										class='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
									>
										unread request
									</Link>
								</li>
								<li>
									<Link
										href={
											"/admin/dashboard/tutorialmanagement/seoconfiguration"
										}
										class='flex items-center  w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
									>
										Seo configuration
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<button
								onClick={handleDropdownOpen2}
								type='button'
								class='flex items-center w-full p-2 text-whitetransition duration-75 rounded-lg group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
							>
								<Image
									className=''
									src={"/assets/icons/setting-2.svg"}
									width={24}
									height={24}
									alt='element icon'
								/>
								<span className='ml-3 uppercase'>setting</span>
								<svg
									class='w-6 h-6'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
										clip-rule='evenodd'
									></path>
								</svg>
							</button>
							<ul
								id='dropdown2'
								class='hidden py-2 space-y-2 uppercase'
							>
								<li>
									<Link
										href={"/admin/dashboard/setting/profile"}
										class='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
									>
										profile
									</Link>
								</li>
								<li>
									<Link
										href={"/admin/dashboard/setting/changepassword"}
										class='flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-secondary  dark:text-white dark:hover:bg-gray-700'
									>
										change password
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</aside>

			{/* end of side bar */}
			{/* nav bar */}

			<nav className='sticky  top-0 z-40 '>
				<div className='flex bg-white dark:bg-secondary items-center justify-between h-16 px-6 py-10   border-gray-200  '>
					<div className='flex items-center'>
						<button
							className='text-gray-500 rounded-md dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lg:hidden'
							onClick={handleSidebarOpen}
						>
							<span className='sr-only'>Open sidebar</span>
							<CgMenuLeft className='w-6 h-6' />
						</button>
					</div>
					<div className='flex space-x-3'>
						<BtnThemeToggle />
						<Image
							className='invert dark:invert-0'
							src={"/assets/icons/profile-2user.svg"}
							width={24}
							height={24}
							alt='element icon'
						/>
						<h1 className='dark:text-white'>Cheat Setha</h1>
					</div>
				</div>
			</nav>
			{/* children display */}
			<div className='sm:ml-[300px] dark:bg-primary'>{children}</div>

			<Script
				strategy={"beforeInteractive"}
				src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js'
			></Script>
		</div>
	)
}
