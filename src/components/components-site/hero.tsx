"use client"

import { Advantages } from "./advantages"

export function Hero() {
  // Get current month and year
  const currentDate = new Date()
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const currentMonth = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-4 md:py-12 max-h-[200px] md:max-h-none overflow-hidden"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Black semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center h-full flex flex-col justify-center">
        <div className="flex items-center justify-center mb-2 md:mb-6">
          <h1 className="text-lg md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-tight">
            <span className="text-red-600">Best </span>
            <span className="text-white"> Casinos Great Britain </span>
          </h1>
        </div>

        <p className="text-sm md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md mb-3 md:mb-8 leading-tight">
          Discover the best bonuses, fastest payouts and most reliable online casinos!
        </p>

        <div className="block md:hidden">
          <Advantages />
        </div>

        <div className="hidden md:block">
          <Advantages />
        </div>

        {/* Rating update info */}
        <div className="mt-2 md:mt-4">
          <p className="text-xs text-gray-400">
            Ratings updated monthly • Last update: {currentMonth} {currentYear}
          </p>
        </div>
      </div>
    </section>
  )
}
