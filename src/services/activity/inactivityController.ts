export function createInactivityController({ timeoutMs }: { timeoutMs: number }) {
  let lastInteractionAt = 0

  return {
    recordInteraction(timestamp: number) {
      lastInteractionAt = timestamp
    },
    getIsActive(now: number) {
      return now - lastInteractionAt < timeoutMs
    }
  }
}
