"use client"

import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { RotateCw, ZoomIn, ZoomOut } from "lucide-react"
import { TextureLoader } from "three"

// Air Force 1 style shoe model component
function ShoeModel({ customizations, selectedPart, setSelectedPart }) {
  const groupRef = useRef()

  // Load textures outside the render loop
  const [stickerTextures, setStickerTextures] = useState({})
  const [drawingTextures, setDrawingTextures] = useState({})

  useEffect(() => {
    const loadTextures = async () => {
      const stickerTextures = {}
      for (const sticker of customizations.stickers) {
        stickerTextures[sticker.id] = await new Promise((resolve) => {
          new TextureLoader().load(sticker.image, resolve)
        })
      }
      setStickerTextures(stickerTextures)

      const drawingTextures = {}
      for (const drawing of customizations.drawings) {
        drawingTextures[drawing.id] = await new Promise((resolve) => {
          new TextureLoader().load(drawing.data, resolve)
        })
      }
      setDrawingTextures(drawingTextures)
    }

    loadTextures()
  }, [customizations.stickers, customizations.drawings])

  // Handle click on a shoe part
  const handlePartClick = (e) => {
    e.stopPropagation()
    const partId = e.object.userData.partId
    if (partId) {
      setSelectedPart(partId)
    }
  }

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} rotation={[0, Math.PI / 4, 0]} scale={1.5}>
      {/* Air Force 1 Style Shoe Model */}

      {/* Chunky Midsole - Characteristic AF1 feature */}
      <group userData={{ partId: "sole" }} onClick={handlePartClick}>
        {/* Main midsole */}
        <mesh position={[0, 0, 0]}>
          <meshStandardMaterial color={customizations.sole} roughness={0.7} metalness={0.1} />
          <boxGeometry args={[1.2, 0.4, 2.6]} />
        </mesh>

        {/* Midsole curve at toe */}
        <mesh position={[0, 0.05, 1.3]} rotation={[Math.PI / 8, 0, 0]}>
          <meshStandardMaterial color={customizations.sole} roughness={0.7} metalness={0.1} />
          <boxGeometry args={[1.2, 0.3, 0.2]} />
        </mesh>

        {/* Midsole curve at heel */}
        <mesh position={[0, 0.05, -1.3]} rotation={[-Math.PI / 8, 0, 0]}>
          <meshStandardMaterial color={customizations.sole} roughness={0.7} metalness={0.1} />
          <boxGeometry args={[1.2, 0.3, 0.2]} />
        </mesh>

        {/* Air sole window - side detail */}
        <mesh position={[0.6, 0.1, -0.8]}>
          <meshStandardMaterial color="#dddddd" roughness={0.3} metalness={0.5} />
          <boxGeometry args={[0.05, 0.15, 0.4]} />
        </mesh>
        <mesh position={[-0.6, 0.1, -0.8]}>
          <meshStandardMaterial color="#dddddd" roughness={0.3} metalness={0.5} />
          <boxGeometry args={[0.05, 0.15, 0.4]} />
        </mesh>

        {/* Outsole */}
        <mesh position={[0, -0.2, 0]}>
          <meshStandardMaterial
            color={customizations.sole === "#ffffff" ? "#eeeeee" : customizations.sole}
            roughness={0.9}
            metalness={0}
          />
          <boxGeometry args={[1.25, 0.1, 2.65]} />
        </mesh>

        {/* Pivot circle on outsole - characteristic AF1 feature */}
        <mesh position={[0, -0.25, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#333333" roughness={0.8} metalness={0.1} />
          <cylinderGeometry args={[0.2, 0.2, 0.02, 24]} />
        </mesh>

        {/* Outsole tread pattern */}
        <group position={[0, -0.25, 0]}>
          {[-1.1, -0.7, -0.3, 0.1, 0.5, 0.9, 1.3].map((z, i) => (
            <mesh key={i} position={[0, 0, z]}>
              <meshStandardMaterial color="#222222" roughness={0.9} metalness={0} />
              <boxGeometry args={[1.2, 0.02, 0.05]} />
            </mesh>
          ))}
        </group>
      </group>

      {/* Upper - Main body of the shoe */}
      <group userData={{ partId: "body" }} onClick={handlePartClick}>
        {/* Main upper */}
        <mesh position={[0, 0.4, 0]}>
          <meshStandardMaterial color={customizations.body} roughness={0.4} metalness={0.1} />
          <boxGeometry args={[1.1, 0.8, 2.4]} />
        </mesh>

        {/* Toe box - with perforations (characteristic AF1 feature) */}
        <mesh position={[0, 0.3, 1.2]} rotation={[Math.PI / 6, 0, 0]}>
          <meshStandardMaterial color={customizations.body} roughness={0.4} metalness={0.1} />
          <boxGeometry args={[1.1, 0.4, 0.4]} />
        </mesh>

        {/* Perforations on toe box */}
        <group position={[0, 0.3, 1.3]} rotation={[Math.PI / 6, 0, 0]}>
          {[-0.3, 0, 0.3].map((x, i) => (
            <group key={i} position={[x, 0, 0]}>
              {[-0.1, 0, 0.1].map((z, j) => (
                <mesh key={`${i}-${j}`} position={[0, 0.1, z]}>
                  <meshStandardMaterial color="#222222" roughness={0.5} metalness={0.1} />
                  <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} rotation={[Math.PI / 2, 0, 0]} />
                </mesh>
              ))}
            </group>
          ))}
        </group>

        {/* Heel counter */}
        <mesh position={[0, 0.4, -1.2]}>
          <meshStandardMaterial color={customizations.body} roughness={0.4} metalness={0.1} />
          <boxGeometry args={[1.1, 0.8, 0.2]} />
        </mesh>

        {/* Ankle collar padding */}
        <mesh position={[0, 0.8, -0.9]} rotation={[Math.PI / 8, 0, 0]}>
          <meshStandardMaterial color={customizations.body} roughness={0.5} metalness={0} />
          <cylinderGeometry args={[0.6, 0.6, 0.6, 16, 1, true, Math.PI / 2, Math.PI]} />
        </mesh>

        {/* Side panels - characteristic AF1 feature */}
        <mesh position={[0.55, 0.4, 0]}>
          <meshStandardMaterial color={customizations.body} roughness={0.4} metalness={0.1} />
          <boxGeometry args={[0.02, 0.6, 2]} />
        </mesh>
        <mesh position={[-0.55, 0.4, 0]}>
          <meshStandardMaterial color={customizations.body} roughness={0.4} metalness={0.1} />
          <boxGeometry args={[0.02, 0.6, 2]} />
        </mesh>

        {/* Stitching details */}
        <group position={[0, 0.4, 0]}>
          {[-1, -0.5, 0, 0.5, 1].map((z, i) => (
            <mesh key={i} position={[0.56, 0, z]}>
              <meshStandardMaterial color="#dddddd" roughness={0.5} metalness={0.1} />
              <boxGeometry args={[0.01, 0.5, 0.01]} />
            </mesh>
          ))}
          {[-1, -0.5, 0, 0.5, 1].map((z, i) => (
            <mesh key={i} position={[-0.56, 0, z]}>
              <meshStandardMaterial color="#dddddd" roughness={0.5} metalness={0.1} />
              <boxGeometry args={[0.01, 0.5, 0.01]} />
            </mesh>
          ))}
        </group>
      </group>

      {/* Tongue */}
      <group userData={{ partId: "tongue" }} onClick={handlePartClick}>
        <mesh position={[0, 0.5, 0.4]} rotation={[-Math.PI / 12, 0, 0]}>
          <meshStandardMaterial color={customizations.tongue || "#dddddd"} roughness={0.5} metalness={0} />
          <boxGeometry args={[0.7, 0.1, 1.4]} />
        </mesh>

        <mesh position={[0, 0.6, 0.8]} rotation={[-Math.PI / 6, 0, 0]}>
          <meshStandardMaterial color={customizations.tongue || "#dddddd"} roughness={0.5} metalness={0} />
          <boxGeometry args={[0.7, 0.1, 0.4]} />
        </mesh>

        {/* Tongue tag - characteristic AF1 feature */}
        <mesh position={[0, 0.65, 0.6]} rotation={[-Math.PI / 6, 0, 0]}>
          <meshStandardMaterial color={customizations.heelTab || "#555555"} roughness={0.4} metalness={0.2} />
          <boxGeometry args={[0.5, 0.02, 0.3]} />
        </mesh>
      </group>

      {/* Laces */}
      <group userData={{ partId: "laces" }} onClick={handlePartClick}>
        {/* Lace holes/eyelets - AF1 has distinctive metal eyelets */}
        {[-0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6].map((z, i) => (
          <group key={`lace-hole-${i}`}>
            <mesh position={[-0.3, 0.55, z]}>
              <meshStandardMaterial color="#999999" roughness={0.3} metalness={0.8} />
              <cylinderGeometry args={[0.04, 0.04, 0.1, 12]} rotation={[Math.PI / 2, 0, 0]} />
            </mesh>
            <mesh position={[0.3, 0.55, z]}>
              <meshStandardMaterial color="#999999" roughness={0.3} metalness={0.8} />
              <cylinderGeometry args={[0.04, 0.04, 0.1, 12]} rotation={[Math.PI / 2, 0, 0]} />
            </mesh>
          </group>
        ))}

        {/* Lace strings */}
        {[-0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6].map((z, i) => (
          <mesh key={`lace-string-${i}`} position={[0, 0.6, z]}>
            <meshStandardMaterial color={customizations.laces} roughness={0.5} metalness={0.1} />
            <cylinderGeometry args={[0.025, 0.025, 0.7, 8]} rotation={[0, 0, Math.PI / 2]} />
          </mesh>
        ))}

        {/* Lace crisscross */}
        {[-0.5, -0.3, -0.1, 0.1, 0.3, 0.5].map((z, i) => (
          <group key={`lace-cross-${i}`}>
            <mesh position={[0, 0.6, z]} rotation={[0, 0, Math.PI / 4]}>
              <meshStandardMaterial color={customizations.laces} roughness={0.5} metalness={0.1} />
              <cylinderGeometry args={[0.02, 0.02, 0.85, 8]} />
            </mesh>
            <mesh position={[0, 0.6, z]} rotation={[0, 0, -Math.PI / 4]}>
              <meshStandardMaterial color={customizations.laces} roughness={0.5} metalness={0.1} />
              <cylinderGeometry args={[0.02, 0.02, 0.85, 8]} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Ankle Strap - characteristic AF1 feature */}
      <group userData={{ partId: "ankleStrap" }} onClick={handlePartClick}>
        <mesh position={[0, 0.8, -0.7]}>
          <meshStandardMaterial
            color={customizations.ankleStrap || customizations.body}
            roughness={0.4}
            metalness={0.1}
          />
          <boxGeometry args={[1.1, 0.3, 0.2]} />
        </mesh>

        {/* Strap buckle */}
        <mesh position={[0.4, 0.8, -0.7]}>
          <meshStandardMaterial color="#999999" roughness={0.3} metalness={0.7} />
          <boxGeometry args={[0.15, 0.15, 0.22]} />
        </mesh>
      </group>

      {/* Heel Tab */}
      <group userData={{ partId: "heelTab" }} onClick={handlePartClick}>
        <mesh position={[0, 0.9, -1.2]}>
          <meshStandardMaterial color={customizations.heelTab || "#555555"} roughness={0.4} metalness={0.2} />
          <boxGeometry args={[0.6, 0.2, 0.1]} />
        </mesh>
      </group>

      {/* Stickers */}
      {customizations.stickers.map((sticker) => {
        const texture = stickerTextures[sticker.id]
        return (
          texture && (
            <mesh
              key={sticker.id}
              position={sticker.position}
              rotation={sticker.rotation}
              scale={[sticker.scale, sticker.scale, 0.01]}
            >
              <planeGeometry args={[0.5, 0.5]} />
              <meshBasicMaterial map={texture} transparent={true} />
            </mesh>
          )
        )
      })}

      {/* Drawings */}
      {customizations.drawings.map((drawing) => {
        const texture = drawingTextures[drawing.id]
        return (
          texture && (
            <mesh key={drawing.id} position={drawing.position} rotation={drawing.rotation}>
              <planeGeometry args={[0.5, 0.5]} />
              <meshBasicMaterial map={texture} transparent={true} />
            </mesh>
          )
        )
      })}

      {/* Text */}
      {customizations.texts.map((textItem) => (
        <mesh
          key={textItem.id}
          position={textItem.position}
          rotation={textItem.rotation}
          scale={[textItem.scale, textItem.scale, 0.01]}
        >
          <planeGeometry args={[0.5, 0.2]} />
          <meshBasicMaterial color={textItem.color} transparent={true} />
        </mesh>
      ))}
    </group>
  )
}

export default function ShoeViewer({ customizations, selectedPart, setSelectedPart }) {
  const controlsRef = useRef()
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5])

  // Camera controls
  const handleResetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  const handleZoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(1.2)
    }
  }

  const handleZoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(1.2)
    }
  }

  return (
    <div className="relative w-full h-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <ShoeModel customizations={customizations} selectedPart={selectedPart} setSelectedPart={setSelectedPart} />

          <OrbitControls
            ref={controlsRef}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
          />

          <Environment preset="studio" />
        </Suspense>
      </Canvas>

      {/* Camera Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          className="bg-black/50 border border-white/20 text-white hover:bg-white/20"
          onClick={handleResetView}
        >
          <RotateCw className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-black/50 border border-white/20 text-white hover:bg-white/20"
          onClick={handleZoomIn}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="bg-black/50 border border-white/20 text-white hover:bg-white/20"
          onClick={handleZoomOut}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>

      {/* Part Selection Hint */}
      <div className="absolute top-4 left-4 bg-black/70 text-white text-sm p-2 rounded-md">
        <p>Click on any part of the shoe to select it for customization</p>
        <p className="text-purple-400 font-medium mt-1">
          Currently selected: {selectedPart.charAt(0).toUpperCase() + selectedPart.slice(1)}
        </p>
      </div>
    </div>
  )
}
