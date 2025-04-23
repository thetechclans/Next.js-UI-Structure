import { toast } from "@/hooks/use-toast";
import { apiService } from "./api.service";
import { API_PATHS } from "./api-endpoints";
import { getHttpStatusMessage } from "./http-status-codes";
import { logErrorToFirebase } from "./log-error-to-firebase";

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T | null;
  error?: string;
  message?: string;
}

export class BaseApiService {
  protected baseUrl: string;
  isLoggingError: any;

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

  private async logError(errorPayload: any, endpoint: string) {
    if (endpoint === API_PATHS.ERROR_LOG) return;

    console.log("🔥 Logging error to API");
  
    try {
      // Primary logging attempt to the Django API
      const res = await fetch(`${this.baseUrl}${API_PATHS.ERROR_LOG}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(errorPayload),
      });
  
      if (!res.ok) {
        throw new Error("Failed to log error to API");
      }

    } catch (apiError) {
      try {
        // Fallback to Firebase logging
        await logErrorToFirebase(errorPayload);
      } catch (firebaseError) {
        console.error("🔥 Failed to log error to Firebase as fallback", firebaseError);
      }
    }
  }
  
  protected async fetchApi<T>(
    endpoint: string,
    options: RequestInit = {},
    params?: Record<string, any>
  ): Promise<ApiResponse<T>> {
    const url = this.buildUrl(endpoint, params);
    const method = options.method || "GET";
  
    // console.log("🔄 Fetching API:", endpoint)

    // try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });
  
      if (!response.ok) {
        const errorPayload = {
          path: url,
          method,
          statusCode: response.status,
          message: response.statusText || getHttpStatusMessage(response.status),
        };
  
        // Log the error, except when it's the error logging endpoint itself
        // await this.logError(errorPayload, endpoint);
  
        toast({
          title: "API Error",
          description: errorPayload.message,
          variant: "destructive",
        });
  
        throw new Error(errorPayload.message);
      }
  
      const statusCode = response.status;
      if (statusCode === 204) {
        return {
          success: true,
          data: null,
          message: getHttpStatusMessage(statusCode),
        };
      }
  
      const data = await response.json();
  
      return {
        success: true,
        data: data as T,
        message: data.msg ?? getHttpStatusMessage(statusCode),
      };
    // } catch (err: any) {
    //   const errorPayload = {
    //     path: url,
    //     method,
    //     statusCode: 0,
    //     message: err.message || "Network error",
    //   };
  
    //   // Log the network error, except when it's the error logging endpoint itself
    //   await this.logError(errorPayload, endpoint);
  
    //   toast({
    //     title: "Network Error",
    //     description: errorPayload.message,
    //     variant: "destructive",
    //   });
  
    //   throw new Error(errorPayload.message);
    // }
  }
  
  // protected async get<T>(endpoint: string): Promise<ApiResponse<T>> {
  //   return this.fetchApi<T>(endpoint, { method: "GET" });
  // }

  // protected async post<T>(
  //   endpoint: string,
  //   data: any
  // ): Promise<ApiResponse<T>> {
  //   return this.fetchApi<T>(endpoint, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });
  // }

  // protected async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
  //   return this.fetchApi<T>(endpoint, {
  //     method: "PUT",
  //     body: JSON.stringify(data),
  //   });
  // }

  // protected async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
  //   return this.fetchApi<T>(endpoint, { method: "DELETE" });
  // }
}
