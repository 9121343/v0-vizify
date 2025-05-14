import type { Metadata } from "next"
import CreateAccountForm from "@/components/shop/auth/create-account-form"
import AuthLayout from "@/components/shop/auth/auth-layout"

export const metadata: Metadata = {
  title: "Create Account | ShoeVista",
  description: "Create a new ShoeVista account",
}

export default function CreateAccountPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join ShoeVista to track orders, save favorites, and get personalized recommendations."
    >
      <CreateAccountForm />
    </AuthLayout>
  )
}
