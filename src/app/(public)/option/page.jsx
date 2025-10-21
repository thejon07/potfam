import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <h1>you need to login first</h1>
      <Link href="/"> <button>Go to home</button> </Link>
    </div>
  )
}

export default page
