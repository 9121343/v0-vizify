"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CSSStarfieldBackground } from "@/components/css-starfield-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { useState } from "react";
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Palette,
  Eye,
  Download,
  Share2,
  Settings,
  Layers,
} from "lucide-react";

export default function Model3DPage() {
  const [rotationX, setRotationX] = useState([0]);
  const [rotationY, setRotationY] = useState([0]);
  const [zoom, setZoom] = useState([100]);
  const [selectedColor, setSelectedColor] = useState("cosmic-purple");

  const colorOptions = [
    {
      id: "cosmic-purple",
      name: "Cosmic Purple",
      color: "bg-gradient-to-r from-violet-600 to-purple-600",
    },
    {
      id: "nebula-blue",
      name: "Nebula Blue",
      color: "bg-gradient-to-r from-blue-600 to-cyan-600",
    },
    {
      id: "solar-orange",
      name: "Solar Orange",
      color: "bg-gradient-to-r from-orange-600 to-red-600",
    },
    {
      id: "galactic-green",
      name: "Galactic Green",
      color: "bg-gradient-to-r from-green-600 to-emerald-600",
    },
    {
      id: "stellar-white",
      name: "Stellar White",
      color: "bg-gradient-to-r from-gray-100 to-white",
    },
    {
      id: "void-black",
      name: "Void Black",
      color: "bg-gradient-to-r from-gray-900 to-black",
    },
  ];

  const resetView = () => {
    setRotationX([0]);
    setRotationY([0]);
    setZoom([100]);
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
              <Eye className="w-8 h-8 text-violet-400 mr-3" />
              <Badge
                variant="outline"
                className="border-violet-500/50 text-violet-300 bg-violet-950/50"
              >
                Interactive Experience
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              3D Model Viewer
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience FRIZBLEY shoes like never before. Rotate, zoom, and
              customize your perfect pair in stunning 3D detail.
            </p>
          </div>
        </section>

        {/* 3D Viewer Section */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main 3D Viewer */}
              <div className="lg:col-span-3">
                <Card className="bg-black/40 border-white/10 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 flex items-center justify-center relative">
                      {/* Simulated 3D Model */}
                      <div
                        className="w-64 h-64 relative transition-transform duration-300 ease-out"
                        style={{
                          transform: `rotateX(${rotationX[0]}deg) rotateY(${rotationY[0]}deg) scale(${zoom[0] / 100})`,
                        }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg shadow-2xl shadow-violet-500/30 flex items-center justify-center">
                          <span className="text-6xl">👟</span>
                        </div>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg blur-xl opacity-30 -z-10" />
                      </div>

                      {/* Loading indicator */}
                      <div className="absolute bottom-4 left-4">
                        <Badge
                          variant="outline"
                          className="border-green-500/50 text-green-400 bg-green-950/50"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                          Model Loaded
                        </Badge>
                      </div>

                      {/* View controls overlay */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10"
                          onClick={resetView}
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
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500"
                    asChild
                  >
                    <Link href="/customize-shoe">
                      <Palette className="w-5 h-5 mr-2" />
                      Customize This Shoe
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/shop">
                      <Eye className="w-5 h-5 mr-2" />
                      View in Shop
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Controls Panel */}
              <div className="space-y-6">
                {/* Rotation Controls */}
                <Card className="bg-black/40 border-white/10">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center">
                      <RotateCcw className="w-5 h-5 mr-2 text-violet-400" />
                      Rotation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        X-Axis
                      </label>
                      <Slider
                        value={rotationX}
                        onValueChange={setRotationX}
                        max={360}
                        min={-360}
                        step={1}
                        className="w-full"
                      />
                      <span className="text-xs text-gray-500">
                        {rotationX[0]}°
                      </span>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">
                        Y-Axis
                      </label>
                      <Slider
                        value={rotationY}
                        onValueChange={setRotationY}
                        max={360}
                        min={-360}
                        step={1}
                        className="w-full"
                      />
                      <span className="text-xs text-gray-500">
                        {rotationY[0]}°
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Zoom Controls */}
                <Card className="bg-black/40 border-white/10">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center">
                      <ZoomIn className="w-5 h-5 mr-2 text-violet-400" />
                      Zoom
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Slider
                      value={zoom}
                      onValueChange={setZoom}
                      max={200}
                      min={50}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>50%</span>
                      <span>{zoom[0]}%</span>
                      <span>200%</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Color Selection */}
                <Card className="bg-black/40 border-white/10">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center">
                      <Palette className="w-5 h-5 mr-2 text-violet-400" />
                      Colors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2">
                      {colorOptions.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => setSelectedColor(color.id)}
                          className={`aspect-square rounded-lg ${color.color} border-2 transition-all ${
                            selectedColor === color.id
                              ? "border-violet-400 scale-105"
                              : "border-white/20 hover:border-white/40"
                          }`}
                          title={color.name}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-3 text-center">
                      {colorOptions.find((c) => c.id === selectedColor)?.name}
                    </p>
                  </CardContent>
                </Card>

                {/* Model Info */}
                <Card className="bg-black/40 border-white/10">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white flex items-center">
                      <Settings className="w-5 h-5 mr-2 text-violet-400" />
                      Model Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Polygons</span>
                      <span className="text-white">45,231</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Vertices</span>
                      <span className="text-white">22,847</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">File Size</span>
                      <span className="text-white">2.3 MB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Quality</span>
                      <span className="text-green-400">Ultra HD</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Advanced 3D Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Real-time Rendering
                </h3>
                <p className="text-gray-400">
                  Experience ultra-smooth 60fps rendering with dynamic lighting
                  and shadows
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Material Editor
                </h3>
                <p className="text-gray-400">
                  Customize materials, textures, and finishes with
                  professional-grade tools
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  AR Preview
                </h3>
                <p className="text-gray-400">
                  See how your shoes look in your space with augmented reality
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
