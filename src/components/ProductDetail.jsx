"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";

function ProductDetail({ cart }) {
  const [data, setData] = useState([]);

  // Load existing cart from localStorage when component mounts
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  const handlesetdata = () => {
    const exists = data.find((item) => item._id === cart._id);
    if (exists) return; // prevent duplicates

    const updatedCart = [...data, cart]; // ✅ new array
    setData(updatedCart); // update state
    localStorage.setItem("products", JSON.stringify(updatedCart)); // ✅ save updated version
  };

  return (
    <div>
      <section className="flex gap-6 justify-center items-center h-screen">
        <div>
          <Image src={cart.image} alt="card-image" height={300} width={400} />
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
