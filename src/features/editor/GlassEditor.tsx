import { useTranslation } from 'react-i18next'
import { FONT_OPTIONS } from '../../config/fonts'
import { useWritingStore } from '../../store/useWritingStore'
import { FontSwitcher } from './FontSwitcher'

export function GlassEditor() {
  const { t } = useTranslation()
  const content = useWritingStore((state) => state.content)
  const font = useWritingStore((state) => state.font)
  const setContent = useWritingStore((state) => state.setContent)

  const activeFont = FONT_OPTIONS.find((fontOption) => fontOption.id === font)

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.4em] text-white/40">The Deck</span>
        <FontSwitcher />
      </div>

      <textarea
        value={content}
        placeholder={t('editor.placeholder')}
        data-font={font}
        spellCheck={false}
        className={`min-h-[24rem] w-full resize-none bg-transparent text-lg leading-8 text-white/80 outline-none placeholder:text-white/20 ${activeFont?.className ?? 'font-sans'}`}
        onChange={(event) => setContent(event.target.value)}
      />
    </section>
  )
}
