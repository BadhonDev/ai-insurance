"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useStateData } from "@/hooks/use-state"

const PostForm = () => {
  const { setData } = useStateData()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await fetch("https://form-backend.azurewebsites.net/items", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      })

      const parsedData = await res.json()
      if (res.ok) {
        setData(parsedData)
      } else {
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="font-bold text-base text-black dark:text-gray-200 mb-2">
        Search
      </div>
      <div className="py-3 rounded-lg border-2 border-dashed border-[#c0c2c8] bg-[#e8f4fd]">
        <div className="flex m-5 font-medium space-x-3">
          <div className="w-full">
            <input
              type="text"
              className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Policy no."
              {...register("PolicyNo")}
            />
            {/* {errors.PolicyNo && (
              <p
                className="text-sm text-red-600 mt-2"
                id="hs-validation-name-error-helper"
              >
                This field is required
              </p>
            )} */}
          </div>
          <div className="w-full">
            <input
              type="text"
              className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Claim no."
              {...register("ClaimNo")}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Vehicle no."
              {...register("VehicleNo")}
            />
            {/* {errors.VehicleNo && (
              <p
                className="text-sm text-red-600 mt-2"
                id="hs-validation-name-error-helper"
              >
                This field is required
              </p>
            )} */}
          </div>
        </div>
        <div className="flex m-5 space-x-3">
          <div className="w-full">
            <input
              type="text"
              className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Name"
              {...register("NameInsured")}
            />
            {/* {errors.NameInsured && (
              <p
                className="text-sm text-red-600 mt-2"
                id="hs-validation-name-error-helper"
              >
                This field is required
              </p>
            )} */}
          </div>
          <div className="w-full">
            <input
              type="text"
              className="py-3 px-3 bg-transparent w-full border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Mobile no."
              {...register("MobileNoInsured")}
            />
            {/* {errors.MobileNoInsured && (
              <p
                className="text-sm text-red-600 mt-2"
                id="hs-validation-name-error-helper"
              >
                This field is required
              </p>
            )} */}
          </div>
          <button
            type="submit"
            className="px-10 max-h-12 rounded-md py-2 bg-[#347df6] text-white"
          >
            {!loading ? (
              <p>Search</p>
            ) : (
              <div
                className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-white rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </form>
  )
}

export default PostForm
