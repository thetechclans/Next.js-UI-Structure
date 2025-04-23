"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  LineChart,
  Menu,
  MessageSquare,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Users,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Dashboard4Template() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-800 px-4 md:px-6">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
              <div className="flex items-center border-b px-4 py-3">
                <div className="flex items-center gap-2 font-semibold">
                  <Package className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span>Acme Inc</span>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="flex-1 overflow-auto py-2">
                <div className="px-4 py-2">
                  <div className="grid gap-1">
                    <Button variant="ghost" className="justify-start">
                      <LineChart className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      Dashboard
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <ShoppingCart className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      Products
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <Users className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      Customers
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <CreditCard className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      Orders
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <Settings className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      Settings
                    </Button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="sr-only">Acme Inc</span>
          </div>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span>Acme Inc</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-64 bg-background pl-8 md:w-80" />
            </div>
          </form>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-medium text-white dark:bg-indigo-500">
              4
            </span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/mystical-forest-spirit.png" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar (desktop) */}
        <aside className="hidden w-64 shrink-0 border-r bg-white dark:bg-gray-900 dark:border-gray-800 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="py-2">
              <div className="grid gap-1">
                <Button variant="ghost" className="justify-start">
                  <LineChart className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="justify-start">
                  <ShoppingCart className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  Products
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Users className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  Customers
                </Button>
                <Button variant="ghost" className="justify-start">
                  <CreditCard className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  Orders
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Settings className="mr-2 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Business Dashboard</h1>
                  <p className="text-muted-foreground">Welcome back, John. Here's what's happening today.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-9">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button
                    size="sm"
                    className="h-9 bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                  >
                    <Activity className="mr-2 h-4 w-4" />
                    Live View
                  </Button>
                </div>
              </div>

              {/* Stats cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Card className="overflow-hidden border-none shadow-md">
                    <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600 dark:bg-indigo-500"></div>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <div className="flex items-center pt-1 text-xs text-green-500">
                        <ArrowUpRight className="mr-1 h-3 w-3" />
                        <span>20.1% from last month</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Card className="overflow-hidden border-none shadow-md">
                    <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600 dark:bg-indigo-500"></div>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2,350</div>
                      <div className="flex items-center pt-1 text-xs text-green-500">
                        <ArrowUpRight className="mr-1 h-3 w-3" />
                        <span>18.2% from last month</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Card className="overflow-hidden border-none shadow-md">
                    <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600 dark:bg-indigo-500"></div>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                      <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <div className="flex items-center pt-1 text-xs text-green-500">
                        <ArrowUpRight className="mr-1 h-3 w-3" />
                        <span>201 since last hour</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Card className="overflow-hidden border-none shadow-md">
                    <div className="absolute inset-x-0 top-0 h-1 bg-indigo-600 dark:bg-indigo-500"></div>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                      <LineChart className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3.24%</div>
                      <div className="flex items-center pt-1 text-xs text-green-500">
                        <ArrowUpRight className="mr-1 h-3 w-3" />
                        <span>7.2% from last month</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Main content area */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Chart */}
                <Card className="col-span-4 border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Performance Overview</CardTitle>
                    <CardDescription>Monthly revenue for the current year</CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="h-[300px] w-full rounded-md bg-muted/30 flex items-center justify-center">
                      <LineChart className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                  </CardContent>
                </Card>
                {/* Top Products */}
                <Card className="col-span-3 border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Top Products</CardTitle>
                    <CardDescription>Your best-selling products this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center dark:bg-indigo-900">
                              <Package className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                              <div className="font-medium">Wireless Earbuds</div>
                              <div className="text-xs text-muted-foreground">Electronics</div>
                            </div>
                          </div>
                          <div className="font-medium">$12,234</div>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center dark:bg-indigo-900">
                              <Package className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                              <div className="font-medium">Smart Watch</div>
                              <div className="text-xs text-muted-foreground">Electronics</div>
                            </div>
                          </div>
                          <div className="font-medium">$10,340</div>
                        </div>
                        <Progress value={72} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center dark:bg-indigo-900">
                              <Package className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                              <div className="font-medium">Laptop Sleeve</div>
                              <div className="text-xs text-muted-foreground">Accessories</div>
                            </div>
                          </div>
                          <div className="font-medium">$8,546</div>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center dark:bg-indigo-900">
                              <Package className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                              <div className="font-medium">Bluetooth Speaker</div>
                              <div className="text-xs text-muted-foreground">Electronics</div>
                            </div>
                          </div>
                          <div className="font-medium">$6,759</div>
                        </div>
                        <Progress value={52} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional content */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest actions and updates</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                        <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">New user registered</p>
                        <p className="text-sm text-muted-foreground">5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                        <ShoppingCart className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">New order placed</p>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                        <MessageSquare className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">New comment received</p>
                        <p className="text-sm text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="w-full text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your scheduled events</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                        <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Team Meeting</p>
                        <p className="text-sm text-muted-foreground">Today, 2:00 PM</p>
                      </div>
                      <Badge className="ml-auto bg-indigo-600 text-white dark:bg-indigo-500">In 30m</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                        <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Product Launch</p>
                        <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</p>
                      </div>
                      <Badge variant="outline" className="ml-auto">
                        Tomorrow
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                        <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Marketing Review</p>
                        <p className="text-sm text-muted-foreground">July 28, 11:00 AM</p>
                      </div>
                      <Badge variant="outline" className="ml-auto">
                        3d
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                    <CardDescription>Key performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Total Customers</div>
                        <div>12,345</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Total Orders</div>
                        <div>23,456</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Total Revenue</div>
                        <div>$345,678</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Conversion Rate</div>
                        <div>3.45%</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">Average Order Value</div>
                        <div>$127.34</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
