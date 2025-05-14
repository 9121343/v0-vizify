import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Branding */}
      <div className="hidden md:flex md:w-1/2 bg-gray-900 text-white p-8 flex-col justify-between">
        <div>
          <Link href="/shop" className="flex items-center gap-2 mb-12">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="ShoeVista Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold">ShoeVista</span>
          </Link>

          <div className="mt-24">
            <h1 className="text-4xl font-bold mb-6">Step into your style journey</h1>
            <p className="text-gray-300 text-lg">
              Join thousands of fashion enthusiasts discovering their perfect pair every day.
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-4 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-300 italic">
            "ShoeVista has completely transformed how I shop for shoes. The selection is amazing and the experience is
            seamless."
          </p>
          <p className="mt-2 font-medium">— Alex Johnson</p>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-16">
        <div className="md:hidden mb-8">
          <Link href="/shop" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="ShoeVista Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-lg font-bold">ShoeVista</span>
          </Link>
        </div>

        <div className="mb-6">
          <Link href="/shop" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to shop
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto flex-1 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          {children}
        </div>

        <div className="mt-auto pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ShoeVista. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
