import { useEffect, useState } from 'react'

const SECRET = 'pickle'

export function usePickleEgg() {
  const [typed, setTyped] = useState('')
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.length !== 1) {
        return
      }

      const next = `${typed}${event.key.toLowerCase()}`.slice(-SECRET.length)
      setTyped(next)

      if (next === SECRET) {
        setActive(true)
        window.setTimeout(() => setActive(false), 2500)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [typed])

  return active
}
