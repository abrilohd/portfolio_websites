import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

import { ThemeProvider } from './context/ThemeContext'

import PageLoader     from './components/PageLoader'
import CustomCursor   from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop    from './components/ScrollToTop'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Skills         from './components/Skills'
import Projects       from './components/Projects'
import Certifications from './components/Certifications'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import AskAbrham      from './components/AskAbrham'

function AppInner() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf) }
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
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <AskAbrham />
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
