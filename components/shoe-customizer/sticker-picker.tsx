"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

// Sticker categories and images
const stickerCategories = {
  logos: [
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ],
  patterns: [
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ],
  emojis: [
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ],
  sports: [
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
  ],
}

export default function StickerPicker({ onSelectSticker }) {
  const [category, setCategory] = useState("logos")

  return (
    <div>
      <h3 className="text-white text-lg font-medium mb-4">Add Stickers</h3>

      <p className="text-gray-400 text-sm mb-4">
        Select a sticker to add to your shoe. You can position it in the 3D view.
      </p>

      <Tabs defaultValue="logos" value={category} onValueChange={setCategory}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="logos" className="data-[state=active]:bg-purple-600">
            Logos
          </TabsTrigger>
          <TabsTrigger value="patterns" className="data-[state=active]:bg-purple-600">
            Patterns
          </TabsTrigger>
          <TabsTrigger value="emojis" className="data-[state=active]:bg-purple-600">
            Emojis
          </TabsTrigger>
          <TabsTrigger value="sports" className="data-[state=active]:bg-purple-600">
            Sports
          </TabsTrigger>
        </TabsList>

        {Object.keys(stickerCategories).map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0">
            <ScrollArea className="h-[300px] pr-4">
              <div className="grid grid-cols-3 gap-4">
                {stickerCategories[cat].map((sticker, index) => (
                  <button
                    key={index}
                    className="bg-white/5 rounded-md p-2 hover:bg-white/10 transition-colors border border-white/10 hover:border-purple-500/50"
                    onClick={() => onSelectSticker(sticker)}
                  >
                    <img
                      src={sticker || "/placeholder.svg"}
                      alt={`Sticker ${index + 1}`}
                      className="w-full aspect-square object-contain"
                    />
                  </button>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-md">
        <p className="text-purple-400 text-sm">
          Tip: After adding a sticker, you can position it by dragging on the 3D model.
        </p>
      </div>
    </div>
  )
}
