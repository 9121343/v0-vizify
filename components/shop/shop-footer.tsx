"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, CreditCard, Truck, RefreshCw, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShopFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust badges */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Truck className="h-8 w-8 mb-3 text-purple-400" />
              <h4 className="font-medium mb-1">Free Shipping</h4>
              <p className="text-gray-400 text-sm">On orders over $75</p>
            </div>
            <div className="flex flex-col items-center">
              <RefreshCw className="h-8 w-8 mb-3 text-purple-400" />
              <h4 className="font-medium mb-1">Easy Returns</h4>
              <p className="text-gray-400 text-sm">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-8 w-8 mb-3 text-purple-400" />
              <h4 className="font-medium mb-1">Secure Checkout</h4>
              <p className="text-gray-400 text-sm">100% protected payments</p>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard className="h-8 w-8 mb-3 text-purple-400" />
              <h4 className="font-medium mb-1">Flexible Payment</h4>
              <p className="text-gray-400 text-sm">Multiple payment options</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShoeVista</h3>
            <p className="text-gray-400 mb-6">
              Discover the perfect shoes for every occasion. Quality, comfort, and style in every step.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-3">
              {["Men's Shoes", "Women's Shoes", "Kids' Shoes", "Sports Shoes", "Accessories", "Sale"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-3">
              {["Contact Us", "FAQs", "Shipping & Delivery", "Returns & Exchanges", "Track Order", "Size Guide"].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-3">
              {["Our Story", "Sustainability", "Careers", "Press", "Affiliate Program", "Store Locator"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 ShoeVista. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Accessibility
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
