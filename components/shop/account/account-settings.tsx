"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AccountSettings() {
  // Mock user data
  const [user, setUser] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "(555) 123-4567",
    birthday: "1990-05-15",
    gender: "female",
    password: "••••••••••",
  })

  // Mock preferences
  const [preferences, setPreferences] = useState({
    emailNotifications: {
      orderUpdates: true,
      promotions: true,
      newArrivals: false,
      events: false,
      feedback: true,
    },
    smsNotifications: false,
    language: "english",
    currency: "usd",
    shoeSize: "8",
    sizeSystem: "us",
    preferredCategories: ["running", "casual"],
  })

  // Handle form submission
  const handlePersonalInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    alert("Personal information updated!")
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h1>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 sm:mb-8 h-auto">
          <TabsTrigger value="personal" className="py-3 text-base">
            Personal Information
          </TabsTrigger>
          <TabsTrigger value="preferences" className="py-3 text-base">
            Shopping Preferences
          </TabsTrigger>
          <TabsTrigger value="notifications" className="py-3 text-base">
            Notifications
          </TabsTrigger>
        </TabsList>

        {/* Personal Information */}
        <TabsContent value="personal">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <form onSubmit={handlePersonalInfoSubmit}>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="text-base">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={user.phone}
                    onChange={(e) => setUser({ ...user, phone: e.target.value })}
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="birthday" className="text-base">
                    Birthday
                  </Label>
                  <Input
                    id="birthday"
                    type="date"
                    value={user.birthday}
                    onChange={(e) => setUser({ ...user, birthday: e.target.value })}
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div>
                  <Label>Gender</Label>
                  <RadioGroup
                    value={user.gender}
                    onValueChange={(value) => setUser({ ...user, gender: value })}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <Separator className="my-6" />

              <h2 className="text-lg font-medium text-gray-900 mb-4">Password</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" value={user.password} className="mt-1" readOnly />
                </div>
                <div className="md:col-span-2 flex items-center">
                  <Button variant="outline" type="button">
                    Change Password
                  </Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </TabsContent>

        {/* Shopping Preferences */}
        <TabsContent value="preferences">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Shopping Preferences</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="language">Language</Label>
                <Select
                  value={preferences.language}
                  onValueChange={(value) => setPreferences({ ...preferences, language: value })}
                >
                  <SelectTrigger id="language" className="mt-1">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="currency">Currency</Label>
                <Select
                  value={preferences.currency}
                  onValueChange={(value) => setPreferences({ ...preferences, currency: value })}
                >
                  <SelectTrigger id="currency" className="mt-1">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="cad">CAD ($)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="my-6" />

            <h2 className="text-lg font-medium text-gray-900 mb-4">Size Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="shoe-size">Shoe Size</Label>
                <Select
                  value={preferences.shoeSize}
                  onValueChange={(value) => setPreferences({ ...preferences, shoeSize: value })}
                >
                  <SelectTrigger id="shoe-size" className="mt-1">
                    <SelectValue placeholder="Select shoe size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="6.5">6.5</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="7.5">7.5</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="8.5">8.5</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="9.5">9.5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="size-system">Size System</Label>
                <Select
                  value={preferences.sizeSystem}
                  onValueChange={(value) => setPreferences({ ...preferences, sizeSystem: value })}
                >
                  <SelectTrigger id="size-system" className="mt-1">
                    <SelectValue placeholder="Select size system" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">US</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="eu">EU</SelectItem>
                    <SelectItem value="cm">CM (Japan)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="my-6" />

            <h2 className="text-lg font-medium text-gray-900 mb-4">Product Preferences</h2>
            <div className="mb-6">
              <Label className="mb-2 block">Preferred Categories</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  { id: "running", label: "Running" },
                  { id: "casual", label: "Casual" },
                  { id: "athletic", label: "Athletic" },
                  { id: "formal", label: "Formal" },
                  { id: "outdoor", label: "Outdoor" },
                  { id: "sandals", label: "Sandals" },
                ].map((category) => (
                  <div
                    key={category.id}
                    className={`
                      border rounded-md text-center py-2 cursor-pointer transition-colors
                      ${
                        preferences.preferredCategories.includes(category.id)
                          ? "bg-purple-600 text-white border-purple-600"
                          : "border-gray-300 hover:border-purple-600 text-gray-900"
                      }
                    `}
                    onClick={() => {
                      const newCategories = preferences.preferredCategories.includes(category.id)
                        ? preferences.preferredCategories.filter((id) => id !== category.id)
                        : [...preferences.preferredCategories, category.id]
                      setPreferences({ ...preferences, preferredCategories: newCategories })
                    }}
                  >
                    {category.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="bg-purple-600 hover:bg-purple-700">Save Preferences</Button>
            </div>
          </div>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h2>
            <div className="space-y-4 mb-6">
              {Object.entries(preferences.emailNotifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <Label htmlFor={`email-${key}`} className="cursor-pointer">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())
                      .replace("Updates", " Updates")
                      .replace("Arrivals", " Arrivals")}
                  </Label>
                  <Switch
                    id={`email-${key}`}
                    checked={value}
                    onCheckedChange={(checked) =>
                      setPreferences({
                        ...preferences,
                        emailNotifications: {
                          ...preferences.emailNotifications,
                          [key]: checked,
                        },
                      })
                    }
                  />
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <h2 className="text-lg font-medium text-gray-900 mb-4">SMS Notifications</h2>
            <div className="flex items-center justify-between mb-6">
              <div>
                <Label htmlFor="sms-notifications" className="cursor-pointer">
                  Receive SMS notifications
                </Label>
                <p className="text-sm text-gray-500">Get order updates and promotional messages via text message</p>
              </div>
              <Switch
                id="sms-notifications"
                checked={preferences.smsNotifications}
                onCheckedChange={(checked) =>
                  setPreferences({
                    ...preferences,
                    smsNotifications: checked,
                  })
                }
              />
            </div>

            <div className="flex justify-end">
              <Button className="bg-purple-600 hover:bg-purple-700">Save Notification Settings</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
