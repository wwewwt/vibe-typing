import type { FontId } from '../types/app'

export const FONT_OPTIONS: Array<{
  id: FontId
  label: string
  buttonLabel: string
  className: string
}> = [
  {
    id: 'sans',
    label: 'Sans',
    buttonLabel: '切换到 Sans 字体',
    className: 'font-sans'
  },
  {
    id: 'serif',
    label: 'Serif',
    buttonLabel: '切换到 Serif 字体',
    className: 'font-serif'
  },
  {
    id: 'mono',
    label: 'Mono',
    buttonLabel: '切换到 Mono 字体',
    className: 'font-mono'
  }
]
