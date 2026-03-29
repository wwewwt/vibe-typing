import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { AmbientCanvas } from '../../src/scene/AmbientCanvas'
import { resetWritingStore, useWritingStore } from '../../src/store/useWritingStore'

describe('AmbientCanvas', () => {
  beforeEach(() => {
    localStorage.clear()
    resetWritingStore()
  })

  it('reflects the selected weather mode in the scene shell', () => {
    useWritingStore.getState().setMode('snow')

    render(<AmbientCanvas />)

    expect(screen.getByTestId('ambient-canvas')).toHaveAttribute('data-mode', 'snow')
  })

  it('maps writing controls into scene uniform data attributes', () => {
    const store = useWritingStore.getState()

    store.setPrecipitationAmount(0.82)
    store.setBlur(0.61)

    render(<AmbientCanvas />)

    expect(screen.getByTestId('ambient-canvas')).toHaveAttribute('data-precipitation', '0.82')
    expect(screen.getByTestId('ambient-canvas')).toHaveAttribute('data-blur', '0.61')
  })

  it('marks the scene as shader-driven and exposes the active shader id', () => {
    useWritingStore.getState().setMode('snow')

    render(<AmbientCanvas />)

    expect(screen.getByTestId('ambient-canvas')).toHaveAttribute('data-renderer', 'shader')
    expect(screen.getByTestId('ambient-canvas')).toHaveAttribute('data-shader', 'snow')
  })

  it('exposes a visual preset attribute so shader polish stays mode-specific', () => {
    useWritingStore.getState().setMode('rain')

    render(<AmbientCanvas />)

    expect(screen.getByTestId('ambient-canvas')).toHaveAttribute('data-preset', 'rain-glass')
  })

  it('skips WebGL context probing when the runtime has no WebGL support', () => {
    const originalWebGLRenderingContext = globalThis.WebGLRenderingContext
    const originalGetContext = HTMLCanvasElement.prototype.getContext
    const getContextSpy = vi.fn()

    // @ts-expect-error test-only removal of browser API
    globalThis.WebGLRenderingContext = undefined
    HTMLCanvasElement.prototype.getContext = getContextSpy

    render(<AmbientCanvas />)

    expect(getContextSpy).not.toHaveBeenCalled()

    HTMLCanvasElement.prototype.getContext = originalGetContext
    if (originalWebGLRenderingContext) {
      globalThis.WebGLRenderingContext = originalWebGLRenderingContext
    } else {
      // @ts-expect-error restoring undefined browser API
      delete globalThis.WebGLRenderingContext
    }
  })
})
