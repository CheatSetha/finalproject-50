"use client"
import { TutorialDatatable } from "@/components/TutorialDatatable"
import React from "react"



export default function Page() {
    return (
        <div className={"w-full p-5 mx-auto db-bg h-full  dark:bg-primary"}>
           <div className="db-bg dark:bg-primary sticky top-20 z-40" >
           <h1
                className={"text-[32px] text-light dark:text-white font-semibold mb-5"}
            >
                Tutorial Management
            </h1>
            {/* breadcrumbs */}
            <div className='text-sm breadcrumbs mb-3'>
                <ul className='font-extralight text-light dark:text-white'>
                    <li>
                        <a>Admin</a>
                    </li>
                    <li>
                        <a>Tutorial Management</a>
                    </li>
                </ul>
            </div>
           </div>
            <section>
          
                <div className="h-full xl:h-screen">
                    <TutorialDatatable />

       
                
                </div>
            </section>
        </div>
    )
}
