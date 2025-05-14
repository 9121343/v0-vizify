"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit, Trash, Home, Briefcase, MapPin } from "lucide-react"

interface Address {
  id: string
  name: string
  street: string
  city: string
  state: string
  zip: string
  country: string
  phone: string
  type: "home" | "work" | "other"
  isDefault: boolean
}

export default function AddressBook() {
  // Mock addresses
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "addr1",
      name: "Sarah Johnson",
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "United States",
      phone: "(555) 123-4567",
      type: "home",
      isDefault: true,
    },
    {
      id: "addr2",
      name: "Sarah Johnson",
      street: "456 Market St, Suite 300",
      city: "San Francisco",
      state: "CA",
      zip: "94103",
      country: "United States",
      phone: "(555) 987-6543",
      type: "work",
      isDefault: false,
    },
  ])

  const [isAddingAddress, setIsAddingAddress] = useState(false)
  const [editingAddress, setEditingAddress] = useState<Address | null>(null)

  // New address form state
  const [newAddress, setNewAddress] = useState<Omit<Address, "id">>({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    phone: "",
    type: "home",
    isDefault: false,
  })

  const handleAddAddress = () => {
    const id = `addr${addresses.length + 1}`
    const addressToAdd = { ...newAddress, id }

    // If this is the first address or isDefault is true, make it the default
    if (addresses.length === 0 || addressToAdd.isDefault) {
      // Set all other addresses to non-default
      const updatedAddresses = addresses.map((addr) => ({
        ...addr,
        isDefault: false,
      }))
      setAddresses([...updatedAddresses, addressToAdd])
    } else {
      setAddresses([...addresses, addressToAdd])
    }

    // Reset form
    setNewAddress({
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      phone: "",
      type: "home",
      isDefault: false,
    })
    setIsAddingAddress(false)
  }

  const handleUpdateAddress = () => {
    if (!editingAddress) return

    // If setting as default, update all other addresses
    if (editingAddress.isDefault) {
      const updatedAddresses = addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === editingAddress.id,
      }))
      setAddresses(updatedAddresses)
    } else {
      // Just update the specific address
      const updatedAddresses = addresses.map((addr) => (addr.id === editingAddress.id ? editingAddress : addr))
      setAddresses(updatedAddresses)
    }

    setEditingAddress(null)
  }

  const handleDeleteAddress = (id: string) => {
    const updatedAddresses = addresses.filter((addr) => addr.id !== id)

    // If we deleted the default address and there are other addresses, make the first one default
    if (addresses.find((addr) => addr.id === id)?.isDefault && updatedAddresses.length > 0) {
      updatedAddresses[0].isDefault = true
    }

    setAddresses(updatedAddresses)
  }

  const handleSetDefault = (id: string) => {
    const updatedAddresses = addresses.map((addr) => ({
      ...addr,
      isDefault: addr.id === id,
    }))
    setAddresses(updatedAddresses)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Address Book</h1>
        <Dialog open={isAddingAddress} onOpenChange={setIsAddingAddress}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Add New Address
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px] w-[95vw] max-w-[95vw] sm:w-auto rounded-lg">
            <DialogHeader>
              <DialogTitle>Add New Address</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 sm:col-span-2">
                  <Label htmlFor="name" className="text-base">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={newAddress.name}
                    onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Label htmlFor="street" className="text-base">
                    Street Address
                  </Label>
                  <Input
                    id="street"
                    value={newAddress.street}
                    onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-base">
                    City
                  </Label>
                  <Input
                    id="city"
                    value={newAddress.city}
                    onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="text-base">
                    State / Province
                  </Label>
                  <Input
                    id="state"
                    value={newAddress.state}
                    onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="zip" className="text-base">
                    ZIP / Postal Code
                  </Label>
                  <Input
                    id="zip"
                    value={newAddress.zip}
                    onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="country" className="text-base">
                    Country
                  </Label>
                  <Select
                    value={newAddress.country}
                    onValueChange={(value) => setNewAddress({ ...newAddress, country: value })}
                  >
                    <SelectTrigger id="country" className="mt-1 h-12 text-base">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={newAddress.phone}
                    onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                    className="mt-1 h-12 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="type" className="text-base">
                    Address Type
                  </Label>
                  <Select
                    value={newAddress.type}
                    onValueChange={(value: "home" | "work" | "other") => setNewAddress({ ...newAddress, type: value })}
                  >
                    <SelectTrigger id="type" className="mt-1 h-12 text-base">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home</SelectItem>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="default"
                      checked={newAddress.isDefault}
                      onCheckedChange={(checked) => setNewAddress({ ...newAddress, isDefault: checked as boolean })}
                    />
                    <Label htmlFor="default" className="text-base">
                      Set as default address
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddingAddress(false)}>
                Cancel
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleAddAddress}>
                Add Address
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Address Dialog */}
        <Dialog open={!!editingAddress} onOpenChange={(open) => !open && setEditingAddress(null)}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Edit Address</DialogTitle>
            </DialogHeader>
            {editingAddress && (
              <>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="edit-name">Full Name</Label>
                      <Input
                        id="edit-name"
                        value={editingAddress.name}
                        onChange={(e) => setEditingAddress({ ...editingAddress, name: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="edit-street">Street Address</Label>
                      <Input
                        id="edit-street"
                        value={editingAddress.street}
                        onChange={(e) => setEditingAddress({ ...editingAddress, street: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-city">City</Label>
                      <Input
                        id="edit-city"
                        value={editingAddress.city}
                        onChange={(e) => setEditingAddress({ ...editingAddress, city: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-state">State / Province</Label>
                      <Input
                        id="edit-state"
                        value={editingAddress.state}
                        onChange={(e) => setEditingAddress({ ...editingAddress, state: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-zip">ZIP / Postal Code</Label>
                      <Input
                        id="edit-zip"
                        value={editingAddress.zip}
                        onChange={(e) => setEditingAddress({ ...editingAddress, zip: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-country">Country</Label>
                      <Select
                        value={editingAddress.country}
                        onValueChange={(value) => setEditingAddress({ ...editingAddress, country: value })}
                      >
                        <SelectTrigger id="edit-country" className="mt-1">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="United States">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="edit-phone">Phone Number</Label>
                      <Input
                        id="edit-phone"
                        value={editingAddress.phone}
                        onChange={(e) => setEditingAddress({ ...editingAddress, phone: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-type">Address Type</Label>
                      <Select
                        value={editingAddress.type}
                        onValueChange={(value: "home" | "work" | "other") =>
                          setEditingAddress({ ...editingAddress, type: value })
                        }
                      >
                        <SelectTrigger id="edit-type" className="mt-1">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">Home</SelectItem>
                          <SelectItem value="work">Work</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="edit-default"
                          checked={editingAddress.isDefault}
                          onCheckedChange={(checked) =>
                            setEditingAddress({ ...editingAddress, isDefault: checked as boolean })
                          }
                          disabled={editingAddress.isDefault}
                        />
                        <Label htmlFor="edit-default">Set as default address</Label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setEditingAddress(null)}>
                    Cancel
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleUpdateAddress}>
                    Save Changes
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Address list */}
      <div className="grid grid-cols-1 gap-6">
        {addresses.map((address, index) => (
          <motion.div
            key={address.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 relative"
          >
            {address.isDefault && (
              <div className="absolute top-4 right-4 bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Default
              </div>
            )}

            <div className="flex items-center mb-4">
              {address.type === "home" && <Home className="h-5 w-5 text-gray-500 mr-2" />}
              {address.type === "work" && <Briefcase className="h-5 w-5 text-gray-500 mr-2" />}
              {address.type === "other" && <MapPin className="h-5 w-5 text-gray-500 mr-2" />}
              <h3 className="text-lg font-medium text-gray-900 capitalize">{address.type} Address</h3>
            </div>

            <div className="mb-6">
              <p className="text-gray-900 font-medium">{address.name}</p>
              <p className="text-gray-500">{address.street}</p>
              <p className="text-gray-500">
                {address.city}, {address.state} {address.zip}
              </p>
              <p className="text-gray-500">{address.country}</p>
              <p className="text-gray-500 mt-2">{address.phone}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditingAddress(address)}
                className="flex items-center"
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDeleteAddress(address.id)}
                className="flex items-center text-red-600 border-red-200 hover:bg-red-50"
                disabled={addresses.length === 1}
              >
                <Trash className="h-4 w-4 mr-1" />
                Delete
              </Button>
              {!address.isDefault && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSetDefault(address.id)}
                  className="flex items-center mt-2 sm:mt-0"
                >
                  Set as Default
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {addresses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No addresses saved</h3>
          <p className="text-gray-500 mb-6">Add your first address to make checkout faster.</p>
          <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setIsAddingAddress(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add New Address
          </Button>
        </div>
      )}
    </div>
  )
}
