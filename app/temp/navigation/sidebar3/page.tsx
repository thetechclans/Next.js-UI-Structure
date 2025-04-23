"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  CreditCard,
  Home,
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
import { cn } from "@/lib/utils"

export default function Sidebar3Template() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col bg-white dark:bg-gray-950">
      <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-white px-4 dark:border-gray-800 dark:bg-gray-950 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
              <div className="flex items-center border-b px-4 py-3 dark:border-gray-800">
                <Link href="#" className="flex items-center gap-2 font-semibold">
                  <Package className="h-6 w-6 text-purple-600" />
                  <span>Acme Inc</span>
                </Link>
                <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="flex-1 overflow-auto py-2">
                <div className="px-4 py-2">
                  <div className="grid gap-1">
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      <Home className="h-4 w-4" />
                      Home
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-50"
                    >
                      <BarChart3 className="h-4 w-4 text-purple-600" />
                      Analytics
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      <CreditCard className="h-4 w-4" />
                      Transactions
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      <Users className="h-4 w-4" />
                      Customers
                    </Link>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <h2 className="mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400">Settings</h2>
                  <div className="grid gap-1">
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      <Settings className="h-4 w-4" />
                      Settings
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Help
                    </Link>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="#" className="flex items-center gap-2 font-semibold md:hidden">
            <Package className="h-6 w-6 text-purple-600" />
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
        <aside
          className={cn(
            "group/sidebar relative hidden h-full flex-col border-r transition-all duration-300 ease-in-out md:flex dark:border-gray-800",
            "w-[240px]",
          )}
        >
          <div className="flex h-16 items-center border-b px-4 dark:border-gray-800">
            <Link href="#" className="flex items-center gap-2 font-semibold">
              <Package className="h-6 w-6 text-purple-600" />
              <span>Acme Inc</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-2">
            <div className="px-2 py-2">
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="group relative flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-transparent transition-all group-hover:bg-purple-600"></span>
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
                <Link
                  href="#"
                  className="group relative flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-50"
                >
                  <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-purple-600"></span>
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                  <span>Analytics</span>
                </Link>
                <Link
                  href="#"
                  className="group relative flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-transparent transition-all group-hover:bg-purple-600"></span>
                  <CreditCard className="h-4 w-4" />
                  <span>Transactions</span>
                </Link>
                <Link
                  href="#"
                  className="group relative flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-transparent transition-all group-hover:bg-purple-600"></span>
                  <ShoppingCart className="h-4 w-4" />
                  <span>Products</span>
                </Link>
                <Link
                  href="#"
                  className="group relative flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-transparent transition-all group-hover:bg-purple-600"></span>
                  <Users className="h-4 w-4" />
                  <span>Customers</span>
                </Link>
              </div>
            </div>
            <div className="px-2 py-2">
              <h2 className="mb-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400">Settings</h2>
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="group relative flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-transparent transition-all group-hover:bg-purple-600"></span>
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <Link
                  href="#"
                  className="group relative flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <span className="absolute inset-y-0 left-0 w-1 rounded-full bg-transparent transition-all group-hover:bg-purple-600"></span>
                  <MessageSquare className="h-4 w-4" />
                  <span>Help</span>
                </Link>
              </div>
            </div>
          </nav>
          <div className="mt-auto border-t p-4 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gray-100 dark:bg-gray-800"></div>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">john@example.com</div>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Sidebar Example</h1>
                  <p className="text-muted-foreground">
                    This is an example of a sidebar with vertical accent indicators.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-8 text-card-foreground shadow">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <Package className="h-12 w-12 text-purple-600" />
                  <h2 className="text-xl font-bold">Main Content Area</h2>
                  <p className="max-w-[600px] text-muted-foreground">
                    This is where your main content would go. The sidebar provides navigation for your application with
                    a vertical accent indicator for the active item.
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
