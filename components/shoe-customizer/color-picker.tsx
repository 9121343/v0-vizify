"use client"

import { useState } from "react"
import { HexColorPicker } from "react-colorful"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Predefined color palettes
const colorPalettes = {
  basic: ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"],
  pastel: ["#FFB6C1", "#FFD700", "#ADFF2F", "#87CEEB", "#DDA0DD", "#F0E68C", "#E6E6FA", "#FFDAB9"],
  vibrant: ["#FF5733", "#C70039", "#900C3F", "#581845", "#FFC300", "#DAF7A6", "#FF5733", "#C70039"],
  neutral: ["#F5F5F5", "#D3D3D3", "#A9A9A9", "#808080", "#696969", "#4D4D4D", "#333333", "#1A1A1A"],
}

export default function ColorPicker({
  selectedPart,
  setSelectedPart,
  currentColor,
  onColorChange,
  showPartSpecificOptions,
}) {
  const [colorPalette, setColorPalette] = useState("basic")

  // Parts of the shoe that can be selected
  const parts = [
    { id: "body", name: "Upper Body" },
    { id: "sole", name: "Sole" },
    { id: "laces", name: "Laces" },
    { id: "tongue", name: "Tongue" },
    { id: "ankleStrap", name: "Ankle Strap" },
    { id: "heelTab", name: "Heel Tab" },
  ]

  // Part-specific style options for Air Force 1
  const partStyles = {
    laces: [
      { name: "Flat", preview: "/placeholder.svg?height=50&width=50", color: "#ffffff" },
      { name: "Round", preview: "/placeholder.svg?height=50&width=50", color: "#dddddd" },
      { name: "Oval", preview: "/placeholder.svg?height=50&width=50", color: "#bbbbbb" },
      { name: "Ribbon", preview: "/placeholder.svg?height=50&width=50", color: "#999999" },
    ],
    sole: [
      { name: "Classic", preview: "/placeholder.svg?height=50&width=50", color: "#ffffff" },
      { name: "Gum", preview: "/placeholder.svg?height=50&width=50", color: "#d3a87d" },
      { name: "Translucent", preview: "/placeholder.svg?height=50&width=50", color: "#dddddd" },
      { name: "Speckled", preview: "/placeholder.svg?height=50&width=50", color: "#cccccc" },
    ],
    body: [
      { name: "Smooth Leather", preview: "/placeholder.svg?height=50&width=50", color: "#ffffff" },
      { name: "Tumbled Leather", preview: "/placeholder.svg?height=50&width=50", color: "#f5f5f5" },
      { name: "Canvas", preview: "/placeholder.svg?height=50&width=50", color: "#f0f0f0" },
      { name: "Suede", preview: "/placeholder.svg?height=50&width=50", color: "#e0e0e0" },
    ],
    ankleStrap: [
      { name: "Standard", preview: "/placeholder.svg?height=50&width=50", color: "#ffffff" },
      { name: "Padded", preview: "/placeholder.svg?height=50&width=50", color: "#f0f0f0" },
      { name: "Textured", preview: "/placeholder.svg?height=50&width=50", color: "#e5e5e5" },
      { name: "Perforated", preview: "/placeholder.svg?height=50&width=50", color: "#dddddd" },
    ],
  }

  return (
    <div>
      <h3 className="text-white text-lg font-medium mb-4">Select Part & Color</h3>

      {/* Part selection */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {parts.map((part) => (
          <Button
            key={part.id}
            variant={selectedPart === part.id ? "default" : "outline"}
            className={`${
              selectedPart === part.id
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "border-white/20 text-white hover:bg-white/10"
            }`}
            onClick={() => setSelectedPart(part.id)}
          >
            {part.name}
          </Button>
        ))}
      </div>

      {/* Color picker */}
      <div className="mb-6">
        <HexColorPicker color={currentColor} onChange={onColorChange} className="w-full mb-4" />
        <div className="flex items-center justify-between">
          <span className="text-white">Selected color:</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md border border-white/20" style={{ backgroundColor: currentColor }} />
            <span className="text-white uppercase">{currentColor}</span>
          </div>
        </div>
      </div>

      {/* Part-specific style options */}
      {showPartSpecificOptions && partStyles[selectedPart] && (
        <div className="mt-6">
          <h4 className="text-white text-sm font-medium mb-2">
            {parts.find((p) => p.id === selectedPart)?.name} Styles
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {partStyles[selectedPart].map((style, index) => (
              <button
                key={index}
                className="bg-black/30 border border-white/10 rounded-md p-3 hover:border-purple-500/50 transition-colors flex flex-col items-center"
                onClick={() => onColorChange(style.color)}
              >
                <div className="w-12 h-12 mb-2">
                  <img
                    src={style.preview || "/placeholder.svg"}
                    alt={style.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-white text-sm">{style.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color palettes */}
      <div>
        <h4 className="text-white text-sm font-medium mb-2">Color Palettes</h4>
        <Tabs defaultValue="basic" value={colorPalette} onValueChange={setColorPalette}>
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="basic" className="data-[state=active]:bg-purple-600">
              Basic
            </TabsTrigger>
            <TabsTrigger value="pastel" className="data-[state=active]:bg-purple-600">
              Pastel
            </TabsTrigger>
            <TabsTrigger value="vibrant" className="data-[state=active]:bg-purple-600">
              Vibrant
            </TabsTrigger>
            <TabsTrigger value="neutral" className="data-[state=active]:bg-purple-600">
              Neutral
            </TabsTrigger>
          </TabsList>

          {Object.keys(colorPalettes).map((palette) => (
            <TabsContent key={palette} value={palette} className="mt-0">
              <div className="grid grid-cols-8 gap-2">
                {colorPalettes[palette].map((color, index) => (
                  <button
                    key={index}
                    className="w-full aspect-square rounded-md border border-white/20 hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                    onClick={() => onColorChange(color)}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
