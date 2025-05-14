"use client"

import { useEffect, useRef } from "react"

interface QRCodeProps {
  value: string
  size?: number
  level?: "L" | "M" | "Q" | "H"
}

export default function QRCode({ value, size = 200, level = "M" }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // This is a placeholder for QR code generation
    // In a real implementation, you would use a library like qrcode.js

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, size, size)

    // Draw a fake QR code pattern for demonstration
    ctx.fillStyle = "#000000"

    // Draw border
    ctx.fillRect(0, 0, size, 10)
    ctx.fillRect(0, 0, 10, size)
    ctx.fillRect(size - 10, 0, 10, size)
    ctx.fillRect(0, size - 10, size, 10)

    // Draw position detection patterns
    const drawPositionSquare = (x: number, y: number, s: number) => {
      ctx.fillRect(x, y, s, s)
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(x + 10, y + 10, s - 20, s - 20)
      ctx.fillStyle = "#000000"
      ctx.fillRect(x + 20, y + 20, s - 40, s - 40)
    }

    drawPositionSquare(10, 10, 70)
    drawPositionSquare(size - 80, 10, 70)
    drawPositionSquare(10, size - 80, 70)

    // Draw random dots to simulate QR code
    for (let i = 0; i < 100; i++) {
      const x = Math.floor(Math.random() * (size - 20)) + 10
      const y = Math.floor(Math.random() * (size - 20)) + 10
      const s = Math.floor(Math.random() * 10) + 5

      // Don't draw over position detection patterns
      const inCorner = (x < 90 && y < 90) || (x > size - 90 && y < 90) || (x < 90 && y > size - 90)

      if (!inCorner) {
        ctx.fillRect(x, y, s, s)
      }
    }
  }, [value, size, level])

  return <canvas ref={canvasRef} width={size} height={size} className="border rounded" />
}
