"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Activity,
  ArrowRight,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  LineChart,
  Menu,
  MessageSquare,
  Package,
  PieChart,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Dashboard3Template() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 flex h-16 items-center border-b border-white/10 bg-black px-4 md:px-6">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0 text-white md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-zinc-950 p-0 text-white">
              <div className="flex items-center border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2 font-semibold">
                  <Package className="h-6 w-6" />
                  <span>Acme Inc</span>
                </div>
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
                    <Button variant="ghost" className="justify-start text-white">
                      <LineChart className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                    <Button variant="ghost" className="justify-start text-white">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Products
                    </Button>
                    <Button variant="ghost" className="justify-start text-white">
                      <Users className="mr-2 h-4 w-4" />
                      Customers
                    </Button>
                    <Button variant="ghost" className="justify-start text-white">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Orders
                    </Button>
                    <Button variant="ghost" className="justify-start text-white">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Messages
                    </Button>
                    <Button variant="ghost" className="justify-start text-white">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </div>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span>Acme Inc</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 border-white/10 bg-zinc-900 pl-8 text-white placeholder:text-gray-400 md:w-80"
              />
            </div>
          </form>
          <Button variant="ghost" size="icon" className="relative text-white">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
              5
            </span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/mystical-forest-spirit.png" alt="Avatar" />
            <AvatarFallback className="bg-zinc-800 text-white">JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar (desktop) */}
        <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-zinc-950 md:block">
          <div className="flex h-full flex-col gap-2 p-4">
            <div className="py-2">
              <div className="grid gap-1">
                <Button variant="ghost" className="justify-start text-white">
                  <LineChart className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="justify-start text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Products
                </Button>
                <Button variant="ghost" className="justify-start text-white">
                  <Users className="mr-2 h-4 w-4" />
                  Customers
                </Button>
                <Button variant="ghost" className="justify-start text-white">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button variant="ghost" className="justify-start text-white">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </Button>
                <Button variant="ghost" className="justify-start text-white">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-zinc-900 p-4 md:p-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
                  <p className="text-gray-400">Welcome back, John. Here's what's happening with your business today.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 border-white/10 bg-zinc-800 text-white hover:bg-zinc-700"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button size="sm" className="h-9 bg-blue-600 text-white hover:bg-blue-700">
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
                  <Card className="border-white/10 bg-zinc-800 text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                      <DollarSign className="h-4 w-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231.89</div>
                      <div className="flex items-center pt-1 text-xs text-green-400">
                        <span>+20.1% from last month</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Card className="border-white/10 bg-zinc-800 text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                      <Users className="h-4 w-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+2,350</div>
                      <div className="flex items-center pt-1 text-xs text-green-400">
                        <span>+18.2% from last month</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Card className="border-white/10 bg-zinc-800 text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                      <Activity className="h-4 w-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">+573</div>
                      <div className="flex items-center pt-1 text-xs text-green-400">
                        <span>+201 since last hour</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Card className="border-white/10 bg-zinc-800 text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                      <LineChart className="h-4 w-4 text-gray-400" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3.24%</div>
                      <div className="flex items-center pt-1 text-xs text-green-400">
                        <span>+7.2% from last month</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Tabs section */}
              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList className="bg-zinc-800 text-white">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-600">
                    Analytics
                  </TabsTrigger>
                  <TabsTrigger value="reports" className="data-[state=active]:bg-blue-600">
                    Reports
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-600">
                    Notifications
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    {/* Chart */}
                    <Card className="col-span-4 border-white/10 bg-zinc-800 text-white">
                      <CardHeader>
                        <CardTitle>Performance Overview</CardTitle>
                        <CardDescription className="text-gray-400">
                          Monthly revenue for the current year
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <div className="h-[300px] w-full rounded-md bg-zinc-700/50 flex items-center justify-center">
                          <LineChart className="h-10 w-10 text-gray-500" />
                        </div>
                      </CardContent>
                    </Card>
                    {/* Distribution */}
                    <Card className="col-span-3 border-white/10 bg-zinc-800 text-white">
                      <CardHeader>
                        <CardTitle>Revenue Distribution</CardTitle>
                        <CardDescription className="text-gray-400">Revenue by product category</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px] w-full rounded-md bg-zinc-700/50 flex items-center justify-center">
                          <PieChart className="h-10 w-10 text-gray-500" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="border-white/10 bg-zinc-800 text-white">
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription className="text-gray-400">Latest actions and updates</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20">
                            <Users className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">New user registered</p>
                            <p className="text-sm text-gray-400">5 minutes ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20">
                            <ShoppingCart className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">New order placed</p>
                            <p className="text-sm text-gray-400">2 hours ago</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20">
                            <MessageSquare className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">New comment received</p>
                            <p className="text-sm text-gray-400">1 day ago</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="w-full text-blue-400 hover:text-blue-300">
                          View All
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-white/10 bg-zinc-800 text-white">
                      <CardHeader>
                        <CardTitle>Top Products</CardTitle>
                        <CardDescription className="text-gray-400">Best performing products</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Wireless Earbuds</div>
                            <div className="text-sm font-medium">$12,234</div>
                          </div>
                          <Progress value={85} className="h-2 bg-zinc-700" indicatorClassName="bg-blue-500" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Smart Watch</div>
                            <div className="text-sm font-medium">$10,340</div>
                          </div>
                          <Progress value={72} className="h-2 bg-zinc-700" indicatorClassName="bg-blue-500" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Laptop Sleeve</div>
                            <div className="text-sm font-medium">$8,546</div>
                          </div>
                          <Progress value={65} className="h-2 bg-zinc-700" indicatorClassName="bg-blue-500" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Bluetooth Speaker</div>
                            <div className="text-sm font-medium">$6,759</div>
                          </div>
                          <Progress value={52} className="h-2 bg-zinc-700" indicatorClassName="bg-blue-500" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-white/10 bg-zinc-800 text-white">
                      <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                        <CardDescription className="text-gray-400">Your scheduled events</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20">
                            <Calendar className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Team Meeting</p>
                            <p className="text-sm text-gray-400">Today, 2:00 PM</p>
                          </div>
                          <Badge className="ml-auto bg-blue-600 text-white">In 30m</Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20">
                            <Calendar className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Product Launch</p>
                            <p className="text-sm text-gray-400">Tomorrow, 10:00 AM</p>
                          </div>
                          <Badge variant="outline" className="ml-auto border-white/10 text-gray-400">
                            Tomorrow
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20">
                            <Calendar className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Marketing Review</p>
                            <p className="text-sm text-gray-400">July 28, 11:00 AM</p>
                          </div>
                          <Badge variant="outline" className="ml-auto border-white/10 text-gray-400">
                            3d
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4">
                  <Card className="border-white/10 bg-zinc-800 text-white">
                    <CardHeader>
                      <CardTitle>Analytics</CardTitle>
                      <CardDescription className="text-gray-400">Detailed analytics for your business</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px] flex items-center justify-center">
                      <LineChart className="h-16 w-16 text-gray-500" />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reports" className="space-y-4">
                  <Card className="border-white/10 bg-zinc-800 text-white">
                    <CardHeader>
                      <CardTitle>Reports</CardTitle>
                      <CardDescription className="text-gray-400">View and download reports</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px] flex items-center justify-center">
                      <Download className="h-16 w-16 text-gray-500" />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="notifications" className="space-y-4">
                  <Card className="border-white/10 bg-zinc-800 text-white">
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription className="text-gray-400">Manage your notification settings</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[400px] flex items-center justify-center">
                      <Bell className="h-16 w-16 text-gray-500" />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
