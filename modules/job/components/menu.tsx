import { getCategories, getJobs } from '@/modules/job/actions/actions'

import Filter from './filter'

export default async function Menu() {
  const jobsData = getJobs()
  const categoriesData = getCategories()

  const [jobs, categories] = await Promise.all([jobsData, categoriesData])
  const locations = Array.from(new Set(jobs.map(({ location }) => location)))

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="m-2 text-center text-3xl">Menu</h1>
      <Filter filters={categories} label="Category" />
      <Filter filters={locations} label="Location" />
    </div>
  )
}
