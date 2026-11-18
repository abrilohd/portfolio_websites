import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds, defaultSection = 'home', offsetRatio = 0.35) {
  const [activeSection, setActiveSection] = useState(defaultSection)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetRatio

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(id)
            return
          }
        }
      }
      setActiveSection(defaultSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, defaultSection, offsetRatio])

  return activeSection
}

export default useActiveSection

