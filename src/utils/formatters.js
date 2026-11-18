/**
 * Formats a date string into human-readable format (e.g. "March 2024")
 */
export function formatDate(dateString) {
  if (!dateString) return ''
  return dateString
}

/**
 * Truncates text cleanly at word boundaries
 */
export function truncate(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text
  const trimmed = text.substr(0, maxLength)
  return trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(' '))) + '…'
}

/**
 * Normalizes external links to ensure protocol
 */
export function normalizeUrl(url) {
  if (!url || url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:')) {
    return url
  }
  return `https://${url}`
}

