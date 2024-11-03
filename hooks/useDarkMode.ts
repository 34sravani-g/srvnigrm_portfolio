import { useState, useEffect } from 'react'
interface DarkModeHook {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const useDarkMode = (): DarkModeHook => {
    const [darkMode, setDarkMode] = useState<boolean>(false)

    //Loading the Mode from Local Storage:
    useEffect(() => {
        const savedMode = localStorage.getItem('mode')
        if(savedMode === 'dark') {
            setDarkMode(true)
        }
    }, []);

    //saving mode to localstorage
    useEffect(() => {
        localStorage.setItem('mode', darkMode ? "dark": 'light')
    }, [darkMode])

    return { darkMode, setDarkMode } //returning state and setter
}

export default useDarkMode

/* 
custom React hook called useDarkMode that provides dark mode functionality.
 It uses localStorage to save and retrieve the user’s dark mode preference, so the preference persists across page reloads. */