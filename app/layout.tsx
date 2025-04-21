"use client";

import type React from "react";
import "./globals.css";
import { LocaleProvider } from "@/components/locale/locale-provider";
import { Layout } from "@/components/layout/layout";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if the current route is the login page
  const isLoginPage = pathname === "/login";

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
          {/* Render Layout only if not on the login page */}
          {isLoginPage ? (
            <main className="flex-1 w-full">{children}</main>
          ) : (
            <Layout>{children}</Layout>
          )}
        </LocaleProvider>
      </body>
    </html>
  );
}

