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
import {
  Home,
  UserRoundCheck,
  NotepadText,
  BadgeCheck,
  ShoppingBag,
  Users,
  CheckCheck,
  Server,
  Lightbulb,
  Headset,
  UserMinus,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  children: React.ReactNode;
  role: "Admin" | "Member" | "Beneficiary";
}

interface RoleProps {
  sidebarRoles: Array<"Admin" | "Member" | "Beneficiary">;
}

interface ModelMenuItems {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
  roles?: RoleProps;
}

export function SidebarLayout({ children, role }: SidebarProps) {
  const { t, dir } = useLocale();
  const pathname = usePathname();

  const menuItems: ModelMenuItems[] = [
    // admin
    {
      title: t("Home"),
      icon: Home,
      path: "/adminDashboard",
      roles: { sidebarRoles: ["Admin"] },
    },
     {
      title: t("Home"),
      icon: Home,
      path: "/Benificiaryhome",
      roles: { sidebarRoles: ["Beneficiary"] },
    },
    {
      title: t("Request_to_join_Member"),
      icon: UserRoundCheck,
      path: "/RequestMember",
      roles: { sidebarRoles: ["Admin"] },
    },
    {
      title: t("Beneficiary_Request"),
      icon: UserRoundCheck,
      path: "/RequestBenificiary",
      roles: { sidebarRoles: ["Admin"] },
    },
    {
      title: t("Financial_Management"),
      icon: NotepadText,
      path: "/FinancialMagement",
      roles: { sidebarRoles: ["Admin"] },
    },
    {
      title: t("Member_Management"),
      icon: BadgeCheck,
      path: "/MemberManagement",
      roles: { sidebarRoles: ["Admin"] },
    },
    {
      title: t("store_management"),
      icon: ShoppingBag,
      path: "/ProductManagement",
      roles: { sidebarRoles: ["Admin"] },
    },
    {
      title: t("Beneficiary_Management"),
      icon: Users,
      path: "/BeneficiaryManagement",
      roles: { sidebarRoles: ["Admin"] },
    },
    {
      title: t("Meeting_Management"),
      icon: CheckCheck,
      path: "/MeetingManagement",
      roles: { sidebarRoles: ["Admin"] },
    },
    {
      title: t("Service_Management"),
      icon: Server,
      path: "/ServiceManagement",
      roles: { sidebarRoles: ["Admin"] },
    },
    {
      title: t("Common_Questions"),
      icon: Lightbulb,
      path: "/Common&Questions",
      roles: { sidebarRoles: ["Admin"] },
    },

    // Member
    {
      title: t("Membership"),
      icon: BadgeCheck,
      path: "/MemberDashboard",
      roles: { sidebarRoles: ["Member"] },
    },
    {
      title: t("Vote"),
      icon: CheckCheck,
      path: "/MemberVoting",
      roles: { sidebarRoles: ["Member"] },
    },
    {
      title: t("Common_Questions"),
      icon: Lightbulb,
      path: "/Common&Questions",
      roles: { sidebarRoles: ["Member"] },
    },
    // Benificiary
    {
      title: t("My_Services"),
      icon: UserMinus,
      path: "/myService",
      roles: { sidebarRoles: ["Beneficiary"] },
    },
    {
      title: t("Available_services"),
      icon: BadgeCheck,
      path: "/availableServices",
      roles: { sidebarRoles: ["Beneficiary"] },
    },
    {
      title: t("Common_Questions"),
      icon: Lightbulb,
      path: "/Common&Questions",
      roles: { sidebarRoles: ["Beneficiary"] },
    },
    {
      title: t("Technical_Support"),
      icon: Headset,
      path: "/adminTechnicalSupport",
      roles: { sidebarRoles: ["Admin"] },
    },
    {
      title: t("Technical_Support"),
      icon: Headset,
      path: "/TechnicalSupport",
      roles: { sidebarRoles: ["Member", "Beneficiary" ] },
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full" dir={dir}>
        <Sidebar side={dir === "rtl" ? "right" : "left"}>
          <SidebarHeader className="flex h-16 items-center  px-3 py-5">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <h1 className="text-2xl text-style font-bold">C M S</h1>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              {/* <SidebarGroupLabel>{t("menu")}</SidebarGroupLabel> */}
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) =>
                    menuItems.length > 0 &&
                    item.roles?.sidebarRoles?.includes(role) ? (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton
                        className="py-6 hover:bg-hover_Color "
                          asChild
                          isActive={pathname === item.path}
                          tooltip={item.title}
                        >
                          <Link href={item.path}>
                            <item.icon className="h-5 w-5" />
                            <span className="">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ) : null
                  )}
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
