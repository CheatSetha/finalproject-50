"use client"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { BASE_URL } from "@/app/api/BaseAPI"
import * as Yup from "yup"
import Link from "next/link"
import { useState } from "react"
export default function Home() {
	const [selectedFile, setSelectedFile] = useState("")
	const [previewUrl, setPreviewUrl] = useState("")

	const handleFileChange = (event) => {
		const file = event.target.files[0]
		setSelectedFile(file)
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreviewUrl(reader.result)
			}
			reader.readAsDataURL(file)
		} else {
			setPreviewUrl("assets/icons/R.png")
		}
	}
	const validationShcema = Yup.object({
		// validate username
		username: Yup.string()
			.trim()
			.required("username is required")
			.matches(/^\S+$/, "username cannot spaces")
			.matches(/^[a-zA-Z0-9 ]*$/, "username cannot contain special characters"),
		// validate first_name
		first_name: Yup.string()
			.trim()
			.required("First name is required")
			.matches(/^\S+$/, "first name cannot spaces")
			.matches(
				/^[a-zA-Z0-9 ]*$/,
				"First name cannot contain special characters"
			),
		// validate last_name
		last_name: Yup.string()
			.trim()
			.required("Last name is required")
			.matches(/^\S+$/, "last name cannot spaces")
			.matches(
				/^[a-zA-Z0-9 ]*$/,
				"Last name cannot contain special characters"
			),
		// validate gender
		gender: Yup.string().required("Gender is required"),
		// validate date of birth
		date: Yup.date().required("Date is required"),
		//validate address
		address: Yup.string().required("Address is required"),
		// validate phone number
		phone_number: Yup.string()
			.required("Phone number is required")
			.matches(/^\d+$/, "Phone number must contain only digits")
			.min(9, "Phone number must be at least 10 digits")
			.max(15, "Phone number can be at most 15 digits"),
		//validate biography
		biography: Yup.string().required("biography is required"),
		//validate input image
		user_avatar: Yup.mixed()
			.required("Profile picture is required")
			.test(
				"fileSize",
				"File size must be less than 5MB",
				(value) => value && value.size <= 5 * 1024 * 1024
			)
			.test(
				"fileType",
				"Only image files are allowed",
				(value) =>
					value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
			),
	})
	const initialValues = {
		first_name: "",
		last_name: "",
		gender: "",
		date: "",
		address: "",
		phone_number: "",
		message: "",
		user_avatar: null,
	}
	let setSubmitting = false
	const handleSubmit = async (values, { setSubmitting }) => {
		console.log("hello pengny")
		let myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")
		var raw = JSON.stringify({
			username: values.first_name,
			familyName: values.last_name,
			givenName: values.first_name,
			gender: values.gender,
			dob: "2023-06-10",
			phoneNumber: values.phone_number,
			email: values.email,
			avatar: 1,
			address: values.address,
			biography: values.message,
		})
		console.log("data", raw)

		let requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		}

		// http://localhost:8080/api/v1/users/12

		try {
			const response = await fetch(BASE_URL + "users/13", requestOptions)
			const data = await response.json()
			setSubmitting(true)
			console.log(data)
			setTimeout(() => {
				setSubmitting(false)
			}, 5000)
		} catch (error) {
			console.log("error", error)
		}
		// Handle form submission logic here
		console.log(selectedDate)
		console.log(values)
		setSubmitting(false)
	}

	return (
		<div className='db-bg dark:bg-primary'>
			<section className='h-full p-5'>
				<div className="sticky top-20 z-40 db-bg dark:bg-primary">
				<h1 className='text-[32px] text-light dark:text-white font-semibold mb-5'>
					Profile
				</h1>
				{/* <div className="text-sm breadcrumbs dark:text-white pb-5">
                <ul>
                    <li><Link href={"/#"}>Admin</Link></li>
                    <li><Link href={"/admin/dashboard/setting/profile"}>Setting</Link></li>
                    <li>Passowrd</li>
                </ul>
            </div> */}
				{/* breadcrumbs */}
				<div className='text-sm mb-3 breadcrumbs'>
					<ul className='font-extralight text-light dark:text-white'>
						<li>
							<Link href='/admin/dashboard'>Admin</Link>
						</li>
						<li>
							<Link href={"/admin/dashboard/setting/profile"}>Setting</Link>
						</li>
					</ul>
				</div>
				</div>
				{/* end of header section */}

				<Formik
					initialValues={initialValues}
					validationSchema={validationShcema}
					onSubmit={handleSubmit}
				>
					<Form className="xl:h-screen h-full">
						<div className='grid gap-x-10 gap-6 mb-6 md:grid-cols-2 w-full '>
							{/* user name */}
							<div className='mb-3'>
								<label
									htmlFor='username'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Username
								</label>
								<Field
									type='text'
									id='username'
									name='username'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='username'
									required
								/>
								<ErrorMessage
									name='username'
									component='div'
									className='text-red-500'
								/>
							</div>
							{/* sex */}
							<div className='mb-3'>
								<label
									htmlFor='gender'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Select an option
								</label>
								<Field
									as='select'
									id='gender'
									name='gender'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								>
									<option value=''>Choose a gender</option>
									<option value='male'>Male</option>
									<option value='female'>Female</option>
								</Field>
								<ErrorMessage
									name='gender'
									component='div'
									className='text-red-500'
								/>
							</div>
							{/* First name */}
							<div className='mb-3'>
								<label
									htmlFor='first_name'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									First name
								</label>
								<Field
									type='text'
									id='first_name'
									name='first_name'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='John'
								/>
								<ErrorMessage
									name='first_name'
									component='div'
									className='text-red-500'
								/>
							</div>
							{/* Last name */}
							<div className='mb-3'>
								<label
									htmlFor='last_name'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Last name
								</label>
								<Field
									type='text'
									id='last_name'
									name='last_name'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Doe'
									required
								/>
								<ErrorMessage
									name='last_name'
									component='div'
									className='text-red-500'
								/>
							</div>
							{/* phone number */}
							<div className='mb-3'>
								<label
									htmlFor='phone_number'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Phone number
								</label>
								<Field
									type='text'
									id='phone_number'
									name='phone_number'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								/>
								<ErrorMessage
									name='phone_number'
									component='div'
									className='text-red-500'
								/>
							</div>
							{/* date */}
							<div>
								<div class='relative mb-3 w-full'>
									<label
										htmlFor='gender'
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
									>
										date of birth
									</label>
									<div class='absolute top-[41px] left-0 flex items-center pl-3 pointer-events-none'>
										<svg
											aria-hidden='true'
											class='w-5 h-5 text-gray-500 dark:text-gray-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fill-rule='evenodd'
												d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
												clip-rule='evenodd'
											></path>
										</svg>
									</div>

									<Field
										type='date'
										name='date'
										class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Select date'
									/>
								</div>

								<ErrorMessage
									name='date'
									component='div'
									className='text-red-500'
								/>
							</div>
							{/* address */}
							<div className='mb-3'>
								<label
									htmlFor='address'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Address
								</label>
								<Field
									as='textarea'
									id='address'
									name='address'
									rows='4'
									className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-main border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Your address...'
								/>
								<ErrorMessage
									name='address'
									component='div'
									className='text-red-500'
								/>
							</div>
							{/* message */}
							<div className='mb-3'>
								<label
									htmlFor='biography'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Bio
								</label>
								<Field
									as='textarea'
									id='biography'
									name='biography'
									rows='4'
									className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-main border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Your biography...'
								/>
								<ErrorMessage
									name='biography'
									component='div'
									className='text-red-500'
								/>
							</div>
							{/* user_avatar */}
							<div className='mb-3'>
								<label
									htmlFor='user_avatar'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Upload file
								</label>
								<Field
									type='file'
									id='user_avatar'
									name='user_avatar'
									className='file-input file-input-bordered file-input-[black] h-[45px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 rounded-main dark:focus:border-blue-500'
									aria-describedby='user_avatar_help'
									onChange={handleFileChange}
								/>
								<div
									className='mt-1 text-sm text-gray-500 dark:text-gray-300'
									id='user_avatar_help'
								>
									A profile picture is useful to confirm your are logged into
									your account
								</div>
								<ErrorMessage
									name='user_avatar'
									component='div'
									className='text-red-500'
								/>
							</div>
							{selectedFile && (
								<img
									src={previewUrl}
									alt='Preview'
									className='mt-2 lg:block rounded-md max-w-xs'
								/>
							)}
						</div>
						<button
							type='submit'
							disabled={setSubmitting}
							className='text-white bg-black rounded-main hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Submit
						</button>
						
					</Form>
				</Formik>
			</section>
		</div>
	)
}
