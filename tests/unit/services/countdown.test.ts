import { describe, expect, it } from 'vitest'
import { tickCountdown } from '../../../src/services/timer/countdown'

describe('tickCountdown', () => {
  it('reduces remaining time without going below zero', () => {
    expect(tickCountdown(10, 3)).toBe(7)
    expect(tickCountdown(2, 5)).toBe(0)
  })
})
