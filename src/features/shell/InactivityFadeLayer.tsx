import type { PropsWithChildren } from 'react'
import { useUiStore } from '../../store/useUiStore'

export function InactivityFadeLayer({ children }: PropsWithChildren) {
  const isUserActive = useUiStore((state) => state.isUserActive)

  return (
    <div
      data-testid="inactivity-fade-layer"
      data-active={String(isUserActive)}
      style={{ opacity: isUserActive ? 1 : 0.06 }}
      className="transition-opacity duration-700"
    >
      {children}
    </div>
  )
}
