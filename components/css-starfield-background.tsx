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

      {/* Static CSS stars using box-shadow for performance */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: "transparent",
          boxShadow: `
            10px 10px 0 0 white,
            50px 30px 0 0 rgba(255,255,255,0.8),
            90px 60px 0 0 rgba(255,255,255,0.6),
            130px 20px 0 0 white,
            170px 80px 0 0 rgba(255,255,255,0.7),
            210px 40px 0 0 rgba(255,255,255,0.5),
            250px 70px 0 0 white,
            290px 15px 0 0 rgba(255,255,255,0.8),
            330px 50px 0 0 rgba(255,255,255,0.6),
            370px 90px 0 0 white,
            410px 25px 0 0 rgba(255,255,255,0.7),
            450px 65px 0 0 rgba(255,255,255,0.5),
            490px 85px 0 0 white,
            530px 35px 0 0 rgba(255,255,255,0.8),
            570px 75px 0 0 rgba(255,255,255,0.6),
            610px 45px 0 0 white,
            650px 95px 0 0 rgba(255,255,255,0.7),
            690px 55px 0 0 rgba(255,255,255,0.5),
            730px 15px 0 0 white,
            770px 85px 0 0 rgba(255,255,255,0.8),
            810px 25px 0 0 rgba(255,255,255,0.6),
            850px 65px 0 0 white,
            890px 95px 0 0 rgba(255,255,255,0.7),
            930px 35px 0 0 rgba(255,255,255,0.5),
            970px 75px 0 0 white,
            1010px 45px 0 0 rgba(255,255,255,0.8),
            1050px 85px 0 0 rgba(255,255,255,0.6),
            1090px 55px 0 0 white
          `,
        }}
        className="animate-twinkle"
        style={{
          background: "transparent",
          boxShadow: `
            10px 10px 0 0 white,
            150px 30px 0 0 rgba(255,255,255,0.8),
            290px 60px 0 0 rgba(255,255,255,0.6),
            430px 20px 0 0 white,
            570px 80px 0 0 rgba(255,255,255,0.7),
            710px 40px 0 0 rgba(255,255,255,0.5),
            850px 70px 0 0 white,
            990px 15px 0 0 rgba(255,255,255,0.8),
            130px 150px 0 0 rgba(255,255,255,0.6),
            270px 190px 0 0 white,
            410px 125px 0 0 rgba(255,255,255,0.7),
            550px 165px 0 0 rgba(255,255,255,0.5),
            690px 185px 0 0 white,
            830px 135px 0 0 rgba(255,255,255,0.8),
            970px 175px 0 0 rgba(255,255,255,0.6),
            110px 245px 0 0 white,
            250px 295px 0 0 rgba(255,255,255,0.7),
            390px 255px 0 0 rgba(255,255,255,0.5),
            530px 215px 0 0 white,
            670px 285px 0 0 rgba(255,255,255,0.8)
          `,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
