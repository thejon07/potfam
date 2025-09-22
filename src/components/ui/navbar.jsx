"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import potfam from "./../../../public/potfam.png";
import Image from "next/image";
import { User, ShoppingBag, Menu, X, Search } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { gsap } from "gsap";
import Link from "next/link";
import { debounce } from "../../helper/debounce";

export default function Navbar({ authorize }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");
  const [searchResult, setSearchResult] = useState([])
  const togglenav = useRef(null);
  const [toggleSearch, setIsToggleSearch] = useState(false)
  const user = authorize;


  useEffect(() => {
    if (isOpen && togglenav.current) {
      gsap.fromTo(
        togglenav.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }

  }, [isOpen]);

  const handleSearchInput = async () => {
    if (!data) {
      setIsToggleSearch(false)
      setSearchResult([])
      return
    }
    setIsToggleSearch(true)
    console.log(data)

    try {
      const res = await fetch("/api/searchproducts", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      console.log(res)
      setSearchResult(res.productdata)
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  const handlechange = (e) => {
    setData(e.target.value)
  }

  useEffect(() => {
    const defn = debounce(handleSearchInput, 1000);
    defn()
  }, [data]);

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="flex items-center justify-between px-6 py-3 md:px-8">
        <div className="flex items-center gap-2">
          <Image src={potfam} width={80} height={80} alt="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/men">
            <li className="hover:text-black text-lg transition-colors cursor-pointer bebas-neue-regular">
              MEN
            </li>
          </Link>
          <Link href="/women">
            <li className="hover:text-black text-lg transition-colors cursor-pointer bebas-neue-regular">
              WOMEN
            </li>
          </Link>
          <Link href="/kid">
            <li className="hover:text-black text-lg transition-colors cursor-pointer bebas-neue-regular">
              KIDS
            </li>
          </Link>
          <Link href="/sale">
            <li className="hover:text-black text-lg transition-colors cursor-pointer bebas-neue-regular">
              SALE
            </li>
          </Link>
          <Link href="/back-to-school">
            <li className="hover:text-black text-lg transition-colors cursor-pointer bebas-neue-regular">
              BACK TO SCHOOL
            </li>
          </Link>
        </ul>

        {/* Desktop Search + Icons */}
        <div className="hidden md:flex gap-4 items-center relative">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Search"
              className="w-40 lg:w-60 bebas-neue-regular"
              value={data}
              onChange={handlechange}
            />
            <Search />
            {toggleSearch && (
              <div className={`absolute  top-full left-0 mt-1 ${!data.trim() ? "bg-none" : "lg:w-60 w-40 pb-4 pl-4 pt-4"} bg-white border border-gray-300 shadow-lg z-50 max-h-60 overflow-auto rounded-md`}>
                {searchResult?.length > 0 && data.trim() ? (
                  searchResult.map((item) => (
                    <Link href={`/product-details/${item._id}`} key={item._id}>
                      <div className="bebas-neue-regular p-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0">
                        {item.title}
                      </div>
                    </Link>
                  ))
                ) : (
                  data.trim() && (
                    <div className="bebas-neue-regular p-2 text-gray-500">
                      No result found
                    </div>
                  )
                )}
              </div>
            )}

          </div>
          <Link href="/cart"><ShoppingBag className="cursor-pointer hover:text-gray-700" /></Link>
          {
            user ? <Image src={user?.user.image} className="rounded-full" width={30} height={50} alt="user" /> : <Link href="/signup"><User className="cursor-pointer hover:text-gray-700" /></Link>

          }
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={togglenav}
          className="md:hidden nav-toggle px-6 py-4 border-t border-gray-200 bg-white"
        >
          <ul className="flex flex-col gap-4 mb-4 text-sm font-medium text-gray-700">
            <li className="hover:text-black cursor-pointer">MEN</li>
            <li className="hover:text-black cursor-pointer">WOMEN</li>
            <li className="hover:text-black cursor-pointer">KIDS</li>
            <Link href="/sale"><li className="hover:text-black cursor-pointer">SALE</li></Link>
          </ul>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <Input type="text" placeholder="Search" className="flex-1" />
              <Button type="submit" className="px-4">
                Search
              </Button>
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
