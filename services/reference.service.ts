import { MemberStatus } from "@/models/member-status.model"
import { fetchApi } from "./api.service"

export interface UserQueryParams {
  page?: number
  limit?: number
  search?: string
  sortBy?: string
  sortOrder?: "asc" | "desc"
}

export const ReferenceService = {

  getMemberStatuses: async (params: UserQueryParams = {}): Promise<MemberStatus[]> => {
      const queryParams = new URLSearchParams()
  
      if (params.page) queryParams.append("page", params.page.toString())
      if (params.limit) queryParams.append("limit", params.limit.toString())
      if (params.search) queryParams.append("search", params.search)
      if (params.sortBy) queryParams.append("sortBy", params.sortBy)
      if (params.sortOrder) queryParams.append("sortOrder", params.sortOrder)
  
      const endpoint = `apiMemberStatus/?${queryParams.toString()}`
      return fetchApi<MemberStatus[]>(endpoint)
    },

  getMemberStatusById: async (id: number): Promise<MemberStatus> => {
    return fetchApi<MemberStatus>(`apiMemberStatus/${id}/`)
  },

  createMemberStatus: async (status: MemberStatus): Promise<MemberStatus> => {
    return fetchApi<MemberStatus>("apiMemberStatus/", {
      method: "POST",
      body: JSON.stringify(status),
    })
  },

  updateMemberStatus: async (status: MemberStatus): Promise<MemberStatus> => {
    return fetchApi<MemberStatus>(`apiMemberStatus/${status.memberstatusid}/`, {
      method: "PUT",
      body: JSON.stringify(status),
    })
  },

  deleteMemberStatus: async (id: number): Promise<{ success: boolean; message: string }> => {
    return fetchApi<{ success: boolean; message: string }>(`apiMemberStatus/${id}/`, {
      method: "DELETE",
    })
  },
}
