'use server'

import type { User } from '@/modules/user/types'

import { z } from 'zod'

import { API_URL } from '@/config'

export const createUser = async (
  _prevState: {
    email: string
    username: string
    name: string
    password: string
  },
  formData: FormData
) => {
  const schema = z.object({
    email: z.string().email(),
    username: z.string().min(2).max(50),
    name: z.string().min(2).max(50),
    password: z.string().min(6).max(50)
  })

  const parse = schema.safeParse({
    email: formData.get('email') as string,
    username: formData.get('username') as string,
    name: formData.get('name') as string,
    password: formData.get('password') as string
  })

  if (!parse.success) {
    throw new Error(parse.error.issues.toString())
  }
  const id = (await getUsers()).length + 1
  const data = { ...parse.data, id }

  const res = await fetch(`${API_URL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (!res.ok) throw new Error('Failed to create user')

  return data
}

export const getUsers = async () => {
  const res = await fetch(`${API_URL}/user`)
  const data = (await res.json()) as User[]

  if (!res.ok) throw new Error('Failed to fetch users')

  return data
}
