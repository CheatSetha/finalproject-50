"use client"
import {useTheme} from "next-themes";
import React, {useEffect, useState} from 'react'
import {BsFillMoonFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme();
    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return null

    return (
        <div>
            {/* The current theme {theme} */}
            {/* <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button> */}
            

            {theme === 'light' ?
                <button className="text-2xl" onClick={() => setTheme('dark')}><BsFillMoonFill/></button> :
                <button className="text-white text-2xl" onClick={() => setTheme('light')}><BsFillSunFill/></button>}
        </div>
    )
}
