import { act, fireEvent, render, screen } from '@testing-library/react'
import App from '../../src/app/App'
import { resetUiStore, useUiStore } from '../../src/store/useUiStore'
import { resetWritingStore, useWritingStore } from '../../src/store/useWritingStore'
import { beforeEach, describe, expect, it } from 'vitest'

describe('App shell', () => {
  beforeEach(() => {
    localStorage.clear()
    resetWritingStore()
    resetUiStore()
  })

  it('mounts the full immersive shell', () => {
    render(<App />)

    expect(screen.getByTestId('app-shell')).toBeInTheDocument()
    expect(screen.getByTestId('ambient-canvas')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('开始你的心流写作...')).toBeInTheDocument()
    expect(screen.getByTestId('floating-control-panel')).toBeInTheDocument()
    expect(screen.getByTestId('minimal-timer')).toBeInTheDocument()
  })

  it('preserves draft content when switching modes from the integrated shell', () => {
    render(<App />)

    fireEvent.change(screen.getByPlaceholderText('开始你的心流写作...'), {
      target: { value: 'Integrated draft' }
    })
    fireEvent.mouseEnter(screen.getByTestId('mode-switcher-hotzone'))
    fireEvent.click(screen.getByRole('button', { name: '切换到 Snow 模式' }))

    expect(useWritingStore.getState().mode).toBe('snow')
    expect(useWritingStore.getState().content).toBe('Integrated draft')
  })

  it('reflects inactive ui opacity through the fade layer', () => {
    render(<App />)

    act(() => {
      useUiStore.getState().setUserActive(false)
    })

    expect(screen.getByTestId('inactivity-fade-layer')).toHaveAttribute('data-active', 'false')
  })
})
