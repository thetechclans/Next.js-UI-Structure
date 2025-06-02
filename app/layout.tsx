"use client";

import type React from "react";
import "./globals.css";
import { LocaleProvider } from "@/components/locale/locale-provider";
import { Layout } from "@/components/layout/layout";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { ToastProvider } from "@/components/ui/toast";

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if the current route is the login page
  const isLoginPage = pathname === "/" || pathname === "/register" || pathname === "/register/registerBenificiary" || pathname === "/register/registerMember" || pathname === "/register/registerMember/wizardOne" || pathname === "/register/paymentCard" ;

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        <LocaleProvider>
          <ToastProvider />
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

