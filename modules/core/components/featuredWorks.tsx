import CarrouselVertical from './carrouselVertical'

export default function FeaturedWorks() {
  return (
    <div className="relative z-0 mx-auto flex max-w-[1440px] flex-col gap-5 xl:flex-row">
      <div className="flex-1 px-4 pt-24">
        <h1 className="text-[26px] font-extrabold sm:text-[64px] 2xl:text-[72px]">
          Featured Works
        </h1>
        <p className="black-100 t-5 mb-5 text-[20px] font-light">
          Explore jobs you might connect with
        </p>
        {/* hero image container */}
        <div className="flex w-full items-end justify-end xl:h-screen xl:flex-[1.5]">
          {/* hero image */}
          <div className="relative z-0 h-[590px] w-[90%] xl:h-full xl:w-full">
            <CarrouselVertical />
          </div>
          <div className="relative z-0 h-[590px] w-[90%] xl:h-full xl:w-full">
            <CarrouselVertical />
          </div>
          <div className="relative z-0 h-[590px] w-[90%] xl:h-full xl:w-full">
            <CarrouselVertical />
          </div>
        </div>
      </div>
    </div>
  )
}
