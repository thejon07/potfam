import * as React from "react"
import { Card, CardContent } from "./card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./carousel"
import Image from "next/image"

export function CarouselSpacing() {
    const data = [
        {
           img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/85d1d12f-b0a5-49c0-bc81-6238cfc5d9ac/JORDAN+1+RETRO+HIGH+OG+%28PS%29.png"
        },
        {
           img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0426d057-4837-4950-a6eb-c8f928edf2bf/AIR+JORDAN+1+LOW.png"
        },
        {
            img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f62bef-d6c5-4325-b916-ace51b228129/WMNS+AIR+JORDAN+1+LOW+SE.png"
        },
          {
           img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/85d1d12f-b0a5-49c0-bc81-6238cfc5d9ac/JORDAN+1+RETRO+HIGH+OG+%28PS%29.png"
        },
        {
           img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0426d057-4837-4950-a6eb-c8f928edf2bf/AIR+JORDAN+1+LOW.png"
        },
        {
            img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f62bef-d6c5-4325-b916-ace51b228129/WMNS+AIR+JORDAN+1+LOW+SE.png"
        }
    ]
    return (
        <div className="flex justify-center pt-16">
            <Carousel className="w-full max-w-5xl">
                {/* Buttons on the left */}
                <div className="inline-flex w-full justify-between">
                    <h1 className="bebas-neue-regular text-2xl">Shop The Classics</h1>
                    <div className="flex gap-2 mb-4 justify-end">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </div>


                <CarouselContent className="-ml-1">
                  {data.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-1 basis-[300px] flex-shrink-0"
                        >
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center">
                                      <Image src={item.img} width={500} height={500} alt="nike"/>
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
