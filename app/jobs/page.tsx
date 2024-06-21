import { getJobs } from '@/modules/job/actions/actions'
import List from '@/modules/job/components/list'
import Search from '@/modules/job/components/search'

interface Props {
  searchParams: { title?: string }
}

export default async function JobsPage({ searchParams: { title } }: Props) {
  const jobs = await getJobs(title)

  return (
    <>
      <Search />
      <List jobs={jobs} />
    </>
  )
}
