export interface User {
  id: string
  name: string
  email: string
}

export type ApiResponse<T> = {
  data: T
  success: boolean
  message?: string
}
