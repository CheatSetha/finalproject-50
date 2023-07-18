'use client'
import FakeDataTable from "@/components/FakeDataTableListOfReq"
import Link from "next/link"
import React from "react"


export default function Page() {





	return (
		<div className='w-full p-5 mx-auto db-bg h-full dark:bg-primary'>
			{/* header section */}
			<div className="db-bg dark:bg-primary sticky top-20 z-40">
			<h1
				className={"text-[32px] text-light dark:text-white font-semibold mb-5"}
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
						<Link href={'/admin/dashboard/tutorialmanagement'}>Tutorial Management</Link>
					</li>
					<li>
						<Link href={'/admin/dashboard/tutorialmanagement/unread'}>Unread</Link>
					</li>
				</ul>
			</div>
			</div>
			{/* end of header section */}

			<main>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
					{/* box 1 */}
					<div className='bg-white rounded-main shadow-sm dark:bg-secondary flex flex-col justify-center items-center h-[170px]'>
						<h2 className='font-light text-light dark:text-white '>
							Total Requests
						</h2>
						<h2 className='font-black text-[40px] text-light dark:text-white '>
							10
						</h2>
					</div>
					{/* box 2 */}
					<div className='bg-white rounded-main shadow-sm dark:bg-secondary flex flex-col justify-center items-center h-[170px]'>
						<h2 className='font-light text-light dark:text-white '>Readed</h2>
						<h2 className='font-black text-[40px] text-light dark:text-white '>
							10
						</h2>
					</div>
					{/* box 3 */}
					<div className='bg-white rounded-main shadow-sm dark:bg-secondary flex flex-col justify-center items-center h-[170px]'>
						<h2 className='font-light text-light dark:text-white '>Unread</h2>
						<h2 className='font-black text-[40px] text-light dark:text-white '>
							0
						</h2>
					</div>
				</div>

        <h1 className="font-semibold text-center text-[24px] my-14 dark:text-white">List of Requests Tutorial&#40; <span className="text-red-600">unread</span> &#41;  </h1>
        {/* react data table component */}
      <div className="h-screen">
	  <FakeDataTable />
	  </div>
			</main>
		</div>
	)
}
