"use client"
import FakeDataTable from "@/components/FakeDataTableListOfReq"
import WatermarkDataComponent from "@/components/datatable/WatermarkDTtable"
import Link from "next/link"
import React from "react"

export default function Page() {
	return (
		<div className='w-full p-5 mx-auto db-bg h-full dark:bg-primary'>
			{/* header section */}
			<div className='db-bg dark:bg-primary sticky top-20 z-40'>
				<h1
					className={
						"text-[32px] text-light dark:text-white font-semibold mb-5"
					}
				>
					Report And Statistic
				</h1>
				{/* breadcrumbs */}
				<div className='text-sm breadcrumbs mb-3'>
					<ul className='font-extralight text-light dark:text-white'>
						<li>
							<Link href={"/admin/dashboard"}>Admin</Link>
						</li>
						<li>
							<Link href={"/admin/dashboard/tutorialmanagement"}>
								Report And Statistic
							</Link>
						</li>
						<li>
							<Link href={"/admin/dashboard/tutorialmanagement/listofrequest"}>
								Watermark Overview
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* end of header section */}

			<main className="h-screen">

				<WatermarkDataComponent />
			
			</main>
		</div>
	)
}
