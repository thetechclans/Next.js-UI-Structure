"use client"

import type React from "react"

import { useState } from "react"
import { useLocale } from "@/components/locale/locale-provider"
import { Button } from "@/components/ui-components/button"
import { FormField } from "@/components/ui-components/form-field"
import type { User, UserCreateRequest, UserUpdateRequest } from "@/models/user.model"
import { UserService } from "@/services/user.service"
import { RoleMap } from "@/models/role.model"
import { X } from "lucide-react"

interface UserFormModalProps {
  user: User | null
  onClose: () => void
  onSubmit: (success: boolean) => void
}

export function UserFormModal({ user, onClose, onSubmit }: UserFormModalProps) {
  const { t } = useLocale()
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    password: "",
    confirmPassword: "",
    usermobile: user?.usermobile || "",
    rolecode: user?.rolecode || 4,
    is_active: user?.is_active ?? true,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.username.trim()) {
      newErrors.username = t("username_required")
    }

    if (!formData.email.trim()) {
      newErrors.email = t("email_required")
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("invalid_email")
    }

    if (!user && !formData.password) {
      newErrors.password = t("password_required")
    } else if (formData.password && formData.password.length < 8) {
      newErrors.password = t("password_too_short")
    }

    if (formData.password && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t("passwords_not_match")
    }

    if (!formData.usermobile.trim()) {
      newErrors.usermobile = t("mobile_required")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      if (user) {
        // Update existing user
        const updateData: UserUpdateRequest = {
          id: user.id,
          username: formData.username,
          email: formData.email,
          usermobile: formData.usermobile,
          rolecode: formData.rolecode,
          is_active: formData.is_active,
        }

        if (formData.password) {
          updateData.password = formData.password
        }

        await UserService.updateUser(updateData)
      } else {
        // Create new user
        const createData: UserCreateRequest = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          usermobile: formData.usermobile,
          rolecode: formData.rolecode,
        }

        await UserService.createUser(createData)
      }

      onSubmit(true)
    } catch (error) {
      console.error("Error submitting user form:", error)
      onSubmit(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-background p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">{user ? t("edit_user") : t("add_user")}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label={t("username")}
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            error={errors.username}
          />

          <FormField
            label={t("email")}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            error={errors.email}
          />

          <FormField
            label={t("password")}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required={!user}
            error={errors.password}
            helperText={user ? t("leave_blank_to_keep_current") : ""}
          />

          <FormField
            label={t("confirm_password")}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required={!user || !!formData.password}
            error={errors.confirmPassword}
          />

          <FormField
            label={t("mobile")}
            name="usermobile"
            value={formData.usermobile}
            onChange={handleChange}
            required
            error={errors.usermobile}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium">
              {t("role")}
              <span className="text-destructive ml-1">*</span>
            </label>
            <select
              name="rolecode"
              value={formData.rolecode}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {Object.entries(RoleMap).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {user && (
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="is_active"
                name="is_active"
                checked={formData.is_active}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="is_active" className="text-sm font-medium">
                {t("active")}
              </label>
            </div>
          )}

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              {t("cancel")}
            </Button>
            <Button type="submit" isLoading={isSubmitting}>
              {user ? t("update") : t("create")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
