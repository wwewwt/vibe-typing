import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { MinimalTimer } from '../../src/features/timer/MinimalTimer'
import { resetWritingStore, useWritingStore } from '../../src/store/useWritingStore'

describe('MinimalTimer', () => {
  beforeEach(() => {
    resetWritingStore()
  })

  it('starts a 25 minute focus timer and exposes progress attributes', () => {
    render(<MinimalTimer />)

    fireEvent.click(screen.getByRole('button', { name: '开始 25 分钟计时' }))

    expect(useWritingStore.getState().timerRunning).toBe(true)
    expect(useWritingStore.getState().timerDurationSeconds).toBe(1500)
    expect(screen.getByTestId('minimal-timer')).toHaveAttribute('data-style', 'linear')
  })
})
