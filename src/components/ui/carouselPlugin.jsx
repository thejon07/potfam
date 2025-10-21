"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

const carouseldata = [
  {
    img: "https://i.ytimg.com/vi/8FHEHlTwdUM/maxresdefault.jpg",
  },
  {
    img: "https://cdnb.artstation.com/p/assets/images/images/045/265/153/large/world-of-gaming-sports-banner.jpg?1642330191",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/97e0f474792103.5c3a5ee77b48a.png",
  },
  {
    img: "https://freight.cargo.site/t/original/i/b4c0e726cadbe01c1883b10003b7b10a6109258d74afcc54d201c5f9618da565/2-who-we-are-copy-9.png",
  },
]

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false })
  )

  return (
    <div className="w-full px-2 sm:px-4 md:px-10 py-4">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-[1600px] mx-auto overflow-hidden rounded-2xl shadow-lg"
      >
        <CarouselContent>
          {carouseldata.map((data, index) => (
            <CarouselItem key={index}>
              <div className="h-[200px] sm:h-[350px] md:h-[500px] lg:h-[650px]">
                <Card className="h-full border-none">
                  <CardContent className="flex items-center justify-center w-full h-full p-0">
                    <img
                      src={data.img}
                      alt={`carousel-image-${index}`}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex left-4 bg-black/30 hover:bg-black/50 text-white rounded-full" />
        <CarouselNext className="hidden sm:flex right-4 bg-black/30 hover:bg-black/50 text-white rounded-full" />
      </Carousel>
    </div>
  )
}
