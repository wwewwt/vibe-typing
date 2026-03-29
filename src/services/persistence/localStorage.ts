type PersistedEnvelope<T> = {
  state: T
  version: number
}

const hasStorage = () => typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'

export function loadPersistedState<T>(key: string, fallback?: T): T | null {
  if (!hasStorage()) {
    return fallback ?? null
  }

  const rawValue = window.localStorage.getItem(key)

  if (!rawValue) {
    return fallback ?? null
  }

  try {
    return JSON.parse(rawValue) as T
  } catch {
    return fallback ?? null
  }
}

export function savePersistedState<T>(key: string, state: T) {
  if (!hasStorage()) {
    return
  }

  window.localStorage.setItem(key, JSON.stringify(state))
}

export function createJsonStorage<T>() {
  return {
    getItem: (key: string): PersistedEnvelope<T> | null => loadPersistedState<PersistedEnvelope<T>>(key),
    setItem: (key: string, value: PersistedEnvelope<T>) => savePersistedState(key, value),
    removeItem: (key: string) => {
      if (!hasStorage()) {
        return
      }

      window.localStorage.removeItem(key)
    }
  }
}
