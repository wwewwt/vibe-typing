import type { UiStateShape, WritingStateShape } from '../types/app'

export const DEFAULT_WRITING_STATE: WritingStateShape = {
  content: '',
  mode: 'rain',
  font: 'sans',
  glassEnabled: true,
  precipitationAmount: 0.55,
  blur: 0.42,
  whiteNoiseVolume: 0.5,
  musicMix: 0,
  timerDurationSeconds: null,
  timerSecondsRemaining: null,
  timerRunning: false,
  timerStyle: 'linear'
}

export const DEFAULT_UI_STATE: UiStateShape = {
  isUserActive: true,
  lastInteractionAt: 0,
  isControlPanelOpen: false,
  isTopHoverActive: false,
  hoveredZone: null
}
