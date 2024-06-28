'use client'

import type { Job } from '@/modules/job/types'

import Image from 'next/image'
import { useState } from 'react'

import Gallery from '@/modules/job/components/gallery'
import List from '@/modules/job/components/list'

import Search from './search'

export default function JobsDisplay({ jobs }: { jobs: Job[] }) {
  const [view, setView] = useState<'list' | 'gallery'>('gallery')

  return (
    <div>
      <div className="mb-4 flex flex-col items-center justify-around md:flex-row">
        <Search setView={setView} view={view} />
      </div>

      {jobs.length ? (
        view === 'gallery' ? (
          <Gallery jobs={jobs} />
        ) : (
          <List jobs={jobs} />
        )
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
  )
}
