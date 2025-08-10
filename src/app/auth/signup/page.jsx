"use client"
import { doCredentialLogin, dosociallogin } from '@/lib/action'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function Page() {
  const [formtype, setFormtype] = useState("email")
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const router = useRouter()

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleemailsubmit = () => {
    setFormtype("password")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("here is your data", data)
    const formdata = new FormData();
    formdata.append("email", data.email)
    formdata.append("password", data.password)
    const data1 = await doCredentialLogin(formdata)
    console.log(data1)
    setData({ email: "", password: "" })
    if (data1) {
      router.push("/")
    }
  }

  return (
    <>
      {formtype === "email" && (
        <div className="min-h-screen flex items-center justify-center p-4 bg-white">
          <div className="w-full max-w-md border border-black rounded-md px-6 py-6 bg-white">
            <img src="/potfam.png" alt="PotFam" className="w-[100px] h-auto mb-4" />
            <h1 className="text-2xl sm:text-3xl text-black font-semibold">
              LOG IN OR SIGNUP
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mb-4">
              Enjoy members-only access to exclusive products, experiences, offers and more.
            </p>

            <form className="mb-4" action={dosociallogin}>
              <button
                type="submit"
                className="w-full border bg-black  border-black py-2 rounded-md text-sm font-medium"
                name='action'
                value="google"
              >
                Sign in with Google
              </button>
            </form>
            <p className='text-black'>Or,</p>
            <form onSubmit={handleemailsubmit}>
              <input
                type="email"
                className="w-full my-2 border p-2 text-black border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                name="email"
                placeholder="Enter your email"
                value={data?.email || ""}
                onChange={handleOnchange}
                required
              />
              <button
                type="submit"
                className="text-white bg-black py-2 w-full rounded-md hover:opacity-90"
              >
                Continue
              </button>
              <p className="text-black text-xs mt-6 leading-relaxed">
                Sign me up to PotFam, featuring exclusive PotFam offers and news.
                By clicking the “Continue” button, you agree to the TERMS OF USE,
                and acknowledge you have read our PRIVACY POLICY.
              </p>
            </form>
          </div>
        </div>
      )}

      {formtype === "password" && (
        <div className="min-h-screen flex items-center justify-center p-4 bg-white">
          <div className="w-full max-w-md border border-black rounded-md px-6 py-6 bg-white">
            <h1 className="text-2xl sm:text-3xl text-black font-semibold mb-2">
              Welcome to PotFam!
            </h1>
            <p className="text-black text-sm sm:text-base mb-4">
              Create a password to have full access to PotFam benefits and be able to redeem points,
              save your shipping details, and more.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                required
                value={data?.password}
                onChange={handleOnchange}
                className="py-2 px-4 mb-4 w-full text-black border-black border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="text-white w-full py-2 px-4 bg-black rounded-md hover:opacity-90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Page
