import Link from "next/link"
import React from "react"

export default function page() {
	return (
		<div className='w-full p-5 mx-auto db-bg h-full dark:bg-primary'>
			<div className='db-bg dark:bg-primary sticky top-20 z-40'>
				<h1
					className={
						"text-[32px] text-light dark:text-white font-semibold mb-5"
					}
				>
					Tutorial Management
				</h1>
				{/* breadcrumbs */}
				<div className='text-sm mb-3 breadcrumbs'>
					<ul className='font-extralight text-light dark:text-white'>
						<li>
							<Link href={"/admin/dashboard"}>Admin</Link>
						</li>
						<li>
							<Link href={"/admin/dashboard/tutorialmanagement"}>
								Tutorial Management
							</Link>
						</li>
						<li>
							<Link
								href={"/admin/dashboard/tutorialmanagement/seoconfiguration"}
							>
								Seo Configuration
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<form className='xl:h-screen h-full w-full'>
				<h1 className='font-semibold text-center text-[24px] my-14 dark:text-white'>
					Search Engine Optimization
				</h1>
				<div class='grid gap-10 p-5 mb-6 grid-cols-1  md:grid-cols-2'>
					<div>
						<div className='mb-7'>
							<label
								for='first_name'
								class='block mb-3 text-sm font-medium text-light dark:text-white'
							>
								Title
							</label>
							<input
								type='text'
								id='first_name'
								class='bg-white border border-gray-300 text-light text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='photostad'
								required
							/>
						</div>

						<div className='mb-7'>
							<label
								for='first_name'
								class='block mb-2 text-sm font-medium text-light dark:text-white'
							>
								Keywords
							</label>
							<input
								type='text'
								id='first_name'
								class='bg-white border border-gray-300 text-light text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='photostad'
								required
							/>
						</div>
						<div className='md:mb-0 mb-7'>
							<label
								for='first_name'
								class='block mb-3 text-sm font-medium text-light dark:text-white'
							>
								Thumbnail
							</label>
							<input
								type='file'
								className='file-input  w-full p2.5 h-[45px] border-gray-300 rounded-main focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
						</div>
					</div>
					<div>
						<div className='mb-7'>
							<label
								for='first_name'
								class='block mb-3 text-sm font-medium text-light dark:text-white'
							>
								Opengraph Title
							</label>
							<input
								type='text'
								id='first_name'
								class='bg-white border rounded-main  border-gray-300 text-light text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='photostad'
								required
							/>
						</div>
						<div className='mb-7'>
							<label
								for='first_name'
								class='block mb-3 text-sm font-medium text-light dark:text-white'
							>
								Opengraph Url
							</label>
							<input
								type='text'
								id='first_name'
								class='bg-white border rounded-main  border-gray-300 text-light text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='photostad'
								required
							/>
						</div>
						<div className='mb-7'>
							<label
								for='first_name'
								class='block mb-3 text-sm font-medium text-light dark:text-white'
							>
								Opengraph Type
							</label>
							<input
								type='text'
								id='first_name'
								class='bg-white border rounded-main  border-gray-300 text-light text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='photostad'
								required
							/>
						</div>
						<div className=''>
							<label
								for='first_name'
								class='block mb-3 text-sm font-medium text-light dark:text-white'
							>
								Opengraph Description
							</label>
							<input
								type='text'
								id='first_name'
								class='bg-white border rounded-main  border-gray-300 text-light text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='photostad'
								required
							/>
						</div>
					</div>
				</div>
				<div className='px-5 flex justify-end'>
					<button
						type='submit'
						class='text-white bg-black px-10 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-main text-sm  sm:w-auto  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}
