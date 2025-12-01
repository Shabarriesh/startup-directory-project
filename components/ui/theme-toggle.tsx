"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-1 bg-muted rounded-full p-1 cursor-pointer transition-all duration-300 hover:opacity-80"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Light mode button */}
      <div
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
          !isDark ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted"
        }`}
      >
        <span className="text-sm font-medium">☀️</span>
      </div>

      {/* Dark mode button */}
      <div
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
          isDark ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted"
        }`}
      >
        <span className="text-sm font-medium">🌙</span>
      </div>
    </button>
  )
}
