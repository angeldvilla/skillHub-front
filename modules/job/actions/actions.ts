import type { Job } from '@/modules/job/types'

import { API_URL } from '@/config'

export const getJobs = async () => {
  const res = await fetch(`${API_URL}/job`)
  const data = (await res.json()) as Job[]

  if (!res.ok) {
    throw new Error('Failed to fetch jobs')
  }

  return data
}
