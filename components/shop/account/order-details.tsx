"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Package, Truck, CheckCircle, HelpCircle } from "lucide-react"

interface OrderDetailsProps {
  orderId: string
  onBack: () => void
}

export default function OrderDetails({ orderId, onBack }: OrderDetailsProps) {
  // Mock order data - in a real app, you would fetch this based on the orderId
  const order = {
    id: orderId,
    date: "June 15, 2023",
    total: "$189.99",
    status: "Delivered",
    deliveredDate: "June 20, 2023",
    trackingNumber: "1Z999AA10123456784",
    carrier: "UPS",
    paymentMethod: "Visa ending in 4242",
    subtotal: "$169.99",
    shipping: "$9.99",
    tax: "$10.01",
    items: [
      {
        id: "1",
        name: "Air Max Pulse",
        color: "Black/White",
        size: "10",
        price: "$149.99",
        quantity: 1,
        image: "/placeholder.svg?height=120&width=120",
      },
      {
        id: "2",
        name: "Performance Socks (3-Pack)",
        color: "Mixed",
        size: "L",
        price: "$19.99",
        quantity: 2,
        image: "/placeholder.svg?height=120&width=120",
      },
    ],
    shippingAddress: {
      name: "Sarah Johnson",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "United States",
    },
    billingAddress: {
      name: "Sarah Johnson",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "United States",
    },
  }

  // Define the steps for the order timeline
  const orderSteps = [
    { id: "ordered", label: "Ordered", date: "June 15, 2023", icon: Package, completed: true },
    { id: "shipped", label: "Shipped", date: "June 17, 2023", icon: Truck, completed: true },
    { id: "delivered", label: "Delivered", date: "June 20, 2023", icon: CheckCircle, completed: true },
  ]

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center mb-6">
        <Button variant="ghost" size="sm" className="mb-2 sm:mb-0 sm:mr-4 justify-start" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Orders
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Order {order.id}</h1>
      </div>

      {/* Order status and summary */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-gray-900 mr-3">Order Status</h2>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {order.status}
              </span>
            </div>
            <p className="text-gray-500">Placed on {order.date}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="mr-2">
              <HelpCircle className="h-4 w-4 mr-2" />
              Need Help?
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Track Package</Button>
          </div>
        </div>

        {/* Order timeline */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Order Timeline</h3>
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200" />

            {/* Steps */}
            <div className="space-y-8">
              {orderSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.id} className="relative flex items-start">
                    <div
                      className={`absolute left-0 flex h-10 w-10 items-center justify-center rounded-full ${
                        step.completed ? "bg-green-100" : "bg-gray-100"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${step.completed ? "text-green-600" : "text-gray-400"}`} />
                    </div>
                    <div className="ml-14">
                      <h4 className="text-base font-medium text-gray-900">{step.label}</h4>
                      <p className="text-sm text-gray-500">{step.date}</p>
                      {step.id === "shipped" && (
                        <p className="text-sm text-gray-700 mt-1">
                          Tracking: {order.trackingNumber} ({order.carrier})
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Order details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Items */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Order Items</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="divide-y divide-gray-200">
              {order.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 sm:p-6 flex flex-col sm:flex-row"
                >
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mx-auto sm:mx-0 mb-4 sm:mb-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="sm:ml-6 flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <h3 className="text-base font-medium text-gray-900 text-center sm:text-left">{item.name}</h3>
                      <p className="text-base font-medium text-gray-900 text-center sm:text-right mt-1 sm:mt-0">
                        {item.price}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 text-center sm:text-left">
                      {item.color} • Size {item.size}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 text-center sm:text-left">Qty {item.quantity}</p>
                    <div className="mt-4 flex justify-center sm:justify-start">
                      <Button variant="outline" size="sm" className="mr-2">
                        Buy Again
                      </Button>
                      <Button variant="outline" size="sm">
                        Write a Review
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-500">Subtotal</p>
                <p className="text-gray-900">{order.subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Shipping</p>
                <p className="text-gray-900">{order.shipping}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Tax</p>
                <p className="text-gray-900">{order.tax}</p>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <p className="text-gray-900">Total</p>
                <p className="text-gray-900">{order.total}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Payment Method</h3>
              <p className="text-gray-500 text-sm">{order.paymentMethod}</p>
            </div>
          </div>

          {/* Shipping info */}
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Information</h2>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Shipping Address</h3>
              <address className="text-gray-500 text-sm not-italic">
                {order.shippingAddress.name}
                <br />
                {order.shippingAddress.street}
                <br />
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                <br />
                {order.shippingAddress.country}
              </address>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Billing Address</h3>
                <address className="text-gray-500 text-sm not-italic">
                  {order.billingAddress.name}
                  <br />
                  {order.billingAddress.street}
                  <br />
                  {order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.zip}
                  <br />
                  {order.billingAddress.country}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <Button variant="outline">Download Invoice</Button>
        <Button variant="outline">Return Items</Button>
        <Button variant="outline">Cancel Order</Button>
      </div>
    </div>
  )
}
