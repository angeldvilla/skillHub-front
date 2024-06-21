import Image from 'next/image'

export default function CarrouselVertical3() {
  return (
    <div className="carousel carousel-vertical h-96 rounded-box border-2 border-blue-400">
      <div className="carousel-item h-full">
        <Image alt="img-sales" height={390} src="/sales.webp" width={390} />
      </div>
      <div className="carousel-item h-full">
        <Image alt="img-tourism" height={390} src="/tourism.webp" width={390} />
      </div>
      <div className="carousel-item h-full">
        <Image
          alt="img-education"
          height={390}
          src="/education.webp"
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
      <div className="carousel-item h-full">
        <Image
          alt="img-healtcare"
          height={390}
          src="/healthcare.webp"
          width={390}
        />
      </div>
      <div className="carousel-item h-full">
        <Image alt="img-it" height={390} src="/it.webp" width={390} />
      </div>
      <div className="carousel-item h-full">
        <Image
          alt="img-logistic"
          height={390}
          src="/logistic.webp"
          width={390}
        />
      </div>
    </div>
  )
}
