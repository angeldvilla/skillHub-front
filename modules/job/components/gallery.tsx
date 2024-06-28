'use client'

import type { Job } from '@/modules/job/types'

import { useState, useEffect } from 'react'

import { capitalizeFirstLetter, slugify } from '@/lib/utils'

import Card from './card'
import SkeletonCard from './skeletonCard'

export default function Gallery({ jobs }: { jobs: Job[] }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return isLoading ? (
    <div className="mx-auto mb-4 grid w-full max-w-lg grid-cols-1 gap-5 rounded-3xl border-2 border-neutral-700 p-8 text-neutral-500 md:max-w-4xl md:grid-cols-2 xl:max-w-7xl xl:grid-cols-3 xl:gap-6">
      {jobs.map(({ id }) => (
        <SkeletonCard key={id} />
      ))}
    </div>
  ) : (
    <div className="mx-auto mb-4 grid w-full max-w-lg grid-cols-1 gap-5 rounded-3xl border-2 border-neutral-700 p-8 text-neutral-500 md:max-w-4xl md:grid-cols-2 xl:max-w-7xl xl:grid-cols-3 xl:gap-6">
      {jobs.map(({ id, category, description, image, location, title }) => (
        <Card
          key={id}
          category={capitalizeFirstLetter(slugify(category))}
          description={description}
          id={id}
          image={image}
          location={capitalizeFirstLetter(location)}
          title={title}
        />
      ))}
    </div>
  )
}
