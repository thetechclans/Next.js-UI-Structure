import { BaseApiService } from "./base-api.service";
import { ApiResponse } from "./base-api.service";
import { toast } from "@/hooks/use-toast";

interface ApiRequestParams {
  endpoint: string;
  queryParams?: Record<string, any>;
  body?: any;
  page?: number;
  limit?: number;
}

interface PaginatedResponse<T> {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
}

export class APIService extends BaseApiService {
  constructor() {
    super(process.env.NEXT_PUBLIC_API_BASE_URL || "");
  }

  async create<T>(params: ApiRequestParams): Promise<ApiResponse<T>> {
    const response = await this.fetchApi<T>(params.endpoint, {
      method: "POST",
      body: JSON.stringify(params.body),
    });

    return response;
  }


  async getAll<T>(params: ApiRequestParams): Promise<ApiResponse<T[]>> {
    console.log("api.service.ts:42:", params.endpoint);
    const response = await this.fetchApi<T[]>(
      params.endpoint,
      { method: "GET" },
      params.queryParams
    );

    console.log("🚀 ~ file: api.service.ts:42 ~ APIService ~ getAll ~ response:", params.endpoint);
    return response;
  }

  async getById<T>(params: ApiRequestParams): Promise<ApiResponse<T>> {
    const response = await this.fetchApi<T>(
      `${params.endpoint}/${params.queryParams?.id}`,
      { method: "GET" }
    );

    return response;
  }

  async update<T>(params: ApiRequestParams): Promise<ApiResponse<T>> {
    const response = await this.fetchApi<T>(
      `${params.endpoint}/${params.queryParams?.id}`,
      {
        method: "PUT",
        body: JSON.stringify(params.body),
      }
    );

    return response;
  }


  // async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
  //   // Implement using base class method
  //   return super.delete<T>(endpoint);
  // }

  // New unified delete method with params
  async deleteItem<T>(params: ApiRequestParams): Promise<boolean> {
    const response = await this.fetchApi<T>(
      `${params.endpoint}/${params.queryParams?.id}`,
      { method: "DELETE" }
    );
    return response.success;
  }


  async getAllPaginated<T>(
    params: ApiRequestParams
  ): Promise<PaginatedResponse<T>> {
    const response = await this.fetchApi<PaginatedResponse<T>>(
      params.endpoint,
      { method: "GET" },
      params.queryParams
    );

    if (!response.success) {
      return { results: [], count: 0, next: null, previous: null };
    }

    const data = response.data;

    // 👉 if data is an array, wrap it
    if (Array.isArray(data)) {
      return {
        results: data,
        count: data.length,
        next: null,
        previous: null,
      };
    }

    // else assume it's already paginated
    return data as PaginatedResponse<T>;
  }
}

export const apiService = new APIService();
