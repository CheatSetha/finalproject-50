import Link from "next/link"
import React from "react"

export default function page() {
	return (
		<div className='py-10 '>
			<div className='w-96 shadow-md mx-auto dark:bg-secondary rounded-main p-5'>
				<h1 className='dark:text-white font-bold text-2xl pb-3'>Tell us your Email</h1>
				<hr className="pb-2"/>
				<p className='dark:text-white mb-3'>
					Please enter your email to confirm your account.
				</p>

				<div class='mb-5'>
					<label
						for='default-input'
						class='block mb-2  text-sm font-medium text-gray-900 dark:text-white'
					>
						Email
					</label>
					<input
						type='text'
						id='default-input'
						class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					/>
				</div>
                <Link href={"/resetpassword"}>
				<button type="button" class="text-white rounded-main bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium px-10 text-sm py-2.5 text-center mr-2 mb-2">Send</button>
				</Link>
			</div>
		</div>
	)
}
