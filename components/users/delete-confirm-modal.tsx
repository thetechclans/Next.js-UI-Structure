"use client"

import { useLocale } from "@/components/locale/locale-provider"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface DeleteConfirmModalProps {
  username: string
  onClose: () => void
  onConfirm: (confirmed: boolean) => void
}

export function DeleteConfirmModal({ username, onClose, onConfirm }: DeleteConfirmModalProps) {
  const { t } = useLocale()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-background p-6 shadow-lg">
        <div className="mb-4 flex items-center">
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{t("confirm_delete")}</h2>
            <p className="text-sm text-muted-foreground">{t("delete_confirmation_message").replace("{username}", username)}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            {t("cancel")}
          </Button>
          <Button variant="destructive" onClick={() => onConfirm(true)}>
            {t("delete")}
          </Button>
        </div>
      </div>
    </div>
  )
}
