"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { SlidersHorizontal, ArrowDownAZ, ArrowUpAZ, Star, Clock } from "lucide-react"
import FilterSidebar from "./filter-sidebar"

export default function MobileFilterDrawer() {
  const [open, setOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const [sortOption, setSortOption] = useState("featured")

  const sortOptions = [
    { id: "featured", name: "Featured", icon: Star },
    { id: "newest", name: "Newest Arrivals", icon: Clock },
    { id: "price-low", name: "Price: Low to High", icon: ArrowDownAZ },
    { id: "price-high", name: "Price: High to Low", icon: ArrowUpAZ },
    { id: "rating", name: "Customer Rating", icon: Star },
  ]

  return (
    <>
      {/* Filter and Sort buttons */}
      <div className="flex gap-4 mb-4">
        <Button variant="outline" className="flex-1 border-gray-300" onClick={() => setOpen(true)}>
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" className="flex-1 border-gray-300" onClick={() => setSortOpen(true)}>
          <ArrowDownAZ className="h-4 w-4 mr-2" />
          Sort
        </Button>
      </div>

      {/* Filter Drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-full sm:max-w-md p-0">
          <SheetHeader className="p-4 border-b border-gray-200">
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="overflow-y-auto h-[calc(100vh-5rem)]">
            <FilterSidebar />
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Apply Filters</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Sort Drawer */}
      <Sheet open={sortOpen} onOpenChange={setSortOpen}>
        <SheetContent side="bottom" className="h-auto max-h-[70vh]">
          <SheetHeader className="mb-4">
            <SheetTitle>Sort By</SheetTitle>
          </SheetHeader>
          <div className="space-y-2">
            {sortOptions.map((option) => {
              const Icon = option.icon
              return (
                <div
                  key={option.id}
                  className={`
                    flex items-center p-3 rounded-lg cursor-pointer
                    ${sortOption === option.id ? "bg-purple-50 text-purple-600" : "hover:bg-gray-50"}
                  `}
                  onClick={() => {
                    setSortOption(option.id)
                    setSortOpen(false)
                  }}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  <span>{option.name}</span>
                  {sortOption === option.id && <div className="ml-auto h-2 w-2 rounded-full bg-purple-600"></div>}
                </div>
              )
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
