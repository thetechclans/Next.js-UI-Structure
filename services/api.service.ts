// In api.service.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export interface ApiResponse<T> {
  success: boolean
  data: T
  message: string
}

export interface PaginatedApiResponse<T> extends ApiResponse<T[]> {
  total: number
  page: number
  limit: number
}

export interface ApiError {
  message: string
  status: number
}

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  try {
    if (!API_BASE_URL) {
      throw new Error("API_BASE_URL is not defined. Please check your environment variables.")
    }

    const url = `${API_BASE_URL}${endpoint}`
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const error: ApiError = {
        message: `API Error: ${response.statusText}`,
        status: response.status,
      }
      throw error
    }

    // ✅ Check for 204 No Content and skip JSON parsing
    if (response.status === 204) {
      // @ts-ignore if T is not void, it's okay — you just won’t use the data
      return {} as T
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("API request failed:", error)

    if (error instanceof Error) {
      throw new Error(`API request failed: ${error.message}`)
    }

    throw new Error("API request failed: Unknown error")
  }
}
