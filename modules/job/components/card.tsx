import Image from 'next/image'

interface Props {
  category: string
  description: string
  image: string
  location: string
  title: string
  type: string
  userId: number
}

export default function Card({
  category,
  description,
  image,
  location,
  title,
  type,
  userId
}: Props) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <Image
          alt="Shoes"
          className="w-full"
          height={300}
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          width={300}
        />
      </figure>
      <div className="card-body text-base-content">
        <h2 className="card-title">
          {title}
          <div className="badge badge-accent">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline hover:bg-base-content hover:text-base-100">
            {category}
          </div>
          <div className="badge badge-outline hover:bg-base-content hover:text-base-100">
            {category}
          </div>
        </div>
      </div>
    </div>
  )
}
