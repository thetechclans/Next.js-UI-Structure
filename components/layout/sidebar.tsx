// "use client";

// import type React from "react";
// import { useLocale } from "@/components/locale/locale-provider";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
//   SidebarRail,
// } from "@/components/ui/sidebar";
// import { Home, Users, Book } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// interface SidebarProps {
//   children: React.ReactNode;
// }

// export function SidebarLayout({ children }: SidebarProps) {
//   const { t, dir } = useLocale();
//   const pathname = usePathname();

//   const menuItems = [
//     {
//       title: t("home"),
//       icon: Home,
//       path: "/",
//     },
//     {
//       title: t("user_management"),
//       icon: Users,
//       path: "/users",
//     },
//     {
//       title: t("referenceData"),
//       icon: Book,
//       path: "/referenceData",
//     },
//   ];

//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen w-full" dir={dir}>
//         <Sidebar side={dir === "rtl" ? "right" : "left"}>
//           <SidebarHeader className="flex h-16 items-center border-b px-6">
//             <h1 className="text-xl font-bold">Admin Panel</h1>
//           </SidebarHeader>
//           <SidebarContent>
//             <SidebarGroup>
//               <SidebarGroupLabel>{t("menu")}</SidebarGroupLabel>
//               <SidebarGroupContent>
//                 <SidebarMenu>
//                   {menuItems.map((item) => (
//                     <SidebarMenuItem key={item.path}>
//                       <SidebarMenuButton
//                         asChild
//                         isActive={pathname === item.path}
//                         tooltip={item.title}
//                       >
//                         <Link href={item.path}>
//                           <item.icon className="h-5 w-5" />
//                           <span>{item.title}</span>
//                         </Link>
//                       </SidebarMenuButton>
//                     </SidebarMenuItem>
//                   ))}
//                 </SidebarMenu>
//               </SidebarGroupContent>
//             </SidebarGroup>
//           </SidebarContent>
//           <SidebarRail />
//         </Sidebar>
//         <div className="flex-1 w-full">{children}</div>
//       </div>
//     </SidebarProvider>
//   );
// }


"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  path: string;
  textKey: string;
}

const SidebarMember = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state
  const currentPath = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems: MenuItem[] = [
    { path: "/referenceData", textKey: "membership" },
    { path: "/users", textKey: "meeting" },
    { path: "/memberComplaints", textKey: "complaintsandsuggestion" },
    { path: "/FAQ", textKey: "frequentlyaskedques" },
  ];

  return (
    <div className="h-full fixed z-20 text-white transition-transform duration-300 ease-in-out">
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden flex justify-between bg-white text-xl p-4 w-full"
        onClick={toggleSidebar}
      >
        {isOpen && (
          <div className="ml-4 flex items-center">
            <Image
              src="/imgs/logo.png"
              alt="logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="ml-3 text-black text-base font-bold">
              huraymilaassociation
            </span>
          </div>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`transition-transform duration-300 ease-in-out z-50 h-[80%] fixed bg-white text-black 
        ${isOpen ? "w-60" : "w-16"} md:w-[270px] md:flex md:flex-col`}
      >
        {/* Desktop Header */}
        <div className="py-6 px-6 hidden md:flex items-center">
          <Image
            src="/imgs/logo.png"
            alt="logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-black text-base font-bold ml-2">
            huraymilaassociation
          </span>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col py-4 text-[#78829D]">
          {menuItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Link href={item.path} key={item.path}>
                <div
                  className={`flex items-center gap-4 px-4 py-4 m-1 rounded-xl md:w-60 cursor-pointer 
                  hover:bg-green-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#3bce8a] to-[#00a75a]"
                      : ""
                  }`}
                >
                  {/* You can add icons here */}
                  <span
                    className={`text-sm font-normal transition-opacity duration-300 
                    ${isOpen ? "opacity-100" : "opacity-0 hidden md:block"} 
                    md:opacity-100 ${isActive ? "text-white" : "text-[#78829D]"}`}
                  >
                    {item.textKey}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarMember;

