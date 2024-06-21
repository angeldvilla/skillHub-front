import Image from 'next/image'

export default function CarrouselVertical2() {
  return (
    <div className="carousel carousel-vertical h-96 rounded-box border-2 border-blue-400">
      <div className="carousel-item h-full">
        <Image
          alt="img-healtcare"
          height={390}
          src="/healthcare.webp"
          width={390}
        />
      </div>
      <div className="carousel-item h-full">
        <Image
          alt="img-ocuppations"
          height={390}
          src="/ocuppations.webp"
          width={390}
        />
      </div>
    </div>
  )
}
