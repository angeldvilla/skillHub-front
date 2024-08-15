import Image from 'next/image'

import { getCategories } from '@/modules/job/actions/actions'
import NewJobForm from '@/modules/job/components/new-job-form'

export default async function Page() {
  const categories = await getCategories()

  return (
    <div>
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            alt="register-img"
            className="max-w-sm rounded-md shadow-2xl"
            height={300}
            src="/register-bg.webp"
            width={340}
          />
          <div className="px-20 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Post a job!</h1>
            <p className="py-12">
              Post a job with us so you can find a talent with whom genuinely
              connect.
            </p>
          </div>
          <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
            <NewJobForm categories={categories} />
          </div>
        </div>
      </div>
    </div>
  )
}
