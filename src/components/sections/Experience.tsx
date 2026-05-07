import { motion } from 'framer-motion'
import { experience } from '../../data/experience'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function Experience() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="experience" className="px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl border-t border-slate-200 pt-12"
      >
        <p className="text-sm uppercase tracking-[0.18em] text-blue-600">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">Experience</h2>
        <div className="mt-10 border-l border-slate-300 pl-6">
          {experience.map((entry) => (
            <article key={`${entry.company}-${entry.period}`} className="relative mb-10 rounded-lg border border-slate-200 bg-white p-5 last:mb-0">
              <span className="absolute -left-[30px] top-6 h-3 w-3 rounded-full bg-blue-500" />
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{entry.role}</h3>
                {entry.current && (
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    Present
                  </span>
                )}
              </div>
              <p className="mt-2 text-slate-700">
                {entry.companyUrl ? (
                  <a href={entry.companyUrl} target="_blank" rel="noreferrer" className="hover:text-sky-700">
                    {entry.company}
                    {entry.emoji ? ` ${entry.emoji}` : ''}
                  </a>
                ) : (
                  entry.company
                )}{' '}
                · {entry.period}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
