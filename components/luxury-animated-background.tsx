"use client"

const LuxuryAnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base Luxury Background Image */}
      <div className="absolute inset-0">
        <img
          src="/luxury-geometric-background.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-95"
        />
      </div>

      {/* Sophisticated Animated Overlay Layers */}
      <div className="absolute inset-0">
        {/* Subtle Breathing Geometric Overlay */}
        <div
          className="absolute inset-0 opacity-8"
          style={{
            background:
              "radial-gradient(circle at 25% 35%, rgba(245, 158, 135, 0.06) 0%, transparent 60%), radial-gradient(circle at 75% 65%, rgba(252, 176, 142, 0.04) 0%, transparent 60%)",
            animation: "luxuryBreathe 12s ease-in-out infinite",
          }}
        />

        {/* Elegant Flowing Light Animation */}
        <div
          className="absolute inset-0 opacity-12"
          style={{
            background: "linear-gradient(135deg, transparent 40%, rgba(254, 215, 170, 0.06) 50%, transparent 60%)",
            backgroundSize: "300% 300%",
            animation: "luxuryFlow 20s linear infinite",
          }}
        />

        {/* Refined Particle System */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-orange-200 rounded-full opacity-25"
            style={{
              left: `${15 + i * 20}%`,
              top: `${25 + (i % 2) * 50}%`,
              animation: `luxuryFloat ${8 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Sophisticated CSS Animations */}
      <style jsx>{`
        @keyframes luxuryBreathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.08;
          }
          50% {
            transform: scale(1.015);
            opacity: 0.12;
          }
        }

        @keyframes luxuryFlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }

        @keyframes luxuryFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.25;
          }
          33% {
            transform: translateY(-8px) translateX(3px);
            opacity: 0.4;
          }
          66% {
            transform: translateY(4px) translateX(-2px);
            opacity: 0.15;
          }
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}

export default LuxuryAnimatedBackground
