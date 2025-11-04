"use client"

import React from "react"
import Link from "next/link"
import { Button } from "./button"

function CardMod() {
  const data = [
    {
      img: "https://m.media-amazon.com/images/I/412KdgwpgRL._SY900_.jpg",
      title: "Back to sport",
      desc: "Study hard, run hard",
    },
    {
      img: "https://m.media-amazon.com/images/I/61xmzkRPrgL._UY900_.jpg",
      title: "Back to sport",
      desc: "Study hard, run hard",
    },
  ]

  return (
    <div className="flex flex-col sm:flex-row w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative w-full sm:w-1/2 p-2 overflow-hidden rounded-xl"
        >
          {/* Image */}
          <img
            className="w-full h-[300px] sm:h-[400px] object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            src={item.img}
            alt={item.title}
          />

          {/* Overlay */}
          <div className="bebas-neue-regular absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30 hover:bg-black/40 transition-all duration-300 rounded-xl">
            <h1 className="bebas-neue-regular text-2xl sm:text-3xl md:text-4xl drop-shadow-md">
              {item.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-3">{item.desc}</p>

            <Link href="/sale">
              <Button
                variant="link"
                className="text-white underline underline-offset-4 decoration-2 hover:text-gray-200"
              >
                SHOP NOW
              </Button>
            </Link>

          </div>
        </div>
      ))}
    </div>
  )
}

export default CardMod
