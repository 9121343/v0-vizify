"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

interface OrderHistoryProps {
  onViewOrder: (orderId: string) => void
}

export default function OrderHistory({ onViewOrder }: OrderHistoryProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Mock order data
  const orders = [
    {
      id: "ORD-12345",
      date: "June 15, 2023",
      total: "$189.99",
      status: "Delivered",
      items: [
        {
          name: "Air Max Pulse",
          color: "Black/White",
          size: "10",
          price: "$149.99",
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Performance Socks (3-Pack)",
          color: "Mixed",
          size: "L",
          price: "$19.99",
          quantity: 2,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
    {
      id: "ORD-12344",
      date: "May 28, 2023",
      total: "$79.99",
      status: "Delivered",
      items: [
        {
          name: "Classic Leather",
          color: "White",
          size: "9.5",
          price: "$79.99",
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
    {
      id: "ORD-12343",
      date: "April 10, 2023",
      total: "$259.97",
      status: "Delivered",
      items: [
        {
          name: "Ultraboost Light",
          color: "Black/Gray",
          size: "10",
          price: "$189.99",
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Running Shorts",
          color: "Black",
          size: "M",
          price: "$34.99",
          quantity: 2,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
    {
      id: "ORD-12342",
      date: "March 5, 2023",
      total: "$129.99",
      status: "Delivered",
      items: [
        {
          name: "ZoomX Invincible",
          color: "Blue/White",
          size: "10",
          price: "$129.99",
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
    {
      id: "ORD-12341",
      date: "February 18, 2023",
      total: "$219.98",
      status: "Delivered",
      items: [
        {
          name: "Gel-Kayano 29",
          color: "Gray/Blue",
          size: "10",
          price: "$159.99",
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          name: "Running Jacket",
          color: "Black",
          size: "L",
          price: "$59.99",
          quantity: 1,
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
  ]

  // Filter orders based on search query and active tab
  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === "all" || (activeTab === "recent" && orders.indexOf(order) < 3) // Just showing first 3 as "recent"
    return matchesSearch && matchesTab
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Order History</h1>

      {/* Search and filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search orders by order number"
            className="pl-10 h-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList className="grid w-full grid-cols-2 h-12">
            <TabsTrigger value="all" className="text-base py-3">
              All Orders
            </TabsTrigger>
            <TabsTrigger value="recent" className="text-base py-3">
              Recent Orders
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Orders list */}
      <TabsContent value={activeTab} className="mt-0">
        <div className="space-y-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                {/* Order header */}
                <div className="bg-gray-50 px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium text-gray-900 mr-3">{order.id}</h3>
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">Ordered on {order.date}</p>
                  </div>
                  <div className="mt-3 md:mt-0 flex items-center">
                    <p className="font-medium text-gray-900 mr-4">Total: {order.total}</p>
                    <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => onViewOrder(order.id)}>
                      View Order
                    </Button>
                  </div>
                </div>

                {/* Order items */}
                <div className="px-4 sm:px-6 py-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">
                    {order.items.length} {order.items.length === 1 ? "item" : "items"}
                  </h4>
                  <div className="space-y-4">
                    {order.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex flex-col sm:flex-row sm:items-center">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mb-3 sm:mb-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="sm:ml-4 flex-1">
                          <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">
                            {item.color} • Size {item.size} • Qty {item.quantity}
                          </p>
                          <p className="text-sm font-medium text-gray-900 mt-1">{item.price}</p>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-4">
                          <Button variant="outline" size="sm" className="w-full sm:w-auto">
                            Buy Again
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </TabsContent>
    </div>
  )
}
