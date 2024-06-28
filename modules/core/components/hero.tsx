import Image from 'next/image'

import CustomButton from './button'

export default function Hero() {
  return (
    <div className="relative z-0 mx-auto flex max-w-[1440px] flex-col gap-5 xl:flex-row">
      <div className="flex-1 px-4 pt-24">
        <h1 className="text-[50px] font-extrabold sm:text-[64px] 2xl:text-[72px]">
          ¡Welcome to SkillHub!
        </h1>
        <p className="black-100 mt-5 text-[27px] font-light">
          Join our community and experience the flexibility and efficiency of
          finding the right person for your needs, without the traditional
          formality. Start exploring and finding those talents today!
        </p>
        <CustomButton
          containerStyles="bg-blue-700 text-white rounded-full mt-10"
          route="/jobs"
          title="Explore Jobs"
        />
      </div>
      {/* hero image container */}
      <div className="flex w-full items-end justify-end xl:h-screen xl:flex-[1.5]">
        {/* hero image */}
        <div className="relative z-0 h-[590px] w-[90%] xl:h-full xl:w-full">
          <Image fill alt="Jobs" className="object-contain" src="/hero.webp" />
        </div>
        {/* hero image overlay */}
        <div className="bg-hero-bg -1/4 absolute -z-10 h-[590px] w-full overflow-hidden bg-repeat-round xl:-right-1/2 xl:-top-20 xl:h-screen">
          <Image
            fill
            alt="Jobs"
            className="object-contain"
            src="/hero-bg.webp"
          />
        </div>
      </div>
    </div>
  )
}
