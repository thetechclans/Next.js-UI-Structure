"use client";

import type React from "react";
import { useLocale } from "@/components/locale/locale-provider";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Home, Users, Book } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  children: React.ReactNode;
}

export function SidebarLayout({ children }: SidebarProps) {
  const { t, dir } = useLocale();
  const pathname = usePathname();

  const menuItems = [
    {
      title: t("home"),
      icon: Home,
      path: "/",
    },
    {
      title: t("user_management"),
      icon: Users,
      path: "/users",
    },
    {
      title: t("referenceData"),
      icon: Book,
      path: "/referenceData",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full" dir={dir}>
        <Sidebar side={dir === "rtl" ? "right" : "left"}>
          <SidebarHeader className="flex h-16 items-center border-b px-6">
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>{t("menu")}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.path}
                        tooltip={item.title}
                      >
                        <Link href={item.path}>
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>
        <div className="flex-1 w-full">{children}</div>
      </div>
    </SidebarProvider>
  );
}


