"use client"
import React, { useMemo } from "react"
import DataTable, { createTheme } from "react-data-table-component"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import DateRangeSelector from "../datetimecomponent/DateRangeSelector"
import { useTheme } from "next-themes"
const data = [
	{ watermark: 14, user: "John Doe", date: "2023-06-22" },
	{ watermark: 20, user: "Jane Smith", date: "2023-06-23" },
	{ watermark: 30, user: "Bob Johnson", date: "2023-06-24" },
]

const columns = [
	{
		name: "Number of Watermark",
		selector: "watermark",
		sortable: true,
	},
	{
		name: "User",
		selector: "user",
		sortable: true,
	},
	{
		name: "Date",
		selector: "date",
		sortable: true,
	},
]

const WatermarkDataComponent = () => {
	const subHeader = React.useMemo(() => {
		return (
			<div className='absolute left-0'>
				<DateRangeSelector />
			</div>
		)
	}, [])
	const customeStylesLight = {
		subHeader: {
			style: {
				padding: "0",
				margin: "0",
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
		subHeader: {
			style: {
				padding: 0,
				margin: 0,
			},
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
			paginationSelect: {
				style: {
					color: "black",
				},
			},
		},
		table: {
			style: {
				borderRadius: "16px",
			},
		},
	}
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
	const themeColor = useTheme()

	return (
		<DataTable
			title='Generated Watermark'
			columns={columns}
			data={data}
			pagination
			responsive
			subHeader
			subHeaderComponent={subHeader}
			theme={themeColor.theme === "dark" ? "dark" : "light"}
			customStyles={
				themeColor.theme === "dark" ? customeStyleDark : customeStylesLight
			}
		/>
	)
}

export default WatermarkDataComponent
