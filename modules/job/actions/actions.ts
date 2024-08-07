'use server'

import { API_URL } from '@/config'
import { fetcher } from '@/modules/job/hooks/hooks'

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

  return await fetcher({
    url: `${API_URL}/job?${params.toString()}`,
    infoDataToFetch: 'jobs',
    cacheData: true
  })
}

export const getJob = async (id: string) => {
  return await fetcher({
    url: `${API_URL}/job/${id}`,
    infoDataToFetch: 'job',
    cacheData: true
  })
}

export const getCategories = async () => {
  return await fetcher({
    url: `${API_URL}/category`,
    infoDataToFetch: 'categories',
    cacheData: true
  })
}
