import { MotionConfig } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { PickleRain } from './components/PickleRain'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { usePickleEgg } from './hooks/usePickleEgg'

function App() {
  const pickleMode = usePickleEgg()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsLoaded(true)
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div
        className={`min-h-screen bg-paper text-ink transition-opacity duration-500 ease-settle ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {pickleMode && <PickleRain />}
        <Navbar />
        <main id="top">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App

