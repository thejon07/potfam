"use client";

import React, { useEffect, useRef, useState } from "react";
import potfam from "./../../../public/potfam.png";
import Image from "next/image";
import { User, ShoppingBag, Menu, X, Search } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { gsap } from "gsap";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const togglenav = useRef(null)

  useEffect(() => {
    gsap.fromTo(togglenav.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.3 });
  }, [isOpen])

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="flex items-center justify-between px-6 py-3 md:px-8">
        <div className="flex items-center gap-2">
          <Image src={potfam} width={80} height={80} alt="logo" />
        </div>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/men">
            <li className="hover:text-black text-lg transition-colors cursor-pointer bebas-neue-regular">MEN</li>
          </Link>
          <Link href="/women">
            <li className="hover:text-black text-lg  transition-colors cursor-pointer bebas-neue-regular">WOMEN</li>
          </Link>
          <Link href="/kid">
            <li className="hover:text-black text-lg transition-colors cursor-pointer bebas-neue-regular">KIDS</li>
          </Link>
          <Link href="/sale">
            <li className="hover:text-black text-lg transition-colors cursor-pointer bebas-neue-regular">SALE</li>
          </Link>
          <Link href="/back-to-school">
            <li className="hover:text-black text-lg transition-colors cursor-pointer bebas-neue-regular">BACK TO SCHOOL</li>
          </Link>

        </ul>


        <div className="hidden md:flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <Input type="text" placeholder="Search" className="w-40 lg:w-60 bebas-neue-regular" />
            <Search />
          </div>
          <User className="cursor-pointer hover:text-gray-700" />
          <ShoppingBag className="cursor-pointer hover:text-gray-700" />
        </div>


        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>


      {isOpen && (
        <div ref={togglenav} className="md:hidden nav-toggle px-6 py-4 border-t border-gray-200 bg-white">
          <ul className="flex flex-col gap-4 mb-4 text-sm font-medium text-gray-700">
            <li className="hover:text-black cursor-pointer">MEN</li>
            <li className="hover:text-black cursor-pointer">WOMEN</li>
            <li className="hover:text-black cursor-pointer">KIDS</li>
            <li className="hover:text-black cursor-pointer">SALE</li>
          </ul>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <Input type="text" placeholder="Search" className="flex-1" />
              <Button type="submit" className="px-4">Search</Button>
            </div>
            <div className="flex gap-4 text-gray-700">
              <User className="cursor-pointer" />
              <ShoppingBag className="cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
