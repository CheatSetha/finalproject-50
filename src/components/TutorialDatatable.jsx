import moment from "moment"
import { useTheme } from "next-themes"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import DataTable, { createTheme } from "react-data-table-component"
import { AiOutlinePlusCircle } from "react-icons/ai"
import DeleteIcon from "@/components/icon/DeleteIcon"
import DateRangeSelector from "./datetimecomponent/DateRangeSelector"

export function TutorialDatatable() {
	const editorRef = useRef()
	const [editorLoaded, setEditorLoaded] = useState(false)
	const { CKEditor, ClassicEditor } = editorRef.current || {}
	useEffect(() => {
		editorRef.current = {
			CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
			ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
		}
		setEditorLoaded(true)
	}, [])
	console.log("editorLoaded", editorLoaded)

	//ckeditor section
	const [editorData, setEditorData] = useState("")

	const handleEditorChange = (newData) => {
		setEditorData(newData)
	}

	const [products, setProducts] = useState([])
	const [filterText, setFilterText] = useState("")

	const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
	const filteredItems = products.filter(
		(item) =>
			item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
	)

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
	})

	const columns = [
		{
			name: "Title",

			selector: (row) => row.title,
		},
		{
			name: "created at",
			selector: (row) => moment(row.createdAt).format("DD/MM/YYYY"),
		},
		{
			name: "views",
			selector: (row) => row.price,
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
					<button className='rounded-main p-2.5  text-white '>
						<DeleteIcon stroke={"red"} />
					</button>
				</div>
			),
		},
	]
	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => res.json())
			.then((data) => setProducts(data))

		//
	}, [])
	// safe
	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle)
				setFilterText("")
			}
		}

		return (
			<div className='flex justify-between flex-wrap w-full p-0 '>
				<form className='flex items-center'>
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
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-secondary  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Search'
							required
						/>
					</div>
					<DateRangeSelector />
				</form>
				<button
					// onClick={() => window.my_modal_4.showModal()}
					onClick={() => window.my_modal_4.showModal()}
					className='rounded-main px-5 max-sm:px-2 p-2.5 bg-black text-white  '
				>
					<AiOutlinePlusCircle className='inline text-2xl' />{" "}
					<span className='max-sm:hidden'>Add new tutorial</span>
				</button>
				{/* You can open the modal using ID.showModal() method */}
				{/* <button className="btn" onClick={()=>window.my_modal_4.showModal()}>open modal</button> */}
				<dialog
					id='my_modal_4'
					className='modal bg-white dark:bg-secondary'
				>
					<form
						method='dialog'
						className='modal-box bg-white dark:bg-secondary h-[100vh] overflow-auto w-11/12  max-w-5xl'
					>
						<button className='btn absolute  right-2 top-2  w-12 h-10 p-1 rounded-full text-center'>
							<AiOutlineCloseCircle className='text-2xl' />
						</button>
						<h2 className='text-center text-2xl  text-light dark:text-white font-semibold'>
							Create Tutorial
						</h2>
			
						<form className='grid grid-cols-1 mt-10 md:grid-cols-2 gap-5'>
							<div className=' w-full'>
								<label
									for='first_name'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Title
								</label>
								<input
									type='text'
									id='first_name'
									className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='John'
									required
								/>
							</div>
							<div className='  w-full'>
								<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Thumbnail
								</label>
								<input
									type='file'
									className='file-input h-[45px]  file-input-bordered w-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									required
								/>
							</div>
							<div className='md:mb-5 mb-2 md:col-span-2 w-full'>
								<label
									for='first_name'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Description
								</label>
								<textarea
									id='message'
									rows='4'
									className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Write your description here...'
								></textarea>
							</div>
						</form>
						<div className={"z-50 mt-3 rounded-main h-[100vh]"}>
							{editorLoaded ? (
								<CKEditor editor={ClassicEditor} />
							) : (
								" ckeditor is  laoding..."
							)}
							<div className="flex justify-end ">
							<button type="button" className='rounded-main px-5 max-sm:px-2 p-2.5 bg-black text-white   mt-5'>Post Now</button>
							</div>
						</div>
					</form>
				</dialog>
				{/* end of modal */}
			</div>
		)
	}, [filterText, resetPaginationToggle, editorLoaded, editorRef])
	// safe to use
	const customeStylesLight = {
		headCells: {
			style: {
				fontSize: "16px",
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
		subHeader: {
			style: {
				padding: "0px",
				margin: "0px",
			},
		},
	}
	const customeStyleDark = {
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
		header: {
			style: {
				padding: 0,
			},
		},
		subHeader:{
			style:{
				padding:0,
				margin:0
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
