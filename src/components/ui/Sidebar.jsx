// components/Sidebar.js
"use client"; // Required since you’re using hooks like usePathname

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: "dashboard" },
  { name: "Products", href: "/admin/products", icon: "inventory" },
  { name: "Orders", href: "/admin/orders", icon: "shopping_cart" },
  { name: "Customers", href: "/admin/customers", icon: "people" },
  { name: "Analytics", href: "/admin/analytics", icon: "analytics" },
  { name: "Settings", href: "/admin/settings", icon: "settings" },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen, setType }) {
  const [isActive, setIsActive] = useState("dashboard")
  const pathname = usePathname();

  const handleactive = (data) => {
    setType(data)
    setIsActive(data)
  }
  return (
    <>
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? "block" : "hidden"
          }`}
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        />

        <div className="relative flex flex-col flex-1 w-64 bg-indigo-800 pt-5 pb-4">
          {/* Close button */}
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <span className="material-icons text-white">close</span>
            </button>
          </div>

          {/* Navigation */}
          <div className="mt-5 flex-1 h-0 overflow-y-auto ">
            <nav className="px-2 space-y-1 ">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:bg-indigo-600 ${pathname === item.href ? "bg-indigo-600" : ""
                    }`}
                >
                  <span className="material-icons mr-4">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 bg-indigo-800 pt-5 pb-4 ">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-white text-xl font-bold bebas-neue-regular">Admin Panel</h1>
          </div>

          <div className="mt-5 flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 justify-center items-center px-2 space-y-1">
              {navigation.map((item) => (
                <button
                  onClick={()=>handleactive(item.name.toLowerCase())}
                  key={item.name}
                  href={item.href}
                  className={`bebas-neue-regular group flex items-center px-4 py-2 text-lg font-medium rounded-sm text-white hover:bg-indigo-600 ${isActive == item.name.toLowerCase() ? "bg-indigo-600" : ""
                    }`}
                >
                  <span className="material-icons mr-3">zig</span>
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
