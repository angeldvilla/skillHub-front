import type { User } from '@/modules/user/types'

export interface Job {
  id: number
  category: string
  description: string
  image: string
  location: string
  title: string
  wage: number
  userId: number
  user: User
}
