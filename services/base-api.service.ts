import { toast } from "@/hooks/use-toast";
import { trackApiErrorToGA } from "@/lib/track-error";
import { apiService } from "./api.service";
import { API_PATHS } from "./api-endpoints";
import { getHttpStatusMessage } from "./http-status-codes";


export interface ApiResponse<T = any> {
  success: boolean;
  data?: T | null;
  error?: string;
  message?: string;
}

export class BaseApiService {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  protected buildUrl(endpoint: string, params?: Record<string, any>): string {
    const url = new URL(`${this.baseUrl}/${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          url.searchParams.append(key, String(value));
        }
      });
    }
    return url.toString();
  }

  protected async fetchApi<T>(
    endpoint: string,
    options: RequestInit = {},
    params?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    try {
      const url = this.buildUrl(endpoint, params);
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });
  
      const method = options.method || "GET";
      const statusCode = response.status;
  
      // Handle No Content (204) response
      if (statusCode === 204) {
        return { success: true, data: null, message: getHttpStatusMessage(statusCode) };
      }
  
      const data = await response.json();
  
      // Handle non-OK responses
      if (!response.ok) {
        const errorPayload = {
          path: url,
          method,
          statusCode,
          message: getHttpStatusMessage(statusCode),
        };
  
        // Log the error to the database or fallback to tracking
        try {
          await apiService.create({
            endpoint: API_PATHS.ERROR_LOG,
            body: { ...errorPayload, response: data },
          });
        } catch {
          trackApiErrorToGA(errorPayload);
        }
  
        // Throw an error with the HTTP status message
        throw new Error(errorPayload.message);
      }
  
      return {
        success: true,
        data: data as T,
        message: data.msg ?? getHttpStatusMessage(statusCode),
      };
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
  
      // Track the error if the fetch itself failed (e.g., network error)
      trackApiErrorToGA({
        path: endpoint,
        method: options.method || "GET",
        message,
      });
  
      // Show a toast notification for the error
      toast({
        title: "API Error",
        description: message,
        variant: "destructive",
      });
  
      return { success: false, error: message };
    }
  }

  protected async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(endpoint, { method: "GET" });
  }

  protected async post<T>(
    endpoint: string,
    data: any
  ): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  protected async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  protected async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.fetchApi<T>(endpoint, { method: "DELETE" });
  }
}
