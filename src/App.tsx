import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { PickleRain } from './components/PickleRain'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { usePickleEgg } from './hooks/usePickleEgg'

function App() {
  const pickleMode = usePickleEgg()

  return (
    <div className="min-h-screen bg-paper text-ink">
      {pickleMode && <PickleRain />}
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
