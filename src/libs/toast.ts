import { toast } from 'sonner'

export const toastSuccess = (message: string) => toast.success(message)
export const toastError = (message: string) => toast.error(message)