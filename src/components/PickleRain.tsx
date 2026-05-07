import { motion } from 'framer-motion'

const pickles = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 0.8,
  duration: 1.5 + Math.random() * 0.6,
}))

export function PickleRain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {pickles.map((pickle) => (
        <motion.span
          key={pickle.id}
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: '110vh', opacity: 1 }}
          transition={{
            duration: pickle.duration,
            delay: pickle.delay,
            ease: 'linear',
          }}
          style={{ left: pickle.left }}
          className="absolute text-2xl"
        >
          🥒
        </motion.span>
      ))}
    </div>
  )
}
