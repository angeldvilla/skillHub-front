import { getJobs } from '@/modules/job/actions/actions'
import List from '@/modules/job/components/list'
import Search from '@/modules/job/components/search'

interface Props {
  searchParams: { title?: string }
}

export default async function JobsPage({ searchParams: { title } }: Props) {
  const jobs = await getJobs(title)

  if (jobs.length)
    return (
      <>
        <Search />
        <List jobs={jobs} />
      </>
    )

  return (
    <>
      <Search />
      {/* TODO: Fix styles */}
      <p className="my-48 text-center text-xl">No jobs found with that title</p>
    </>
  )
}
