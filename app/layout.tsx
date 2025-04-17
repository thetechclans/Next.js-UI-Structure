import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LocaleProvider } from "@/components/locale/locale-provider"
import { Navbar } from "@/components/layout/navbar"
import { SidebarLayout } from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard with User Management",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          <SidebarLayout>
            <Navbar />
            <main className="flex-1 p-6">{children}</main>
          </SidebarLayout>
        </LocaleProvider>
      </body>
    </html>
  )
}


import './globals.css'