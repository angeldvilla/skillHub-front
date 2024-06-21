import type { Job } from '@/modules/job/types'

import Card from './card'

export default function List({ jobs }: { jobs: Job[] }) {
  return (
    <div className="mx-auto mb-4 grid w-full max-w-lg grid-cols-1 gap-5 rounded-3xl border-2 border-neutral-700 bg-neutral-950 p-8 text-neutral-500 md:max-w-4xl md:grid-cols-2 xl:max-w-7xl xl:grid-cols-3 xl:gap-6">
      {jobs.map(({ id, category, description, image, location, title }) => (
        <Card
          key={id}
          category={category}
          description={description}
          id={id}
          image={image}
          location={location}
          title={title}
        />
      ))}
    </div>
  )
}
