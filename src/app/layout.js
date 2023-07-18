import Navbar from "@/components/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/Footer"
import Provider from "./Provider"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import AuthProvider from "./AuthProvider"
import Script from "next/script"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>
					<AuthProvider>
						{/* <ThemeSwitcher /> */}
						<Navbar />
						<div className='bg-white dark:bg-black'>{children}</div>
						<Footer />
					</AuthProvider>
				</Provider>	
			</body>
           
		</html>
	)
}
