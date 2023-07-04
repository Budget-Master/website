import Swal, { SweetAlertIcon } from 'sweetalert2'

type NotificationOptions = {
  title: string
  text?: string
  icon: SweetAlertIcon
  confirmButtonText?: string
}

export function showNotification({
  title,
  text = '',
  icon,
  confirmButtonText = 'OK',
}: NotificationOptions): Promise<void> {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  }).then()
}

export function showSuccessNotification(
  title: string,
  text?: string,
): Promise<void> {
  return showNotification({ title, text, icon: 'success' })
}

export function showErrorNotification(
  title: string,
  text?: string,
): Promise<void> {
  return showNotification({ title, text, icon: 'error' })
}

export function showWarningNotification(
  title: string,
  text?: string,
): Promise<void> {
  return showNotification({ title, text, icon: 'warning' })
}

export function showInfoNotification(
  title: string,
  text?: string,
): Promise<void> {
  return showNotification({ title, text, icon: 'info' })
}
