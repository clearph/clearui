interface FeatureCardProps {
  icon?: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative rounded-[20px] border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)] p-5 overflow-hidden">
      {/* Subtle top highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      {icon && (
        <div className="mb-2.5 w-8 h-8 rounded-full bg-black/[0.04] border border-black/5 flex items-center justify-center text-black/50">
          {icon}
        </div>
      )}
      <p className="text-[13.5px] font-[600] text-[#111827] tracking-[-0.02em] leading-[1.3] mb-1">
        {title}
      </p>
      <p className="text-[12px] text-black/50 leading-[1.6] tracking-[-0.01em]">
        {description}
      </p>
    </div>
  )
}
