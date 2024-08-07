import type { Job } from '@/modules/job/types'

import Image from 'next/image'
import Link from 'next/link'

import { capitalizeFirstLetter, slugify } from '@/lib/utils'

export default function ListView({ jobs }: { jobs: Job[] }) {
  return (
    <div className="mx-auto mb-4 w-full max-w-lg rounded-3xl border-2 border-neutral-700 p-8 text-neutral-500 md:max-w-4xl xl:max-w-7xl">
      {jobs.map(({ id, category, description, location, title }) => (
        <Link key={id} href={`/jobs/${id}`}>
          <div className="mb-4 flex cursor-pointer flex-col gap-4 rounded-lg border border-neutral-700 bg-base-300 p-4 hover:border-neutral-700 hover:bg-base-200 md:flex-row">
            <div className="flex items-center justify-center md:w-1/4">
              <Image
                alt={title}
                className="rounded-lg object-cover"
                height={250}
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
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
          </div>
        </Link>
      ))}
    </div>
  )
}
