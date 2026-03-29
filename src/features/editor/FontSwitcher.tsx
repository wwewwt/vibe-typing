import { FONT_OPTIONS } from '../../config/fonts'
import { useWritingStore } from '../../store/useWritingStore'

export function FontSwitcher() {
  const activeFont = useWritingStore((state) => state.font)
  const setFont = useWritingStore((state) => state.setFont)

  return (
    <div className="flex items-center gap-2" aria-label="字体切换器">
      {FONT_OPTIONS.map((fontOption) => (
        <button
          key={fontOption.id}
          type="button"
          aria-pressed={activeFont === fontOption.id}
          className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 transition hover:text-white"
          onClick={() => setFont(fontOption.id)}
        >
          <span className="sr-only">{fontOption.buttonLabel}</span>
          {fontOption.label}
        </button>
      ))}
    </div>
  )
}
