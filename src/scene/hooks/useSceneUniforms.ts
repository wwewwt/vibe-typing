import { useMemo } from 'react'
import { useWritingStore } from '../../store/useWritingStore'

export function useSceneUniforms() {
  const mode = useWritingStore((state) => state.mode)
  const precipitationAmount = useWritingStore((state) => state.precipitationAmount)
  const blur = useWritingStore((state) => state.blur)

  return useMemo(
    () => ({
      mode,
      precipitationAmount: precipitationAmount.toFixed(2),
      precipitationValue: precipitationAmount,
      blur: blur.toFixed(2),
      blurValue: blur
    }),
    [blur, mode, precipitationAmount]
  )
}
