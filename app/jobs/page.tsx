import { getJobs } from '@/modules/job/actions/actions'
import List from '@/modules/job/components/list'

export default async function Page() {
  const jobs = await getJobs()

  return <List jobs={jobs} />
}
