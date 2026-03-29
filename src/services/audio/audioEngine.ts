import type { AppMode } from '../../types/app'

export type { AppMode }

// 单例实例
let audioEngineInstance: ReturnType<typeof createAudioEngine> | null = null

export function getAudioEngine() {
  if (!audioEngineInstance) {
    audioEngineInstance = createAudioEngine()
  }
  return audioEngineInstance
}

function createAudioEngine() {
  let ready = false
  let whiteNoiseVolume = 0.1 // 默认音量 0.1
  let musicMix = 0
  let isPlaying = false // 是否已经开始播放
  
  let rainAudio: HTMLAudioElement | null = null
  let snowAudio: HTMLAudioElement | null = null
  let currentMode: AppMode | null = null

  const audioBaseUrl = import.meta.env.BASE_URL + 'sounds'

  function loadAudio(src: string): HTMLAudioElement {
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = 0
    return audio
  }

  function initAudio() {
    if (rainAudio) return
    rainAudio = loadAudio(`${audioBaseUrl}/rain.mp3`)
    snowAudio = loadAudio(`${audioBaseUrl}/snow.mp3`)
  }

  function crossFadeTo(newMode: AppMode) {
    if (!ready || !rainAudio || !snowAudio) return
    
    const oldMode = currentMode
    currentMode = newMode

    const targetVolume = whiteNoiseVolume
    const fadeDuration = 800 // ms
    const fadeInterval = 50
    const steps = fadeDuration / fadeInterval
    let step = 0

    const fadeTimer = setInterval(() => {
      step++
      const progress = step / steps
      
      // 淡出旧模式
      if (oldMode && oldMode === 'rain' && rainAudio) {
        rainAudio.volume = Math.max(0, targetVolume * (1 - progress))
      } else if (oldMode && oldMode === 'snow' && snowAudio) {
        snowAudio.volume = Math.max(0, targetVolume * (1 - progress))
      }

      // 淡入新模式
      if (newMode === 'rain' && rainAudio) {
        rainAudio.volume = targetVolume * progress
        if (progress === 1 && rainAudio.paused) {
          rainAudio.play().catch(() => {})
        }
      } else if (newMode === 'snow' && snowAudio) {
        snowAudio.volume = targetVolume * progress
        if (progress === 1 && snowAudio.paused) {
          snowAudio.play().catch(() => {})
        }
      }

      if (step >= steps) {
        clearInterval(fadeTimer)
        // 暂停不再需要的音频
        if (oldMode === 'rain' && rainAudio) {
          rainAudio.pause()
        } else if (oldMode === 'snow' && snowAudio) {
          snowAudio.pause()
        }
      }
    }, fadeInterval)
  }

  return {
    enableFromUserGesture() {
      if (ready) return // 已经启用过了
      ready = true
      initAudio()
      
      // 用户交互后，开始播放
      this.activate()
    },
    
    // 用户点击/打字时激活音频播放
    activate() {
      if (!ready || isPlaying) return
      isPlaying = true
      
      // 如果没有模式，默认 rain
      if (!currentMode) {
        currentMode = 'rain'
      }
      
      if (currentMode === 'rain' && rainAudio) {
        rainAudio.volume = whiteNoiseVolume
        rainAudio.play().catch(() => {})
      } else if (currentMode === 'snow' && snowAudio) {
        snowAudio.volume = whiteNoiseVolume
        snowAudio.play().catch(() => {})
      }
    },
    isReady() {
      return ready
    },
    setMode(mode: AppMode) {
      if (!ready) {
        currentMode = mode
        return
      }
      crossFadeTo(mode)
    },
    setWhiteNoiseVolume(nextVolume: number) {
      whiteNoiseVolume = Math.max(0, Math.min(1, nextVolume))
      // 实时更新当前播放音频的音量
      if (ready) {
        if (currentMode === 'rain' && rainAudio) {
          rainAudio.volume = whiteNoiseVolume
        } else if (currentMode === 'snow' && snowAudio) {
          snowAudio.volume = whiteNoiseVolume
        }
      }
    },
    setMusicMix(nextMix: number) {
      musicMix = nextMix
    },
    getLevels() {
      return {
        whiteNoiseVolume,
        musicMix
      }
    }
  }
}
