export interface User {
  id: number
  name: string
  email: string
  role: string
  username: string
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

export interface PostUser {
  name: string
  email: string
  password: string
  username: string
  confirmPassword: string
}
