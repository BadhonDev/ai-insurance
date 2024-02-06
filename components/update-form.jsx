"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import PrelineScript from "@/components/PrelineScript"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const UpdateForm = ({ data, setData }) => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: data,
  })
  const notify = () =>
    toast.success("Updated Successfully! 😊", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      //   transition: Bounce,
    })
  const onSubmit = async (updatedData) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://form-backend.azurewebsites.net/items/${data.id}`,
        {
          method: "PUT",
          body: JSON.stringify([updatedData]),
          headers: {
            "content-type": "application/json",
          },
        }
      )
      if (res.ok) {
        notify()
      } else {
        console.log("Update Oops! Something is wrong.")
      }
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }
  console.log("props data: ", data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hs-accordion-group" data-hs-accordion-always-open>
        <div
          className="hs-accordion active"
          id="hs-basic-with-title-and-arrow-stretched-heading-one"
        >
          <button
            className="hs-accordion-toggle bg-[#f0f6ff] py-5 px-4 border-2 border-[#c1cee2] inline-flex items-center justify-between gap-x-3 w-full font-extrabold text-start text-black rounded-lg"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
            type="button"
          >
            Insured Details
            <svg
              className="hs-accordion-active:hidden block w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hidden w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <div
            id="hs-basic-with-title-and-arrow-stretched-collapse-one"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <div className="py-3 mt-4 rounded-lg border-2 border-dashed border-[#c0c2c8] bg-[#e8f4fd]">
              <div className="flex m-5 font-medium space-x-3">
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Name"
                  {...register("NameInsured")}
                />
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="E-Mail ID"
                  {...register("EmailIdInsured")}
                />
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Mobile No."
                  {...register("MobileNoInsured")}
                />
              </div>
              <div className="flex m-5 space-x-3">
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Address"
                  {...register("AddressInsured")}
                />
              </div>
              <div className="flex m-5 space-x-3">
                <textarea
                  id="hs-textarea-ex-1"
                  className="py-3 px-3 w-full min-h-36 bg-transparent border-2 border-[#D8E3E9] rounded-sm text-sm "
                  placeholder="Details of other existing Insurance policy (ies) in respect of this accident"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hs-accordion"
          id="hs-basic-with-title-and-arrow-stretched-heading-two"
        >
          <button
            className="hs-accordion-toggle bg-[#f0f6ff] mt-5 py-5 px-4 border-2 border-[#c1cee2] inline-flex items-center justify-between gap-x-3 w-full font-extrabold text-start text-black rounded-lg"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            type="button"
          >
            Loss Details
            <svg
              className="hs-accordion-active:hidden block w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hidden w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <div
            id="hs-basic-with-title-and-arrow-stretched-collapse-two"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <div className="py-3 mt-4 rounded-lg border-2 border-dashed border-[#c0c2c8] bg-[#e8f4fd]">
              <div className="flex m-5 font-medium space-x-3">
                {/* <Calendar
            name="date of Accident/Occurrence: "
            regFunc={register}
            regFuncValue="DateAndTimeLossDetails"
            date={data.DateAndTimeLossDetails}
          /> */}
                <div className="relative w-full border-2 border-[#D8E3E9] text-sm rounded-sm">
                  <input
                    type="text"
                    className="py-3 px-3 bg-transparent w-full focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Date of Accident/Occurrence"
                    {...register("DateAndTimeLossDetails")}
                  />
                  <div className="absolute top-1 right-0 px-3 py-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3 1.8H13.5V0.9C13.5 0.661305 13.4052 0.432387 13.2364 0.263604C13.0676 0.0948211 12.8387 0 12.6 0C12.3613 0 12.1324 0.0948211 11.9636 0.263604C11.7948 0.432387 11.7 0.661305 11.7 0.9V1.8H6.3V0.9C6.3 0.661305 6.20518 0.432387 6.0364 0.263604C5.86761 0.0948211 5.63869 0 5.4 0C5.1613 0 4.93239 0.0948211 4.7636 0.263604C4.59482 0.432387 4.5 0.661305 4.5 0.9V1.8H2.7C1.98392 1.8 1.29716 2.08446 0.790812 2.59081C0.284464 3.09716 0 3.78392 0 4.5V15.3C0 16.0161 0.284464 16.7028 0.790812 17.2092C1.29716 17.7155 1.98392 18 2.7 18H15.3C16.0161 18 16.7028 17.7155 17.2092 17.2092C17.7155 16.7028 18 16.0161 18 15.3V4.5C18 3.78392 17.7155 3.09716 17.2092 2.59081C16.7028 2.08446 16.0161 1.8 15.3 1.8ZM16.2 15.3C16.2 15.5387 16.1052 15.7676 15.9364 15.9364C15.7676 16.1052 15.5387 16.2 15.3 16.2H2.7C2.46131 16.2 2.23239 16.1052 2.0636 15.9364C1.89482 15.7676 1.8 15.5387 1.8 15.3V9H16.2V15.3ZM16.2 7.2H1.8V4.5C1.8 4.2613 1.89482 4.03239 2.0636 3.8636C2.23239 3.69482 2.46131 3.6 2.7 3.6H4.5V4.5C4.5 4.73869 4.59482 4.96761 4.7636 5.1364C4.93239 5.30518 5.1613 5.4 5.4 5.4C5.63869 5.4 5.86761 5.30518 6.0364 5.1364C6.20518 4.96761 6.3 4.73869 6.3 4.5V3.6H11.7V4.5C11.7 4.73869 11.7948 4.96761 11.9636 5.1364C12.1324 5.30518 12.3613 5.4 12.6 5.4C12.8387 5.4 13.0676 5.30518 13.2364 5.1364C13.4052 4.96761 13.5 4.73869 13.5 4.5V3.6H15.3C15.5387 3.6 15.7676 3.69482 15.9364 3.8636C16.1052 4.03239 16.2 4.2613 16.2 4.5V7.2Z"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative w-full border-2 border-[#D8E3E9] text-sm rounded-sm">
                  <input
                    type="text"
                    className="py-3 px-3 bg-transparent w-full focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Time of Accident/Occurrence"
                  />
                  <div className="absolute top-1 right-0 px-3 py-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1.8C7.09044 1.8 5.25909 2.55857 3.90883 3.90883C2.55857 5.25909 1.8 7.09044 1.8 9C1.8 10.9096 2.55857 12.7409 3.90883 14.0912C5.25909 15.4414 7.09044 16.2 9 16.2C10.9096 16.2 12.7409 15.4414 14.0912 14.0912C15.4414 12.7409 16.2 10.9096 16.2 9C16.2 7.09044 15.4414 5.25909 14.0912 3.90883C12.7409 2.55857 10.9096 1.8 9 1.8ZM0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18C4.0293 18 0 13.9707 0 9ZM9 3.6C9.23869 3.6 9.46761 3.69482 9.6364 3.8636C9.80518 4.03239 9.9 4.2613 9.9 4.5V8.6274L12.3363 11.0637C12.5002 11.2334 12.591 11.4608 12.5889 11.6968C12.5869 11.9327 12.4922 12.1585 12.3253 12.3253C12.1585 12.4922 11.9327 12.5869 11.6968 12.5889C11.4608 12.591 11.2334 12.5002 11.0637 12.3363L8.3637 9.6363C8.19491 9.46756 8.10005 9.23868 8.1 9V4.5C8.1 4.2613 8.19482 4.03239 8.3636 3.8636C8.53239 3.69482 8.7613 3.6 9 3.6Z"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Place of Loss"
                  {...register("PlaceOfLossLossDetails")}
                />
              </div>
              <div className="flex m-5 space-x-3">
                <div className="flex items-center w-3/5 gap-x-9 text-[#9ca3af] ps-4">
                  Type of Loss
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      name="hs-radio-group"
                      className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-radio-group-1"
                      defaultChecked={
                        data && data.TypeOfLossDamage === "selected"
                          ? true
                          : false
                      }
                    />
                    <label
                      htmlFor="hs-radio-group-1"
                      className="ms-2 cursor-pointer"
                    >
                      Damage
                    </label>
                  </div>
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      name="hs-radio-group"
                      className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-radio-group-2"
                      defaultChecked={
                        data && data.TypeOfLossTheft === "selected"
                          ? true
                          : false
                      }
                    />
                    <label
                      htmlFor="hs-radio-group-2"
                      className="ms-2 cursor-pointer"
                    >
                      Theft
                    </label>
                  </div>
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      name="hs-radio-group"
                      className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-radio-group-3"
                      defaultChecked={
                        data && data.TypeOfLossThirdParty === "selected"
                          ? true
                          : false
                      }
                    />
                    <label
                      htmlFor="hs-radio-group-3"
                      className="ms-2 cursor-pointer"
                    >
                      Third Party
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Estimated Cost of Repairs"
                  {...register("EstimatedCostOfRepairs")}
                />
              </div>
              <div className="flex m-5 space-x-3">
                <textarea
                  id="hs-textarea-ex-1"
                  className="py-3 px-3 w-full min-h-44 bg-transparent border-2 border-[#D8E3E9] rounded-sm text-sm "
                  placeholder="Short Description of Accident/Incident"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hs-accordion"
          id="hs-basic-with-title-and-arrow-stretched-heading-three"
        >
          <button
            className="hs-accordion-toggle bg-[#f0f6ff] mt-5 py-5 px-4 border-2 border-[#c1cee2] inline-flex items-center justify-between gap-x-3 w-full font-extrabold text-start text-black rounded-lg"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
            type="button"
          >
            Driver Details
            <svg
              className="hs-accordion-active:hidden block w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hidden w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <div
            id="hs-basic-with-title-and-arrow-stretched-collapse-three"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <div className="py-3 mt-4 rounded-lg border-2 border-dashed border-[#c0c2c8] bg-[#e8f4fd]">
              <div className="flex m-5 font-medium space-x-3">
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Name"
                  {...register("DriverName")}
                />
                <div className="relative flex items-center w-2/4 border-2 border-[#D8E3E9] text-sm rounded-sm">
                  <input
                    type="text"
                    className="py-4 px-3 bg-transparent w-full focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Age"
                    {...register("DriverAge")}
                  />
                  <div className="absolute top-2 right-0 px-3 py-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3 1.8H13.5V0.9C13.5 0.661305 13.4052 0.432387 13.2364 0.263604C13.0676 0.0948211 12.8387 0 12.6 0C12.3613 0 12.1324 0.0948211 11.9636 0.263604C11.7948 0.432387 11.7 0.661305 11.7 0.9V1.8H6.3V0.9C6.3 0.661305 6.20518 0.432387 6.0364 0.263604C5.86761 0.0948211 5.63869 0 5.4 0C5.1613 0 4.93239 0.0948211 4.7636 0.263604C4.59482 0.432387 4.5 0.661305 4.5 0.9V1.8H2.7C1.98392 1.8 1.29716 2.08446 0.790812 2.59081C0.284464 3.09716 0 3.78392 0 4.5V15.3C0 16.0161 0.284464 16.7028 0.790812 17.2092C1.29716 17.7155 1.98392 18 2.7 18H15.3C16.0161 18 16.7028 17.7155 17.2092 17.2092C17.7155 16.7028 18 16.0161 18 15.3V4.5C18 3.78392 17.7155 3.09716 17.2092 2.59081C16.7028 2.08446 16.0161 1.8 15.3 1.8ZM16.2 15.3C16.2 15.5387 16.1052 15.7676 15.9364 15.9364C15.7676 16.1052 15.5387 16.2 15.3 16.2H2.7C2.46131 16.2 2.23239 16.1052 2.0636 15.9364C1.89482 15.7676 1.8 15.5387 1.8 15.3V9H16.2V15.3ZM16.2 7.2H1.8V4.5C1.8 4.2613 1.89482 4.03239 2.0636 3.8636C2.23239 3.69482 2.46131 3.6 2.7 3.6H4.5V4.5C4.5 4.73869 4.59482 4.96761 4.7636 5.1364C4.93239 5.30518 5.1613 5.4 5.4 5.4C5.63869 5.4 5.86761 5.30518 6.0364 5.1364C6.20518 4.96761 6.3 4.73869 6.3 4.5V3.6H11.7V4.5C11.7 4.73869 11.7948 4.96761 11.9636 5.1364C12.1324 5.30518 12.3613 5.4 12.6 5.4C12.8387 5.4 13.0676 5.30518 13.2364 5.1364C13.4052 4.96761 13.5 4.73869 13.5 4.5V3.6H15.3C15.5387 3.6 15.7676 3.69482 15.9364 3.8636C16.1052 4.03239 16.2 4.2613 16.2 4.5V7.2Z"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex m-5 space-x-3">
                <div className="flex items-center w-3/5 gap-x-9 text-[#9ca3af] ps-4">
                  Is Driver
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      name="hs-radio-group-1"
                      className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-radio-group-4"
                      defaultChecked={
                        data && data.IsDriverOwner === "selected" ? true : false
                      }
                    />
                    <label
                      htmlFor="hs-radio-group-4"
                      className="ms-2 cursor-pointer"
                    >
                      Owner
                    </label>
                  </div>
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      name="hs-radio-group-1"
                      className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-radio-group-5"
                      defaultChecked={
                        data && data.IsDriverPaidDriver === "selected"
                          ? true
                          : false
                      }
                    />
                    <label
                      htmlFor="hs-radio-group-5"
                      className="ms-2 cursor-pointer"
                    >
                      Paid Driver
                    </label>
                  </div>
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      name="hs-radio-group-1"
                      className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-radio-group-6"
                      defaultChecked={
                        data && data.IsDriverRelativeFriend === "selected"
                          ? true
                          : false
                      }
                    />
                    <label
                      htmlFor="hs-radio-group-6"
                      className="ms-2 cursor-pointer"
                    >
                      Relative/Friend
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Driving License No"
                  {...register("DrivingLicenseNo")}
                />
              </div>
              <div className="flex m-5 font-medium space-x-3">
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Valid up to"
                  {...register("DrivingLicenseValidUpto")}
                />
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Authorized to drive"
                  {...register("AuthorisedToDrive")}
                />
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Issuing Authority"
                  {...register("IssuingAuthority")}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="hs-accordion"
          id="hs-basic-with-title-and-arrow-stretched-heading-four"
        >
          <button
            className="hs-accordion-toggle bg-[#f0f6ff] mt-5 py-5 px-4 border-2 border-[#c1cee2] inline-flex items-center justify-between gap-x-3 w-full font-extrabold text-start text-black rounded-lg"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
            type="button"
          >
            Additional Details In Case Of Commercial Vehicles
            <svg
              className="hs-accordion-active:hidden block w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hidden w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <div
            id="hs-basic-with-title-and-arrow-stretched-collapse-four"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
          >
            <div className="py-3 mt-4 rounded-lg border-2 border-dashed border-[#c0c2c8] bg-[#e8f4fd]">
              <div className="flex m-5 font-medium space-x-3">
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Permit No."
                  {...register("PermitNo")}
                />
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Valid Up to"
                  {...register("PermitNoValidUpto")}
                />
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Issuing Authority"
                  {...register("IssuingAuthority")}
                />
              </div>
              <div className="flex m-5 space-x-3">
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Fitness Certificate Valid Up to"
                  {...register("FitnessCertificateValidUpto")}
                />
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="No. of fare paying Passengers carried"
                  {...register("NoOfFarePayingPassengersCarried")}
                />
              </div>
              <div className="flex m-5 font-medium space-x-3">
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Weight and Nature of Goods Carried"
                  {...register("WeightAndNatureOfGoodsCarried")}
                />
                <input
                  type="text"
                  className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="GR/LR No."
                  {...register("GRLRNo")}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="hs-accordion"
          id="hs-basic-with-title-and-arrow-stretched-heading-five"
        >
          <button
            className="hs-accordion-toggle bg-[#f0f6ff] mt-5 py-5 px-4 border-2 border-[#c1cee2] inline-flex items-center justify-between gap-x-3 w-full font-extrabold text-start text-black rounded-lg"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
            type="button"
          >
            Injury / Death Details & Police Report
            <svg
              className="hs-accordion-active:hidden block w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hidden w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <div
            id="hs-basic-with-title-and-arrow-stretched-collapse-five"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
          >
            <div className="py-3 mt-4 rounded-lg border-2 border-dashed border-[#c0c2c8] bg-[#e8f4fd]">
              <div className="flex m-5 font-medium space-x-3">
                <div className="flex items-center w-3/5 gap-x-9 text-[#9ca3af] ps-4">
                  Police Report Lodged
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      name="hs-radio-group-2"
                      className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-radio-group-7"
                      defaultChecked={
                        data && data.PoliceReportLodgedYes === "selected"
                          ? true
                          : false
                      }
                    />
                    <label
                      htmlFor="hs-radio-group-7"
                      className="ms-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      name="hs-radio-group-2"
                      className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-radio-group-8"
                      defaultChecked={
                        data && data.PoliceReportLodgedNo === "selected"
                          ? true
                          : false
                      }
                    />
                    <label
                      htmlFor="hs-radio-group-8"
                      className="ms-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="m-2 border-2 border-[#c0c2c8] border-dashed rounded-lg">
                <div className="flex m-5 space-x-3">
                  <input
                    type="text"
                    className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="FIR/GD No."
                    {...register("FIRGDNo")}
                  />
                  <input
                    type="text"
                    className="py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Police Station Name"
                    {...register("PoliceStationName")}
                  />
                </div>
              </div>
              <div className="flex m-5 font-medium space-x-3">
                <div className="flex items-center w-3/5 gap-x-9 text-[#9ca3af] ps-4">
                  Death/Injury to any occupant/Third Party (others) and/or Third
                  Party Property Damage:
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      name="hs-radio-group-3"
                      className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-radio-group-9"
                      defaultChecked={
                        data &&
                        data.DeathOrInjuryToAnyOccupantThirdPartyPropertyDamageYes ===
                          "selected"
                          ? true
                          : false
                      }
                    />
                    <label
                      htmlFor="hs-radio-group-9"
                      className="ms-2 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex cursor-pointer">
                    <input
                      type="radio"
                      name="hs-radio-group-3"
                      className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-radio-group-10"
                      defaultChecked={
                        data &&
                        data.DeathOrInjuryToAnyOccupantThirdPartyPropertyDamageNo ===
                          "selected"
                          ? true
                          : false
                      }
                    />
                    <label
                      htmlFor="hs-radio-group-10"
                      className="ms-2 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex m-5 space-x-3">
                <textarea
                  id="hs-textarea-ex-1"
                  className="py-3 px-3 w-full min-h-36 bg-transparent border-2 border-[#D8E3E9] rounded-sm text-sm"
                  placeholder="Details in case of Death and/or Injury to Third Party/Occupants/Driver or damage to property"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hs-accordion"
          id="hs-basic-with-title-and-arrow-stretched-heading-two"
        >
          <button
            className="hs-accordion-toggle bg-[#f0f6ff] mt-5 py-5 px-4 border-2 border-[#c1cee2] inline-flex items-center justify-between gap-x-3 w-full font-extrabold text-start text-black rounded-lg"
            aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            type="button"
          >
            Declaration
            <svg
              className="hs-accordion-active:hidden block w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <svg
              className="hs-accordion-active:block hidden w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <div
            id="hs-basic-with-title-and-arrow-stretched-collapse-two"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <div className="py-3 mt-4 z-10 rounded-lg border-2 border-dashed border-[#c0c2c8] bg-[#e8f4fd]">
              <div className="text-justify mx-5 mt-5 mb-14 text-[#6B6B71]">
                I/We the above named, do hereby, to the best of my/our knowledge
                and belief, warrant the truth of the foregoing statement in
                every respect and I/We agree that if I/We have made or in any
                further declaration the company may require in respect of the
                said accident, shall make any false or fraudulent statement or
                any suppression or concealment the policy shall be void and all
                right to recover there-under in respect of past or future
                accidents shall be forfeited. I understand that the company
                reserves the right of verification of facts and documents
                relating to policy and the claim.
              </div>
              <div className="flex m-5 font-medium space-x-3">
                <div className="relative flex items-center w-2/4 border-2 border-[#D8E3E9] text-sm rounded-sm">
                  <input
                    type="text"
                    className="py-4 px-3 bg-transparent w-full focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Date"
                    {...register("DeclarationDate")}
                  />
                  <div className="absolute top-2 right-0 px-3 py-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3 1.8H13.5V0.9C13.5 0.661305 13.4052 0.432387 13.2364 0.263604C13.0676 0.0948211 12.8387 0 12.6 0C12.3613 0 12.1324 0.0948211 11.9636 0.263604C11.7948 0.432387 11.7 0.661305 11.7 0.9V1.8H6.3V0.9C6.3 0.661305 6.20518 0.432387 6.0364 0.263604C5.86761 0.0948211 5.63869 0 5.4 0C5.1613 0 4.93239 0.0948211 4.7636 0.263604C4.59482 0.432387 4.5 0.661305 4.5 0.9V1.8H2.7C1.98392 1.8 1.29716 2.08446 0.790812 2.59081C0.284464 3.09716 0 3.78392 0 4.5V15.3C0 16.0161 0.284464 16.7028 0.790812 17.2092C1.29716 17.7155 1.98392 18 2.7 18H15.3C16.0161 18 16.7028 17.7155 17.2092 17.2092C17.7155 16.7028 18 16.0161 18 15.3V4.5C18 3.78392 17.7155 3.09716 17.2092 2.59081C16.7028 2.08446 16.0161 1.8 15.3 1.8ZM16.2 15.3C16.2 15.5387 16.1052 15.7676 15.9364 15.9364C15.7676 16.1052 15.5387 16.2 15.3 16.2H2.7C2.46131 16.2 2.23239 16.1052 2.0636 15.9364C1.89482 15.7676 1.8 15.5387 1.8 15.3V9H16.2V15.3ZM16.2 7.2H1.8V4.5C1.8 4.2613 1.89482 4.03239 2.0636 3.8636C2.23239 3.69482 2.46131 3.6 2.7 3.6H4.5V4.5C4.5 4.73869 4.59482 4.96761 4.7636 5.1364C4.93239 5.30518 5.1613 5.4 5.4 5.4C5.63869 5.4 5.86761 5.30518 6.0364 5.1364C6.20518 4.96761 6.3 4.73869 6.3 4.5V3.6H11.7V4.5C11.7 4.73869 11.7948 4.96761 11.9636 5.1364C12.1324 5.30518 12.3613 5.4 12.6 5.4C12.8387 5.4 13.0676 5.30518 13.2364 5.1364C13.4052 4.96761 13.5 4.73869 13.5 4.5V3.6H15.3C15.5387 3.6 15.7676 3.69482 15.9364 3.8636C16.1052 4.03239 16.2 4.2613 16.2 4.5V7.2Z"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  className="py-3 px-3 w-2/4 bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Place"
                  {...register("DeclarationPlace")}
                />
                <input
                  type="file"
                  disabled
                  className="hidden"
                  id="Declaration-input-1"
                />
                <label
                  htmlFor="Declaration-input-1"
                  className="flex items-center justify-between py-3 px-3 w-full bg-transparent border-2 border-dashed border-[#c0c2c8] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <div className="text-[#9ca3af]">
                    Browse Signature of the Insured
                  </div>
                  <button
                    className="px-6 py-1 rounded-md text-white bg-[#347df6] text-sm"
                    type="button"
                  >
                    Browse
                  </button>
                </label>
              </div>
            </div>
            <div className="py-3 mt-4 z-10 rounded-lg border-2 border-dashed border-[#c0c2c8] bg-[#e8f4fd]">
              <div className="flex m-5 font-medium space-x-3">
                <div className="flex items-center w-full text-[#6B6B71] ">
                  N.B Please attach a photocopy of your blank / cancelled cheque
                  for NEFT purpose.
                </div>
                <input
                  type="file"
                  disabled
                  className="hidden"
                  id="Declaration-input-1"
                />
                <label
                  htmlFor="Declaration-input-1"
                  className="flex items-center justify-between py-3 px-3 w-full bg-transparent border-2 border-dashed border-[#c0c2c8] text-sm rounded-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <div className="text-[#9ca3af]">
                    Browse Signature of the Insured
                  </div>
                  <button
                    className="px-6 py-1 rounded-md text-white bg-[#347df6] text-sm"
                    type="button"
                  >
                    Browse
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ border: "1px solid #c0c2c8", marginTop: "50px" }} />
        <div className="flex justify-end space-x-4 mt-5 text-sm">
          <button
            type="submit"
            className="px-8 py-2 rounded-md bg-[#347df6] text-white disabled:opacity-50 disabled:pointer-events-none"
          >
            {!loading ? (
              <p>Save</p>
            ) : (
              <div
                className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </button>
          <button
            className="px-8 py-2 rounded-md bg-[#c1cee2] text-blue-700"
            onClick={() => setData({})}
          >
            Cancel
          </button>
        </div>
      </div>
      <PrelineScript />
    </form>
  )
}

export default UpdateForm
