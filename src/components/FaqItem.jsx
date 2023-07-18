'use client'
import React, { useState } from "react"
import { RiArrowRightSLine } from "react-icons/ri"

export default function FaqItem() {
    const [flipIcon, setFlipIcon] = useState(true)
    const handleFlipIcon = () =>{
        setFlipIcon(!flipIcon)

    }
	return (
		<div onClick={handleFlipIcon} className='collapse '>
			<input type='checkbox' />
			<div className='collapse-title text-xl dark:text-white '>
				<RiArrowRightSLine className={flipIcon? "inline text-[#031D7A] text-xl": "rotate-90 text-[#031D7A] text-xl inline"} /> Can I use my own custome image or logo as a
				watermark ?
			</div>
			<div className='collapse-content bg-gray-50 dark:bg-slate-500 dark:text-white p-3 px-7 rounded-[16px]'>
				<p className=''>
					Yes, You can upload and use your own custom image or logo as a
					watermark on our website.
				</p>
			</div>
		</div>
	)
}
