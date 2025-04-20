import { ApiErrorLog } from "@/models/error-log.model"
import { API_PATHS, ERROR_LOG_ENDPOINTS } from "@/config/api-endpoints"
import { apiService } from "./api.service"

class ErrorLogService {
  private basePath = API_PATHS.ERROR_LOG

  async logError(data: ApiErrorLog): Promise<void> {
    try {
      await apiService.create(`${this.basePath}${ERROR_LOG_ENDPOINTS.CREATE}/`, data)
    } catch (e) {
      console.error("Failed to log API error", e)
    }
  }
}

export const errorLogService = new ErrorLogService()
