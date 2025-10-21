import React from 'react'
import Image from 'next/image'
import { CarouselSpacing } from "../../../components/ui/multicarousel"
import CardMod from "../../../components/ui/cardmod"

function Page() {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <div className="hero w-full px-4 md:px-10 lg:px-20 py-10 flex flex-col items-center gap-4 text-center">
        <div className="w-full max-w-5xl">
          <Image
            src="https://testrunnercom.b-cdn.net/wp-content/uploads/2024/12/nike-vomero-18-02-scaled.webp"
            width={900}
            height={400}
            alt="hero-image"
            className="w-full h-auto object-cover rounded-xl"
            priority
          />
        </div>
        <h1 className="bebas-neue-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pt-4">
          VOMERO PLUS
        </h1>
        <p className="bebas-neue-regular text-base sm:text-lg md:text-xl">
          MORE CUSHIONED, MORE COMFORT, MORE RUNNING
        </p>
        <button className="bebas-neue-regular border-b-2 border-black text-base sm:text-lg hover:text-gray-600 transition">
          SHOP NOW
        </button>
      </div>

      {/* ✅ CAROUSEL SECTION */}
      <div className="w-full px-4 md:px-10 lg:px-20">
        <CarouselSpacing />
      </div>

      {/* ✅ CARD SECTION */}
      <div className="w-full px-4 md:px-10 lg:px-28 my-10">
        <CardMod />
      </div>

      {/* ✅ BANNER SECTION */}
      <div className="w-full px-4 py-10 bebas-neue-regular flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">STUDY HARD.</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">PLAY HARDER.</h2>
        <div className="w-full max-w-6xl">
          <Image
            src="https://sneakfitters.com/cdn/shop/files/nike-collection.png?v=1691515260&width=3840"
            width={1300}
            height={10}
            alt="banner"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </>
  )
}

export default Page
 