"use client"

import { useLocale } from "@/components/locale/locale-provider"
import { Button } from "@/components/ui/button"
import { Globe, User } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const { t, locale, setLocale } = useLocale()

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ar" : "en")
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background px-4 shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span>Admin Dashboard</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={toggleLocale} className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          {locale === "en" ? t("arabic") : t("english")}
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Admin</span>
        </Button>
      </div>
    </header>
  )
}
