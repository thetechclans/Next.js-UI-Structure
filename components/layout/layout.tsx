"use client";

import type React from "react";
import { Navbar } from "@/components/layout/navbar";
import SidebarMember from "@/components/layout/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      {/* <SidebarLayout> */}
      <SidebarMember />
        {/* Main Content Area */}
        <div className="flex flex-1 flex-col w-full">
          {/* Navbar */}
          <Navbar />
          {/* Page Content */}
          <main className="flex-1 w-full p-4">{children}</main>
        </div>
      {/* </SidebarLayout> */}
    </div>
  );
}