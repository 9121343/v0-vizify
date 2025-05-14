"use client"

import { useState } from "react"
import { useMediaQuery } from "@/lib/hooks/use-media-query"
import AccountSidebar from "@/components/shop/account/account-sidebar"
import AccountOverview from "@/components/shop/account/account-overview"
import OrderHistory from "@/components/shop/account/order-history"
import OrderDetails from "@/components/shop/account/order-details"
import AccountSettings from "@/components/shop/account/account-settings"
import SecuritySettings from "@/components/shop/account/security-settings"
import AddressBook from "@/components/shop/account/address-book"
import PaymentMethods from "@/components/shop/account/payment-methods"
import Wishlist from "@/components/shop/account/wishlist"
import MobileNavigation from "@/components/shop/account/mobile-navigation"
import "./cross-browser-fixes.css"

export type AccountSection =
  | "overview"
  | "orders"
  | "order-details"
  | "settings"
  | "security"
  | "addresses"
  | "payments"
  | "wishlist"

export default function AccountDashboard() {
  const [activeSection, setActiveSection] = useState<AccountSection>("overview")
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 1023px)")

  const handleViewOrder = (orderId: string) => {
    setSelectedOrderId(orderId)
    setActiveSection("order-details")
  }

  const handleBackToOrders = () => {
    setSelectedOrderId(null)
    setActiveSection("orders")
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Mobile Navigation - only visible on mobile */}
        {isMobile && <MobileNavigation activeSection={activeSection} setActiveSection={setActiveSection} />}

        {/* Sidebar - hidden on mobile */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <AccountSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {activeSection === "overview" && <AccountOverview setActiveSection={setActiveSection} />}
            {activeSection === "orders" && <OrderHistory onViewOrder={handleViewOrder} />}
            {activeSection === "order-details" && selectedOrderId && (
              <OrderDetails orderId={selectedOrderId} onBack={handleBackToOrders} />
            )}
            {activeSection === "settings" && <AccountSettings />}
            {activeSection === "security" && <SecuritySettings />}
            {activeSection === "addresses" && <AddressBook />}
            {activeSection === "payments" && <PaymentMethods />}
            {activeSection === "wishlist" && <Wishlist />}
          </div>
        </div>
      </div>
    </div>
  )
}
