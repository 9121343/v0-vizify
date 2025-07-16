"use client";

export function CSSStarfieldBackground() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* CSS-only background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #000000 0%, #0a0118 50%, #000000 100%),
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(119, 255, 198, 0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Simple scattered star dots using CSS */}
      <div className="absolute inset-0">
        {/* Layer 1 - Larger stars */}
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full opacity-80 animate-twinkle" />
        <div
          className="absolute top-[25%] left-[80%] w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-[45%] left-[30%] w-1 h-1 bg-white rounded-full opacity-90 animate-twinkle"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[60%] left-[70%] w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-[80%] left-[20%] w-1 h-1 bg-white rounded-full opacity-85 animate-twinkle"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-[15%] left-[60%] w-1 h-1 bg-white rounded-full opacity-75 animate-twinkle"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-[70%] left-[90%] w-1 h-1 bg-white rounded-full opacity-65 animate-twinkle"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="absolute top-[35%] left-[10%] w-1 h-1 bg-white rounded-full opacity-80 animate-twinkle"
          style={{ animationDelay: "0.8s" }}
        />

        {/* Layer 2 - Smaller stars */}
        <div
          className="absolute top-[20%] left-[45%] w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-twinkle"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-[55%] left-[85%] w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-twinkle"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="absolute top-[75%] left-[40%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-twinkle"
          style={{ animationDelay: "3.5s" }}
        />
        <div
          className="absolute top-[30%] left-[75%] w-0.5 h-0.5 bg-white rounded-full opacity-45 animate-twinkle"
          style={{ animationDelay: "2.8s" }}
        />
        <div
          className="absolute top-[50%] left-[15%] w-0.5 h-0.5 bg-white rounded-full opacity-55 animate-twinkle"
          style={{ animationDelay: "0.3s" }}
        />
        <div
          className="absolute top-[85%] left-[65%] w-0.5 h-0.5 bg-white rounded-full opacity-35 animate-twinkle"
          style={{ animationDelay: "4.2s" }}
        />
        <div
          className="absolute top-[40%] left-[95%] w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-twinkle"
          style={{ animationDelay: "1.8s" }}
        />
        <div
          className="absolute top-[90%] left-[25%] w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-twinkle"
          style={{ animationDelay: "3.8s" }}
        />
      </div>

      {/* Very subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}
