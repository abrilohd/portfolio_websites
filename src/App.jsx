import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

import { ThemeProvider } from './context/ThemeContext'

// Layout Components
import {
  PageLoader,
  CustomCursor,
  ScrollProgress,
  ScrollToTop,
  Navbar,
  Footer,
} from './components/layout'

// Section Components
import {
  Hero,
  About,
  Projects,
  Certifications,
  Contact,
} from './components/sections'

function AppInner() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
