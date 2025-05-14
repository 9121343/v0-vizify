"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Palette, Sticker, Pencil, Text, RotateCcw, ShoppingCart } from "lucide-react"
import ShoeViewer from "@/components/shoe-customizer/shoe-viewer"
import ColorPicker from "@/components/shoe-customizer/color-picker"
import StickerPicker from "@/components/shoe-customizer/sticker-picker"
import DrawingTool from "@/components/shoe-customizer/drawing-tool"
import TextTool from "@/components/shoe-customizer/text-tool"
import OrderSummary from "@/components/shoe-customizer/order-summary"

export default function ShoeCustomizer() {
  // State for customization
  const [activeTab, setActiveTab] = useState("color")
  const [selectedPart, setSelectedPart] = useState("body")
  const [customizations, setCustomizations] = useState({
    body: "#ffffff",
    sole: "#ffffff",
    laces: "#ffffff",
    tongue: "#dddddd",
    heelTab: "#555555",
    ankleStrap: "#ffffff",
    stickers: [],
    drawings: [],
    texts: [],
  })
  const [showOrderSummary, setShowOrderSummary] = useState(false)

  // Refs for the canvas and 3D model
  const canvasRef = useRef(null)

  // Handle color change
  const handleColorChange = (color: string) => {
    setCustomizations({
      ...customizations,
      [selectedPart]: color,
    })
  }

  // Handle adding a sticker
  const handleAddSticker = (sticker: string) => {
    setCustomizations({
      ...customizations,
      stickers: [
        ...customizations.stickers,
        { id: Date.now(), image: sticker, position: [0, 0, 0], rotation: [0, 0, 0], scale: 1 },
      ],
    })
  }

  // Handle adding a drawing
  const handleAddDrawing = (drawingData: string) => {
    setCustomizations({
      ...customizations,
      drawings: [
        ...customizations.drawings,
        { id: Date.now(), data: drawingData, position: [0, 0, 0], rotation: [0, 0, 0] },
      ],
    })
  }

  // Handle adding text
  const handleAddText = (text: string, color: string, font: string) => {
    setCustomizations({
      ...customizations,
      texts: [
        ...customizations.texts,
        { id: Date.now(), text, color, font, position: [0, 0, 0], rotation: [0, 0, 0], scale: 1 },
      ],
    })
  }

  // Reset customizations
  const handleReset = () => {
    setCustomizations({
      body: "#ffffff",
      sole: "#ffffff",
      laces: "#ffffff",
      tongue: "#dddddd",
      heelTab: "#555555",
      ankleStrap: "#ffffff",
      stickers: [],
      drawings: [],
      texts: [],
    })
  }

  // Proceed to checkout
  const handleCheckout = () => {
    setShowOrderSummary(true)
  }

  return (
    <section className="py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 3D Viewer - Takes 2/3 of the space on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3 bg-black/30 rounded-xl border border-white/10 overflow-hidden h-[500px] lg:h-[700px]"
          >
            <ShoeViewer customizations={customizations} selectedPart={selectedPart} setSelectedPart={setSelectedPart} />
          </motion.div>

          {/* Customization Tools - Takes 1/3 of the space on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/3 bg-black/30 rounded-xl border border-white/10 p-6"
          >
            <Tabs defaultValue="color" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="color" className="data-[state=active]:bg-purple-600">
                  <Palette className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Color</span>
                </TabsTrigger>
                <TabsTrigger value="stickers" className="data-[state=active]:bg-purple-600">
                  <Sticker className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Stickers</span>
                </TabsTrigger>
                <TabsTrigger value="draw" className="data-[state=active]:bg-purple-600">
                  <Pencil className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Draw</span>
                </TabsTrigger>
                <TabsTrigger value="text" className="data-[state=active]:bg-purple-600">
                  <Text className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Text</span>
                </TabsTrigger>
              </TabsList>

              <div className="min-h-[400px]">
                <TabsContent value="color" className="mt-0">
                  <ColorPicker
                    selectedPart={selectedPart}
                    setSelectedPart={setSelectedPart}
                    currentColor={customizations[selectedPart]}
                    onColorChange={handleColorChange}
                    showPartSpecificOptions={true}
                  />
                </TabsContent>

                <TabsContent value="stickers" className="mt-0">
                  <StickerPicker onSelectSticker={handleAddSticker} />
                </TabsContent>

                <TabsContent value="draw" className="mt-0">
                  <DrawingTool onAddDrawing={handleAddDrawing} />
                </TabsContent>

                <TabsContent value="text" className="mt-0">
                  <TextTool onAddText={handleAddText} />
                </TabsContent>
              </div>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white/10"
                onClick={handleReset}
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Reset
              </Button>
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white" onClick={handleCheckout}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Order Now
              </Button>
            </div>

            {/* Price and Info */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Base Price:</span>
                <span className="text-white font-medium">$129.99</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Customization:</span>
                <span className="text-white font-medium">$20.00</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-white/10">
                <span className="text-gray-300 font-medium">Total:</span>
                <span className="text-purple-400 font-bold text-xl">$149.99</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Order Summary Modal */}
      {showOrderSummary && <OrderSummary customizations={customizations} onClose={() => setShowOrderSummary(false)} />}
    </section>
  )
}
