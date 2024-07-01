import type { Job } from '@/modules/job/types'

import { API_URL } from '@/config'

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

  const data = (await res.json()) as Job[]

  if (!res.ok) throw new Error('Failed to fetch jobs')

  return data
}

export const getJob = async (id: string) => {
  const res = await fetch(`${API_URL}/job/${id}`, { cache: 'no-store' })
  const data = (await res.json()) as Job

  if (!res.ok) throw new Error('Failed to fetch job')

  return data
}

export const getCategories = async () => {
  const res = await fetch(`${API_URL}/category`)
  const data = (await res.json()) as string[]

  if (!res.ok) throw new Error('Failed to fetch categories')

  return data
}
