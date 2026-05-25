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
import { useEffect, useState } from 'react'

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
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 will-change-opacity transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {pickleMode && <PickleRain />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
