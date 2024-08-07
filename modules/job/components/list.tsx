'use client'

import type { Job } from '@/modules/job/types'

import Image from 'next/image'

import GridView from '@/modules/job/components/grid-view'
import ListView from '@/modules/job/components/list-view'
import { useJobsView } from '@/store/use-jobs-view'

interface Props {
  jobs: Job[]
}

export default function List({ jobs }: Props) {
  const { view } = useJobsView()

  if (jobs.length) {
    return view === 'grid' ? <GridView jobs={jobs} /> : <ListView jobs={jobs} />
  }

  return (
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
  )
}
