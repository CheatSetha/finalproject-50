'use client'
import Image from "next/image"
import React from "react"
import BarChart from "../BarChart"
import SMSTracking from "../icon/SMSTracking"
import SmsNotification from "../icon/SmsNotification"
import { useTheme } from "next-themes"

export default function DashboardOverview() {
    const {theme}   = useTheme()
	return (
		<div className=' xl:h-screen h-full'>
			<div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
				{/*box 1*/}
				<div
					className={
						"bg-white shadow-sm   dark:bg-secondary flex flex-col mainround h-[168px] justify-center items-center dark:box-dark"
					}
				>
					<p className={"font-extralight text-light dark:text-white"}>
						Tutorial Views
					</p>
					<h2 className={"text-[40px] font-black text-light dark:text-white"}>
						96K
					</h2>
				</div>
				{/*box 2*/}
				<div
					className={
						"bg-white shadow-sm dark:bg-secondary col-span-1  lg:col-span-2  flex mainround h-[168px] justify-around items-center "
					}
				>
					<div>
						<p className={"font-extralight text-light dark:text-white"}>
							Average Users
						</p>
						<h2
									className={
										"font-black text-[32px] text-center text-light dark:text-white"
									}
								>
									7.9K
								</h2>
						
					</div>
					<div>
						<Image
							width={90}
							height={90}
							src={"/assets/icons/profile2user.svg"}
							className={"dark:invert"}
							alt={"2 user "}
						/>
					</div>
				</div>
				{/*box 3*/}
				<div
					className={
						"bg-white shadow-sm dark:bg-secondary col-span-1  lg:col-span-2  flex mainround h-[168px] justify-around items-center "
					}
				>
					<div>
						<p className={"font-extralight text-light dark:text-white"}>
							Unread Requests
						</p>
						<h2
									className={
										"font-black text-[32px] text-center text-light dark:text-white"
									}
								>
									7
								</h2>
						
					</div>
					<div className='col-start-1 col-end-3 row-span-2'>
						<SmsNotification  stroke={`${theme==='dark'?'white':'black'}`} />
					</div>
				</div>

				<div
					className={
						"bg-white shadow-sm dark:bg-secondary  lg:col-span-3 row-span-2 flex flex-col mainround h-[350px]  justify-center items-center "
					}
				>
					{/*<p className={'font-extralight'}>*/}
					{/*    Reports*/}
					{/*</p>*/}
					<div className={"w-full h-[90%] p-2.5 py-4 "}>
						<p
							className={
								"font-extralight text-center text-light dark:text-dark"
							}
						>
							Service usage charge (month)
						</p>
						<div className='flex w-full gap-x-32 items-center space-x-8'>
							<BarChart />
						</div>
					</div>
				</div>
				{/*box 5*/}
				<div
					className={
						"bg-white shadow-sm dark:bg-secondary col-span-1  lg:col-span-2  flex mainround h-[168px] justify-around items-center "
					}
				>
					<div>
						<p className={"font-extralight text-light dark:text-white"}>
							New Requests
						</p>
						<h2
									className={
										"font-black text-[32px] text-center text-light dark:text-white"
									}
								>
									70
								</h2>
						
					</div>
					<div className='col-start-1 col-end-3 row-span-2'>
						<SMSTracking  stroke={`${theme==='dark'?'white':'black'}`}/>
					</div>
				</div>
				{/*box 6*/}
       
				<div
					className={
						"bg-white shadow-sm dark:bg-secondary col-span-1  lg:col-span-2  flex mainround h-[168px] justify-around items-center "
					}
				>
					<div>
						<p className={"font-extralight text-light mb-4 dark:text-white"}>
							Traffic By Website
						</p>
						<div className='flex flex-col '>
							<div>
                            <span className='text-start dark:text-white mr-5'>Google</span>
							<progress
								className='progress progress-info w-56'
								value='10'
								max='100'
							></progress>{" "}
                            </div>
						
							<div>
                            <span className='text-start dark:text-white  mr-3'>YouTube</span>
							<progress
								className='progress progress-error w-56'
								value='40'
								max='100'
							></progress>{" "}
                            </div>
						
							<div>
                            <span className='text-start mr-10 dark:text-white'>Bing</span>
							<progress
								className='progress progress-primary w-56'
								value='70'
								max='100'
							></progress>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
