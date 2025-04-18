"use client"

import { useLocale } from "./locale-provider"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ar" : "en")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLocale}
      className="fixed right-4 top-4 z-50 flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {locale === "en" ? t("arabic") : t("english")}
    </Button>
  )
}
