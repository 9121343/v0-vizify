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

    // Much lighter star configuration for better performance
    const stars: {
      x: number;
      y: number;
      size: number;
      speed: number;
      brightness: number;
    }[] = [];

    // Drastically reduced star count for performance
    const starCount = Math.min(
      30,
      Math.floor((canvas.width * canvas.height) / 50000),
    );

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.1 + 0.02,
        brightness: Math.random() * 0.3 + 0.7,
      });
    }

    let lastTime = 0;
    const targetFPS = 30; // Limit to 30fps for better performance

    // Highly optimized animation loop
    const animate = (currentTime: number) => {
      // Throttle to target FPS
      if (currentTime - lastTime < 1000 / targetFPS) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      // Very light background clear
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Simple stars without complex effects
      stars.forEach((star) => {
        // Move star
        star.y += star.speed;
        if (star.y > canvas.height + 5) {
          star.y = -5;
          star.x = Math.random() * canvas.width;
        }

        // Simple white dot - no gradients for better performance
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

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
