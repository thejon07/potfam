import React from 'react'

function Gallery({ data,css }) {
  return (
    <div>
      <div className={`grid ${css.style} ${css.gap} p-6 m-4`}>
        {data?.map((item, index) => (
          <div key={index} className="relative">
            <img
              className="w-full h-[550px] object-cover"
              src={item.image}
              alt={item.desc}
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30  bebas-neue-regular">
              <p className="text-white text-xl mb-3">{item.desc}</p>
              <button className=" text-white border-b-2 border-white px-4 py-1 text-xl font-semibold hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
