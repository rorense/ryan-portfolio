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
        <span
          key={pickle.id}
          style={{
            left: pickle.left,
            animation: `pickle-fall ${pickle.duration}s linear ${pickle.delay}s both`,
          }}
          className="absolute text-2xl"
        >
          🥒
        </span>
      ))}
    </div>
  )
}
