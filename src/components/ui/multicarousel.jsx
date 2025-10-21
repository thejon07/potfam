"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "./card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel"

export function CarouselSpacing() {
  const data = [
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/85d1d12f-b0a5-49c0-bc81-6238cfc5d9ac/JORDAN+1+RETRO+HIGH+OG+%28PS%29.png",
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0426d057-4837-4950-a6eb-c8f928edf2bf/AIR+JORDAN+1+LOW.png",
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f62bef-d6c5-4325-b916-ace51b228129/WMNS+AIR+JORDAN+1+LOW+SE.png",
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/85d1d12f-b0a5-49c0-bc81-6238cfc5d9ac/JORDAN+1+RETRO+HIGH+OG+%28PS%29.png",
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0426d057-4837-4950-a6eb-c8f928edf2bf/AIR+JORDAN+1+LOW.png",
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f62bef-d6c5-4325-b916-ace51b228129/WMNS+AIR+JORDAN+1+LOW+SE.png",
    },
  ]

  return (
    <div className="flex justify-center pt-10 px-2 sm:px-4 md:px-10">
      <Carousel className="w-full max-w-6xl">
        {/* Header + Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h1 className="bebas-neue-regular text-2xl sm:text-3xl text-center sm:text-left">
            Shop The Classics
          </h1>
          <div className="flex gap-2 mt-3 sm:mt-0">
            <CarouselPrevious className="static translate-y-0 bg-black/10 hover:bg-black/20 rounded-full" />
            <CarouselNext className="static translate-y-0 bg-black/10 hover:bg-black/20 rounded-full" />
          </div>
        </div>

        {/* Carousel Items */}
        <CarouselContent className="-ml-1">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="
                pl-1 
                basis-[70%] 
                sm:basis-[40%] 
                md:basis-[30%] 
                lg:basis-[25%] 
                flex-shrink-0
              "
            >
              <div className="p-2">
                <Card className="rounded-xl  transition-shadow">
                  <CardContent className="flex items-center justify-center aspect-square">
                    <Image
                      src={item.img}
                      width={400}
                      height={400}
                      alt="Nike shoe"
                      className="object-contain w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
