import type { Metadata } from "next"
import SignInForm from "@/components/shop/auth/sign-in-form"
import AuthLayout from "@/components/shop/auth/auth-layout"
import AuthDebug from "@/components/shop/auth/auth-debug"

export const metadata: Metadata = {
  title: "Sign In | ShoeVista",
  description: "Sign in to your ShoeVista account",
}

export default function SignInPage() {
  return (
    <AuthLayout title="Sign In" subtitle="Welcome back! Enter your credentials to access your account.">
      <SignInForm />
      <AuthDebug />
    </AuthLayout>
  )
}
