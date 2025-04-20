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
      <body className="flex flex-col min-h-screen">
        {/* ✅ GA Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        <LocaleProvider>
          <SidebarLayout>
            <Navbar />
            <main className="flex-1 p-6 w-full">{children}</main>
          </SidebarLayout>
        </LocaleProvider>
      </body>
    </html>
  )
}


import './globals.css'
import Script from "next/script"
