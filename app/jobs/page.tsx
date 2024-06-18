import { getJobs } from '@/modules/job/actions/actions'
import Card from '@/modules/job/components/card'

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  const jobs = await getJobs()

  return (
    <div className="mx-auto my-4 grid w-full max-w-lg grid-cols-1 gap-5 rounded-3xl border-2 border-neutral-700 bg-neutral-950 p-8 text-neutral-500 md:max-w-4xl md:grid-cols-2 xl:max-w-7xl xl:grid-cols-3 xl:gap-6">
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
