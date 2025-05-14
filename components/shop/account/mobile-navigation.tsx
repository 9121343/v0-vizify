"use client"

import type { AccountSection } from "./account-dashboard"
import { User, ShoppingBag, Settings, MapPin, CreditCard, Heart, Shield } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MobileNavigationProps {
  activeSection: AccountSection
  setActiveSection: (section: AccountSection) => void
}

export default function MobileNavigation({ activeSection, setActiveSection }: MobileNavigationProps) {
  const menuItems = [
    {
      name: "Account Overview",
      icon: <User className="h-4 w-4" />,
      value: "overview" as AccountSection,
    },
    {
      name: "Orders",
      icon: <ShoppingBag className="h-4 w-4" />,
      value: "orders" as AccountSection,
    },
    {
      name: "Account Settings",
      icon: <Settings className="h-4 w-4" />,
      value: "settings" as AccountSection,
    },
    {
      name: "Security",
      icon: <Shield className="h-4 w-4" />,
      value: "security" as AccountSection,
    },
    {
      name: "Address Book",
      icon: <MapPin className="h-4 w-4" />,
      value: "addresses" as AccountSection,
    },
    {
      name: "Payment Methods",
      icon: <CreditCard className="h-4 w-4" />,
      value: "payments" as AccountSection,
    },
    {
      name: "Wishlist",
      icon: <Heart className="h-4 w-4" />,
      value: "wishlist" as AccountSection,
    },
  ]

  return (
    <div className="mb-4">
      <Select value={activeSection} onValueChange={(value) => setActiveSection(value as AccountSection)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select section" />
        </SelectTrigger>
        <SelectContent>
          {menuItems.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <div className="flex items-center">
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
