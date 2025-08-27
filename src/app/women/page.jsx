import React from 'react'
import Hero from "../../components/ui/hero"
import { CarouselSpacing } from "../../components/ui/multicarousel"
import MultiCard from "../../components/ui/multicard"

function page() {
  const cardimg = [
    {
      image:"https://img.businessoffashion.com/resizer/v2/T5UQAJZOCNE3HHNTIPEZNAMLP4.jpg?auth=cd58b7bab0f6ba5c460fe494fe7e93fa7b6ac22345e9977fdf1f3c0bcf9b2637&width=800&height=1113",
      buttonText:"Shop With Us"
    },
    {
      image:"https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/d3dbcd07-2465-4a8e-87d2-48ad0494efcb/nikes-first-hands-free-shoe-go-flyease.png",
      buttonText:"Run With Us"
    },
    {
      image:"https://www.hellokpop.com/wp-content/uploads/2020/03/2020030401000261100015283.jpg",
      buttonText:"Move With Us"
    }
  ]
  return (
    <div>
      <Hero data={{image:"https://cdn.mos.cms.futurecdn.net/KSnC5xaZDxoWhM6sWAbeCK.jpg"}}/>
      <CarouselSpacing/>
      <CarouselSpacing/>
      <MultiCard data={{cardimg}}/>
    </div>
  )
}

export default page
