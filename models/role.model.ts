export interface Role {
  id: number
  name: string
  code: number
}

export const RoleMap: Record<number, string> = {
  1: "Super Admin",
  2: "Member",
  3: "Beneficiary",
}
