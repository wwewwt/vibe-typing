import { describe, expect, it } from 'vitest'
import { createInactivityController } from '../../../src/services/activity/inactivityController'

describe('createInactivityController', () => {
  it('marks the ui inactive after the timeout elapses', () => {
    const controller = createInactivityController({ timeoutMs: 1200 })

    controller.recordInteraction(100)

    expect(controller.getIsActive(999)).toBe(true)
    expect(controller.getIsActive(1400)).toBe(false)
  })
})
