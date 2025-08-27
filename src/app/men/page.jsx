import React from 'react'
import Image from 'next/image'
import { CarouselSpacing } from "../../components/ui/multicarousel"
import CardMod from "../../components/ui/cardmod"

function page() {
    return (
        <>
            <div className='hero w-full px-20 py-10 flex flex-col items-center gap-4'>
                <Image src="https://testrunnercom.b-cdn.net/wp-content/uploads/2024/12/nike-vomero-18-02-scaled.webp" width={900} height={400} alt='hero-image' />
                <h1 className='bebas-neue-regular text-6xl font-bold pt-4' >VOMERO PLUS</h1>
                <p className='bebas-neue-regular'>MORE CUSHIONED, MORE COMFORT, MORE RUNNING</p>
                <button className='bebas-neue-regular border-b-2 border-black'>SHOP NOW</button>
            </div>
            <CarouselSpacing />
            <div className='m-28'>
                <CardMod />
            </div>
            <div className='px-4 bebas-neue-regular flex flex-col items-center justify-center gap-4'>
                <h1 className='text-6xl font-bold'>STUDY HARD.</h1>
                <h2 className='text-5xl font-bold'>PLAY HARDER.</h2>
                <Image src="https://sneakfitters.com/cdn/shop/files/nike-collection.png?v=1691515260&width=3840" width={1300} height={10} alt='banner' />
            </div>
        </>
    )
}

export default page
