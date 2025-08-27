"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'


// export const metadata = {
//     title: "Sale | PotFam",
//     description:
//         "Shop the latest clothes and shoes on sale. Find your favorite sneakers, jackets, and more at discounted prices.",
//     keywords: "sale, clothes, shoes, sneakers, jackets, fashion, discount",
//     robots: "index, follow",
// };
function page() {
    const [data, setData] = useState()
    const [toggle, setIsToggle] = useState(false)
    const [category, setCategory] = useState()
    const pathname = usePathname()

    const handleproducts = async () => {
        const products = await fetch("/api/sale").then((res) => res.json())
        console.log(products.data)
        setData(products.data)
    }

    const handletoggle = () => {
        setIsToggle(prev => !prev)
    }

    useEffect(() => {
        handleproducts()
    }, [])

    const filtereddata = category
        ? data?.filter(product => product.category?.toLowerCase() === category.toLowerCase())
        : data


    return (
        <>


            <main className='px-4 md:px-10 relative'>
                {toggle && (
                    <div className='fixed inset-0 z-40'>

                        <div
                            className='absolute inset-0 bg-black/50'
                            onClick={handletoggle}
                        ></div>


                        <div className='w-full sm:w-[400px] h-full bg-white fixed left-0 top-0 z-50 px-6 py-4 flex flex-col justify-between'>
                            <div>
                                <div className='font-semibold flex justify-between items-center'>
                                    <h1 className='text-lg'>FILTER & SORT</h1>
                                    <button onClick={handletoggle} className='text-xl font-bold'>×</button>
                                </div>

                                <div>
                                    <h2 className='font-semibold my-6 border-b py-2 border-gray-400 text-xs'>SORT BY</h2>
                                    <ul>
                                        <li className='mb-2 border-b pb-2 border-gray-400 text-sm'>PRICE (LOW - HIGH)</li>
                                        <li className='flex justify-between pb-2 border-gray-400 border-b'>
                                            <h3 className='text-sm'>CATEGORY</h3>
                                            <button className='rotate-180'>{">"}</button>
                                        </li>
                                        <li onClick={() => setCategory("male")} className='text-xs mt-2 font-semibold border-2 border-black p-2 w-fit cursor-pointer bg-black text-white'>MALE</li>
                                        <li onClick={() => setCategory("female")} className='text-xs mt-2 font-semibold border-2 border-black p-2 w-fit cursor-pointer bg-black text-white'>FEMALE</li>
                                        <li onClick={() => setCategory(null)} className='text-xs mt-2 text-blue-600 underline cursor-pointer'>Clear Filter</li>
                                    </ul>
                                </div>
                            </div>

                            <button className='p-2 w-full bg-black text-white font-semibold mt-4'>SEARCH</button>
                        </div>
                    </div>
                )}

                {/* Breadcrumb & Heading */}
                <ul className='flex gap-1 py-10 text-sm flex-wrap'>
                    <li className=' border-b border-black'>Home</li>
                    <li>/</li>
                    <li>{pathname}</li>
                </ul>

                <div className='flex justify-between items-center flex-wrap gap-4'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>Back to School Clothes & Shoes</h1>
                    <button className='px-4 py-2 border-2 border-black' onClick={handletoggle}>FILTER & SORT</button>
                </div>

                {/* Description */}
                <section className='py-6 text-sm'>
                    <p>Find your new favorite tee, jacket, jersey, tights or sneakers shopping clothes and shoes on sale at adidas. With deals like this, you can stock up.</p>
                </section>

                {/* Product Grid */}
                <div className="max-w-[1200px] mx-auto py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filtereddata?.map((data) => (
                            <Link href={`/product-details/${data._id}`} >
                                <div className='w-full h-[380px] px-3 py-4 rounded-md' key={data._id}>
                                    <img src={data.image} alt={data.title} className='w-full object-contain rounded-sm' />
                                    <h1 className='text-base font-semibold mt-2'>{data.title}</h1>
                                    <h2 className='text-sm mt-1'>Price: <span className='font-semibold'>${data.price}</span></h2>
                                    <p className='text-xs mt-2 line-clamp-3'>{data.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default page
