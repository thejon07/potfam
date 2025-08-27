import React from 'react'
import heroimage from "../../../public/kidhero.png"
import Hero from "../../components/ui/hero"
import Gallery from "../../components/ui/gallery"
import { CarouselSpacing } from "../../components/ui/multicarousel"

function page() {
  
const dataarr = [
    {
      image:"https://ell.h-cdn.co/assets/17/16/1600x1600/square-1492708113-su17-rn-vapormax-winnie-hero-01.jpg",
      desc:"Prep like a pro"
    },
    {
      image:"https://imagescdn.simons.ca/images/3630/2304/1/A1_1.jpg?__=12",
      desc:"Stand-Out Looks"
    },
    {
      image:"https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/c541bf2b-6297-4405-a16d-37b1d0f9363c/the-best-nike-gifts-for-skateboarders.jpg",
      desc:"Fresh Kicks for class"
    },
    {
      image:"https://media-photos.depop.com/b1/2519969/2015034996_e321a19c8db14c989b1c668fc06db2f1/P0.jpg",
      desc:"Up to date"
    }
]

  return (
    <div>
      <Hero data={{image:heroimage,h1:"Back to sport"}}/>
      <Gallery data={dataarr} css={{style:"grid-cols-2"}}/>
      <div className='mt-10'>
        <h1 className='mx-10 bebas-neue-regular text-3xl font-bold'>Sizes for All</h1>
         <Gallery data={dataarr} css={{style:"grid-cols-4",gap:"gap-2"}}/>
      </div>
      <CarouselSpacing/>
    </div>
  )
}

export default page
