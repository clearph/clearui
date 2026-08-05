interface ToggleProps {
  checked: boolean
  onChange: (val: boolean) => void
  label?: string
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <div
        className="relative w-7 h-[18px] rounded-full border border-white/15 bg-white/[0.08] p-[2px] transition-colors"
        style={{ background: checked ? 'rgba(52,211,153,0.25)' : undefined }}
        onClick={() => onChange(!checked)}
      >
        <div
          className={`w-3 h-3 rounded-full transition-transform ${
            checked
              ? 'translate-x-[12px] bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]'
              : 'translate-x-0 bg-white/55'
          }`}
        />
      </div>
      {label && (
        <span className="text-[13px] font-[500] text-white/75 tracking-[-0.01em]">
          {label}
        </span>
      )}
    </label>
  )
}
