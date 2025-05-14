"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, X } from "lucide-react"

// Sample data for filters
const brands = [
  { id: "nike", name: "Nike", count: 42 },
  { id: "adidas", name: "Adidas", count: 38 },
  { id: "puma", name: "Puma", count: 24 },
  { id: "newbalance", name: "New Balance", count: 18 },
  { id: "reebok", name: "Reebok", count: 15 },
  { id: "asics", name: "Asics", count: 12 },
  { id: "vans", name: "Vans", count: 10 },
  { id: "converse", name: "Converse", count: 9 },
]

const colors = [
  { id: "black", name: "Black", hex: "#000000", count: 56 },
  { id: "white", name: "White", hex: "#FFFFFF", count: 48 },
  { id: "red", name: "Red", hex: "#FF0000", count: 32 },
  { id: "blue", name: "Blue", hex: "#0000FF", count: 28 },
  { id: "green", name: "Green", hex: "#00FF00", count: 18 },
  { id: "yellow", name: "Yellow", hex: "#FFFF00", count: 14 },
  { id: "brown", name: "Brown", hex: "#964B00", count: 22 },
  { id: "gray", name: "Gray", hex: "#808080", count: 36 },
]

const sizes = [
  { id: "7", name: "7", count: 42 },
  { id: "7.5", name: "7.5", count: 38 },
  { id: "8", name: "8", count: 45 },
  { id: "8.5", name: "8.5", count: 40 },
  { id: "9", name: "9", count: 48 },
  { id: "9.5", name: "9.5", count: 42 },
  { id: "10", name: "10", count: 44 },
  { id: "10.5", name: "10.5", count: 38 },
  { id: "11", name: "11", count: 36 },
  { id: "11.5", name: "11.5", count: 30 },
  { id: "12", name: "12", count: 28 },
]

const features = [
  { id: "waterproof", name: "Waterproof", count: 24 },
  { id: "breathable", name: "Breathable", count: 36 },
  { id: "lightweight", name: "Lightweight", count: 42 },
  { id: "cushioned", name: "Cushioned", count: 38 },
  { id: "eco-friendly", name: "Eco-Friendly", count: 18 },
  { id: "slip-resistant", name: "Slip Resistant", count: 22 },
  { id: "arch-support", name: "Arch Support", count: 28 },
]

const styles = [
  { id: "casual", name: "Casual", count: 48 },
  { id: "athletic", name: "Athletic", count: 42 },
  { id: "formal", name: "Formal", count: 24 },
  { id: "outdoor", name: "Outdoor", count: 18 },
  { id: "boots", name: "Boots", count: 22 },
  { id: "sandals", name: "Sandals", count: 16 },
]

export default function FilterSidebar() {
  // State for filters
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<string | null>(null)
  const [sortOption, setSortOption] = useState("featured")

  // Handle checkbox changes
  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId])
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId))
    }
  }

  const handleColorChange = (colorId: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, colorId])
    } else {
      setSelectedColors(selectedColors.filter((id) => id !== colorId))
    }
  }

  const handleSizeChange = (sizeId: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, sizeId])
    } else {
      setSelectedSizes(selectedSizes.filter((id) => id !== sizeId))
    }
  }

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    if (checked) {
      setSelectedFeatures([...selectedFeatures, featureId])
    } else {
      setSelectedFeatures(selectedFeatures.filter((id) => id !== featureId))
    }
  }

  const handleStyleChange = (styleId: string, checked: boolean) => {
    if (checked) {
      setSelectedStyles([...selectedStyles, styleId])
    } else {
      setSelectedStyles(selectedStyles.filter((id) => id !== styleId))
    }
  }

  // Clear all filters
  const clearAllFilters = () => {
    setPriceRange([0, 300])
    setSelectedBrands([])
    setSelectedColors([])
    setSelectedSizes([])
    setSelectedFeatures([])
    setSelectedStyles([])
    setSelectedRating(null)
    setSortOption("featured")
  }

  // Count total applied filters
  const totalFilters =
    selectedBrands.length +
    selectedColors.length +
    selectedSizes.length +
    selectedFeatures.length +
    selectedStyles.length +
    (selectedRating ? 1 : 0) +
    (priceRange[0] > 0 || priceRange[1] < 300 ? 1 : 0)

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden sticky top-4">
      {/* Header with clear filters */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="font-bold text-gray-900">Filters</h2>
        {totalFilters > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-gray-500 hover:text-gray-700 text-xs"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Applied filters */}
      {totalFilters > 0 && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            {priceRange[0] > 0 || priceRange[1] < 300 ? (
              <div className="bg-gray-100 text-gray-800 text-xs rounded-full px-3 py-1 flex items-center">
                ${priceRange[0]} - ${priceRange[1]}
                <button onClick={() => setPriceRange([0, 300])} className="ml-2 text-gray-500 hover:text-gray-700">
                  <X className="h-3 w-3" />
                </button>
              </div>
            ) : null}

            {selectedBrands.map((brandId) => {
              const brand = brands.find((b) => b.id === brandId)
              return brand ? (
                <div
                  key={brandId}
                  className="bg-gray-100 text-gray-800 text-xs rounded-full px-3 py-1 flex items-center"
                >
                  {brand.name}
                  <button
                    onClick={() => handleBrandChange(brandId, false)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : null
            })}

            {selectedColors.map((colorId) => {
              const color = colors.find((c) => c.id === colorId)
              return color ? (
                <div
                  key={colorId}
                  className="bg-gray-100 text-gray-800 text-xs rounded-full px-3 py-1 flex items-center"
                >
                  <span className="h-2 w-2 rounded-full mr-1" style={{ backgroundColor: color.hex }}></span>
                  {color.name}
                  <button
                    onClick={() => handleColorChange(colorId, false)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : null
            })}

            {selectedSizes.map((sizeId) => {
              const size = sizes.find((s) => s.id === sizeId)
              return size ? (
                <div
                  key={sizeId}
                  className="bg-gray-100 text-gray-800 text-xs rounded-full px-3 py-1 flex items-center"
                >
                  Size {size.name}
                  <button
                    onClick={() => handleSizeChange(sizeId, false)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : null
            })}

            {selectedFeatures.map((featureId) => {
              const feature = features.find((f) => f.id === featureId)
              return feature ? (
                <div
                  key={featureId}
                  className="bg-gray-100 text-gray-800 text-xs rounded-full px-3 py-1 flex items-center"
                >
                  {feature.name}
                  <button
                    onClick={() => handleFeatureChange(featureId, false)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : null
            })}

            {selectedStyles.map((styleId) => {
              const style = styles.find((s) => s.id === styleId)
              return style ? (
                <div
                  key={styleId}
                  className="bg-gray-100 text-gray-800 text-xs rounded-full px-3 py-1 flex items-center"
                >
                  {style.name}
                  <button
                    onClick={() => handleStyleChange(styleId, false)}
                    className="ml-2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : null
            })}

            {selectedRating && (
              <div className="bg-gray-100 text-gray-800 text-xs rounded-full px-3 py-1 flex items-center">
                {selectedRating}+ Stars
                <button onClick={() => setSelectedRating(null)} className="ml-2 text-gray-500 hover:text-gray-700">
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Filter sections */}
      <div className="p-4 max-h-[calc(100vh-200px)] overflow-y-auto">
        <Accordion type="multiple" defaultValue={["price", "brand", "color", "size"]}>
          {/* Sort By */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Sort By</h3>
            <RadioGroup value={sortOption} onValueChange={setSortOption}>
              <div className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem value="featured" id="sort-featured" />
                  <Label htmlFor="sort-featured" className="ml-2 cursor-pointer">
                    Featured
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="newest" id="sort-newest" />
                  <Label htmlFor="sort-newest" className="ml-2 cursor-pointer">
                    Newest Arrivals
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="price-low" id="sort-price-low" />
                  <Label htmlFor="sort-price-low" className="ml-2 cursor-pointer">
                    Price: Low to High
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="price-high" id="sort-price-high" />
                  <Label htmlFor="sort-price-high" className="ml-2 cursor-pointer">
                    Price: High to Low
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="rating" id="sort-rating" />
                  <Label htmlFor="sort-rating" className="ml-2 cursor-pointer">
                    Customer Rating
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Price Range */}
          <AccordionItem value="price" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 hover:no-underline">
              <span className="font-medium text-gray-900">Price Range</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-2 pb-4">
                <Slider value={priceRange} min={0} max={300} step={5} onValueChange={setPriceRange} className="mb-6" />
                <div className="flex items-center justify-between">
                  <div className="border border-gray-300 rounded px-3 py-1 text-sm">${priceRange[0]}</div>
                  <div className="text-gray-500 text-sm">to</div>
                  <div className="border border-gray-300 rounded px-3 py-1 text-sm">${priceRange[1]}</div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Brand */}
          <AccordionItem value="brand" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 hover:no-underline">
              <span className="font-medium text-gray-900">Brand</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2 pb-4">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center">
                    <Checkbox
                      id={`brand-${brand.id}`}
                      checked={selectedBrands.includes(brand.id)}
                      onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
                    />
                    <Label htmlFor={`brand-${brand.id}`} className="ml-2 flex-1 cursor-pointer flex justify-between">
                      <span>{brand.name}</span>
                      <span className="text-gray-500 text-sm">({brand.count})</span>
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Color */}
          <AccordionItem value="color" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 hover:no-underline">
              <span className="font-medium text-gray-900">Color</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-2 pb-4">
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {colors.map((color) => (
                    <div
                      key={color.id}
                      className={`
                        flex flex-col items-center cursor-pointer
                        ${selectedColors.includes(color.id) ? "opacity-100" : "opacity-70 hover:opacity-100"}
                      `}
                      onClick={() => handleColorChange(color.id, !selectedColors.includes(color.id))}
                    >
                      <div
                        className={`
                          h-8 w-8 rounded-full border
                          ${color.id === "white" ? "border-gray-300" : "border-transparent"}
                          ${selectedColors.includes(color.id) ? "ring-2 ring-purple-600 ring-offset-2" : ""}
                        `}
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <span className="text-xs mt-1">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Size */}
          <AccordionItem value="size" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 hover:no-underline">
              <span className="font-medium text-gray-900">Size</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-2 pb-4">
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <div
                      key={size.id}
                      className={`
                        border rounded-md text-center py-2 cursor-pointer transition-colors
                        ${
                          selectedSizes.includes(size.id)
                            ? "bg-purple-600 text-white border-purple-600"
                            : "border-gray-300 hover:border-purple-600 text-gray-900"
                        }
                      `}
                      onClick={() => handleSizeChange(size.id, !selectedSizes.includes(size.id))}
                    >
                      {size.name}
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Features */}
          <AccordionItem value="features" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 hover:no-underline">
              <span className="font-medium text-gray-900">Features</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2 pb-4">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-center">
                    <Checkbox
                      id={`feature-${feature.id}`}
                      checked={selectedFeatures.includes(feature.id)}
                      onCheckedChange={(checked) => handleFeatureChange(feature.id, checked as boolean)}
                    />
                    <Label
                      htmlFor={`feature-${feature.id}`}
                      className="ml-2 flex-1 cursor-pointer flex justify-between"
                    >
                      <span>{feature.name}</span>
                      <span className="text-gray-500 text-sm">({feature.count})</span>
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Style */}
          <AccordionItem value="style" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 hover:no-underline">
              <span className="font-medium text-gray-900">Style</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2 pb-4">
                {styles.map((style) => (
                  <div key={style.id} className="flex items-center">
                    <Checkbox
                      id={`style-${style.id}`}
                      checked={selectedStyles.includes(style.id)}
                      onCheckedChange={(checked) => handleStyleChange(style.id, checked as boolean)}
                    />
                    <Label htmlFor={`style-${style.id}`} className="ml-2 flex-1 cursor-pointer flex justify-between">
                      <span>{style.name}</span>
                      <span className="text-gray-500 text-sm">({style.count})</span>
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Customer Rating */}
          <AccordionItem value="rating" className="border-b border-gray-200">
            <AccordionTrigger className="py-3 hover:no-underline">
              <span className="font-medium text-gray-900">Customer Rating</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2 pb-4">
                {[4, 3, 2, 1].map((rating) => (
                  <div
                    key={rating}
                    className="flex items-center cursor-pointer"
                    onClick={() => setSelectedRating(selectedRating === rating.toString() ? null : rating.toString())}
                  >
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-700">& Up</span>
                    <div className="ml-auto">
                      <div
                        className={`h-4 w-4 rounded-full border ${
                          selectedRating === rating.toString() ? "bg-purple-600 border-purple-600" : "border-gray-300"
                        }`}
                      >
                        {selectedRating === rating.toString() && (
                          <div className="h-full w-full flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
