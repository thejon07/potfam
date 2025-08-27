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
        img: "https://cdnb.artstation.com/p/assets/images/images/045/265/153/large/world-of-gaming-sports-banner.jpg?1642330191"
    },
    {
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/97e0f474792103.5c3a5ee77b48a.png"
    },
    {
        img: "https://freight.cargo.site/t/original/i/b4c0e726cadbe01c1883b10003b7b10a6109258d74afcc54d201c5f9618da565/2-who-we-are-copy-9.png"
    }
]


export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full overflow-hidden"
        >
            <CarouselContent>
                {carouseldata.map((data, index) => (
                    <CarouselItem key={index}>
                       <div className="h-[400px] sm:h-[600px]">
                            <Card className="h-full">
                                <CardContent className="flex items-center justify-center w-full h-full p-0">
                                    <img
                                        src={data.img}
                                        alt="image"
                                        className="w-full h-full object-cover sm:object-contain"
                                    />
                                </CardContent>
                            </Card>
                        </div>

                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
