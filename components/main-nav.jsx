"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "claim-form",
      label: "Claim Form",
      active: pathname === "/claim-form",
    },
    {
      href: "inquiry",
      label: "Inquiry",
      active: pathname === "/inquiry",
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`text-sm hover:text-white hover:font-bold ${
            route.active ? "text-white font-bold" : "text-gray-300"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
