import { create } from 'zustand'
import { DEFAULT_UI_STATE } from '../config/defaults'
import type { UiState } from '../types/app'

const createUiActions = (
  set: (updater: (state: UiState) => Partial<UiState>) => void
) => ({
  setUserActive: (isUserActive: boolean) => set(() => ({ isUserActive })),
  setLastInteractionAt: (lastInteractionAt: number) => set(() => ({ lastInteractionAt })),
  setControlPanelOpen: (isControlPanelOpen: boolean) => set(() => ({ isControlPanelOpen })),
  setTopHoverActive: (isTopHoverActive: boolean) => set(() => ({ isTopHoverActive })),
  setHoveredZone: (hoveredZone: UiState['hoveredZone']) => set(() => ({ hoveredZone }))
})

const buildUiState = (): UiState => ({
  ...DEFAULT_UI_STATE,
  setUserActive: () => undefined,
  setLastInteractionAt: () => undefined,
  setControlPanelOpen: () => undefined,
  setTopHoverActive: () => undefined,
  setHoveredZone: () => undefined
})

export const useUiStore = create<UiState>()((set) => ({
  ...buildUiState(),
  ...createUiActions(set)
}))

if (typeof window !== 'undefined') {
  window.addEventListener('ambient:test-set-inactive', () => {
    useUiStore.getState().setUserActive(false)
  })
}

export function resetUiStore() {
  useUiStore.setState({
    ...DEFAULT_UI_STATE,
    ...createUiActions(useUiStore.setState)
  })
}
