"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CSSStarfieldBackground } from "@/components/css-starfield-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import {
  RotateCcw,
  Palette,
  Layers,
  Sparkles,
  ShoppingCart,
  Download,
  Share2,
  Heart,
  Eye,
  Zap,
  Settings2,
  Brush,
  PaintBucket,
  Shirt,
} from "lucide-react";

export default function ShoeCustomizerPage() {
  const [rotationX, setRotationX] = useState([0]);
  const [rotationY, setRotationY] = useState([45]);
  const [zoom, setZoom] = useState([100]);
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedMaterial, setSelectedMaterial] = useState("leather");
  const [selectedPattern, setSelectedPattern] = useState("none");
  const [selectedSole, setSoleMaterial] = useState("rubber");
  const [selectedSize, setSelectedSize] = useState("9");

  const baseColors = [
    { id: "white", name: "Pure White", hex: "#FFFFFF", preview: "bg-white" },
    {
      id: "black",
      name: "Midnight Black",
      hex: "#1a1a1a",
      preview: "bg-gray-900",
    },
    {
      id: "cosmic-purple",
      name: "Cosmic Purple",
      hex: "#8B5CF6",
      preview: "bg-gradient-to-r from-violet-500 to-purple-600",
    },
    {
      id: "nebula-blue",
      name: "Nebula Blue",
      hex: "#3B82F6",
      preview: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: "solar-orange",
      name: "Solar Orange",
      hex: "#F97316",
      preview: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      id: "forest-green",
      name: "Forest Green",
      hex: "#10B981",
      preview: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: "rose-gold",
      name: "Rose Gold",
      hex: "#E11D48",
      preview: "bg-gradient-to-r from-pink-400 to-rose-500",
    },
    {
      id: "silver",
      name: "Galactic Silver",
      hex: "#6B7280",
      preview: "bg-gradient-to-r from-gray-400 to-slate-500",
    },
  ];

  const materials = [
    {
      id: "leather",
      name: "Premium Leather",
      texture: "Smooth, durable finish",
    },
    { id: "canvas", name: "Canvas", texture: "Breathable, casual feel" },
    {
      id: "synthetic",
      name: "Synthetic",
      texture: "Weather-resistant, lightweight",
    },
    { id: "suede", name: "Suede", texture: "Soft, luxurious texture" },
    {
      id: "mesh",
      name: "Athletic Mesh",
      texture: "Ultra-breathable for sports",
    },
  ];

  const patterns = [
    { id: "none", name: "Solid", preview: "No pattern" },
    { id: "stripes", name: "Racing Stripes", preview: "Classic sport stripes" },
    { id: "stars", name: "Cosmic Stars", preview: "Scattered star pattern" },
    { id: "gradient", name: "Galaxy Fade", preview: "Smooth color transition" },
    { id: "geometric", name: "Geometric", preview: "Modern angular design" },
    { id: "carbon", name: "Carbon Fiber", preview: "High-tech weave pattern" },
  ];

  const soles = [
    { id: "rubber", name: "Classic Rubber", color: "white" },
    { id: "gum", name: "Gum Sole", color: "amber" },
    { id: "translucent", name: "Crystal Clear", color: "transparent" },
    { id: "black", name: "Stealth Black", color: "black" },
    { id: "colored", name: "Color Match", color: "match" },
  ];

  const sizes = [
    "6",
    "6.5",
    "7",
    "7.5",
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
  ];

  const resetCustomization = () => {
    setRotationX([0]);
    setRotationY([45]);
    setZoom([100]);
    setSelectedColor("white");
    setSelectedMaterial("leather");
    setSelectedPattern("none");
    setSoleMaterial("rubber");
  };

  const getShoeColor = () => {
    const color = baseColors.find((c) => c.id === selectedColor);
    return color?.hex || "#FFFFFF";
  };

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="h-full w-full absolute inset-0 z-0">
        <StarfieldBackground />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-violet-400 mr-3" />
              <Badge
                variant="outline"
                className="border-violet-500/50 text-violet-300 bg-violet-950/50"
              >
                3D Customizer
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Design Your Perfect Shoe
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Create your unique FRIZBLEY shoe with our advanced 3D customizer.
              Choose colors, materials, patterns, and more to make it truly
              yours.
            </p>
          </div>
        </section>

        {/* Main Customizer */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 3D Viewer - Main Area */}
              <div className="lg:col-span-2">
                <Card className="bg-black/40 border-white/10 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-gray-900/20 to-black/20 flex items-center justify-center relative">
                      {/* 3D Shoe Model */}
                      <div
                        className="w-80 h-80 relative transition-transform duration-500 ease-out"
                        style={{
                          transform: `perspective(1000px) rotateX(${rotationX[0]}deg) rotateY(${rotationY[0]}deg) scale(${zoom[0] / 100})`,
                        }}
                      >
                        {/* Main Shoe Body */}
                        <div
                          className="absolute inset-0 rounded-xl shadow-2xl transition-all duration-300"
                          style={{
                            backgroundColor: getShoeColor(),
                            boxShadow: `0 20px 40px ${getShoeColor()}30`,
                          }}
                        >
                          {/* Shoe Silhouette */}
                          <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-xl border border-white/20">
                            {/* Toe Area */}
                            <div className="absolute top-8 left-8 w-24 h-16 bg-white/5 rounded-full" />
                            {/* Heel Area */}
                            <div className="absolute bottom-8 right-8 w-20 h-12 bg-black/10 rounded-lg" />
                            {/* Side Panel */}
                            <div className="absolute top-16 left-12 w-32 h-8 bg-white/10 rounded-lg" />
                            {/* Laces */}
                            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 space-y-2">
                              {[...Array(4)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-16 h-1 bg-gray-800 rounded-full"
                                />
                              ))}
                            </div>
                            {/* Pattern Overlay */}
                            {selectedPattern === "stars" && (
                              <div className="absolute inset-0 opacity-30">
                                {[...Array(8)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                                    style={{
                                      left: `${20 + i * 12}%`,
                                      top: `${30 + (i % 3) * 20}%`,
                                    }}
                                  />
                                ))}
                              </div>
                            )}
                            {selectedPattern === "stripes" && (
                              <div className="absolute inset-0 opacity-50">
                                <div className="w-full h-2 bg-white/20 absolute top-1/4" />
                                <div className="w-full h-2 bg-white/20 absolute top-1/2" />
                                <div className="w-full h-2 bg-white/20 absolute top-3/4" />
                              </div>
                            )}
                          </div>

                          {/* Sole */}
                          <div
                            className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-8 rounded-full ${
                              selectedSole === "gum"
                                ? "bg-amber-600"
                                : selectedSole === "black"
                                  ? "bg-gray-900"
                                  : selectedSole === "translucent"
                                    ? "bg-white/30"
                                    : selectedSole === "colored"
                                      ? ""
                                      : "bg-white"
                            }`}
                            style={
                              selectedSole === "colored"
                                ? { backgroundColor: getShoeColor() }
                                : {}
                            }
                          />
                        </div>
                      </div>

                      {/* Controls Overlay */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                          onClick={resetCustomization}
                        >
                          <RotateCcw className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Status */}
                      <div className="absolute bottom-4 left-4">
                        <Badge
                          variant="outline"
                          className="border-green-500/50 text-green-400 bg-green-950/50"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                          Live Preview
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Rotation Controls */}
                <Card className="mt-6 bg-black/40 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Eye className="w-5 h-5 mr-2 text-violet-400" />
                      View Controls
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Rotate X
                      </label>
                      <Slider
                        value={rotationX}
                        onValueChange={setRotationX}
                        max={360}
                        min={-360}
                        step={5}
                        className="w-full"
                      />
                      <span className="text-xs text-gray-500">
                        {rotationX[0]}°
                      </span>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Rotate Y
                      </label>
                      <Slider
                        value={rotationY}
                        onValueChange={setRotationY}
                        max={360}
                        min={-360}
                        step={5}
                        className="w-full"
                      />
                      <span className="text-xs text-gray-500">
                        {rotationY[0]}°
                      </span>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Zoom
                      </label>
                      <Slider
                        value={zoom}
                        onValueChange={setZoom}
                        max={150}
                        min={50}
                        step={5}
                        className="w-full"
                      />
                      <span className="text-xs text-gray-500">{zoom[0]}%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Customization Panel */}
              <div className="space-y-6">
                {/* Customization Tabs */}
                <Card className="bg-black/40 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Palette className="w-5 h-5 mr-2 text-violet-400" />
                      Customization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="colors" className="w-full">
                      <TabsList className="grid w-full grid-cols-4 bg-gray-900/50">
                        <TabsTrigger value="colors" className="text-xs">
                          <PaintBucket className="w-3 h-3 mr-1" />
                          Colors
                        </TabsTrigger>
                        <TabsTrigger value="materials" className="text-xs">
                          <Shirt className="w-3 h-3 mr-1" />
                          Material
                        </TabsTrigger>
                        <TabsTrigger value="patterns" className="text-xs">
                          <Brush className="w-3 h-3 mr-1" />
                          Patterns
                        </TabsTrigger>
                        <TabsTrigger value="details" className="text-xs">
                          <Settings2 className="w-3 h-3 mr-1" />
                          Details
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="colors" className="space-y-4">
                        <div className="grid grid-cols-4 gap-2">
                          {baseColors.map((color) => (
                            <button
                              key={color.id}
                              onClick={() => setSelectedColor(color.id)}
                              className={`aspect-square rounded-lg ${color.preview} border-2 transition-all hover:scale-105 ${
                                selectedColor === color.id
                                  ? "border-violet-400 scale-105"
                                  : "border-white/20"
                              }`}
                              title={color.name}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-400 text-center">
                          Selected:{" "}
                          {baseColors.find((c) => c.id === selectedColor)?.name}
                        </p>
                      </TabsContent>

                      <TabsContent value="materials" className="space-y-3">
                        {materials.map((material) => (
                          <button
                            key={material.id}
                            onClick={() => setSelectedMaterial(material.id)}
                            className={`w-full p-3 rounded-lg border text-left transition-all ${
                              selectedMaterial === material.id
                                ? "border-violet-400 bg-violet-950/30"
                                : "border-white/20 hover:border-white/40"
                            }`}
                          >
                            <div className="text-sm font-medium text-white">
                              {material.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {material.texture}
                            </div>
                          </button>
                        ))}
                      </TabsContent>

                      <TabsContent value="patterns" className="space-y-3">
                        {patterns.map((pattern) => (
                          <button
                            key={pattern.id}
                            onClick={() => setSelectedPattern(pattern.id)}
                            className={`w-full p-3 rounded-lg border text-left transition-all ${
                              selectedPattern === pattern.id
                                ? "border-violet-400 bg-violet-950/30"
                                : "border-white/20 hover:border-white/40"
                            }`}
                          >
                            <div className="text-sm font-medium text-white">
                              {pattern.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              {pattern.preview}
                            </div>
                          </button>
                        ))}
                      </TabsContent>

                      <TabsContent value="details" className="space-y-4">
                        {/* Sole Options */}
                        <div>
                          <label className="text-sm font-medium text-white mb-2 block">
                            Sole Type
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {soles.map((sole) => (
                              <button
                                key={sole.id}
                                onClick={() => setSoleMaterial(sole.id)}
                                className={`p-2 rounded-lg border text-xs transition-all ${
                                  selectedSole === sole.id
                                    ? "border-violet-400 bg-violet-950/30 text-violet-300"
                                    : "border-white/20 text-gray-400 hover:border-white/40"
                                }`}
                              >
                                {sole.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                          <label className="text-sm font-medium text-white mb-2 block">
                            Size (US)
                          </label>
                          <select
                            value={selectedSize}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            className="w-full p-2 rounded-lg bg-gray-900 border border-white/20 text-white"
                          >
                            {sizes.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                {/* Price and Actions */}
                <Card className="bg-black/40 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">Custom Price:</span>
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                        $349.00
                      </span>
                    </div>

                    <Separator className="my-4 bg-white/10" />

                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          className="border-white/20 text-gray-300 hover:bg-white/10"
                        >
                          <Heart className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white/20 text-gray-300 hover:bg-white/10"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Design Summary */}
                <Card className="bg-black/40 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Layers className="w-5 h-5 mr-2 text-violet-400" />
                      Your Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Base Color:</span>
                      <span className="text-white">
                        {baseColors.find((c) => c.id === selectedColor)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Material:</span>
                      <span className="text-white">
                        {materials.find((m) => m.id === selectedMaterial)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Pattern:</span>
                      <span className="text-white">
                        {patterns.find((p) => p.id === selectedPattern)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Sole:</span>
                      <span className="text-white">
                        {soles.find((s) => s.id === selectedSole)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Size:</span>
                      <span className="text-white">US {selectedSize}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
