'use server'

import type { Job } from '@/modules/job/types'

import { z } from 'zod'

import { API_URL } from '@/constants'

export const createJob = async (
  _prevState: {
    id: number
    category: string
    description: string
    image: string
    location: string
    title: string
    wage: number
  },
  formData: FormData
) => {
  const schema = z.object({
    id: z.number(),
    category: z.string(),
    description: z.string(),
    image: z.string(),
    location: z.string(),
    title: z.string(),
    wage: z.number()
  })

  const parse = schema.safeParse({
    // TODO: Update id with a more efficient way for example with uuid
    id: await getJobs().then((jobs) => jobs.length + 1),
    category: formData.get('category'),
    description: formData.get('description'),
    image: formData.get('image'),
    location: formData.get('location'),
    title: formData.get('title'),
    wage: Number(formData.get('wage'))
  })

  if (!parse.success) {
    throw new Error(parse.error.issues.toString())
  }

  // TODO: Update userId with current userId
  const job = { ...parse.data, userId: 1 }

  const res = await fetch(`${API_URL}/job`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job)
  })

  if (!res.ok) throw new Error('Failed to create job')

  return job
}

export const getJobs = async (
  title?: string,
  category?: string,
  location?: string,
  wageOperator?: string,
  wageValue?: number
) => {
  const params = new URLSearchParams()

  if (title) params.set('title', title)
  else params.delete('title')

  if (category) params.set('category', category)
  else params.delete('category')

  if (location) params.set('location', location)
  else params.delete('location')

  if (wageOperator && wageValue !== undefined) {
    params.set('wageOperator', wageOperator)
    params.set('wageValue', wageValue.toString())
  }

  const res = await fetch(`${API_URL}/job?${params.toString()}`, {
    cache: 'no-store'
  })

  if (!res.ok) throw new Error('Failed to fetch jobs')

  return (await res.json()) as Job[]
}

export const getJob = async (id: string) => {
  const res = await fetch(`${API_URL}/job/${id}`, { cache: 'no-store' })

  if (!res.ok) throw new Error('Failed to fetch job')

  return (await res.json()) as Job
}

export const getCategories = async () => {
  const res = await fetch(`${API_URL}/category`)

  if (!res.ok) throw new Error('Failed to fetch categories')

  return (await res.json()) as string[]
}
