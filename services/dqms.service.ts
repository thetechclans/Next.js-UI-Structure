import {
  API_PATHS,
  DQMS_ENDPOINTS,
  REFERENCE_ENDPOINTS,
} from "@/config/api-endpoints";
import { apiService } from "./api.service";
import { MemberStatus } from "@/models/member-status.model";

import { DQMSModel, DQMSQueryParams, DQMSResponse } from "@/models/dqms.model";

class DQMSService {
  private basePath = API_PATHS.DQMS;

  async getAll(query?: DQMSQueryParams) {
    return apiService.getAllPaginated<DQMSResponse>(
      `${this.basePath}${DQMS_ENDPOINTS.GET_ALL}`,
      query
    );
  }

  async create(data: Partial<MemberStatus>): Promise<MemberStatus | null> {
    return apiService.create<MemberStatus>(
      `${this.basePath}${REFERENCE_ENDPOINTS.CREATE}/`,
      data
    );
  }

  async update(
    id: string,
    data: Partial<MemberStatus>
  ): Promise<MemberStatus | null> {
    return apiService.update<MemberStatus>(
      `${this.basePath}${REFERENCE_ENDPOINTS.UPDATE(id)}/`,
      data
    );
  }

  async delete(id: string): Promise<boolean> {
    return await apiService.deleteItem(
      `${this.basePath}${REFERENCE_ENDPOINTS.DELETE(id)}`
    );
  }
}

export const DQMSservice = new DQMSService();
