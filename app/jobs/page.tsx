import Image from 'next/image'

import { getCategories, getJobs } from '@/modules/job/actions/actions'
import List from '@/modules/job/components/list'
import Menu from '@/modules/job/components/menu'
import Search from '@/modules/job/components/search'

interface Props {
  searchParams: { title?: string }
}

export default async function JobsPage({ searchParams: { title } }: Props) {
  const jobsData = getJobs(title)
  const categoriesData = getCategories()

  const [jobs, categories] = await Promise.all([jobsData, categoriesData])

  return (
    <>
      <div className="mx-auto flex max-w-5xl items-center justify-around">
        <Menu categories={categories} />
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
    </>
  )
}
