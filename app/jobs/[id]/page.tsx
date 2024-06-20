import { getJob } from '@/modules/job/actions/actions'

interface Props {
  params: { id: string }
}

export default async function DetailJobPage({ params: { id } }: Props) {
  const { category, description, image, location, title, wage, user } =
    await getJob(id)

  return (
    <div className="hero min-h-[92vh]">
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className="mb-10 text-5xl font-bold">{title}</h2>
          <p className="mb-3">{description}</p>
          <p className="mb-3">{category}</p>
          <p className="mb-3">{location}</p>
          <p className="mb-3">{wage}</p>
        </div>
        <div className="max-w-md">
          <h2 className="mb-10 text-5xl font-bold">{user.name}</h2>
        </div>
      </div>
    </div>
  )
}
