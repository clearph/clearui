interface TerminalWindowProps {
  title?: string
  children: React.ReactNode
}

export function TerminalWindow({ title = 'terminal', children }: TerminalWindowProps) {
  return (
    <div className="rounded-[16px] overflow-hidden border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_20px_80px_rgba(0,0,0,0.5)] bg-[#0e1220]/70">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-[30px] h-[46px] border-b border-white/[0.06] bg-white/[0.03]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-[11px] uppercase tracking-[0.12em] text-white/30 font-[500]">
          {title}
        </span>
      </div>
      {/* Content */}
      <div className="px-[30px] py-3 overflow-x-auto text-[13px] text-white/80 font-[400] leading-[1.7] whitespace-pre-wrap break-all">
        {children}
      </div>
    </div>
  )
}
