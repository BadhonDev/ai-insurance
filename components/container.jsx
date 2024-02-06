"use client"

import PostForm from "./post-form"
import UpdateForm from "./update-form"

import { useStateData } from "@/hooks/use-state"

const Container = () => {
  const { data, setData } = useStateData()
  console.log("initial data: ", data)
  return (
    <div className="max-w-[1400px] px-4 py-6 mx-auto">
      <div className="mb-8">
        <p className="font-bold text-base text-black dark:text-gray-200">
          Motor insurance Claim
        </p>
      </div>
      <PostForm />
      <div className="font-semibold text-base tracking-wider leading-loose text-black dark:text-gray-200 my-10">
        ISSUE OF THIS FORM DOES NOT IMPLY ACCEPTANCE OF LIABILITY. <br />
        PLEASE GIVE ALL THE DETAILS ASKED FOR IN THE CLAIM FORM. CLAIM FORM TO
        BE FILLED IN AND SIGNED BY THE INSURED ONLY.
      </div>
      {Object.keys(data).length !== 0 && (
        <UpdateForm data={data[0]} setData={setData} />
      )}
    </div>
  )
}

export default Container
