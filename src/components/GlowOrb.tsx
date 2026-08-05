interface GlowOrbProps {
  className?: string
}

export function GlowOrb({ className = '' }: GlowOrbProps) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full -z-10 ${className}`}
    />
  )
}
