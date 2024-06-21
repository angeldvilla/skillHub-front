import Image from 'next/image'

export default function CarrouselVertical() {
  return (
    <div className="carousel carousel-vertical h-96 rounded-box border-2 border-blue-400">
      <div className="carousel-item h-full">
        <Image alt="img-it" height={390} src="/it.webp" width={390} />
      </div>
      <div className="carousel-item h-full">
        <Image
          alt="img-education"
          height={390}
          src="/education.webp"
          width={390}
        />
      </div>
    </div>
  )
}
