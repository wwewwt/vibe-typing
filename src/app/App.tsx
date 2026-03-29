import { useEffect } from 'react'
import { AmbientCanvas } from '../scene/AmbientCanvas'
import { FloatingControlPanel } from '../features/controls/FloatingControlPanel'
import { ModeSwitcher } from '../features/controls/ModeSwitcher'
import { GlassEditor } from '../features/editor/GlassEditor'
import { InactivityFadeLayer } from '../features/shell/InactivityFadeLayer'
import { getAudioEngine } from '../services/audio/audioEngine'

type AppProps = {
  className?: string
}

export default function App({ className = '' }: AppProps) {
  useEffect(() => {
    const engine = getAudioEngine()
    
    // 首次用户交互时启用音频引擎
    const enableAudio = () => {
      engine.enableFromUserGesture()
    }
    document.addEventListener('click', enableAudio, { once: true })
    document.addEventListener('keydown', enableAudio, { once: true })
    
    // 每次点击或打字都激活音频播放
    const activateAudio = () => {
      engine.activate()
    }
    document.addEventListener('click', activateAudio)
    document.addEventListener('keydown', activateAudio)
    
    return () => {
      document.removeEventListener('click', enableAudio)
      document.removeEventListener('keydown', enableAudio)
      document.removeEventListener('click', activateAudio)
      document.removeEventListener('keydown', activateAudio)
    }
  }, [])

  return (
    <main
      data-testid="app-shell"
      className={`relative min-h-screen w-full overflow-hidden bg-stone-950 text-stone-100 ${className}`.trim()}
    >
      <AmbientCanvas />
      <ModeSwitcher />
      <InactivityFadeLayer>
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
          <div className="w-full max-w-5xl">
            <GlassEditor />
          </div>
        </div>
        <FloatingControlPanel />
      </InactivityFadeLayer>
    </main>
  )
}
