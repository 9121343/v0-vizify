import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ResetPasswordForm from "@/components/shop/auth/reset-password-form"
import AuthLayout from "@/components/shop/auth/auth-layout"

export const metadata: Metadata = {
  title: "Reset Password | ShoeVista",
  description: "Reset your ShoeVista account password",
}

interface ResetPasswordPageProps {
  searchParams: { token?: string }
}

export default function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const { token } = searchParams

  // If no token is provided, show 404
  if (!token) {
    notFound()
  }

  return (
    <AuthLayout title="Reset Password" subtitle="Enter your new password below to reset your account password.">
      <ResetPasswordForm token={token} />
    </AuthLayout>
  )
}
