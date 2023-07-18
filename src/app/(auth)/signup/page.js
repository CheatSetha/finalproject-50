"use client"
import React from "react"
import * as Yup from "yup"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { FcGoogle } from "react-icons/fc"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { BASE_URL } from "@/app/api/BaseAPI"
import { useTheme } from "next-themes"
import Image from "next/image"

const validationShcema = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Required"),
	confirmedPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Required"),
})

const Page = () => {
	// sign up succes and redirect to home page
	const { data: session } = useSession()
	// call theme
	const { theme } = useTheme()

	const router = useRouter()
	if (session) {
		router.push("/")
	}

	// register
	const createNewUser = async (user) => {
		const { email, password, confirmedPassword } = user

		let myHeaders = new Headers()
		myHeaders.append("Content-Type", "application/json")

		let raw = JSON.stringify({
			email,
			password,
			confirmedPassword,
			roleIds: ["1"],
		})

		let requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		}

		fetch(`${BASE_URL}auth/register`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				console.log(result)
				if (result.code === 200) {
					let requestOptions = {
						method: "POST",
						redirect: "follow",
					}

					fetch(`${BASE_URL}auth/verify?email=` + result.data, requestOptions)
						.then((response) => response.text())
						.then((result) => {
							router.push("/")
							console.log(result)
							alert("Please check your email to verify your account")
						})
						.catch((error) => console.log("error", error))
				}
			})
			.catch((error) => {
                alert(error.message, "error please check your credentials")
              
            })

		// end of submit to server
	}

	return (
		<div className='bg-white  dark:bg-black w-full lg:w-[1290px] mx-auto flex flex-wrap items-center h-[100vh] '>
			<div className='w-1/2 hidden md:flex justify-center items-center'>
				<img
					className='w-96  flex'
					src={`./assets/image/auth/${
						theme === "dark" ? "Designer-dark" : "Designer"
					}.gif`}
					alt='sign up logo'
				/>
			</div>
			<div className='md:w-1/2 w-full'>
				<Formik
					initialValues={{
						email: "",
						password: "",
						confirmedPassword: "",
						roleIds: [2],
					}}
					validationSchema={validationShcema}
					onSubmit={async (values, { setSubmitting, resetForm }) => {
						setTimeout(() => {
							createNewUser(values)
							setSubmitting(false)
							resetForm()
						}, 500)
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<div className='form-container w-[90%]  xl:w-[600px] mx-auto  border p-10 rounded-[16px]'>
							<Image className="mx-auto pt-5 pb-10 max-sm:pb-6" width={170} height={100} src={`/assets/image/${theme==='dark'?'mainlogov2':'mainlogo-blackv2'}.png`} alt="logo photo"/>
								<h1 className='font-bold text-2xl mb-5 dark:text-white'>
									Sign Up
								</h1>
								<div>
									<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
										Email
									</label>
									<Field
										placeholder='enter your email'
										type='email'
										name='email'
										className='bg-gray-50 border rounded-[16px] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									/>
								</div>
								<ErrorMessage
									name='email'
									component='div'
									className='text-red-500 text-sm mb-6'
								/>
								<div className='mt-6'>
									<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
										Password
									</label>
									<Field
										placeholder='enter your password'
										type='password'
										name='password'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									/>
								</div>
								<ErrorMessage
									name='password'
									component='div'
									className='text-red-500 text-sm mb-6'
								/>
								<div className='mt-6'>
									<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
										Confirm password
									</label>
									<Field
										name='confirmedPassword'
										placeholder='confirm your password'
										type='password'
										className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-[16px]'
									/>
								</div>
								<ErrorMessage
									name='confirmedPassword'
									component='div'
									className='text-red-500 text-sm mb-6'
								/>
								<div className='mt-6'>
									<button
										type='submit'
										disabled={isSubmitting}
										className='rounded-[16px] cursor-pointer hover:bg-gray-700  bg-[#E85854] p-2.5 w-full text-white border-none '
									>
										Sign up
									</button>
								</div>

								<div className='divider'>
									<span className='font-extralight text-[12px]'>OR</span>
								</div>

								<button
									onClick={() => signIn("google")}
									className='cursor-pointer p-2.5 bg-slate-100 dark:bg-black  dark:text-white  border w-full rounded-[16px]'
								>
									<FcGoogle className='inline' /> sign up with google
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default Page
