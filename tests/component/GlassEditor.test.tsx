import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { GlassEditor } from '../../src/features/editor/GlassEditor'
import { resetWritingStore, useWritingStore } from '../../src/store/useWritingStore'

describe('GlassEditor', () => {
  beforeEach(() => {
    localStorage.clear()
    resetWritingStore()
  })

  it('renders the persisted editor content', () => {
    useWritingStore.getState().setContent('Moonlit draft')

    render(<GlassEditor />)

    expect(screen.getByPlaceholderText('开始你的心流写作...')).toHaveValue('Moonlit draft')
  })

  it('updates writing state when the user types into the textarea', () => {
    render(<GlassEditor />)

    fireEvent.change(screen.getByPlaceholderText('开始你的心流写作...'), {
      target: { value: 'Fresh words' }
    })

    expect(useWritingStore.getState().content).toBe('Fresh words')
  })

  it('switches typography presets through font controls', () => {
    render(<GlassEditor />)

    fireEvent.click(screen.getByRole('button', { name: /切换到 Serif 字体/ }))

    expect(useWritingStore.getState().font).toBe('serif')
    expect(screen.getByPlaceholderText('开始你的心流写作...')).toHaveAttribute('data-font', 'serif')
  })
})
