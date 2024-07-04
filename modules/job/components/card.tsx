import Image from 'next/image'
import Link from 'next/link'

interface Props {
  id: number
  category: string
  description: string
  image: string
  location: string
  title: string
  wage: number
}

export default function Card({
  id,
  category,
  description,
  image,
  location,
  title,
  wage
}: Props) {
  return (
    <Link href={`/jobs/${id}`}>
      <div className="card card-bordered mx-auto max-w-xl cursor-pointer bg-base-300 shadow-xl hover:border hover:border-neutral-700 hover:bg-base-100">
        <figure>
          <Image
            alt="Shoes"
            className="w-full"
            height={300}
            src={
              !image
                ? image
                : 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
            }
            width={300}
          />
        </figure>
        <div className="card-body text-base-content">
          <h2 className="card-title">
            {title}
            <div className="badge badge-accent">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions mt-4 items-center justify-between">
            <div className="text-md font-semibold text-neutral-400">
              ${wage}
            </div>
            <div className="flex gap-2">
              <div className="badge badge-outline hover:bg-base-content hover:text-base-100">
                {category}
              </div>
              <div className="badge badge-outline hover:bg-base-content hover:text-base-100">
                {location}
              </div>
            </div>
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
      </div>
    </Link>
  )
}
