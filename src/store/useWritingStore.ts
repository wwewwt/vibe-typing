import { create } from 'zustand'
import { DEFAULT_WRITING_STATE } from '../config/defaults'
import { STORAGE_KEYS, STORAGE_VERSION } from '../config/storage'
import { loadPersistedState, savePersistedState } from '../services/persistence/localStorage'
import { getAudioEngine } from '../services/audio/audioEngine'
import type { WritingState, WritingStateShape } from '../types/app'

type PersistedWritingEnvelope = {
  state: WritingStateShape
  version: number
}

const getInitialWritingState = (): WritingStateShape => {
  const persisted = loadPersistedState<PersistedWritingEnvelope>(STORAGE_KEYS.writing)

  if (!persisted?.state) {
    return DEFAULT_WRITING_STATE
  }

  return {
    ...DEFAULT_WRITING_STATE,
    ...persisted.state
  }
}

const persistWritingState = (state: WritingStateShape) => {
  savePersistedState<PersistedWritingEnvelope>(STORAGE_KEYS.writing, {
    state,
    version: STORAGE_VERSION
  })
}

const createWritingActions = (
  set: (updater: (state: WritingState) => Partial<WritingState>) => void,
  get: () => WritingState
) => ({
  setContent: (content: string) => {
    set(() => ({ content }))
    persistWritingState(extractWritingShape(get()))
  },
  setMode: (mode: WritingStateShape['mode']) => {
    set(() => ({ mode }))
    getAudioEngine().setMode(mode)
    persistWritingState(extractWritingShape(get()))
  },
  setFont: (font: WritingStateShape['font']) => {
    set(() => ({ font }))
    persistWritingState(extractWritingShape(get()))
  },
  setGlassEnabled: (glassEnabled: boolean) => {
    set(() => ({ glassEnabled }))
    persistWritingState(extractWritingShape(get()))
  },
  setPrecipitationAmount: (precipitationAmount: number) => {
    set(() => ({ precipitationAmount }))
    persistWritingState(extractWritingShape(get()))
  },
  setBlur: (blur: number) => {
    set(() => ({ blur }))
    persistWritingState(extractWritingShape(get()))
  },
  setWhiteNoiseVolume: (whiteNoiseVolume: number) => {
    set(() => ({ whiteNoiseVolume }))
    getAudioEngine().setWhiteNoiseVolume(whiteNoiseVolume)
    persistWritingState(extractWritingShape(get()))
  },
  setMusicMix: (musicMix: number) => {
    set(() => ({ musicMix }))
    persistWritingState(extractWritingShape(get()))
  },
  setTimerDurationSeconds: (timerDurationSeconds: number | null) => {
    set(() => ({ timerDurationSeconds }))
    persistWritingState(extractWritingShape(get()))
  },
  setTimerSecondsRemaining: (timerSecondsRemaining: number | null) => {
    set(() => ({ timerSecondsRemaining }))
    persistWritingState(extractWritingShape(get()))
  },
  setTimerRunning: (timerRunning: boolean) => {
    set(() => ({ timerRunning }))
    persistWritingState(extractWritingShape(get()))
  },
  setTimerStyle: (timerStyle: WritingStateShape['timerStyle']) => {
    set(() => ({ timerStyle }))
    persistWritingState(extractWritingShape(get()))
  }
})

function extractWritingShape(state: WritingState): WritingStateShape {
  return {
    content: state.content,
    mode: state.mode,
    font: state.font,
    glassEnabled: state.glassEnabled,
    precipitationAmount: state.precipitationAmount,
    blur: state.blur,
    whiteNoiseVolume: state.whiteNoiseVolume,
    musicMix: state.musicMix,
    timerDurationSeconds: state.timerDurationSeconds,
    timerSecondsRemaining: state.timerSecondsRemaining,
    timerRunning: state.timerRunning,
    timerStyle: state.timerStyle
  }
}

const buildWritingState = (): WritingState => {
  const initialState = getInitialWritingState()

  return {
    ...initialState,
    setContent: () => undefined,
    setMode: () => undefined,
    setFont: () => undefined,
    setGlassEnabled: () => undefined,
    setPrecipitationAmount: () => undefined,
    setBlur: () => undefined,
    setWhiteNoiseVolume: () => undefined,
    setMusicMix: () => undefined,
    setTimerDurationSeconds: () => undefined,
    setTimerSecondsRemaining: () => undefined,
    setTimerRunning: () => undefined,
    setTimerStyle: () => undefined
  }
}

export const useWritingStore = create<WritingState>()((set, get) => ({
  ...buildWritingState(),
  ...createWritingActions(set, get)
}))

export function resetWritingStore() {
  useWritingStore.setState({
    ...getInitialWritingState(),
    ...createWritingActions(useWritingStore.setState, useWritingStore.getState)
  })
}
