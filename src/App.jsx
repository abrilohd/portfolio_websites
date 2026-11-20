import { ThemeProvider } from './context/ThemeContext'

// Layout Components
import {
  PageLoader,
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
  return (
    <>
      <PageLoader />
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
