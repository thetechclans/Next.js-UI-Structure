export interface User {
  id: number
  email: string
  username: string
  rolecode: number
  profileimage: string | null
  usermobile: string
  is_active: boolean
  emailverified: boolean
  emailverifieddate: string | null
  mobileverified: boolean
  mobileverifieddate: string | null
  last_login: string
  personid: number
  created_at: string
}

export interface UserCreateRequest {
  email: string
  username: string
  password: string
  rolecode: number
  usermobile: string
}

export interface UserUpdateRequest {
  id: number
  email?: string
  username?: string
  password?: string
  rolecode?: number
  usermobile?: string
  is_active?: boolean
}

export interface UserResponse {
  success: boolean
  data: User[]
  message: string
  total: number
  page: number
  limit: number
}

export interface UserSingleResponse {
  success: boolean
  data: User
  message: string
}
