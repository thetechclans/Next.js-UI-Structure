import { toast } from "@/hooks/use-toast"
import { trackApiErrorToGA } from "@/lib/track-error"
import { errorLogService } from "./error-log.service"

export interface ApiResponse<T = any> {
  success: boolean
  data?: T | null
  error?: string
  message?: string
}

export class BaseApiService {
  protected baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  protected buildUrl(endpoint: string, params?: Record<string, any>): string {
    const url = new URL(`${this.baseUrl}/${endpoint}`)
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          url.searchParams.append(key, String(value))
        }
      })
    }
    return url.toString()
  }
  

  // protected async fetchApi<T>(endpoint: string, options: RequestInit = {}, params?: Record<string, any>): Promise<ApiResponse<T>> {
  //   try {
  //     const url = this.buildUrl(endpoint, params)
  //     const response = await fetch(url, {
  //       ...options,
  //       headers: {
  //         "Content-Type": "application/json",
  //         ...options.headers,
  //       },
  //     })
  
  //     // Handle the 204 No Content status
  //     if (response.status === 204) {
  //       return {
  //         success: true,
  //         data: null, // No data to return
  //         message: "No content returned", // Optional message
  //       }
  //     }
  
  //     const data = await response.json()
  
  //     // If the response is not ok, throw an error
  //     if (!response.ok) {
  //       throw new Error(data.message || "API error")
  //     }
  
  //     return {
  //       success: true,
  //       data: data as T,
  //       message: data.message,
  //     }
  //   } catch (error) {
  //     const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
  //     toast({
  //       title: "API Error",
  //       description: errorMessage,
  //       variant: "destructive",
  //     })
  //     return { success: false, error: errorMessage }
  //   }
  // }
  
  protected async fetchApi<T>(
    endpoint: string,
    options: RequestInit = {},
    params?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    try {
      const url = this.buildUrl(endpoint, params)
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      })
  
      const method = options.method || "GET"
      const statusCode = response.status
  
      if (statusCode === 204) {
        return { success: true, data: null }
      }
  
      const data = await response.json()
  
      if (!response.ok) {
        const errorPayload = {
          path: url,
          method,
          statusCode,
          message: data.message || response.statusText,
        }
  
        // Try to log in DB
        try {
          await errorLogService.logError(errorPayload)
        } catch {
          // If that fails, fallback to GA
          trackApiErrorToGA(errorPayload)
        }
  
        throw new Error(errorPayload.message)
      }
  
      return {
        success: true,
        data: data as T,
        message: data.message,
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error occurred"
  
      // If fetch itself failed (e.g., network error)
      trackApiErrorToGA({
        path: endpoint,
        method: options.method || "GET",
        message,
      })
  
      toast({
        title: "API Error",
        description: message,
        variant: "destructive",
      })
  
      return { success: false, error: message }
    }
  }
  
  

  protected async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(endpoint, { method: "GET" })
  }

  protected async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  protected async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    })
  }

  protected async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(endpoint, { method: "DELETE" })
  }
}
