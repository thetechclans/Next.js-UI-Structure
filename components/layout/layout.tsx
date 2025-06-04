"use client";

import type React from "react";
import { Navbar } from "@/components/layout/navbar";
import { SidebarLayout } from "./sidebar";
import { useState, useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) { 

    const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    // Validate role before setting
    if (
      storedRole === "Admin" ||
      storedRole === "Member" ||
      storedRole === "Beneficiary"
    ) {
      setRole(storedRole);
    } else {
      setRole(null);
    }
  }, []);

  if (!role) return null;
  return (
     <div className="flex min-h-screen w-full">
      <SidebarLayout role={role as "Admin" | "Member" | "Beneficiary"}>
        <div className="flex flex-1 flex-col w-full">
          <Navbar />
          <section className="flex-1 w-full pt-4 bg-secondary">
            {children}
          </section>
        </div>
      </SidebarLayout>
    </div>
  );
}
