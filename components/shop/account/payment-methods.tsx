"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash, CreditCard } from "lucide-react"

interface PaymentMethod {
  id: string
  cardNumber: string
  cardholderName: string
  expiryMonth: string
  expiryYear: string
  cardType: "visa" | "mastercard" | "amex" | "discover"
  isDefault: boolean
}

export default function PaymentMethods() {
  // Mock payment methods
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "card1",
      cardNumber: "•••• •••• •••• 4242",
      cardholderName: "Sarah Johnson",
      expiryMonth: "09",
      expiryYear: "2025",
      cardType: "visa",
      isDefault: true,
    },
    {
      id: "card2",
      cardNumber: "•••• •••• •••• 5555",
      cardholderName: "Sarah Johnson",
      expiryMonth: "12",
      expiryYear: "2024",
      cardType: "mastercard",
      isDefault: false,
    },
  ])

  const [isAddingCard, setIsAddingCard] = useState(false)
  const [editingCard, setEditingCard] = useState<PaymentMethod | null>(null)

  // New card form state
  const [newCard, setNewCard] = useState<Omit<PaymentMethod, "id" | "cardNumber">>({
    cardholderName: "",
    expiryMonth: "",
    expiryYear: "",
    cardType: "visa",
    isDefault: false,
  })

  const [newCardNumber, setNewCardNumber] = useState("")

  const handleAddCard = () => {
    const id = `card${paymentMethods.length + 1}`
    // In a real app, you would send the full card number to your payment processor
    // and only store the last 4 digits in your database
    const last4 = newCardNumber.slice(-4)
    const maskedCardNumber = `•••• •••• •••• ${last4}`

    const cardToAdd = {
      ...newCard,
      id,
      cardNumber: maskedCardNumber,
    }

    // If this is the first card or isDefault is true, make it the default
    if (paymentMethods.length === 0 || cardToAdd.isDefault) {
      // Set all other cards to non-default
      const updatedCards = paymentMethods.map((card) => ({
        ...card,
        isDefault: false,
      }))
      setPaymentMethods([...updatedCards, cardToAdd])
    } else {
      setPaymentMethods([...paymentMethods, cardToAdd])
    }

    // Reset form
    setNewCard({
      cardholderName: "",
      expiryMonth: "",
      expiryYear: "",
      cardType: "visa",
      isDefault: false,
    })
    setNewCardNumber("")
    setIsAddingCard(false)
  }

  const handleUpdateCard = () => {
    if (!editingCard) return

    // If setting as default, update all other cards
    if (editingCard.isDefault) {
      const updatedCards = paymentMethods.map((card) => ({
        ...card,
        isDefault: card.id === editingCard.id,
      }))
      setPaymentMethods(updatedCards)
    } else {
      // Just update the specific card
      const updatedCards = paymentMethods.map((card) => (card.id === editingCard.id ? editingCard : card))
      setPaymentMethods(updatedCards)
    }

    setEditingCard(null)
  }

  const handleDeleteCard = (id: string) => {
    const updatedCards = paymentMethods.filter((card) => card.id !== id)

    // If we deleted the default card and there are other cards, make the first one default
    if (paymentMethods.find((card) => card.id === id)?.isDefault && updatedCards.length > 0) {
      updatedCards[0].isDefault = true
    }

    setPaymentMethods(updatedCards)
  }

  const handleSetDefault = (id: string) => {
    const updatedCards = paymentMethods.map((card) => ({
      ...card,
      isDefault: card.id === id,
    }))
    setPaymentMethods(updatedCards)
  }

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  // Get card type icon based on card type
  const getCardTypeIcon = (cardType: string) => {
    switch (cardType) {
      case "visa":
        return "💳 Visa"
      case "mastercard":
        return "💳 Mastercard"
      case "amex":
        return "💳 American Express"
      case "discover":
        return "💳 Discover"
      default:
        return "💳"
    }
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Payment Methods</h1>
        <Dialog open={isAddingCard} onOpenChange={setIsAddingCard}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Add New Card
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Add New Payment Method</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={newCardNumber}
                    onChange={(e) => setNewCardNumber(formatCardNumber(e.target.value))}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="mt-1"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="cardholderName">Cardholder Name</Label>
                  <Input
                    id="cardholderName"
                    value={newCard.cardholderName}
                    onChange={(e) => setNewCard({ ...newCard, cardholderName: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="expiryMonth">Expiry Month</Label>
                  <Select
                    value={newCard.expiryMonth}
                    onValueChange={(value) => setNewCard({ ...newCard, expiryMonth: value })}
                  >
                    <SelectTrigger id="expiryMonth" className="mt-1">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => {
                        const month = (i + 1).toString().padStart(2, "0")
                        return (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="expiryYear">Expiry Year</Label>
                  <Select
                    value={newCard.expiryYear}
                    onValueChange={(value) => setNewCard({ ...newCard, expiryYear: value })}
                  >
                    <SelectTrigger id="expiryYear" className="mt-1">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = (new Date().getFullYear() + i).toString()
                        return (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cardType">Card Type</Label>
                  <Select
                    value={newCard.cardType}
                    onValueChange={(value: "visa" | "mastercard" | "amex" | "discover") =>
                      setNewCard({ ...newCard, cardType: value })
                    }
                  >
                    <SelectTrigger id="cardType" className="mt-1">
                      <SelectValue placeholder="Select card type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="visa">Visa</SelectItem>
                      <SelectItem value="mastercard">Mastercard</SelectItem>
                      <SelectItem value="amex">American Express</SelectItem>
                      <SelectItem value="discover">Discover</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" type="password" placeholder="123" maxLength={4} className="mt-1" />
                </div>
                <div className="col-span-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="default"
                      checked={newCard.isDefault}
                      onCheckedChange={(checked) => setNewCard({ ...newCard, isDefault: checked as boolean })}
                    />
                    <Label htmlFor="default">Set as default payment method</Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddingCard(false)}>
                Cancel
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={handleAddCard}
                disabled={!newCardNumber || !newCard.cardholderName || !newCard.expiryMonth || !newCard.expiryYear}
              >
                Add Card
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Card Dialog */}
        <Dialog open={!!editingCard} onOpenChange={(open) => !open && setEditingCard(null)}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Edit Payment Method</DialogTitle>
            </DialogHeader>
            {editingCard && (
              <>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="edit-cardNumber">Card Number</Label>
                      <Input
                        id="edit-cardNumber"
                        value={editingCard.cardNumber}
                        disabled
                        className="mt-1 bg-gray-100"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="edit-cardholderName">Cardholder Name</Label>
                      <Input
                        id="edit-cardholderName"
                        value={editingCard.cardholderName}
                        onChange={(e) => setEditingCard({ ...editingCard, cardholderName: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-expiryMonth">Expiry Month</Label>
                      <Select
                        value={editingCard.expiryMonth}
                        onValueChange={(value) => setEditingCard({ ...editingCard, expiryMonth: value })}
                      >
                        <SelectTrigger id="edit-expiryMonth" className="mt-1">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => {
                            const month = (i + 1).toString().padStart(2, "0")
                            return (
                              <SelectItem key={month} value={month}>
                                {month}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="edit-expiryYear">Expiry Year</Label>
                      <Select
                        value={editingCard.expiryYear}
                        onValueChange={(value) => setEditingCard({ ...editingCard, expiryYear: value })}
                      >
                        <SelectTrigger id="edit-expiryYear" className="mt-1">
                          <SelectValue placeholder="YYYY" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => {
                            const year = (new Date().getFullYear() + i).toString()
                            return (
                              <SelectItem key={year} value={year}>
                                {year}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="edit-default"
                          checked={editingCard.isDefault}
                          onCheckedChange={(checked) =>
                            setEditingCard({ ...editingCard, isDefault: checked as boolean })
                          }
                          disabled={editingCard.isDefault}
                        />
                        <Label htmlFor="edit-default">Set as default payment method</Label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setEditingCard(null)}>
                    Cancel
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleUpdateCard}>
                    Save Changes
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Payment methods list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paymentMethods.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg border border-gray-200 p-6 relative"
          >
            {card.isDefault && (
              <div className="absolute top-4 right-4 bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Default
              </div>
            )}

            <div className="flex items-center mb-4">
              <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">{getCardTypeIcon(card.cardType)}</h3>
            </div>

            <div className="mb-6">
              <p className="text-gray-900 font-medium">{card.cardNumber}</p>
              <p className="text-gray-500">{card.cardholderName}</p>
              <p className="text-gray-500">
                Expires {card.expiryMonth}/{card.expiryYear.slice(-2)}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => setEditingCard(card)} className="flex items-center">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDeleteCard(card.id)}
                className="flex items-center text-red-600 border-red-200 hover:bg-red-50"
                disabled={paymentMethods.length === 1}
              >
                <Trash className="h-4 w-4 mr-1" />
                Delete
              </Button>
              {!card.isDefault && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSetDefault(card.id)}
                  className="flex items-center"
                >
                  Set as Default
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {paymentMethods.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No payment methods saved</h3>
          <p className="text-gray-500 mb-6">Add your first payment method to make checkout faster.</p>
          <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setIsAddingCard(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add New Card
          </Button>
        </div>
      )}
    </div>
  )
}
