"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.style.backgroundColor = "#171d29"
      document.body.style.backgroundColor = "#171d29"
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.style.backgroundColor = "white"
      document.body.style.backgroundColor = "white"
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
