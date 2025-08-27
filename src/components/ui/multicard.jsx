import React from 'react'
import Image from 'next/image'

export default function Multicard({ data }) {
    return (
        <>
            <h1 className='mt-20 text-center bebas-neue-regular text-3xl'>Member Benefits</h1>
            <div className='flex gap-4 py-4 justify-center'>

                {data?.cardimg?.map((item, index) => (
                    <div key={index}>
                        <div className='relative'>

                            <div className='relative w-[300px] h-[300px]'>
                                <Image
                                    src={item?.image}
                                    alt='card'
                                    fill
                                    className='object-cover'
                                />

                            </div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                                <button className='text-white p-2 m-2 border-red-400 border-2 bebas-neue-regular'>
                                    {item?.buttonText || "Shop with us"}
                                </button>
                            </div>


                        </div>
                    </div>

                ))}
            </div>
        </>

    )
}
