"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Eraser, Paintbrush, Undo, Check } from "lucide-react"

export default function DrawingTool({ onAddDrawing }) {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [ctx, setCtx] = useState(null)
  const [color, setColor] = useState("#ffffff")
  const [brushSize, setBrushSize] = useState(5)
  const [tool, setTool] = useState("brush") // brush or eraser
  const [drawingHistory, setDrawingHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext("2d")
      setCtx(context)

      // Set canvas size
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      // Set initial canvas state
      context.fillStyle = "rgba(0, 0, 0, 0)"
      context.fillRect(0, 0, canvas.width, canvas.height)

      // Save initial state
      saveState(context.getImageData(0, 0, canvas.width, canvas.height))
    }
  }, [])

  // Save canvas state to history
  const saveState = (imageData) => {
    // Remove any states after current index
    const newHistory = drawingHistory.slice(0, historyIndex + 1)
    setDrawingHistory([...newHistory, imageData])
    setHistoryIndex(newHistory.length)
  }

  // Undo last action
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      ctx.putImageData(drawingHistory[historyIndex - 1], 0, 0)
    } else {
      // Clear canvas if at first state
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    }
  }

  // Start drawing
  const startDrawing = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.beginPath()
    ctx.moveTo(x, y)
    setIsDrawing(true)
  }

  // Draw
  const draw = (e) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.lineTo(x, y)
    ctx.strokeStyle = tool === "brush" ? color : "rgba(0, 0, 0, 0)"
    ctx.lineWidth = brushSize
    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out"
    } else {
      ctx.globalCompositeOperation = "source-over"
    }

    ctx.stroke()
  }

  // Stop drawing
  const stopDrawing = () => {
    if (isDrawing) {
      ctx.closePath()
      setIsDrawing(false)

      // Save state
      saveState(ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height))
    }
  }

  // Apply drawing to shoe
  const applyDrawing = () => {
    const canvas = canvasRef.current
    const drawingData = canvas.toDataURL("image/png")
    onAddDrawing(drawingData)

    // Clear canvas for next drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setDrawingHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)])
    setHistoryIndex(0)
  }

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

  return (
    <div>
      <h3 className="text-white text-lg font-medium mb-4">Draw on Your Shoe</h3>

      {/* Canvas */}
      <div className="relative bg-black/50 border border-white/20 rounded-md mb-4 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="w-full h-[250px] touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={(e) => {
            e.preventDefault()
            startDrawing({
              clientX: e.touches[0].clientX,
              clientY: e.touches[0].clientY,
            })
          }}
          onTouchMove={(e) => {
            e.preventDefault()
            draw({
              clientX: e.touches[0].clientX,
              clientY: e.touches[0].clientY,
            })
          }}
          onTouchEnd={stopDrawing}
        />
      </div>

      {/* Tools */}
      <div className="flex gap-2 mb-4">
        <Button
          variant={tool === "brush" ? "default" : "outline"}
          className={`flex-1 ${
            tool === "brush"
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "border-white/20 text-white hover:bg-white/10"
          }`}
          onClick={() => setTool("brush")}
        >
          <Paintbrush className="h-4 w-4 mr-2" />
          Brush
        </Button>
        <Button
          variant={tool === "eraser" ? "default" : "outline"}
          className={`flex-1 ${
            tool === "eraser"
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "border-white/20 text-white hover:bg-white/10"
          }`}
          onClick={() => setTool("eraser")}
        >
          <Eraser className="h-4 w-4 mr-2" />
          Eraser
        </Button>
        <Button
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10"
          onClick={handleUndo}
          disabled={historyIndex <= 0}
        >
          <Undo className="h-4 w-4" />
        </Button>
      </div>

      {/* Brush size */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white text-sm">Brush Size</span>
          <span className="text-white text-sm">{brushSize}px</span>
        </div>
        <Slider value={[brushSize]} min={1} max={20} step={1} onValueChange={(value) => setBrushSize(value[0])} />
      </div>

      {/* Color picker */}
      <div className="mb-6">
        <span className="text-white text-sm block mb-2">Color</span>
        <div className="grid grid-cols-5 gap-2">
          {colorOptions.map((c, i) => (
            <button
              key={i}
              className={`w-full aspect-square rounded-md ${
                color === c ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-black" : "border border-white/20"
              }`}
              style={{ backgroundColor: c }}
              onClick={() => setColor(c)}
              aria-label={`Select color ${c}`}
            />
          ))}
        </div>
      </div>

      {/* Apply button */}
      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={applyDrawing}>
        <Check className="h-4 w-4 mr-2" />
        Apply Drawing to Shoe
      </Button>
    </div>
  )
}
