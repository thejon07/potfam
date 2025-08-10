import React from 'react'
import { auth } from '@/auth'

async function page() {
  const session = await auth()
  console.log(session)
  return (
    <div>
      
    </div>
  )
}

export default page
