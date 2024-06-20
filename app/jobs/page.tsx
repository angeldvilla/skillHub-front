import { getJobs } from '@/modules/job/actions/actions'
import List from '@/modules/job/components/list'

export default async function JobsPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const jobs = await getJobs()

  return (
    <div className="flex h-full flex-col">
      <List jobs={jobs} />
    </div>
  )
}
