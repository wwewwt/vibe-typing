import { useUiStore } from '../../store/useUiStore'
import { useWritingStore } from '../../store/useWritingStore'

export function ModeSwitcher() {
  const isTopHoverActive = useUiStore((state) => state.isTopHoverActive)
  const setTopHoverActive = useUiStore((state) => state.setTopHoverActive)
  const mode = useWritingStore((state) => state.mode)
  const setMode = useWritingStore((state) => state.setMode)

  return (
    <div className="fixed inset-x-0 top-0 z-30">
      <div
        data-testid="mode-switcher-hotzone"
        className="h-[50px] w-full"
        onMouseEnter={() => setTopHoverActive(true)}
        onMouseLeave={() => setTopHoverActive(false)}
      />
      <div
        data-testid="mode-switcher"
        data-revealed={String(isTopHoverActive)}
        className="pointer-events-none absolute inset-x-0 top-3 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-white/70"
      >
        <button
          type="button"
          className="pointer-events-auto"
          aria-pressed={mode === 'rain'}
          onClick={() => setMode('rain')}
        >
          Rain
        </button>
        <button
          type="button"
          className="pointer-events-auto"
          aria-pressed={mode === 'snow'}
          aria-label="切换到 Snow 模式"
          onClick={() => setMode('snow')}
        >
          Snow
        </button>
      </div>
    </div>
  )
}
