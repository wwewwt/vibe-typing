export function tickCountdown(remainingSeconds: number, elapsedSeconds: number) {
  return Math.max(remainingSeconds - elapsedSeconds, 0)
}
