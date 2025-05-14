"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TextTool({ onAddText }) {
  const [text, setText] = useState("")
  const [textColor, setTextColor] = useState("#ffffff")
  const [font, setFont] = useState("Arial")

  // Color options
  const colorOptions = [
    "#ffffff",
    "#000000",
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
    "#ff5733",
    "#C70039",
  ]

  // Font options
  const fontOptions = [
    "Arial",
    "Verdana",
    "Helvetica",
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Palatino",
    "Garamond",
    "Bookman",
    "Tahoma",
  ]

  // Apply text to shoe
  const applyText = () => {
    if (text.trim()) {
      onAddText(text, textColor, font)
      setText("")
    }
  }

  return (
    <div>
      <h3 className="text-white text-lg font-medium mb-4">Add Text to Your Shoe</h3>

      {/* Text input */}
      <div className="mb-4">
        <Label htmlFor="text-input" className="text-white text-sm block mb-2">
          Enter Text
        </Label>
        <Input
          id="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
          className="bg-black/30 border-white/20 text-white"
        />
      </div>

      {/* Font selection */}
      <div className="mb-4">
        <Label htmlFor="font-select" className="text-white text-sm block mb-2">
          Font
        </Label>
        <Select value={font} onValueChange={setFont}>
          <SelectTrigger id="font-select" className="bg-black/30 border-white/20 text-white">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
          <SelectContent className="bg-black/90 border-white/20 text-white">
            {fontOptions.map((f) => (
              <SelectItem key={f} value={f} className="hover:bg-white/10">
                {f}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Color picker */}
      <div className="mb-6">
        <Label className="text-white text-sm block mb-2">Text Color</Label>
        <div className="grid grid-cols-5 gap-2">
          {colorOptions.map((c, i) => (
            <button
              key={i}
              className={`w-full aspect-square rounded-md ${
                textColor === c ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-black" : "border border-white/20"
              }`}
              style={{ backgroundColor: c }}
              onClick={() => setTextColor(c)}
              aria-label={`Select color ${c}`}
            />
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="mb-6 p-4 bg-black/50 border border-white/20 rounded-md">
        <Label className="text-white text-sm block mb-2">Preview</Label>
        <div className="h-16 flex items-center justify-center" style={{ fontFamily: font, color: textColor }}>
          {text || "Your text will appear here"}
        </div>
      </div>

      {/* Apply button */}
      <Button
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        onClick={applyText}
        disabled={!text.trim()}
      >
        <Check className="h-4 w-4 mr-2" />
        Add Text to Shoe
      </Button>
    </div>
  )
}
