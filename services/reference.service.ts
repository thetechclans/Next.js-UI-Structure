import { API_PATHS, REFERENCE_ENDPOINTS } from "@/config/api-endpoints"
import { apiService } from "./api.service"
import { MemberStatus } from "@/models/member-status.model"


class ReferenceService {
  private basePath = API_PATHS.REFERENCE_DATA

  async getAll(): Promise<MemberStatus[] | null> {
    return apiService.getAll<MemberStatus[]>(this.basePath + REFERENCE_ENDPOINTS.GET_ALL)
  }

  async create(data: Partial<MemberStatus>): Promise<MemberStatus | null> {
    return apiService.create<MemberStatus>(`${this.basePath}${REFERENCE_ENDPOINTS.CREATE}/`, data)
  }

  async update(id: string, data: Partial<MemberStatus>): Promise<MemberStatus | null> {
    return apiService.update<MemberStatus>(`${this.basePath}${REFERENCE_ENDPOINTS.UPDATE(id)}/`, data)
  }

  async delete(id: string): Promise<boolean> {
    return await apiService.deleteItem(`${this.basePath}${REFERENCE_ENDPOINTS.DELETE(id)}`)
  }
}

export const referenceService = new ReferenceService()