export default function SvgNoiseTexture({ opacity = 0.025 }) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] mix-blend-soft-light" style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  )
}
