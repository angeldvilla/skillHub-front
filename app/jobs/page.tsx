import { getJobs } from '@/modules/job/actions/actions'
import Menu from '@/modules/job/components/menu'
import JobsDisplay from '@/modules/job/components/jobDispaly'

interface Props {
  searchParams: { title?: string; category?: string; location?: string }
}

export default async function JobsPage({
  searchParams: { title, category, location }
}: Props) {
  const jobs = await getJobs(title, category, location)

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left column for menu */}
      <div className="w-full border-b border-neutral-700 p-4 md:w-[240px] md:border-b-0 md:border-r">
        <Menu />
      </div>

      {/* Right column for jobs */}
      <div className="w-full p-2">
        <JobsDisplay jobs={jobs} />
      </div>
    </div>
  )
}
