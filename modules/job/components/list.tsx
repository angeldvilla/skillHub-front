'use client'

import type { Job } from '@/modules/job/types'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import { capitalizeFirstLetter, slugify } from '@/lib/utils'

export default function List({ jobs }: { jobs: Job[] }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return isLoading ? (
    <div className="mx-auto mb-4 w-full max-w-lg gap-4 rounded-3xl border-2 border-neutral-700 p-8 text-neutral-500 md:max-w-4xl xl:max-w-7xl">
      {jobs.map(({ id }) => (
        <div
          key={id}
          className="mb-4 flex cursor-pointer flex-col gap-4 rounded-lg border border-neutral-700 bg-base-300 p-4 hover:border-neutral-700 hover:bg-base-200 md:flex-row"
        >
          <div className="flex items-center justify-center md:w-1/4">
            <div className="skeleton h-48 w-48 rounded-lg bg-gray-700"> </div>
          </div>
          <div className="flex flex-col justify-between gap-4 md:w-3/4">
            <div className="skeleton h-6 w-1/2 rounded bg-gray-700"> </div>
            <div className="skeleton h-4 w-1/4 rounded bg-gray-700"> </div>
            <div className="skeleton h-4 w-1/4 rounded bg-gray-700"> </div>
            <div className="skeleton h-4 w-1/2 rounded bg-gray-700"> </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="mx-auto mb-4 w-full max-w-lg rounded-3xl border-2 border-neutral-700 p-8 text-neutral-500 md:max-w-4xl xl:max-w-7xl">
      {jobs.map(({ id, category, description, image, location, title }) => (
        <Link key={id} href={`/jobs/${id}`}>
          <div className="mb-4 flex cursor-pointer flex-col gap-4 rounded-lg border border-neutral-700 bg-base-300 p-4 hover:border-neutral-700 hover:bg-base-200 md:flex-row">
            <div className="flex items-center justify-center md:w-1/4">
              <Image
                alt={title}
                className="rounded-lg object-cover"
                height={250}
                src={
                  !image
                    ? image
                    : 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                }
                width={250}
              />
            </div>
            <div className="flex flex-col justify-between md:w-3/4">
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="text-neutral-400">
                {capitalizeFirstLetter(slugify(category))}
              </p>
              <p className="text-neutral-400">{location}</p>
              <p className="text-neutral-400">{description}</p>
            </div>
            {/* rating */}
            <div className="rating mt-4">
              <input
                className="mask mask-star-2 bg-orange-400"
                name="rating-2"
                type="radio"
              />
              <input
                defaultChecked
                className="mask mask-star-2 bg-orange-400"
                name="rating-2"
                type="radio"
              />
              <input
                className="mask mask-star-2 bg-orange-400"
                name="rating-2"
                type="radio"
              />
              <input
                className="mask mask-star-2 bg-orange-400"
                name="rating-2"
                type="radio"
              />
              <input
                className="mask mask-star-2 bg-orange-400"
                name="rating-2"
                type="radio"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
