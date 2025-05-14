"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, CreditCard, Truck, Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OrderSummary({ customizations, onClose }) {
  const [orderStep, setOrderStep] = useState("details")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
    }, 2000)
  }

  // Calculate total price
  const basePrice = 129.99
  const customizationPrice = 20.0
  const shippingPrice = 9.99
  const totalPrice = basePrice + customizationPrice + shippingPrice

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-black/90 border border-white/10 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">Complete Your Order</h2>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {isComplete ? (
            // Order complete
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Order Placed Successfully!</h3>
              <p className="text-gray-400 mb-8">
                Thank you for your order. We've sent a confirmation email to your inbox. Your custom shoes will be
                crafted and shipped within 2-3 weeks.
              </p>
              <p className="text-purple-400 font-medium mb-6">Order #: {Math.floor(Math.random() * 1000000)}</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            // Order form
            <div className="p-6">
              <Tabs defaultValue="details" value={orderStep} onValueChange={setOrderStep}>
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger value="details" className="data-[state=active]:bg-purple-600">
                    1. Details
                  </TabsTrigger>
                  <TabsTrigger value="shipping" className="data-[state=active]:bg-purple-600">
                    2. Shipping
                  </TabsTrigger>
                  <TabsTrigger value="payment" className="data-[state=active]:bg-purple-600">
                    3. Payment
                  </TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit}>
                  <TabsContent value="details" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-white">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-black/30 border-white/20 text-white mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-black/30 border-white/20 text-white mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <Button
                        type="button"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                        onClick={() => setOrderStep("shipping")}
                      >
                        Continue to Shipping
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="shipping" className="mt-0">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <Label htmlFor="address" className="text-white">
                          Street Address
                        </Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="bg-black/30 border-white/20 text-white mt-1"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city" className="text-white">
                            City
                          </Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="bg-black/30 border-white/20 text-white mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="zip" className="text-white">
                            ZIP / Postal Code
                          </Label>
                          <Input
                            id="zip"
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            className="bg-black/30 border-white/20 text-white mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="country" className="text-white">
                            Country
                          </Label>
                          <Input
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="bg-black/30 border-white/20 text-white mt-1"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => setOrderStep("details")}
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                        onClick={() => setOrderStep("payment")}
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="payment" className="mt-0">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <Label htmlFor="cardNumber" className="text-white">
                          Card Number
                        </Label>
                        <div className="relative mt-1">
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            className="bg-black/30 border-white/20 text-white pl-10"
                            placeholder="1234 5678 9012 3456"
                            required
                          />
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardExpiry" className="text-white">
                            Expiry Date
                          </Label>
                          <Input
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            className="bg-black/30 border-white/20 text-white mt-1"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardCvc" className="text-white">
                            CVC
                          </Label>
                          <Input
                            id="cardCvc"
                            name="cardCvc"
                            value={formData.cardCvc}
                            onChange={handleInputChange}
                            className="bg-black/30 border-white/20 text-white mt-1"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => setOrderStep("shipping")}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Place Order"}
                      </Button>
                    </div>
                  </TabsContent>
                </form>
              </Tabs>

              {/* Order Summary */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-xl font-medium text-white mb-4">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Custom Shoe (Base Price)</span>
                    <span className="text-white">${basePrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Customization</span>
                    <span className="text-white">${customizationPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-white">${shippingPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-white/10">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-purple-400 font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-400 text-sm">
                  <Truck className="h-4 w-4 mr-2" />
                  <span>Estimated delivery: 2-3 weeks</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
