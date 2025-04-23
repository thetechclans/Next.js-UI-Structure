"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Grid3X3, LayoutGrid } from "lucide-react"

// Sample data for grid items
const gridItems = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description: "Real-time data visualization and analytics dashboard",
    category: "Dashboard",
    status: "Completed",
    date: "2023-04-12",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-featured online store with payment integration",
    category: "Web App",
    status: "In Progress",
    date: "2023-05-18",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure banking application with transaction history",
    category: "Mobile",
    status: "In Review",
    date: "2023-06-24",
  },
  {
    id: 4,
    title: "Content Management System",
    description: "Flexible CMS with role-based permissions",
    category: "Web App",
    status: "Completed",
    date: "2023-03-09",
  },
  {
    id: 5,
    title: "Inventory Management",
    description: "Track and manage inventory with barcode scanning",
    category: "Enterprise",
    status: "In Progress",
    date: "2023-07-15",
  },
  {
    id: 6,
    title: "Social Media Platform",
    description: "Connect and share with friends and communities",
    category: "Web App",
    status: "Planning",
    date: "2023-08-22",
  },
  {
    id: 7,
    title: "Task Management",
    description: "Organize and prioritize tasks and projects",
    category: "Productivity",
    status: "Completed",
    date: "2023-02-28",
  },
  {
    id: 8,
    title: "Healthcare Portal",
    description: "Patient records and appointment scheduling",
    category: "Healthcare",
    status: "In Review",
    date: "2023-05-30",
  },
]

export default function Grid1() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")

  // Filter items based on search term
  const filteredItems = gridItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Status badge color mapping
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "In Review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Planning":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-muted-foreground">Browse and manage your projects</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative w-full sm:w-auto flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-r-none ${viewMode === "grid" ? "bg-muted" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`rounded-l-none ${viewMode === "list" ? "bg-muted" : ""}`}
              onClick={() => setViewMode("list")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                </div>
                <CardDescription className="line-clamp-2 mt-1">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between mt-2">
                  <Badge variant="outline">{item.category}</Badge>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-end">
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="p-4 flex flex-col sm:flex-row gap-4 justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-2">
                  <Badge variant="outline">{item.category}</Badge>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                  <Button variant="ghost" size="sm" className="sm:mt-2">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
