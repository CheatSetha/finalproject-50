"use client"
import React from "react"
import * as Yup from "yup"

const validationSchema = Yup.object({
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
			"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
		)
		.required("Required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Required"),
})
import { IoIosArrowDropleft } from "react-icons/io"
import { ErrorMessage, Field, Form, Formik } from "formik"

export default function page() {
	return (
		<div className='py-10'>
			<div className='w-[90%] lg:w-[600px] mx-auto shadow-md rounded-[16px] p-5 dark:bg-slate-800 bg-white'>
				<h1 className='font-semibold text-[32px] dark:text-white max-sm:hidden mb-3'>
					Password and Email
				</h1>
				<div className='max-sm:drawer md:hidden block '>
					<div className='drawer-content'>
						{/* Page content here */}
						<label
							htmlFor='my-drawer'
							className='drawer-button'
						>
							<h1 className='font-semibold mb-6 dark:text-white text-[32px]'>
							
								Reset Password
							</h1>
						</label>
					</div>
				</div>
				<Formik
					initialValues={{
						password: "",
						confirmPassword: "",
					}}
					validationSchema={validationSchema}
				>
					{({ isSubmitting}) => (
						<Form>
							<div className='mb-6'>
								<label
									htmlFor='password'
									className='block mb-2 text-sm font-light text-gray-900 dark:text-white'
								>
									New Password
								</label>
								<Field
									type='password'
									id='password'
									name='password'
									className='bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									required
								/>
							</div>
							<ErrorMessage name="password" component={'div'} className='text-red-500 text-sm mb-6'/>
							<div className='mb-6'>
								<label
									htmlFor='confirmPassword'
									className='block mb-2 text-sm font-light text-gray-900 dark:text-white'
								>
									Confirm new password
								</label>
								<Field
									type='password'
									id='confirmPassword'
									name='confirmPassword'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									required
								/>
							</div>
							<ErrorMessage name="confirmPassword" component={'div'} className='text-red-500 text-sm mb-6'/>
						</Form>
					)}
				</Formik>

				<button  type="submit" className='btn-util mt-3  text-white'>save change</button>
			</div>
		</div>
	)
}
