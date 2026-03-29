import { beforeEach, describe, expect, it } from 'vitest'
import { DEFAULT_WRITING_STATE } from '../../../src/config/defaults'
import { STORAGE_KEYS } from '../../../src/config/storage'
import {
  createJsonStorage,
  loadPersistedState,
  savePersistedState
} from '../../../src/services/persistence/localStorage'

describe('localStorage persistence helpers', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('saves and loads persisted state snapshots', () => {
    savePersistedState(STORAGE_KEYS.writing, {
      content: 'saved note',
      mode: 'snow'
    })

    expect(loadPersistedState(STORAGE_KEYS.writing)).toEqual({
      content: 'saved note',
      mode: 'snow'
    })
  })

  it('falls back to defaults when stored JSON is invalid', () => {
    localStorage.setItem(STORAGE_KEYS.writing, '{broken-json')

    expect(loadPersistedState(STORAGE_KEYS.writing, DEFAULT_WRITING_STATE)).toEqual(
      DEFAULT_WRITING_STATE
    )
  })

  it('exposes a storage adapter compatible with zustand persist', () => {
    const storage = createJsonStorage<Record<string, unknown>>()

    storage.setItem('ambient', {
      state: { mode: 'rain', content: 'draft' },
      version: 1
    })

    expect(storage.getItem('ambient')).toEqual({
      state: { mode: 'rain', content: 'draft' },
      version: 1
    })
  })
})
