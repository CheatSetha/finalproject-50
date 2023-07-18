"use client"
import React, { useMemo } from "react"
import DataTable, { createTheme } from "react-data-table-component"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import DateRangeSelector from "../datetimecomponent/DateRangeSelector"
import { useTheme } from "next-themes";

const CertificateDataComponent = () => {
    const columns = [
        {
            name: "Number of Created Certificate",
            selector: "certificate",
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
    // handle date rage picker with react-date-range
   
    
    const data = [
        { certificate: 10, user: "John Doe", date: "2021-10-01" },
        { certificate: 2, user: "Jane Smith", date: "2021-10-02" },
        { certificate: 3, user: "Bob Johnson", date: "2021-10-03" },
    ]
    
	const subHeaderComponentMemo = useMemo(() => {
		
		return (
			<div className="absolute left-0 m-0 p-0">
				<DateRangeSelector />
		
			</div>
		)
	}, [])
    const customeStylesLight = {
		subHeader: {
			style: {
				padding: 0,
                margin:0,
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
			columns={columns}
			data={data}
			title='Generated Certificate'
			pagination
			paginationPerPage={5}
            subHeader
			subHeaderComponent={subHeaderComponentMemo}
			paginationRowsPerPageOptions={[5, 10, 15]}
            theme={themeColor.theme === "dark" ? "dark" : "light"}
            customStyles={
                themeColor.theme === "dark" ? customeStyleDark : customeStylesLight
            }
		/>
	)
}

export default CertificateDataComponent