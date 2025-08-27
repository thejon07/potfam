import React from 'react'
import { CarouselPlugin } from '@/components/ui/carouselPlugin'
import Banner from '@/components/ui/banner'
import Cardmod from '@/components/ui/cardmod'
import { CarouselSpacing } from '@/components/ui/multicarousel'
function page() {
  return (
    <div>
        <Banner/>
        <CarouselPlugin/>
        {/* <ThreeModel/> */}
        <Cardmod/>
      < CarouselSpacing/>
    </div>
  )
}

export default page
