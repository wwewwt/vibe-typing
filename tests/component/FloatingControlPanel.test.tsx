import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { FloatingControlPanel } from '../../src/features/controls/FloatingControlPanel'
import { resetUiStore } from '../../src/store/useUiStore'
import { resetWritingStore, useWritingStore } from '../../src/store/useWritingStore'

describe('FloatingControlPanel', () => {
  beforeEach(() => {
    localStorage.clear()
    resetUiStore()
    resetWritingStore()
  })

  it('starts hidden and opens when the trigger is clicked', () => {
    render(<FloatingControlPanel />)

    expect(screen.getByTestId('floating-control-panel')).toHaveAttribute('data-open', 'false')

    fireEvent.click(screen.getByRole('button', { name: '打开氛围控制台' }))

    expect(screen.getByTestId('floating-control-panel')).toHaveAttribute('data-open', 'true')
  })

  it('updates persisted writing controls through mixer sliders', () => {
    render(<FloatingControlPanel />)
    fireEvent.click(screen.getByRole('button', { name: '打开氛围控制台' }))

    fireEvent.change(screen.getByLabelText('调整雨雪强度'), { target: { value: '0.91' } })
    fireEvent.change(screen.getByLabelText('调整背景模糊'), { target: { value: '0.33' } })
    fireEvent.change(screen.getByLabelText('调整白噪音音量'), { target: { value: '0.4' } })
    fireEvent.change(screen.getByLabelText('调整音乐融合度'), { target: { value: '0.7' } })

    const state = useWritingStore.getState()

    expect(state.precipitationAmount).toBeCloseTo(0.91)
    expect(state.blur).toBeCloseTo(0.33)
    expect(state.whiteNoiseVolume).toBeCloseTo(0.4)
    expect(state.musicMix).toBeCloseTo(0.7)
  })
})
