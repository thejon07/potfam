import React from 'react'
import "../../globals.css"
import Image from 'next/image'
import heroImage from "../../../../public/shoes.png"

function page() {
    return (
        <div className='px-[210px] py-[50px] text-white w-full h-screen bg-gradient-to-r from-[#A61473] to-[#05F2F2]'>
            <nav>
                <ul className='flex justify-between bebas-neue-regular-2'>
                    <li className='text-xl'>POTFAM</li>
                    <div>
                        <ul className='flex gap-4'>
                            <li>HOME</li>
                            <li>GALLERY</li>
                            <li>CONTACT</li>
                            <li>BACK TO SCHOOL</li>
                        </ul>
                    </div>
                    <li>SIGN IN</li>
                </ul>
            </nav>

            <main className='flex h-full'>

                <div className='flex flex-col  justify-center gap-2  w-3/6'>
                    <h1 className='bebas-neue-regular-2 text-5xl '>PURCHASE YOUR<br /><span className="underline underline-offset-[10px] decoration-2 mr-2">SHOES</span>
                        NOW</h1>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac.</p>
                    <button className='bebas-neue-regular-2 text-[#A61473] bg-white px-4 py-2 w-[100px]'>Shop Now</button>
                </div>


                <div className='flex relative flex-col items-center h-full justify-center pt-20 w-3/6 pl-20'>


                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-8">
                        <div className='pl-[40%] w-full h-full'>
                            <svg
                                className="block min-h-[410px] min-w-[100px]"
                            >
                                <ellipse
                                    cx="19%" cy="210"
                                    rx="70" ry="160"
                                    fill="transparent"
                                    stroke="white"
                                    strokeDasharray="5,5"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>

                    </div>


                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pl-[15%]'>
                        <svg className="min-h-[80px] min-w-[410px]" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="210" cy="50" rx="190" ry="60" fill='transparent' stroke='white' strokeDasharray="5,5" strokeWidth="2" />
                        </svg>
                    </div>




                    <Image src={heroImage} alt='hero' width={300} height={100} />

                    <div >
                        <svg className="min-h-[80px] min-w-[300px]" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 0.8 }} />
                                    <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
                                </linearGradient>
                            </defs>
                            <ellipse cx="140" cy="40" rx="100" ry="20" fill="url(#grad1)" />
                        </svg>
                    </div>

                <div className='w-48 text-black rounded-xl ml-[400px] p-5 min-h-20 bg-white/30 backdrop-blur-md  absolute bottom-0'>
                        <h1 className='font-semibold'>GET UP TO 80% OFF</h1>
                        <p className='text-xs pt-2'>You can get 30% off this product
                            if you are buying now</p>
                    </div>

                </div>

            </main>

        </div>
    )
}

export default page
