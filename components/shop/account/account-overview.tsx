"use client"

import { motion } from "framer-motion"
import { Package, Heart, MapPin, CreditCard, Bell, Gift, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { AccountSection } from "./account-dashboard"

interface AccountOverviewProps {
  setActiveSection: (section: AccountSection) => void
}

export default function AccountOverview({ setActiveSection }: AccountOverviewProps) {
  // Mock data
  const recentOrders = [
    {
      id: "ORD-12345",
      date: "June 15, 2023",
      total: "$189.99",
      status: "Delivered",
      items: 2,
    },
    {
      id: "ORD-12344",
      date: "May 28, 2023",
      total: "$79.99",
      status: "Delivered",
      items: 1,
    },
  ]

  const rewardsInfo = {
    tier: "Gold",
    points: 750,
    nextTier: "Platinum",
    pointsNeeded: 750,
    benefits: ["Free shipping", "Early access to sales", "Birthday gift"],
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Overview</h1>

      {/* Welcome message */}
      <div className="bg-purple-50 rounded-lg p-4 mb-8">
        <h2 className="text-lg font-medium text-purple-800 mb-2">Welcome back, Sarah!</h2>
        <p className="text-purple-700">
          You have {rewardsInfo.points} reward points and {recentOrders.length} recent orders.
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-lg border border-gray-200 p-4 flex items-center cursor-pointer"
          onClick={() => setActiveSection("orders")}
        >
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Recent Orders</h3>
            <p className="text-gray-500 text-sm">{recentOrders.length} orders</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-lg border border-gray-200 p-4 flex items-center cursor-pointer"
          onClick={() => setActiveSection("wishlist")}
        >
          <div className="bg-red-100 p-3 rounded-full mr-4">
            <Heart className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Wishlist</h3>
            <p className="text-gray-500 text-sm">5 items saved</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white rounded-lg border border-gray-200 p-4 flex items-center cursor-pointer"
          onClick={() => setActiveSection("addresses")}
        >
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Addresses</h3>
            <p className="text-gray-500 text-sm">2 saved addresses</p>
          </div>
        </motion.div>
      </div>

      {/* Recent orders */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
          <Button variant="link" className="text-purple-600" onClick={() => setActiveSection("orders")}>
            View All
          </Button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button
                        variant="link"
                        className="text-purple-600"
                        onClick={() => setActiveSection("order-details")}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Rewards program */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">ShoeVista Rewards</h2>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-purple-700">{rewardsInfo.tier} Member</h3>
              <p className="text-gray-600">
                {rewardsInfo.points} points • {rewardsInfo.pointsNeeded} points until {rewardsInfo.nextTier}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-purple-600 hover:bg-purple-700">Redeem Points</Button>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Current: {rewardsInfo.tier}</span>
              <span>Next: {rewardsInfo.nextTier}</span>
            </div>
            <Progress
              value={(rewardsInfo.points / (rewardsInfo.points + rewardsInfo.pointsNeeded)) * 100}
              className="h-2"
            />
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Your Benefits</h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {rewardsInfo.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Gift className="h-4 w-4 text-purple-600 mr-2" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Account management shortcuts */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Account Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg border border-gray-200 p-4 flex items-center cursor-pointer"
            onClick={() => setActiveSection("settings")}
          >
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Settings className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Account Settings</h3>
              <p className="text-gray-500 text-sm">Update your profile</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg border border-gray-200 p-4 flex items-center cursor-pointer"
            onClick={() => setActiveSection("payments")}
          >
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Payment Methods</h3>
              <p className="text-gray-500 text-sm">Manage your cards</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg border border-gray-200 p-4 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Bell className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Notifications</h3>
              <p className="text-gray-500 text-sm">Communication preferences</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
