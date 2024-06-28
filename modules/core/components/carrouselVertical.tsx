'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function CarrouselVertical() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return isLoading ? (
    <div className="carousel carousel-vertical h-96 w-[390px] rounded-box border-2 border-blue-400">
      <div className="carousel-item h-full">
        <figure className="skeleton h-96 w-full bg-gray-700"> </figure>
      </div>
    </div>
  ) : (
    <div className="carousel carousel-vertical h-96 rounded-box border-2 border-blue-400">
      <div className="carousel-item h-full">
        <Image
          alt="img-it"
          className="object-cover"
          height={390}
          src="/it.webp"
          width={390}
        />
      </div>
      <div className="carousel-item h-full">
        <Image
          alt="img-education"
          className="object-cover"
          height={390}
          src="/education.webp"
          width={390}
        />
      </div>
    </div>
  )
}
