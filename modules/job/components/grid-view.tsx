import type { Job } from '@/modules/job/types'

import { capitalizeFirstLetter, slugify } from '@/lib/utils'

import Card from './card'

export default function GridView({ jobs }: { jobs: Job[] }) {
  return (
    <div className="mx-auto mb-4 grid w-full max-w-lg grid-cols-1 gap-5 rounded-3xl border-2 border-gray-500/50 p-4 text-neutral-500 md:max-w-4xl md:grid-cols-2 md:gap-6 xl:max-w-7xl xl:grid-cols-3 xl:gap-8 xl:p-6">
      {jobs.map(
        ({ id, category, description, image, location, title, wage }) => (
          <Card
            key={id}
            category={capitalizeFirstLetter(slugify(category))}
            description={description}
            id={id}
            image={image}
            location={capitalizeFirstLetter(location)}
            title={title}
            wage={wage}
          />
        )
      )}
    </div>
  )
}
