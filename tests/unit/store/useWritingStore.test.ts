import { beforeEach, describe, expect, it } from 'vitest'
import { DEFAULT_WRITING_STATE } from '../../../src/config/defaults'
import { STORAGE_KEYS } from '../../../src/config/storage'
import { resetWritingStore, useWritingStore } from '../../../src/store/useWritingStore'

describe('useWritingStore', () => {
  beforeEach(() => {
    localStorage.clear()
    resetWritingStore()
  })

  it('starts with the expected default writing state', () => {
    const state = useWritingStore.getState()

    expect(state.content).toBe(DEFAULT_WRITING_STATE.content)
    expect(state.mode).toBe('rain')
    expect(state.font).toBe('sans')
    expect(state.glassEnabled).toBe(true)
    expect(state.precipitationAmount).toBe(0.55)
    expect(state.blur).toBe(0.42)
    expect(state.whiteNoiseVolume).toBe(0)
    expect(state.musicMix).toBe(0)
    expect(state.timerStyle).toBe('linear')
  })

  it('persists content, font, and glass settings across mode changes', () => {
    const store = useWritingStore.getState()

    store.setContent('night draft')
    store.setFont('mono')
    store.setGlassEnabled(false)
    store.setMode('snow')

    const state = useWritingStore.getState()

    expect(state.mode).toBe('snow')
    expect(state.content).toBe('night draft')
    expect(state.font).toBe('mono')
    expect(state.glassEnabled).toBe(false)
  })

  it('hydrates persisted writing state from localStorage', () => {
    localStorage.setItem(
      STORAGE_KEYS.writing,
      JSON.stringify({
        version: 1,
        state: {
          content: 'restored words',
          mode: 'snow',
          font: 'serif',
          glassEnabled: false,
          precipitationAmount: 0.8,
          blur: 0.6,
          whiteNoiseVolume: 0.2,
          musicMix: 0.4,
          timerDurationSeconds: 900,
          timerSecondsRemaining: 875,
          timerRunning: true,
          timerStyle: 'circular'
        }
      })
    )

    resetWritingStore()

    const state = useWritingStore.getState()

    expect(state.content).toBe('restored words')
    expect(state.mode).toBe('snow')
    expect(state.font).toBe('serif')
    expect(state.glassEnabled).toBe(false)
    expect(state.timerSecondsRemaining).toBe(875)
    expect(state.timerRunning).toBe(true)
    expect(state.timerStyle).toBe('circular')
  })

  it('writes the latest writing snapshot back to localStorage after updates', () => {
    const store = useWritingStore.getState()

    store.setContent('saved after typing')
    store.setMode('snow')

    expect(JSON.parse(localStorage.getItem(STORAGE_KEYS.writing) ?? 'null')).toEqual({
      version: 1,
      state: expect.objectContaining({
        content: 'saved after typing',
        mode: 'snow',
        font: 'sans'
      })
    })
  })
})
