"use client"
import moment from "moment"
import { useTheme } from "next-themes"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import DataTable, { createTheme } from "react-data-table-component"
import { AiOutlinePlusCircle } from "react-icons/ai"
import DeleteIcon from "@/components/icon/DeleteIcon"
import usersData from "@/mockdata/users.json"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { DateRangePicker } from 'react-date-range';
import DateRangeSelector from "./datetimecomponent/DateRangeSelector"
import {BiFilterAlt} from "react-icons/bi"
export default function UserManagementTable() {

	// data picker 

	// formik

	const validationShcema = Yup.object({
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
		// validate username
		username: Yup.string()
			.trim()
			.required("username is required")
			.matches(/^\S+$/, "username cannot spaces")
			.matches(/^[a-zA-Z0-9 ]*$/, "username cannot contain special characters"),
		//validate email
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		// validate password
		password: Yup.string()
			.required("Password is required")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
				"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
			),
	})
	const initialValues = {
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		password: "",
	}

	const handleSubmit = (values, { setSubmitting }) => {
		// Perform form submission logic here
		console.log(values)
		setSubmitting(false)
	}
	// end of formik

	const [users, setUsers] = useState(usersData)
	const [filterText, setFilterText] = useState("")

	const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

	//fileter user by user first name and last name
	const filteredItems = users.filter(
		(item) =>
			(item.first_name &&
				item.first_name.toLowerCase().includes(filterText.toLowerCase())) ||
			(item.last_name &&
				item.last_name.toLowerCase().includes(filterText.toLowerCase()))
	)

	// handle delete user by id
	const handleDeleteUser = (id) => {
		const filteredData = users.filter((item) => item.id !== id)
		// select user by id
		const selectedUser = users.filter((item) => item.id === id)
		// get user name
		const userName =
			selectedUser[0].first_name + " " + selectedUser[0].last_name
		// alert message with deleted user name
		alert(`${userName} has been deleted successfully`)

		setUsers(filteredData)
	}
	const [show,setShow] = useState(false)
	const handleShowCalendar = () => {
		setShow(!show)
		console.log('clicked');


	}
	console.log(show);
	const [startDate, setStartDate] = useState(new Date());
	createTheme("light", {
		text: {
			light: "#1b254b",
			dark: "white",
		},
		rows: {
			style: {
				backgroundColor: "white",
				"&:nth-child(odd)": {
					backgroundColor: "black",
				},
			},
		},

		background: {
			default: "#f5f8fe",
		},
	})
	createTheme("dark", {
		text: {
			light: "#1b254b",
			dark: "white",
		},
		background: {
			default: "#111c44",
			
		},
		rows: {
			style: {
				backgroundColor: "#111c44",
				"&:nth-child(odd)": {
					backgroundColor: "#1b254b",
				},
			},
		},
		
		// set body borderRadius to 16px
		

	})

	const columns = [
		{
			name: "Name",

			selector: (row) => row.first_name + " " + row.last_name,
		},
		{
			name: "Email",
			selector: (row) => row.email,
		},
		{
			name: "Role",
			selector: (row) => row.roles,
		},

		{
			name: "Actions",
			selector: (row) => (
				<div>
					<button className='rounded-main p-2.5  text-white  '>
						<Image
							src={"/assets/icons/edit.svg"}
							width={23}
							height={23}
							alt='delete icon'
							className='dark:invert'
						/>
					</button>
					<button
						onClick={() => handleDeleteUser(row.id)}
						className='rounded-main p-2.5  text-white '
					>
						<DeleteIcon stroke={"red"} />
					</button>
				</div>
			),
		},
	]

	// safe
	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle)
				setFilterText("")
			}
		}

		return (
			<div className='flex  justify-between flex-wrap w-full '>
				<div className="flex">
				<form className='flex'>
					<label
						htmlFor='simple-search'
						className='sr-only'
					>
						Search
					</label>
					
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
							<svg
								aria-hidden='true'
								className='w-5 h-5 text-gray-500 dark:text-gray-400'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
									clipRule='evenodd'
								></path>
							</svg>
						</div>
						<input
							onChange={(e) => setFilterText(e.target.value)}
							onClear={handleClear}
							filterText={filterText}
							type='text'
							id='simple-search'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-secondary  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Search'
							required
						/>
					</div>
				</form>
				
			
				<DateRangeSelector />
				</div>
		
				<button
					// onClick={() => window.my_modal_4.showModal()}
					onClick={() => window.my_modal_4.showModal()}
					className='rounded-main px-5 max-sm:px-2 p-2.5 bg-black text-white  dark:bg-primary'
				>
					<AiOutlinePlusCircle className='inline text-2xl' />{" "}
					<span className='max-sm:hidden'>Add new User</span>
				</button>
				{/* You can open the modal using ID.showModal() method */}
				{/* <button className="btn" onClick={()=>window.my_modal_4.showModal()}>open modal</button> */}
				<dialog
					id='my_modal_4'
					className='modal'
				>
					<form
						method='dialog'
						className='modal-box bg-white dark:bg-primary w-[70%] max-w-5xl'
					>
						<button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
							✕
						</button>
						<Formik
							initialValues={initialValues}
							validationSchema={validationShcema}
							onSubmit={handleSubmit}
						>
							<Form>
								<h1 className='font-semibold text-center text-2xl pb-7'>
									Create New User
								</h1>
								<div className='className="grid gap-6 mb-6 md:grid-cols-2"'>
									<div className='flex justify-between'>
										{/* First name */}
										<div className='pe-2 mb-6 w-[49%]'>
											<label
												htmlFor='first_name'
												className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
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
										<div className='ps-2 mb-6 w-[49%]'>
											<label
												htmlFor='last_name'
												className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
											>
												Last name
											</label>
											<Field
												type='text'
												id='last_name'
												name='last_name'
												className='bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
												placeholder='Doe'
												required
											/>
											<ErrorMessage
												name='last_name'
												component='div'
												className='text-red-500'
											/>
										</div>
									</div>
									{/* user name */}
									<div className='mb-6'>
										<label
											htmlFor='username'
											className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
										>
											Username
										</label>
										<Field
											type='text'
											id='username'
											name='username'
											className='bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
											placeholder='username'
											required
										/>
										<ErrorMessage
											name='username'
											component='div'
											className='text-red-500'
										/>
									</div>
									{/* email */}
									<div className='mb-6'>
										<label
											htmlFor='email'
											className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
										>
											Email
										</label>
										<Field
											type='email'
											id='email'
											name='email'
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
											placeholder='email'
											required
										/>
										<ErrorMessage
											name='email'
											component='div'
											className='text-red-500'
										/>
									</div>
									{/* password*/}
									<div className='mb-6'>
										<label
											htmlFor='password'
											className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
										>
											Password
										</label>
										<Field
											type='password'
											id='password'
											name='password'
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-main focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
											placeholder='password'
											required
										/>
										<ErrorMessage
											name='password'
											component='div'
											className='text-red-500'
										/>
									</div>
									{/* user roles */}
									<div className='mb-6'>
										<label className='block mb-4 text-sm font-medium  text-gray-900 dark:text-white'>
											Select Role
										</label>
										<select className='select max-h-[40px] bg-white border-gray-300 border  rounded-main w-full max-w-xs  dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 '>
											<option selected>Subscriber</option>
											<option>Editor</option>
											<option>Admin</option>
											<option>Super Admin</option>
											<option>Maggie</option>
										</select>
									</div>

									{/* {input image} */}
									<div className='mb-6'>
										<label
											htmlFor='user_avatar'
											className='block mb-4 text-sm font-medium text-gray-900 dark:text-white'
										>
											Avatar
										</label>
										<Field
											type='file'
											id='user_avatar'
											name='user_avatar'
											className='file-input file-input-bordered w-full max-w-xs h-[45px] rounded-main dark:bg-black'
											aria-describedby='user_avatar_help'
										/>
										<ErrorMessage
											name='user_avatar'
											component='div'
											className='text-red-500'
										/>
									</div>

									<div className='flex justify-end'>
										<button
											type='submit'
											// disabled={setSubmitting}
											className='text-white bg-black  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-main text-sm w-full sm:w-auto px-10 py-2.5 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800'
										>
											Submit
										</button>
									</div>
								</div>
							</Form>
						</Formik>
					</form>
				</dialog>
				{/* end of modal */}
			</div>
		)
	}, [filterText, resetPaginationToggle])
	// safe to use
	const customeStylesLight = {
		subHeader: {
			style: {
				padding: "0px",
				margin: "0px",
			},
		},
		headCells: {
			style: {
				fontSize: "16px",
				
			},
		},
		header: {
			style: {
				padding: 0,
			},
		},
	
		//set odd row background color to whitesmoke and even row to white
		rows: {
			style: {
				backgroundColor: "white",
				"&:nth-child(odd)": {
					backgroundColor: "#f5f8fe",
				},
			},
		},
		header: {
			style: {
				padding: 0,
			},
		},
	}
	const customeStyleDark = {
		subHeader:{
			style:{
				padding:0,
				margin:0,
			}
		},
		headCells: {
			style: {
				fontSize: "16px",
			},
		},
		//set odd row background color to whitesmoke and even row to white
		rows: {
			style: {
				backgroundColor: "#0b1437",
				"&:nth-child(odd)": {
					backgroundColor: "#111c44",
				},
			},
		},
		select: {
			style: {
				color: "black",
			},
		},
		header: {
			style: {
				padding: 0,
			},
		},
		pagination: {
			style: {
				backgroundColor: "#0b1437",
				color: "white",
			},
			paginationButton: {
				style: {
					backgroundColor: "white",
					color: "black",
				},
			},
			paginationButtonActive: {
				style: {
					backgroundColor: "blue",
					color: "white",
				},
			},
            paginationSelect:{
                style:{
                    color:'black'
                }
                
            }
		},
		table:{
			style:{
				borderRadius:'16px'
			}
		}
	}

	// chage theme of the table to dark and light
	const themeColor = useTheme()
	console.log(themeColor.theme)
	return (
		<>
			<DataTable
				style={{ backgroundColor: "black" }}
				//  className="bg-light dark:bg-primary"
				columns={columns}
				data={filteredItems}
				pagination
				highlightOnHover
				paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
				subHeader
				subHeaderComponent={subHeaderComponentMemo}
				// theme={ `theme === 'dark' ? 'dark' : 'light'`}
				// if themeColor.theme === 'dark' ? 'dark' : 'light'
				theme={themeColor.theme === "dark" ? "dark" : "light"}
				customStyles={
					themeColor.theme === "dark" ? customeStyleDark : customeStylesLight
				}
			/>
		</>
	)
}
