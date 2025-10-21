"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image";

function ProductDetail({ cart }) {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);
  const [isAddCartSuccess, setIsCartSuccess] = useState(false);
  const [isHover, setIshover] = useState(false)
  const [clearToggle, setIsClearToggle] = useState(false)

  const handlemousemove = (e) => {

    if (!containerRef.current) return;

    const { width, left, top, height } = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    containerRef.current.style.backgroundPosition = `${x}% ${y}%`
    setIshover(true)
  }

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  const handlesetdata = () => {
    const exists = data.find((item) => item._id === cart._id);
    if (exists) return;
    cart.quantity = 1;
    const updatedCart = [...data, cart];
    setData(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
    setIsCartSuccess(true)
    setIsClearToggle(true)

    setTimeout(()=>{
     setIsClearToggle(false)
    },[3000])
  };
  const handleleave = (e) => {
    if (!containerRef.current) return
    containerRef.current.style.backgroundPosition = "center"
    setIshover(false);
  }
  const handleRemoveToggle = () => {
    setIsClearToggle((prev) => !prev)
  }

  return (
    <div className='relative'>
      {
        isAddCartSuccess && clearToggle ? (
          <div class="absolute px-10 py-2 right-0 space-y-3">


            <div class=" max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" tabindex="-1" aria-labelledby="hs-toast-stack-toggle-update-label">
              <div class="flex p-4">
                <div class="shrink-0">
                  <svg class="shrink-0 size-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                  </svg>
                </div>
                <div class="ms-3 flex justify-between">
                  <p id="hs-toast-stack-toggle-update-label" class="text-sm text-gray-700 dark:text-neutral-400">
                    Product added to cart successfully.
                  </p>
                  <button onClick={handleRemoveToggle}>X</button>
                </div>
              </div>
            </div>
          </div>
        ) : ""
      }


      <section className="sm:flex gap-6 justify-center items-center h-screen px-6 sm:px-0">
        <div className=' w-full h-[400px] sm:w-[400px] sm:h-[400px] border border-2 border-black/2 bg-center bg-no-repeat bg-contain' ref={containerRef} onMouseMove={handlemousemove} onMouseLeave={handleleave} style={{
          backgroundImage: `url(${cart.image})`,
          backgroundSize: isHover ? "200%" : "100%"
        }}>
          {/* <Image src={cart.image} alt="card-image" height={300} width={400} /> */}
        </div>

        <div className="flex flex-col gap-2 justify-center px-10 py-10 sm:py-0">
          <h1 className="bebas-neue-regular text-3xl">{cart.title}</h1>
          <h2 className="bebas-neue-regular">Price: ${cart.price}</h2>
          <h3 className="bebas-neue-regular">{cart?.description}</h3>
          <button
            onClick={handlesetdata}
            className="bebas-neue-regular py-2 px-4 border-2 border-black text-white bg-black"
          >
            Add To Cart
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;
