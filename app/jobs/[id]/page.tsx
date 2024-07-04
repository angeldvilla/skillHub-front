import Image from 'next/image'

import { capitalizeFirstLetter, slugify } from '@/lib/utils'
import { getJob } from '@/modules/job/actions/actions'
import CustomButton from '@/modules/core/components/button'

interface Props {
  params: { id: string }
}

export default async function DetailJobPage({ params: { id } }: Props) {
  new Promise((resolve) => setTimeout(resolve, 2000))
  const { category, description, image, location, title, wage, user } =
    await getJob(id)

  const imagesCarrousel = [
    'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
  ]

  return (
    <div className="flex min-h-[92vh] flex-col p-4 lg:flex-row lg:p-20">
      {/* Left column: Thumbnails */}
      <div className="mx-4 flex flex-wrap gap-2 p-2 lg:mb-4 lg:max-w-md lg:flex-col lg:gap-5 lg:rounded-3xl lg:border-2 lg:border-neutral-700 lg:p-8 lg:text-neutral-500 xl:max-w-lg xl:gap-6">
        {imagesCarrousel.map((id, image) => (
          <Image
            key={id}
            alt={`Thumbnail ${image + 1}`}
            className="rounded-lg border border-gray-300"
            height={150}
            src={id}
            width={150}
          />
        ))}
      </div>

      {/* Center column: Main image */}
      <div className="flex flex-col items-center justify-center p-4 lg:w-1/2 lg:flex-row lg:p-4">
        <button className="hidden lg:block" type="button">
          ◀
        </button>
        <Image
          alt={title}
          className="w-full max-w-xs rounded-lg border border-gray-300 lg:max-w-none"
          height={300}
          src={
            !image
              ? image
              : 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
          }
          width={300}
        />
        <button className="hidden lg:block" type="button">
          ▶
        </button>
      </div>

      {/* Right column: Job details */}
      <div className="flex flex-col gap-4 p-4 text-center lg:w-1/3 lg:p-8 lg:text-left">
        <h2 className="mb-4 text-3xl font-bold lg:text-5xl">{title}</h2>
        <p className="mb-3 text-base lg:text-lg">{description}</p>
        <p className="mb-3 text-base lg:text-lg">
          Category: {capitalizeFirstLetter(slugify(category))}
        </p>
        <p className="mb-3 text-base lg:text-lg">
          Location: {capitalizeFirstLetter(location)}
        </p>
        <p className="mb-3 text-base lg:text-lg">Wage: {wage}</p>
        <h3 className="mt-6 text-2xl font-bold lg:text-3xl">
          Posted by: {user.name}
        </h3>
        {/* rating */}
        <div className="rating mt-4 flex items-center justify-center lg:justify-start">
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
        <CustomButton
          containerStyles="w-full bg-blue-600 text-white rounded-full mt-10 hover:bg-blue-700 hover:duration-300 hover:ease-in-out hover:transform hover:scale-105"
          title="Apply"
        />
      </div>
    </div>
  )
}
