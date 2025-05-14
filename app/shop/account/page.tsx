import type { Metadata } from "next"
import ShopNavbar from "@/components/shop/shop-navbar"
import ShopFooter from "@/components/shop/shop-footer"
import AccountDashboard from "@/components/shop/account/account-dashboard"

export const metadata: Metadata = {
  title: "My Account | ShoeVista",
  description: "Manage your account, view order history, and update your preferences.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-gray-50 antialiased">
      {/* Shop-specific navbar */}
      <ShopNavbar />

      {/* Account Dashboard */}
      <AccountDashboard />

      {/* Footer */}
      <ShopFooter />
    </main>
  )
}
