import React from "react";
import Image from "next/image";

function Hero({ data }) {
  return (
    <div className="bebas-neue-regular flex flex-col justify-center items-center px-4 py-8 text-center max-w-6xl mx-auto">
      <div className="w-full relative aspect-[16/9] md:aspect-[21/9]">
        <Image
          src={data?.image}
          alt=""
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl pt-6">
        {data?.h1}
      </h1>
      <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl mt-2">
        {data?.h2 || ""}
      </h2>
      <p className="text-base sm:text-lg md:text-xl mt-4 max-w-2xl">
        {data?.desc || ""} 
      </p>

      <button className="border-b-2 border-black text-lg sm:text-xl mt-6 hover:opacity-80 transition">
        Shop
      </button>
    </div>
  );
}

export default Hero;
