import { BaseApiService } from "./base-api.service"

interface PaginationParams {
  page?: number
  page_size?: number
  search?: string
  ordering?: string
  [key: string]: any
}

interface PaginatedResponse<T> {
  results: T[]
  count: number
  next: string | null
  previous: string | null
}

class ApiService extends BaseApiService {
  constructor() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || ""
    super(apiBaseUrl)
  }

  async getAllPaginated<T>(endpoint: string, params?: PaginationParams): Promise<PaginatedResponse<T>> {
    const response = await this.fetchApi<T[] | PaginatedResponse<T>>(endpoint, { method: "GET" }, params)
  
    if (!response.success) {
      return { results: [], count: 0, next: null, previous: null }
    }
  
    const data = response.data
  
    // 👉 if data is an array, wrap it
    if (Array.isArray(data)) {
      return {
        results: data,
        count: data.length,
        next: null,
        previous: null,
      }
    }
  
    // else assume it's already paginated
    return data as PaginatedResponse<T>
  }
  

  async getById<T>(endpoint: string, id: string): Promise<T | null> {
    const response = await this.get<T>(`${endpoint}/${id}`)
    return response.success ? response.data || null : null
  }

  async create<T>(endpoint: string, data: any): Promise<T | null> {
    const response = await this.post<T>(endpoint, data)
    return response.success ? response.data || null : null
  }

  async update<T>(endpoint: string, data: any): Promise<T | null> {
    const response = await this.put<T>(endpoint, data)
    return response.success ? response.data || null : null
  }


  async deleteItem(endpoint: string): Promise<boolean> {
    const response = await this.delete(`${endpoint}/`)
    return response.success
  }
  
}

export const apiService = new ApiService()
