import '../styles/globals.scss'
import '../node_modules/line-awesome/dist/line-awesome/css/line-awesome.min.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { DarkModeToggle } from '../components/DarkModeToggle'
import { ThemeContext } from '../context/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState((typeof window !== "undefined" && window.localStorage.getItem('theme')) || "light-mode")

    useEffect(() => {
        document.body.dataset.theme = theme;
        typeof window !== "undefined" && window.localStorage.setItem("theme", theme);
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Component {...pageProps} />
            <DarkModeToggle theme={theme}
                onClick={() => setTheme(theme === "light-mode" ? "dark-mode" : "light-mode")} />
        </ThemeContext.Provider>
    )
}

export default MyApp
