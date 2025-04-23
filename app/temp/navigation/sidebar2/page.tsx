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

export default function Sidebar2Template() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full flex-col bg-black text-white">
      <header className="sticky top-0 z-30 flex h-16 items-center border-b border-white/10 bg-black px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0 text-white md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-zinc-900 p-0 text-white">
              <div className="flex items-center border-b border-white/10 px-4 py-3">
                <Link href="#" className="flex items-center gap-2 font-semibold">
                  <Package className="h-6 w-6" />
                  <span>Acme Inc</span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="flex-1 overflow-auto py-2">
                <div className="px-4 py-2">
                  <div className="grid gap-1">
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                    >
                      <Home className="h-4 w-4" />
                      Home
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg bg-zinc-800 px-3 py-2 text-white transition-all"
                    >
                      <BarChart3 className="h-4 w-4" />
                      Analytics
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                    >
                      <CreditCard className="h-4 w-4" />
                      Transactions
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                    >
                      <Users className="h-4 w-4" />
                      Customers
                    </Link>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <h2 className="mb-2 text-xs font-semibold text-zinc-400">Settings</h2>
                  <div className="grid gap-1">
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                    >
                      <Settings className="h-4 w-4" />
                      Settings
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
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
            <Package className="h-6 w-6" />
            <span>Acme Inc</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-white">
            Upgrade
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside
          className={cn(
            "group/sidebar relative hidden h-full flex-col border-r border-white/10 bg-zinc-900 transition-all duration-300 ease-in-out md:flex",
            "w-[240px]",
          )}
        >
          <div className="flex h-16 items-center border-b border-white/10 px-4">
            <Link href="#" className="flex items-center gap-2 font-semibold">
              <Package className="h-6 w-6" />
              <span>Acme Inc</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-2">
            <div className="px-2 py-2">
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700">
                    <Home className="h-4 w-4" />
                  </div>
                  <span>Home</span>
                </Link>
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-lg bg-zinc-800 px-3 py-2 text-white transition-all"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                    <BarChart3 className="h-4 w-4" />
                  </div>
                  <span>Analytics</span>
                </Link>
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <span>Transactions</span>
                </Link>
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700">
                    <ShoppingCart className="h-4 w-4" />
                  </div>
                  <span>Products</span>
                </Link>
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700">
                    <Users className="h-4 w-4" />
                  </div>
                  <span>Customers</span>
                </Link>
              </div>
            </div>
            <div className="px-2 py-2">
              <h2 className="mb-2 px-3 text-xs font-semibold text-zinc-400">Settings</h2>
              <div className="grid gap-1">
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700">
                    <Settings className="h-4 w-4" />
                  </div>
                  <span>Settings</span>
                </Link>
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-all hover:bg-zinc-800"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 group-hover:bg-zinc-700">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <span>Help</span>
                </Link>
              </div>
            </div>
          </nav>
          <div className="mt-auto border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-zinc-800"></div>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-zinc-400">john@example.com</div>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto bg-zinc-900 p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-white">Sidebar Example</h1>
                  <p className="text-zinc-400">This is an example of a dark-themed sidebar with rounded icons.</p>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-zinc-800 p-8 text-white shadow">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <Package className="h-12 w-12" />
                  <h2 className="text-xl font-bold">Main Content Area</h2>
                  <p className="max-w-[600px] text-zinc-400">
                    This is where your main content would go. The sidebar provides navigation for your application.
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
