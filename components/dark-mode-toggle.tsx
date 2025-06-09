"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("darkMode")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = saved ? JSON.parse(saved) : prefersDark

    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle("dark", shouldBeDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode))
    document.documentElement.classList.toggle("dark", newDarkMode)
  }

  return (
    <Button
      onClick={toggleDarkMode}
      variant="outline"
      size="icon"
      className="fixed top-24 right-6 z-40 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-blue-200/50 dark:border-gray-600/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </Button>
  )
}
