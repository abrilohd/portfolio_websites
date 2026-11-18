import { useState, useCallback } from 'react'

export function useCopyToClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(
    async (text) => {
      if (!navigator?.clipboard) {
        // Fallback for older browsers
        try {
          const textarea = document.createElement('textarea')
          textarea.value = text
          textarea.style.position = 'fixed'
          textarea.style.opacity = '0'
          document.body.appendChild(textarea)
          textarea.select()
          document.execCommand('copy')
          document.body.removeChild(textarea)
          setCopied(true)
          setTimeout(() => setCopied(false), resetDelay)
          return true
        } catch (err) {
          console.error('Failed to copy text: ', err)
          return false
        }
      }

      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), resetDelay)
        return true
      } catch (err) {
        console.error('Failed to copy text: ', err)
        return false
      }
    },
    [resetDelay]
  )

  return { copied, copy }
}

export default useCopyToClipboard

