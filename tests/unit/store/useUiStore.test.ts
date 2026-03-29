import { beforeEach, describe, expect, it } from 'vitest'
import { resetUiStore, useUiStore } from '../../../src/store/useUiStore'

describe('useUiStore', () => {
  beforeEach(() => {
    resetUiStore()
  })

  it('starts with the expected transient ui defaults', () => {
    const state = useUiStore.getState()

    expect(state.isUserActive).toBe(true)
    expect(state.isControlPanelOpen).toBe(false)
    expect(state.isTopHoverActive).toBe(false)
    expect(state.hoveredZone).toBeNull()
  })

  it('updates activity and hovered zone without persistence concerns', () => {
    const store = useUiStore.getState()

    store.setUserActive(false)
    store.setHoveredZone('top')
    store.setTopHoverActive(true)
    store.setControlPanelOpen(true)

    const state = useUiStore.getState()

    expect(state.isUserActive).toBe(false)
    expect(state.hoveredZone).toBe('top')
    expect(state.isTopHoverActive).toBe(true)
    expect(state.isControlPanelOpen).toBe(true)
  })
})
