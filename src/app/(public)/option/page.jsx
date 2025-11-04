import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <h1 className='bebas-neue-regular-2'>you need to login first</h1>
      <Link href="/"> <button className='border border-black py-2 px-4 bebas-neue-regular-2 mt-2'>Go to home</button> </Link>
    </div>
  )
}

export default page
