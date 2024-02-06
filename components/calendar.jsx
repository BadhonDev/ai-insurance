"use client"

import { useState, useEffect } from "react"
import {
  format,
  subMonths,
  addMonths,
  subYears,
  addYears,
  isEqual,
  getDaysInMonth,
  getDay,
} from "date-fns"

// type DatepickerType = "date" | "month" | "year";

export default function Calendar({ name }) {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const [dayCount, setDayCount] = useState([])
  const [blankDays, setBlankDays] = useState([])
  const [showDatepicker, setShowDatepicker] = useState(false)
  const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [type, setType] = useState("date")

  const decrement = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1))
        break
      case "month":
        setDatepickerHeaderDate((prev) => subYears(prev, 1))
        break
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1))
        break
    }
  }

  const increment = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => addMonths(prev, 1))
        break
      case "month":
        setDatepickerHeaderDate((prev) => addYears(prev, 1))
        break
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1))
        break
    }
  }

  const isToday = (date) =>
    isEqual(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date),
      selectedDate
    )

  const setDateValue = (date) => () => {
    setSelectedDate(
      new Date(
        datepickerHeaderDate.getFullYear(),
        datepickerHeaderDate.getMonth(),
        date
      )
    )
    setShowDatepicker(false)
  }

  const getDayCount = (date) => {
    let daysInMonth = getDaysInMonth(date)

    // find where to start calendar day of week
    let dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1))
    let blankdaysArray = []
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i)
    }

    let daysArray = []
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i)
    }

    setBlankDays(blankdaysArray)
    setDayCount(daysArray)
  }

  const isSelectedMonth = (month) =>
    isEqual(
      new Date(selectedDate.getFullYear(), month, selectedDate.getDate()),
      selectedDate
    )

  const setMonthValue = (month) => () => {
    setDatepickerHeaderDate(
      new Date(
        datepickerHeaderDate.getFullYear(),
        month,
        datepickerHeaderDate.getDate()
      )
    )
    setType("date")
  }

  const toggleDatepicker = () => setShowDatepicker((prev) => !prev)

  const showMonthPicker = () => setType("month")

  const showYearPicker = () => setType("date")

  useEffect(
    () => {
      getDayCount(datepickerHeaderDate)
    },
    // eslint-disable-next-line
    [datepickerHeaderDate]
  )

  return (
    <div className="relative w-full">
      <input type="hidden" name="date" />
      <input
        type="text"
        readOnly
        className="cursor-pointer py-3 px-3 w-full bg-transparent border-2 border-[#D8E3E9] text-sm rounded-sm text-[#9ca3af]"
        placeholder="Select date"
        value={`${name}${format(selectedDate, "yyyy-MM-dd")}`}
        onClick={toggleDatepicker}
      />
      <div
        className="cursor-pointer absolute top-1 right-0 px-3 py-2"
        onClick={toggleDatepicker}
      >
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
      {showDatepicker && (
        <div
          className="bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0 z-40"
          style={{ width: "17rem" }}
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <button
                type="button"
                className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                onClick={decrement}
              >
                <svg
                  className="h-6 w-6 text-gray-500 inline-flex"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            {type === "date" && (
              <div
                onClick={showMonthPicker}
                className="flex-grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
              >
                <p className="text-center">
                  {format(datepickerHeaderDate, "MMMM")}
                </p>
              </div>
            )}
            <div
              onClick={showYearPicker}
              className="flex-grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
            >
              <p className="text-center">
                {format(datepickerHeaderDate, "yyyy")}
              </p>
            </div>
            <div>
              <button
                type="button"
                className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                onClick={increment}
              >
                <svg
                  className="h-6 w-6 text-gray-500 inline-flex"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {type === "date" && (
            <>
              <div className="flex flex-wrap mb-3 -mx-1">
                {DAYS.map((day, i) => (
                  <div key={i} style={{ width: "14.26%" }} className="px-1">
                    <div className="text-gray-800 font-medium text-center text-xs">
                      {day}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap -mx-1">
                {blankDays.map((_, i) => (
                  <div
                    key={i}
                    style={{ width: "14.26%" }}
                    className="text-center border p-1 border-transparent text-sm"
                  ></div>
                ))}
                {dayCount.map((d, i) => (
                  <div
                    key={i}
                    style={{ width: "14.26%" }}
                    className="px-1 mb-1"
                  >
                    <div
                      onClick={setDateValue(d)}
                      className={`cursor-pointer text-center text-sm leading-none rounded-full md:leading-loose transition ease-in-out duration-100 ${
                        isToday(d)
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-200"
                      }`}
                    >
                      {d}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {type === "month" && (
            <div className="flex flex-wrap -mx-1">
              {Array(12)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    onClick={setMonthValue(i)}
                    style={{ width: "25%" }}
                  >
                    <div
                      className={`cursor-pointer p-5 font-semibold text-center text-sm rounded-lg hover:bg-gray-200 ${
                        isSelectedMonth(i)
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-200"
                      }`}
                    >
                      {format(
                        new Date(
                          datepickerHeaderDate.getFullYear(),
                          i,
                          datepickerHeaderDate.getDate()
                        ),
                        "MMM"
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
