import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";



export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);
    const handleClick = () => {setIsDarkMode(!isDarkMode)};
  
  return (
    <div>
        <button onClick={(handleClick)}>
            {isDarkMode ? <IoMdSunny /> : <FaMoon />}
        </button>
    </div>
  )
}
