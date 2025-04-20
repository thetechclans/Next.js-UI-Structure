/**
 * Global API endpoint configuration
 * Centralizes all endpoint paths for easier maintenance and consistency
 */

// Helper to generate common CRUD endpoints for a resource
const generateCrudEndpoints = () => ({
  GET_ALL: "",
  GET_BY_ID: (id: string) => `/${id}`,
  CREATE: "",
  UPDATE: (id: string) => `/${id}`,
  DELETE: (id: string) => `/${id}`,
})

// Base API paths
export const API_PATHS = {
  REFERENCE_DATA: "apiMemberStatus",
  USERS: "apiUserManagementEdit",
  ERROR_LOG: "ApiErrorLog",
  DQMS: "apiDCMetaDataRepoFilters"
}

// Reference data endpoints
export const REFERENCE_ENDPOINTS = generateCrudEndpoints()

// User endpoints
export const USER_ENDPOINTS = generateCrudEndpoints()

// Error log endpoints
export const ERROR_LOG_ENDPOINTS = {
  CREATE: "",
}

// DQMS endpoints
export const DQMS_ENDPOINTS = generateCrudEndpoints()