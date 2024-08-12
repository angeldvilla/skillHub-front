import { getCategories, getJobs } from '@/modules/job/actions/actions'

import Filter from './filter'

const operators = [
  'equal',
  'greater than',
  'greater than or equal',
  'less than',
  'less than or equal'
]

const wages = ['500', '1000', '2500', '5000', '10000', '20000']

export default async function Menu() {
  const jobsData = getJobs()
  const categoriesData = getCategories()

  const [jobs, categories] = await Promise.all([jobsData, categoriesData])
  const locations = Array.from(new Set(jobs.map(({ location }) => location)))

  return (
    <div className="flex flex-col border-r-2 border-gray-500/50 pt-8">
      <h1 className="my-6 text-center text-3xl">Filter</h1>
      <div className="mx-auto flex flex-wrap justify-center gap-4 lg:max-w-72 lg:gap-8">
        <Filter filters={categories} label="Category" />
        <Filter filters={locations} label="Location" />
        <Filter filters={operators} label="Wage Operator" />
        <Filter filters={wages} label="Wage Value" />
      </div>
    </div>
  )
}
