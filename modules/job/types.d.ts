export interface User {
  id: number
  name: string
  email: string
  role: string
}

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
