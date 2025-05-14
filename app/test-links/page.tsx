import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TestLinksPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-8">Test Authentication Links</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Direct Links</h2>
        <div className="flex flex-col space-y-2">
          <Link href="/shop/auth/sign-in" className="text-blue-600 hover:underline">
            Sign In Page (Direct Link)
          </Link>
          <Link href="/shop/auth/create-account" className="text-blue-600 hover:underline">
            Create Account Page (Direct Link)
          </Link>
          <Link href="/shop/auth/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password Page (Direct Link)
          </Link>
        </div>

        <h2 className="text-xl font-semibold mt-8">Button Links</h2>
        <div className="flex flex-col space-y-4">
          <Button asChild>
            <Link href="/shop/auth/sign-in">Sign In Button</Link>
          </Button>

          <Button asChild>
            <Link href="/shop/auth/create-account">Create Account Button</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/shop/auth/forgot-password">Forgot Password Button</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
