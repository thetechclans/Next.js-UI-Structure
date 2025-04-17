import type { User, UserCreateRequest, UserResponse, UserSingleResponse, UserUpdateRequest } from "@/models/user.model"
import { fetchApi } from "./api.service"

export interface UserQueryParams {
  page?: number
  limit?: number
  search?: string
  sortBy?: string
  sortOrder?: "asc" | "desc"
}

export const UserService = {
  getUsers: async (params: UserQueryParams = {}): Promise<User[]> => {
    const queryParams = new URLSearchParams()

    if (params.page) queryParams.append("page", params.page.toString())
    if (params.limit) queryParams.append("limit", params.limit.toString())
    if (params.search) queryParams.append("search", params.search)
    if (params.sortBy) queryParams.append("sortBy", params.sortBy)
    if (params.sortOrder) queryParams.append("sortOrder", params.sortOrder)

    const endpoint = `apiUserManagementEdit/?${queryParams.toString()}`
    return fetchApi<User[]>(endpoint)
  },

  getUserById: async (): Promise<UserSingleResponse> => {
    return fetchApi<UserSingleResponse>(`apiUserManagementEdit/`)
  },

  createUser: async (user: UserCreateRequest): Promise<UserSingleResponse> => {
    return fetchApi<UserSingleResponse>("apiUserManagementEdit/", {
      method: "POST",
      body: JSON.stringify(user),
    })
  },

  updateUser: async (user: UserUpdateRequest): Promise<UserSingleResponse> => {
    return fetchApi<UserSingleResponse>(`apiUserManagementEdit/${user.id}/`, {
      method: "PUT",
      body: JSON.stringify(user),
    })
  },

  deleteUser: async (id: number): Promise<{ success: boolean; message: string }> => {
    return fetchApi<{ success: boolean; message: string }>(`apiUserManagementEdit/${id}/`, {
      method: "DELETE",
    })
  },
}
