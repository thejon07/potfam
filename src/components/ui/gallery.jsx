import React from "react";

function Gallery({ data, css }) {
  return (
    <div className="px-4 py-8">
      <div
        className={`grid ${css?.style || ""} ${css?.gap || "gap-4"} 
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      >
        {data?.map((item, index) => (
          <div key={index} className="relative group rounded-xl overflow-hidden">
            {/* Image */}
            <img
              className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
              src={item.image}
              alt={item.desc}
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 bebas-neue-regular">
              <p className="text-white text-lg sm:text-xl md:text-2xl mb-3 text-center px-2">
                {item.desc}
              </p>
              <button className="text-white border-b-2 border-white px-4 py-1 text-lg sm:text-xl font-semibold hover:bg-white hover:text-black transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
