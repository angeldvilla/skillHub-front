import Image from 'next/image'

import { getCategories, getJobs } from '@/modules/job/actions/actions'
import List from '@/modules/job/components/list'
import Menu from '@/modules/job/components/menu'
import Search from '@/modules/job/components/search'

interface Props {
  searchParams: { title?: string; category?: string }
}

export default async function JobsPage({
  searchParams: { title, category }
}: Props) {
  const jobsData = getJobs(title, category)
  const categoriesData = getCategories()

  const [jobs, categories] = await Promise.all([jobsData, categoriesData])

  return (
    <div className="flex min-h-screen">
      {/* Left column for menu */}
      <div className="w-[240px] border-r border-neutral-700 p-4">
        <Menu categories={categories} />
      </div>

      {/* Right column for jobs */}
      <div className="w-[100%] p-2">
        <div className="mb-4">
          <Search />
        </div>

        {jobs.length ? (
          <List jobs={jobs} />
        ) : (
          <p className="my-28 flex flex-col items-center gap-8 text-center text-3xl">
            <Image
              alt="not-found-jobs"
              className="object-contain"
              height={300}
              src="/NotFoundJobs.webp"
              width={300}
            />
            No jobs found with that title
          </p>
        )}
      </div>
    </div>
  )
}
