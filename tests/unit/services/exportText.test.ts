import { describe, expect, it } from 'vitest'
import { buildTextDownload } from '../../../src/services/export/exportText'

describe('buildTextDownload', () => {
  it('creates a txt download descriptor for current content', () => {
    const download = buildTextDownload('Silent draft')

    expect(download.filename.endsWith('.txt')).toBe(true)
    expect(download.content).toBe('Silent draft')
    expect(download.mimeType).toBe('text/plain;charset=utf-8')
  })
})
