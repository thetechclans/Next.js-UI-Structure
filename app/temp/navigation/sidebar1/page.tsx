"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Calendar,
  CreditCard,
  Home,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Package,
  Settings,
  ShoppingCart,
  Users,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  label?: string
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
    label: "128",
  },
  {
    title: "Products",
    href: "/products",
    icon: ShoppingCart,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: CreditCard,
    label: "12",
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: MessageSquare,
    label: "3",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export default function Sidebar1Template() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
              <div className="flex items-center border-b px-4 py-3">
                <Link href="#" className="flex items-center gap-2 font-semibold">
                  <Package className="h-6 w-6" />
                  <span>Acme Inc</span>
                </Link>
                <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsMobileOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="flex-1 overflow-auto py-2">
                <div className="px-2 py-2">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                      {item.label && (
                        <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                          {item.label}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="#" className="flex items-center gap-2 font-semibold md:hidden">
            <Package className="h-6 w-6" />
            <span>Acme Inc</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm">
            Upgrade
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <TooltipProvider delayDuration={0}>
          <aside
            className={cn(
              "group/sidebar relative hidden h-full flex-col border-r bg-background transition-all duration-300 ease-in-out md:flex",
              isCollapsed ? "w-[70px]" : "w-[240px]",
            )}
          >
            <div className="flex h-16 items-center border-b px-4">
              <Link href="#" className="flex items-center gap-2 font-semibold">
                <Package className="h-6 w-6" />
                {!isCollapsed && <span>Acme Inc</span>}
              </Link>
            </div>
            <nav className="flex-1 overflow-auto py-2">
              <div className="px-2 py-2">
                {navItems.map((item, index) => (
                  <Tooltip key={index} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground",
                          item.href === "/dashboard" && "bg-accent text-accent-foreground",
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        {!isCollapsed && (
                          <>
                            <span>{item.title}</span>
                            {item.label && (
                              <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                                {item.label}
                              </span>
                            )}
                          </>
                        )}
                      </Link>
                    </TooltipTrigger>
                    {isCollapsed && (
                      <TooltipContent side="right" className="flex items-center gap-2">
                        {item.title}
                        {item.label && (
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                            {item.label}
                          </span>
                        )}
                      </TooltipContent>
                    )}
                  </Tooltip>
                ))}
              </div>
            </nav>
            <div className="mt-auto border-t p-2">
              <Button variant="outline" size="icon" className="w-full" onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? <LayoutDashboard className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </div>
          </aside>
        </TooltipProvider>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Sidebar Example</h1>
                  <p className="text-muted-foreground">
                    This is an example of a responsive sidebar with collapsible functionality.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-8 text-card-foreground shadow">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <Package className="h-12 w-12" />
                  <h2 className="text-xl font-bold">Main Content Area</h2>
                  <p className="max-w-[600px] text-muted-foreground">
                    This is where your main content would go. The sidebar can be collapsed to provide more space for
                    content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
