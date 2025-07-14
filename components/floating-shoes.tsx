"use client";

import { useEffect, useState } from "react";

export function FloatingShoes({ count = 3 }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Simple CSS animation instead of complex motion components
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-10"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 20}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${6 + i * 2}s`,
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full opacity-30 blur-sm" />
        </div>
      ))}
    </div>
  );
}
