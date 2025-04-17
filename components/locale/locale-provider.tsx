"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { translations, type Locale, type TranslationKey } from "./translations"

interface LocaleContextType {
  locale: Locale
  t: (key: TranslationKey) => string
  setLocale: (locale: Locale) => void
  dir: "ltr" | "rtl"
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export interface LocaleProviderProps {
  children: React.ReactNode
  defaultLocale?: Locale
}

export function LocaleProvider({ children, defaultLocale = "en" }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr")

  // Update document direction when locale changes
  useEffect(() => {
    const newDir = locale === "ar" ? "rtl" : "ltr"
    setDir(newDir)
    document.documentElement.dir = newDir
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    // Save to localStorage for persistence
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale)
    }
  }

  // Load saved locale from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("locale") as Locale | null
      if (savedLocale && (savedLocale === "en" || savedLocale === "ar")) {
        setLocaleState(savedLocale)
      }
    }
  }, [])

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[locale][key] || key
  }

  return <LocaleContext.Provider value={{ locale, t, setLocale, dir }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
