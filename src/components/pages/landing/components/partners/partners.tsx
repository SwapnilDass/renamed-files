import BlurFade from "@/components/ui/blur-fade";

function PartnersLogos() {
  return (
    <div className="relative w-full">
      {/* --- Mobile Layout */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        {/* MIT + NYU side by side */}
        <div className="-mt-8 flex items-center justify-center gap-8">
          {/* MIT */}
          <img
            className="h-[50px]"
            src="../../../../logos/MIT_uni.png"
            alt="MIT"
          />

          {/* Group Fire + NYU together */}
          <div className="-mt-2 flex items-center">
            <img
              className="-mr-12 h-[80px]"
              src="../../../../logos/Fire1.png"
              alt="NYU flame"
            />
            <img
              className="h-[140px]"
              src="../../../../logos/NYU.png"
              alt="NYU text"
            />
          </div>
        </div>

        {/* Waterloo below */}
        <div className="-mt-6 mb-8 flex justify-center">
          <img
            className="h-[55px]"
            src="../../../../logos/waterloo_uni.png"
            alt="University of Waterloo"
          />
        </div>
      </div>

      {/* --- Desktop Layout */}
      <div className="-mt-10 mb-10 hidden w-full flex-nowrap items-center justify-around md:flex">
        <img
          className="h-[80px] object-contain lg:h-[100px]"
          src="../../../../logos/waterloo_uni.png"
          alt="University of Waterloo"
        />
        <img
          className="h-[80px] object-contain lg:h-[100px]"
          src="../../../../logos/MIT_uni.png"
          alt="MIT"
        />

        {/* Group Fire + NYU together */}
        <div className="flex items-center">
          <img
            className="-mr-16 h-[100px] object-contain lg:h-[150px]"
            src="../../../../logos/Fire1.png"
            alt="NYU flame"
          />
          <img
            className="h-[120px] object-contain lg:h-[160px]"
            src="../../../../logos/NYU.png"
            alt="NYU text"
          />
        </div>
      </div>
    </div>
  )
}

function PartnersHeader() {
  return (
    <div className="mb-6 flex w-full items-center">
      <span className="flex-grow border-t border-white/60"></span>
      <h3 className="mx-4 bg-gradient-to-b from-white to-black bg-clip-text text-center text-sm uppercase leading-none text-transparent sm:text-base md:text-xl">
        trusted by students at
      </h3>
      <span className="flex-grow border-t border-white/60"></span>
    </div>
  )
}

export default function Partners() {
  return (
    <section className="w-full bg-[#050222] px-4 pt-12">
      <BlurFade delay={0.2} inView>
        <div className="flex h-auto flex-col items-center justify-center text-xs sm:text-sm lg:text-base">
          <PartnersHeader />
          <PartnersLogos />
        </div>
      </BlurFade>
    </section>
  );
}
