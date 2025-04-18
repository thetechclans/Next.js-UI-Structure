// // In api.service.ts
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


// export interface ApiResponse<T> {
//   success: boolean
//   data: T
//   message: string
// }

// export interface PaginatedApiResponse<T> extends ApiResponse<T[]> {
//   total: number
//   page: number
//   limit: number
// }

// export interface ApiError {
//   message: string
//   status: number
// }

// export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
//   try {
//     if (!API_BASE_URL) {
//       throw new Error("API_BASE_URL is not defined. Please check your environment variables.")
//     }

//     const url = `${API_BASE_URL}${endpoint}`
//     const headers = {
//       "Content-Type": "application/json",
//       ...options.headers,
//     }

//     const response = await fetch(url, {
//       ...options,
//       headers,
//     })

//     if (!response.ok) {
//       const error: ApiError = {
//         message: `API Error: ${response.statusText}`,
//         status: response.status,
//       }
//       throw error
//     }

//     // ✅ Check for 204 No Content and skip JSON parsing
//     if (response.status === 204) {
//       // @ts-ignore if T is not void, it's okay — you just won’t use the data
//       return {} as T
//     }

//     const data = await response.json()
//     return data
//   } catch (error) {
//     console.error("API request failed:", error)

//     if (error instanceof Error) {
//       throw new Error(`API request failed: ${error.message}`)
//     }

//     throw new Error("API request failed: Unknown error")
//   }
// }


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
    return response.success // ✅ Just this is enough
  }
  
}

export const apiService = new ApiService()
