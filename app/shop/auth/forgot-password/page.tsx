import type { Metadata } from "next"
import ForgotPasswordForm from "@/components/shop/auth/forgot-password-form"
import AuthLayout from "@/components/shop/auth/auth-layout"

export const metadata: Metadata = {
  title: "Forgot Password | ShoeVista",
  description: "Reset your ShoeVista account password",
}

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email address below and we'll send you a link to reset your password."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  )
}
