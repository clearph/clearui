import { useState } from 'react'
import { Toggle } from './components/Toggle'
import { TerminalWindow } from './components/TerminalWindow'
import { FeatureCard } from './components/FeatureCard'
import { GlowOrb } from './components/GlowOrb'

const FEATURES = [
  {
    title: 'Zero config',
    description: 'Drop in the stylesheet and start building immediately.',
  },
  {
    title: 'Dark & light',
    description: 'Polished dark and light surfaces with subtle glass effects.',
  },
  {
    title: 'Accessible',
    description: 'Built on semantic HTML with keyboard-friendly interactions.',
  },
  {
    title: 'Tiny footprint',
    description: 'Tailwind JIT ensures only the classes you use are shipped.',
  },
]

export default function App() {
  const [blur, setBlur] = useState(true)
  const [glow, setGlow] = useState(true)

  return (
    <div className="min-h-screen bg-[#070a14] antialiased overflow-hidden relative">
      {/* Background glow orbs */}
      <GlowOrb
        className={`-top-[18%] -right-[18%] w-[72%] aspect-square opacity-[0.9] bg-[radial-gradient(ellipse_at_center,rgba(90,120,255,0.22),transparent_68%)] transition-opacity duration-700 ${
          glow ? 'opacity-[0.9]' : 'opacity-0'
        }`}
      />
      <GlowOrb
        className={`bottom-[-10%] -left-[12%] w-[70%] aspect-square bg-[radial-gradient(ellipse_at_center,rgba(150,100,255,0.18),transparent_70%)] transition-opacity duration-700 ${
          glow ? 'opacity-80' : 'opacity-0'
        }`}
      />

      {/* Page content */}
      <div className="relative z-10 mx-auto max-w-[980px] px-6 pb-24">
        {/* Header */}
        <header className="pt-[8%] mb-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.12em] text-white/35 font-[500] mb-2.5">
            Introducing
          </p>
          <h1 className="text-[28px] font-[600] text-white/90 tracking-[-0.04em] leading-[0.95] mb-5">
            ClearUI
          </h1>
          <p className="text-[13.5px] text-white/55 leading-[1.6] tracking-[-0.01em] max-w-[34ch] mx-auto">
            A clean, minimal component system built with React and Tailwind CSS.
            Dark by default. Glass-finish surfaces. Zero runtime dependencies.
          </p>
        </header>

        {/* Controls row */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <Toggle checked={blur} onChange={setBlur} label="Backdrop blur" />
          <Toggle checked={glow} onChange={setGlow} label="Glow orbs" />
        </div>

        {/* Dark card panel */}
        <div
          className={`relative rounded-[20px] border border-white/[0.08] mb-8 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_0_-1px_1px_rgba(255,255,255,0.06),0_2px_16px_rgba(0,0,0,0.3)] ${
            blur ? 'bg-[#111827]/80' : 'bg-[#111827]'
          }`}
          style={blur ? { backdropFilter: 'blur(24px)' } : undefined}
        >
          {/* Inner top highlight */}
          <div className="absolute inset-x-0 top-[1px] h-[1px] bg-[radial-gradient(120%_90%_at_50%_15%,rgba(255,255,255,0.9),transparent_55%)] opacity-30" />

          <div className="p-5 space-y-5">
            <div className="flex items-start gap-[18px]">
              {/* Status dot */}
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] shrink-0" />
              <div>
                <p className="text-[13px] font-[500] text-white/90 tracking-[-0.02em] leading-[1.5]">
                  System operational
                </p>
                <p className="text-[12px] text-white/45 leading-[1.6] mt-1">
                  All services running normally. Last checked just now.
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-white/[0.06]" />

            {/* Stat row */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Components', value: '24' },
                { label: 'Bundle size', value: '~4 kb' },
                { label: 'Dependencies', value: '0' },
                { label: 'License', value: 'MIT' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-[14px] bg-white/[0.04] border border-white/5 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.04em] text-white/30 font-[500] mb-1">
                    {label}
                  </p>
                  <p className="text-[22px] font-[600] text-white/90 tracking-[-0.03em] leading-[1.3]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal window */}
        <div className="mb-8">
          <TerminalWindow title="install">
            <span className="text-white/30">$</span>{' '}
            <span className="text-white/80">npm install clearui</span>
            {'\n'}
            <span className="text-white/30">$</span>{' '}
            <span className="text-white/80">
              {'import { Toggle, TerminalWindow, FeatureCard } from \'clearui\''}
            </span>
          </TerminalWindow>
        </div>

        {/* Light feature cards */}
        <div className="rounded-[20px] bg-[#f6f8fc] border border-black/[0.06] shadow-[0_8px_32px_rgba(120,140,190,0.12)] p-5">
          <p className="text-[11px] uppercase tracking-[0.12em] text-black/40 font-[500] mb-5">
            Features
          </p>
          <div className="grid grid-cols-2 gap-3 max-h-[380px] overflow-y-auto">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
