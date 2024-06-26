import CarrouselVertical from './carrouselVertical'
import CarrouselVertical2 from './carrouselVertical2'
import CarrouselVertical3 from './carrouselVertical3'

export default function FeaturedWorks() {
  return (
    <div className="relative z-0 mx-auto flex max-w-[1440px] flex-col gap-5 xl:flex-row">
      <div className="flex-1 px-4 pt-24">
        <h1 className="text-[48px] font-extrabold sm:text-[64px] 2xl:text-[72px]">
          Featured Works
        </h1>
        <p className="black-100 t-5 mb-5 text-[24px] font-light">
          Explore jobs you might connect with
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-10 xl:h-screen xl:flex-row">
          <div className="relative z-0 h-[400px] w-full xl:h-full xl:w-1/3">
            <CarrouselVertical />
          </div>
          <div className="relative z-0 h-[400px] w-full xl:h-full xl:w-1/3">
            <CarrouselVertical2 />
          </div>
          <div className="relative z-0 h-[400px] w-full xl:h-full xl:w-1/3">
            <CarrouselVertical3 />
          </div>
        </div>
      </div>
    </div>
  )
}
