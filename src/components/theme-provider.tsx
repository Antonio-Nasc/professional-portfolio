"use client"
/* eslint-disable react/no-unescaped-entities */

import type React from "react"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  )
}

