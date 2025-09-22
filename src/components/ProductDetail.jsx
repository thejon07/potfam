"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image";

function ProductDetail({ cart }) {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);
  const [isHover, setIshover] = useState(false)

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
  };
  const handleleave = (e) => {
    if (!containerRef.current) return
    containerRef.current.style.backgroundPosition = "center"
    setIshover(false);
  }

  return (
    <div>
      <section className="flex gap-6 justify-center items-center h-screen">
        <div className='w-[400px] h-[400px] border border-2 border-black/2 bg-center bg-no-repeat bg-contain' ref={containerRef} onMouseMove={handlemousemove} onMouseLeave={handleleave} style={{
          backgroundImage: `url(${cart.image})`,
          backgroundSize: isHover ? "200%" : "100%"
        }}>
          {/* <Image src={cart.image} alt="card-image" height={300} width={400} /> */}
        </div>

        <div className="flex flex-col gap-2">
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
