import React from "react"
import { RiUserShared2Line } from "react-icons/ri"
import { FcEditImage } from "react-icons/fc"
import { FiUsers } from "react-icons/fi"
import { AiOutlineRise } from "react-icons/ai"
import BarChart from "@/components/BarChart"
import Link from "next/link"
import DashboardOverview from "@/components/dashboard-component/DashboardOverview"
export default function page() {
	return (
		<div className=' db-bg h-full p-5   dark:bg-primary  rounded-md shadow'>
			<div className='sticky top-20 z-30 db-bg dark:bg-primary'>
					<h1 className='text-[32px] font-semibold dark:text-white mb-5'>
						Dashboard Overview
					</h1>
					<div className='text-[14px]  font-extralight text-gray-900 breadcrumbs dark:text-white'>
						<ul>
							<li>
								<Link href={"/admin/dashboard"}>Admin</Link>
							</li>
							<li>
								<Link href={"/admin/dashboard"}>dashboard overview</Link>
							</li>
						</ul>
					</div>
				</div>
			<main>
				<DashboardOverview />
				
			</main>
		</div>
	)
}
