import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { buildTextDownload } from '../../services/export/exportText'
import { useUiStore } from '../../store/useUiStore'
import { useWritingStore } from '../../store/useWritingStore'

function MixerSlider({
  label,
  value,
  onChange
}: {
  label: string
  value: number
  onChange: (value: number) => void
}) {
  return (
    <label className="flex flex-col gap-2 text-xs text-white/65">
      <span>{label}</span>
      <input
        aria-label={label}
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  )
}

export function FloatingControlPanel() {
  const { t, i18n } = useTranslation()
  const isOpen = useUiStore((state) => state.isControlPanelOpen)
  const setControlPanelOpen = useUiStore((state) => state.setControlPanelOpen)
  const panelRef = useRef<HTMLDivElement>(null)

  const content = useWritingStore((state) => state.content)
  const precipitationAmount = useWritingStore((state) => state.precipitationAmount)
  const blur = useWritingStore((state) => state.blur)
  const whiteNoiseVolume = useWritingStore((state) => state.whiteNoiseVolume)
  const musicMix = useWritingStore((state) => state.musicMix)
  const setPrecipitationAmount = useWritingStore((state) => state.setPrecipitationAmount)
  const setBlur = useWritingStore((state) => state.setBlur)
  const setWhiteNoiseVolume = useWritingStore((state) => state.setWhiteNoiseVolume)
  const setMusicMix = useWritingStore((state) => state.setMusicMix)

  const download = buildTextDownload(content)

  // 点击面板外部关闭
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setControlPanelOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, setControlPanelOpen])

  return (
    <div className="fixed bottom-8 left-1/2 z-30 -translate-x-1/2">
      {/* 设置按钮 - 齿轮图标 */}
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 backdrop-blur-xl transition-colors hover:bg-white/10 hover:text-white"
        aria-label="打开设置"
        onClick={() => setControlPanelOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>

      {/* 设置面板 - 点击外部关闭 */}
      {isOpen && (
        <div
          ref={panelRef}
          data-testid="floating-control-panel"
          className="absolute bottom-14 left-1/2 min-w-[18rem] -translate-x-1/2 rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/70 backdrop-blur-2xl"
        >
          <div className="mb-3">{t('controls.mixer')}</div>
          <div className="space-y-3">
            <MixerSlider label={t('controls.precipitation')} value={precipitationAmount} onChange={setPrecipitationAmount} />
            <MixerSlider label={t('controls.blur')} value={blur} onChange={setBlur} />
            <MixerSlider label={t('controls.whiteNoise')} value={whiteNoiseVolume} onChange={setWhiteNoiseVolume} />
            <MixerSlider label={t('controls.musicMix')} value={musicMix} onChange={setMusicMix} />
          </div>
          
          {/* 语言切换 */}
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-xs text-white/65">{t('language.switch')}</span>
            <div className="flex gap-2">
              <button
                type="button"
                className={`rounded-full px-2 py-1 text-xs transition-colors ${
                  i18n.language === 'en' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white'
                }`}
                onClick={() => i18n.changeLanguage('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={`rounded-full px-2 py-1 text-xs transition-colors ${
                  i18n.language === 'zh' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white'
                }`}
                onClick={() => i18n.changeLanguage('zh')}
              >
                中文
              </button>
            </div>
          </div>
          
          <button
            type="button"
            aria-label="导出当前文本"
            className="mt-4 rounded-full border border-white/10 px-3 py-1"
          >
            {t('controls.export')}
          </button>
          <div data-testid="export-status" className="mt-2 text-xs text-white/45">
            {download.filename}
          </div>
        </div>
      )}
    </div>
  )
}
