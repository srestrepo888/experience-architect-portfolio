const SiteBackground = () => {
  return (
    <>
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.01);
            opacity: 0.25;
          }
        }

        @keyframes flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .site-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -50;
          pointer-events: none;
        }

        .background-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .breathe-animation {
          animation: breathe 10s ease-in-out infinite;
        }

        .flow-animation {
          animation: flow 15s linear infinite;
        }
      `}</style>

      {/* SITE-WIDE BACKGROUND - NEVER BLOCKS CONTENT */}
      <div className="site-background">
        {/* Your Background Image */}
        <div className="absolute inset-0">
          <img src="/luxury-geometric-background.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Subtle Animation Overlays */}
        <div className="background-overlay">
          <div
            className="absolute inset-0 opacity-10 breathe-animation"
            style={{
              background: "radial-gradient(circle at 30% 40%, rgba(251, 113, 133, 0.08) 0%, transparent 50%)",
            }}
          />

          <div
            className="absolute inset-0 opacity-15 flow-animation"
            style={{
              background: "linear-gradient(45deg, transparent 40%, rgba(254, 215, 170, 0.06) 50%, transparent 60%)",
              backgroundSize: "300% 300%",
            }}
          />
        </div>
      </div>
    </>
  )
}

export default SiteBackground
