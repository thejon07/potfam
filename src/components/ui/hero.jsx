import React from 'react'
import Image from 'next/image'

function hero({ data }) {
    return (
        <div className='bebas-neue-regular flex flex-col justify-center items-center'>
            <Image src={data?.image} width={1200} height={1200} alt='' />
            <h1 className='font-bold text-6xl pt-4'>{data?.h1}</h1>
            <h2 className='font-bold text-6xl'>{data?.h2 || ""}</h2> 
            <p>{data?.desc || ""}</p>
            <button className='border-b-2 border-black text-xl mt-2'>Shop</button>
        </div>
    )
}

export default hero
