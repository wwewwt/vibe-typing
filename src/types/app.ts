export type AppMode = 'rain' | 'snow'

export type FontId = 'sans' | 'serif' | 'mono'

export type TimerStyle = 'linear' | 'circular'

export type HoveredZone = 'top' | 'editor' | 'controls' | null

export interface WritingStateShape {
  content: string
  mode: AppMode
  font: FontId
  glassEnabled: boolean
  precipitationAmount: number
  blur: number
  whiteNoiseVolume: number
  musicMix: number
  timerDurationSeconds: number | null
  timerSecondsRemaining: number | null
  timerRunning: boolean
  timerStyle: TimerStyle
}

export interface WritingActions {
  setContent: (content: string) => void
  setMode: (mode: AppMode) => void
  setFont: (font: FontId) => void
  setGlassEnabled: (enabled: boolean) => void
  setPrecipitationAmount: (amount: number) => void
  setBlur: (blur: number) => void
  setWhiteNoiseVolume: (volume: number) => void
  setMusicMix: (mix: number) => void
  setTimerDurationSeconds: (seconds: number | null) => void
  setTimerSecondsRemaining: (seconds: number | null) => void
  setTimerRunning: (running: boolean) => void
  setTimerStyle: (style: TimerStyle) => void
}

export type WritingState = WritingStateShape & WritingActions

export interface UiStateShape {
  isUserActive: boolean
  lastInteractionAt: number
  isControlPanelOpen: boolean
  isTopHoverActive: boolean
  hoveredZone: HoveredZone
}

export interface UiActions {
  setUserActive: (active: boolean) => void
  setLastInteractionAt: (timestamp: number) => void
  setControlPanelOpen: (open: boolean) => void
  setTopHoverActive: (active: boolean) => void
  setHoveredZone: (zone: HoveredZone) => void
}

export type UiState = UiStateShape & UiActions
