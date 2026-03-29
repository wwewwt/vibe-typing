import { describe, expect, it } from 'vitest'
import { createAudioEngine } from '../../../src/services/audio/audioEngine'

describe('createAudioEngine', () => {
  it('does not initialize playback until the first user gesture', () => {
    const engine = createAudioEngine()

    expect(engine.isReady()).toBe(false)

    engine.enableFromUserGesture()

    expect(engine.isReady()).toBe(true)
  })

  it('stores white-noise and music mix levels independently', () => {
    const engine = createAudioEngine()
    engine.enableFromUserGesture()
    engine.setWhiteNoiseVolume(0.45)
    engine.setMusicMix(0.72)

    expect(engine.getLevels()).toEqual({
      whiteNoiseVolume: 0.45,
      musicMix: 0.72
    })
  })
})
