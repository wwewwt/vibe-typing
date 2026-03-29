import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ModeSwitcher } from '../../src/features/controls/ModeSwitcher'
import { resetUiStore } from '../../src/store/useUiStore'
import { resetWritingStore, useWritingStore } from '../../src/store/useWritingStore'

describe('ModeSwitcher', () => {
  beforeEach(() => {
    resetUiStore()
    resetWritingStore()
  })

  it('reveals mode controls when the top hotzone is hovered', () => {
    render(<ModeSwitcher />)

    expect(screen.getByTestId('mode-switcher')).toHaveAttribute('data-revealed', 'false')

    fireEvent.mouseEnter(screen.getByTestId('mode-switcher-hotzone'))

    expect(screen.getByTestId('mode-switcher')).toHaveAttribute('data-revealed', 'true')
  })

  it('switches between rain and snow without clearing editor content', () => {
    const store = useWritingStore.getState()
    store.setContent('Keep this draft')

    render(<ModeSwitcher />)
    fireEvent.mouseEnter(screen.getByTestId('mode-switcher-hotzone'))
    fireEvent.click(screen.getByRole('button', { name: '切换到 Snow 模式' }))

    expect(useWritingStore.getState().mode).toBe('snow')
    expect(useWritingStore.getState().content).toBe('Keep this draft')
  })
})
