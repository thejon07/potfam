"use client";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from 'lucide-react';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const storedCart = localStorage.getItem("products");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
      console.log("render")
    }
  }, []);

  const handleincreasequantity = (id) => {
    const updatedcart = cartItems.map((item) => item._id == id ? { ...item, quantity: item.quantity + 1 } : item)
    localStorage.setItem("products", JSON.stringify(updatedcart))
    setCartItems(updatedcart)
  }

  const handledecreasequantity = (id) => {
    const updatedcart = cartItems.map((item) => item._id == id ? { ...item, quantity: item.quantity - 1 } : item)
    localStorage.setItem("products", JSON.stringify(updatedcart))
    setCartItems(updatedcart)
  }

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("products", JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  const redirectCheckout = async (data) => {
    console.log(data)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: data }), // must be wrapped
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      const { id } = await res.json();
      console.log("your id", id)
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Checkout failed: " + err.message);
    }
  };



  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center  shadow-md rounded-lg p-10">
          <h1 className="text-3xl font-bold mb-4 bebas-neue-regular">Your Cart</h1>
          <p className="text-center text-gray-500 bebas-neue-regular">Your cart is empty.</p>
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex items-center gap-4 w-60">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-xs sm:text-lg">{item.title}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2) * item.quantity}</p>
                </div>
              </div>

              <div className=" flex justify-center items-center gap-4">
                <h1 className="block bebas-neue-regular">{item.quantity}</h1>
                <div>
                  <button onClick={() => handleincreasequantity(item._id)} className="block border-2">
                    <ChevronUp className="w-4 h-4"/>
                  </button>
                  <button onClick={()=>handledecreasequantity(item._id)} className=" block border-2">
                    <ChevronDown className="w-4  h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeItem(item._id)}
                className="bg-red-500 bebas-neue-regular text-white px-4 py-2 text-xs ml-2 sm:text-lg sm:ml-0 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between bebas-neue-regular items-center mt-6 font-semibold text-lg">
            <span>Total:</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>

          <button onClick={() => redirectCheckout(cartItems)} className="w-full mt-6 bg-black bebas-neue-regular text-white py-3 rounded hover:bg-blue-700 transition">

            Proceed to Checkout
          </button>


        </div>
      )}
    </div>
  );
}
