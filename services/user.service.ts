import { API_PATHS, USER_ENDPOINTS } from "@/config/api-endpoints"
import { apiService } from "./api.service"
import type { User } from "@/models/user.model"

export type UserQueryParams = {
  limit: number
  offset: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

class UserService {
  private basePath = API_PATHS.USERS

  async getAll(query?: UserQueryParams) {
    return apiService.getAllPaginated<User>(`${this.basePath}${USER_ENDPOINTS.GET_ALL}`, query)
  }

  async getById(id: string): Promise<User | null> {
    return apiService.getById<User>(this.basePath, id)
  }

  async create(data: Partial<User>): Promise<User | null> {
    return apiService.create<User>(`${this.basePath}${USER_ENDPOINTS.CREATE}/`, data)
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    return apiService.update<User>(`${this.basePath}${USER_ENDPOINTS.UPDATE(id)}/`, data)
  }

  async delete(id: string): Promise<boolean> {
    return await apiService.deleteItem(`${this.basePath}${USER_ENDPOINTS.DELETE(id)}`)
  }
}

export const userService = new UserService()
