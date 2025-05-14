"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500 font-bold text-2xl tracking-tighter">
                FRIZBLEY
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Pushing the boundaries of footwear with cosmic design and cutting-edge technology. Step into the future
              with Frizbley.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Youtube size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Collection", "Lookbook", "Tech", "About", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-violet-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Get exclusive drops and discounts</h3>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 Frizbley. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/shipping" className="text-gray-400 hover:text-white text-sm">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon }) {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-violet-400 transition-colors"
    >
      {icon}
    </Button>
  )
}
