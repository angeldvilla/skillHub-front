import { getJobs } from '@/modules/job/actions/actions'
import List from '@/modules/job/components/list'
import Menu from '@/modules/job/components/menu'
import Search from '@/modules/job/components/search'
import { View } from '@/modules/job/components/view'

interface Props {
  searchParams: {
    title?: string
    category?: string
    location?: string
    wageOperator?: string
    wageValue?: number
  }
}

export default async function JobsPage({
  searchParams: { title, category, location, wageOperator, wageValue }
}: Props) {
  const jobs = await getJobs(title, category, location, wageOperator, wageValue)

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left column for menu */}
      <div className="w-full border-b border-neutral-700 p-4 md:w-[240px] md:border-b-0 md:border-r">
        <Menu />
      </div>

      {/* Right column for jobs */}
      <div className="w-full">
        <h1 className="my-4 text-center text-3xl">Explore Jobs</h1>
        <div className="flex items-center justify-center gap-x-6">
          <Search />
          <View />
        </div>
        <List jobs={jobs} />
      </div>
    </div>
  )
}
