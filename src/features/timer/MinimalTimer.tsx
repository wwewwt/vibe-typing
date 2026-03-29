import { useWritingStore } from '../../store/useWritingStore'

export function MinimalTimer() {
  const timerStyle = useWritingStore((state) => state.timerStyle)
  const setTimerDurationSeconds = useWritingStore((state) => state.setTimerDurationSeconds)
  const setTimerSecondsRemaining = useWritingStore((state) => state.setTimerSecondsRemaining)
  const setTimerRunning = useWritingStore((state) => state.setTimerRunning)

  const startFocusTimer = () => {
    setTimerDurationSeconds(1500)
    setTimerSecondsRemaining(1500)
    setTimerRunning(true)
  }

  return (
    <div
      data-testid="minimal-timer"
      data-style={timerStyle}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/75 backdrop-blur-xl"
    >
      <button type="button" aria-label="开始 25 分钟计时" onClick={startFocusTimer}>
        Zen 25
      </button>
    </div>
  )
}
