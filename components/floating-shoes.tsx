"use client";

export function FloatingShoes({ count = 2 }) {
  // Simple CSS-only floating elements - no JavaScript needed
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute animate-float opacity-10"
        style={{
          left: "20%",
          top: "15%",
          animationDelay: "0s",
          animationDuration: "8s",
        }}
      >
        <div className="w-24 h-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full opacity-20 blur-sm" />
      </div>
      <div
        className="absolute animate-float opacity-10"
        style={{
          left: "70%",
          top: "60%",
          animationDelay: "3s",
          animationDuration: "10s",
        }}
      >
        <div className="w-20 h-20 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full opacity-15 blur-sm" />
      </div>
    </div>
  );
}
