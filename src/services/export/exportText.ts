export function buildTextDownload(content: string) {
  return {
    filename: `flowspace-${new Date().toISOString().slice(0, 10)}.txt`,
    content,
    mimeType: 'text/plain;charset=utf-8'
  }
}
