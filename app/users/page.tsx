"use client"

import { useState, useEffect } from "react"
import { useLocale } from "@/components/locale/locale-provider"
import { Button } from "@/components/ui-components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui-components/card"
import { Search } from "@/components/ui-components/search"
import { Pagination } from "@/components/ui-components/pagination"
import { Notification } from "@/components/ui-components/notification"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui-components/table"
import type { User } from "@/models/user.model"
import { UserService, type UserQueryParams } from "@/services/user.service"
import { RoleMap } from "@/models/role.model"
import { Edit, Plus, Trash2, ArrowUpDown, AlertTriangle, RefreshCw } from "lucide-react"
import { UserFormModal } from "@/components/users/user-form-modal"
import { DeleteConfirmModal } from "@/components/users/delete-confirm-modal"

export default function UsersPage() {
  const { t, dir } = useLocale()
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalUsers, setTotalUsers] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState("")
  const [sortBy, setSortBy] = useState<string | undefined>(undefined)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>(undefined)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationType, setNotificationType] = useState<"success" | "error" | "info" | "warning">("info")
  const [notificationMessage, setNotificationMessage] = useState("")
  const [isUserFormOpen, setIsUserFormOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const limit = 10

  const fetchUsers = async () => {
    setLoading(true)
    setError(null)

    try {
      const params: UserQueryParams = {
        sortBy,
        sortOrder,
      }

      const response = await UserService.getUsers(params)
      console.log("Fetched users response:", response)
      setUsers(response)
      // setTotalUsers(response.total)
    } catch (err) {
      console.error("Error fetching users:", err)
      setError(t("error_fetching_users"))
      setUsers([])
      // setTotalUsers(0)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [ sortBy, sortOrder])

  const handleSearch = () => {
    setCurrentPage(1)
    fetchUsers()
  }

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  const showNotificationMessage = (type: "success" | "error" | "info" | "warning", message: string) => {
    setNotificationType(type)
    setNotificationMessage(message)
    setShowNotification(true)
  }

  const handleAddUser = () => {
    setSelectedUser(null)
    setIsUserFormOpen(true)
  }

  const handleEditUser = (user: User) => {
    setSelectedUser(user)
    setIsUserFormOpen(true)
  }

  const handleDeleteUser = (user: User) => {
    setSelectedUser(user)
    setIsDeleteModalOpen(true)
  }

  const handleUserFormSubmit = async (success: boolean) => {
    setIsUserFormOpen(false)
    if (success) {
      showNotificationMessage("success", selectedUser ? t("user_updated") : t("user_created"))
      fetchUsers()
    }
  }

  const handleUserDelete = async (confirmed: boolean) => {
    setIsDeleteModalOpen(false)

    if (confirmed && selectedUser) {
      try {
        await UserService.deleteUser(selectedUser.id)
        showNotificationMessage("success", t("user_deleted"))
        fetchUsers()
      } catch (error) {
        showNotificationMessage("error", t("error_deleting_user"))
      }
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "-"
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const getSortIcon = (column: string) => {
    if (sortBy !== column) return <ArrowUpDown className="ml-2 h-4 w-4" />
    return sortOrder === "asc" ? "↑" : "↓"
  }

    // Filtered and paginated data (client side)
    const filteredUsers = users.filter(user =>
      user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.usermobile?.toLowerCase().includes(searchValue.toLowerCase())
    )
  
    const totalFilteredUsers = filteredUsers.length
    const paginatedUsers = filteredUsers.slice((currentPage - 1) * limit, currentPage * limit)

  // Render API connection error message
  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{t("user_management")}</h1>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 rounded-full bg-red-100 p-3">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-lg font-medium">{t("api_connection_error")}</h3>
              <p className="mb-6 max-w-md text-sm text-muted-foreground">{t("api_connection_error_message")}</p>
              <Button onClick={fetchUsers} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                {t("retry")}
              </Button>

              <div className="mt-8 rounded-md bg-amber-50 p-4 text-left">
                <h4 className="mb-2 font-medium text-amber-800">{t("troubleshooting")}</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-amber-700">
                  <li>
                    {t("check_api_url")}:{" "}
                    <code className="rounded bg-amber-100 px-1 py-0.5">
                      {process.env.NEXT_PUBLIC_API_BASE_URL || "Not set"}
                    </code>
                  </li>
                  <li>{t("check_api_running")}</li>
                  <li>{t("check_cors_settings")}</li>
                  <li>{t("check_network_connection")}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t("user_management")}</h1>
        <Button onClick={handleAddUser}>
          <Plus className="mr-2 h-4 w-4" /> {t("add_user")}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("users")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Search
              placeholder={t("search_users")}
              value={searchValue}
              onChange={setSearchValue}
              onSearch={handleSearch}
              onClear={() => {
                setSearchValue("")
                setCurrentPage(1)
                fetchUsers()
              }}
            />
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead onClick={() => handleSort("username")} className="cursor-pointer">
                    {t("username")} {getSortIcon("username")}
                  </TableHead>
                  <TableHead onClick={() => handleSort("email")} className="cursor-pointer">
                    {t("email")} {getSortIcon("email")}
                  </TableHead>
                  <TableHead onClick={() => handleSort("usermobile")} className="cursor-pointer">
                    {t("mobile")} {getSortIcon("usermobile")}
                  </TableHead>
                  <TableHead onClick={() => handleSort("rolecode")} className="cursor-pointer">
                    {t("role")} {getSortIcon("rolecode")}
                  </TableHead>
                  <TableHead onClick={() => handleSort("is_active")} className="cursor-pointer">
                    {t("status")} {getSortIcon("is_active")}
                  </TableHead>
                  <TableHead onClick={() => handleSort("last_login")} className="cursor-pointer">
                    {t("last_login")} {getSortIcon("last_login")}
                  </TableHead>
                  <TableHead className="text-right">{t("actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      {t("loading")}...
                    </TableCell>
                  </TableRow>
                ) : users?.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      {t("no_users_found")}
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedUsers?.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.usermobile}</TableCell>
                      <TableCell>{RoleMap[user.rolecode] || user.rolecode}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            user.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.is_active ? t("active") : t("inactive")}
                        </span>
                      </TableCell>
                      <TableCell>{formatDate(user.last_login)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEditUser(user)}>
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">{t("edit")}</span>
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteUser(user)}>
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">{t("delete")}</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {totalFilteredUsers  > 0 && (
            <div className="mt-4 flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(totalFilteredUsers  / limit)}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {isUserFormOpen && (
        <UserFormModal user={selectedUser} onClose={() => setIsUserFormOpen(false)} onSubmit={handleUserFormSubmit} />
      )}

      {isDeleteModalOpen && selectedUser && (
        <DeleteConfirmModal
          username={selectedUser.username}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleUserDelete}
        />
      )}

      {showNotification && (
        <Notification
          type={notificationType}
          title={t(notificationType)}
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  )
}
