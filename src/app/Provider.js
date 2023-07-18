"use client"
import React, { useEffect, useState } from "react"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"
export default function Provider({ children }) {
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)
	}, [])
	if (!mounted) {
		return <>{children}</>
	}
	return (
		<ThemeProvider attribute='class'>
			{children}
		</ThemeProvider>
	)
}
