import { getJobs } from '@/modules/job/actions/actions'
import Card from '@/modules/job/components/card'

export default async function Page() {
  const jobs = await getJobs()

  return (
    <div className="grid grid-cols-1 gap-4 bg-neutral-800 p-3 text-neutral-500 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map(
        ({
          id,
          category,
          description,
          image,
          location,
          title,
          type,
          userId
        }) => (
          <Card
            key={id}
            category={category}
            description={description}
            image={image}
            location={location}
            title={title}
            type={type}
            userId={userId}
          />
        )
      )}
    </div>
  )
}
