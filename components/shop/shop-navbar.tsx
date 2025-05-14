"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, User, Menu, X, Search, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function ShopNavbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const navItems = [
    { name: "Home", href: "/shop" },
    { name: "Men", href: "/shop/category?gender=men" },
    { name: "Women", href: "/shop/category?gender=women" },
    { name: "Kids", href: "/shop/category?gender=kids" },
    { name: "New Arrivals", href: "/shop/category?collection=new" },
    { name: "Sale", href: "/shop/category?collection=sale" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200">
      {/* Top bar with logo and icons */}
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/shop" className="flex items-center">
            <span className="text-xl font-bold tracking-tight">ShoeVista</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-gray-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleSearch} className="p-2 text-gray-600 hover:text-gray-900" aria-label="Search">
              <Search size={20} />
            </button>
            <Link href="/shop/account/wishlist" className="p-2 text-gray-600 hover:text-gray-900" aria-label="Wishlist">
              <Heart size={20} />
            </Link>
            <Link href="/shop/cart" className="p-2 text-gray-600 hover:text-gray-900" aria-label="Cart">
              <ShoppingBag size={20} />
            </Link>
            <Button variant="ghost" size="sm" className="p-2 text-gray-600 hover:text-gray-900" asChild>
              <Link href="/shop/auth/sign-in" aria-label="Account">
                <User size={20} />
              </Link>
            </Button>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-gray-900 md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <Input type="search" placeholder="Search for products..." className="w-full pl-10 pr-4 py-2" autoFocus />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-2 py-1",
                    pathname === item.href ? "text-primary" : "text-gray-600",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  variant="ghost"
                  className="flex items-center justify-start w-full text-sm font-medium text-gray-600 hover:text-primary px-2 py-1"
                  asChild
                >
                  <Link href="/shop/auth/sign-in" onClick={() => setIsMenuOpen(false)}>
                    <User size={18} className="mr-2" />
                    Sign In
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center justify-start w-full text-sm font-medium text-gray-600 hover:text-primary px-2 py-1 mt-2"
                  asChild
                >
                  <Link href="/shop/auth/create-account" onClick={() => setIsMenuOpen(false)}>
                    <User size={18} className="mr-2" />
                    Create Account
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
