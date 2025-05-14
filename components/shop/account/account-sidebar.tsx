"use client"

import { Button } from "@/components/ui/button"
import type { AccountSection } from "./account-dashboard"
import { User, ShoppingBag, Settings, MapPin, CreditCard, Heart, LogOut, Shield } from "lucide-react"

interface AccountSidebarProps {
  activeSection: AccountSection
  setActiveSection: (section: AccountSection) => void
}

export default function AccountSidebar({ activeSection, setActiveSection }: AccountSidebarProps) {
  const menuItems = [
    {
      name: "Account Overview",
      icon: <User className="h-5 w-5" />,
      value: "overview" as AccountSection,
    },
    {
      name: "Orders",
      icon: <ShoppingBag className="h-5 w-5" />,
      value: "orders" as AccountSection,
    },
    {
      name: "Account Settings",
      icon: <Settings className="h-5 w-5" />,
      value: "settings" as AccountSection,
    },
    {
      name: "Security",
      icon: <Shield className="h-5 w-5" />,
      value: "security" as AccountSection,
    },
    {
      name: "Address Book",
      icon: <MapPin className="h-5 w-5" />,
      value: "addresses" as AccountSection,
    },
    {
      name: "Payment Methods",
      icon: <CreditCard className="h-5 w-5" />,
      value: "payments" as AccountSection,
    },
    {
      name: "Wishlist",
      icon: <Heart className="h-5 w-5" />,
      value: "wishlist" as AccountSection,
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-medium text-primary">JD</span>
          </div>
          <div>
            <h3 className="font-medium">John Doe</h3>
            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.value}
              variant={activeSection === item.value ? "default" : "ghost"}
              className={`w-full justify-start ${activeSection === item.value ? "" : "text-muted-foreground"}`}
              onClick={() => setActiveSection(item.value)}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Button>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t">
          <Button variant="outline" className="w-full justify-start text-muted-foreground">
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}
