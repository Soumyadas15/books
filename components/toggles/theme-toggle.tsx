"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { ThemeSwitch } from "../ui/theme-switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeSwitch
        checked={theme==="dark"}
        onCheckedChange={toggleTheme}
    />
  )
}