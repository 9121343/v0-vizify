"use client";

import { useEffect, useRef } from "react";

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Create stars with better distribution and performance
    const stars: {
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
      twinkle: number;
      phase: number;
    }[] = [];

    const starCount = Math.min(
      120,
      Math.floor((canvas.width * canvas.height) / 10000),
    );

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.2 + 0.05,
        brightness: Math.random() * 0.5 + 0.5,
        twinkle: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    // Optimized animation loop - moved outside of useCallback
    const animate = () => {
      time += 0.01;

      // Subtle trail effect for smoothness
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid
      ctx.strokeStyle = "rgba(139, 92, 246, 0.02)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update stars with enhanced effects
      stars.forEach((star, index) => {
        // Smooth movement
        star.y += star.speed;
        if (star.y > canvas.height + 10) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
        }

        // Twinkling effect
        const twinkle = Math.sin(time * 2 + star.phase) * star.twinkle + 1;
        const currentBrightness = star.brightness * twinkle;

        // Enhanced gradient with better colors
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 4,
        );

        gradient.addColorStop(
          0,
          `rgba(168, 162, 255, ${currentBrightness * 0.9})`,
        );
        gradient.addColorStop(
          0.3,
          `rgba(139, 92, 246, ${currentBrightness * 0.6})`,
        );
        gradient.addColorStop(
          0.7,
          `rgba(99, 102, 241, ${currentBrightness * 0.3})`,
        );
        gradient.addColorStop(1, `rgba(139, 92, 246, 0)`);

        // Draw glow
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = `rgba(255, 255, 255, ${currentBrightness * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Occasional bright flash
        if (Math.random() < 0.002) {
          ctx.fillStyle = `rgba(255, 255, 255, ${currentBrightness * 0.6})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #0a0118 50%, #000000 100%)",
      }}
    />
  );
}
