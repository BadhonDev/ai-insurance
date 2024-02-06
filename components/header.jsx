"use client"

import Image from "next/image"

const Header = () => {
  return (
    <header className="flex flex-wrap z-10 w-full bg-[#03132F] py-4">
      <nav
        className="max-w-7xl w-full mx-auto px-4 flex justify-between"
        aria-label="Global"
      >
        <div className="flex items-center">
          <a className="flex-none text-xl font-semibold" href="#">
            <Image src="/EBIW.png" width={125} height={34} alt="EBIW Logo" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
