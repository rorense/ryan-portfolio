import { motion } from 'framer-motion'
import { skillGroups } from '../../data/skills'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function Skills() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="skills" className="px-4 py-14 md:px-6 md:py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl border-t border-slate-200 pt-8 md:pt-12"
      >
        <p className="text-sm uppercase tracking-[0.18em] text-blue-600">Skills</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">Skills</h2>
        <div className="mt-6 grid gap-4 md:mt-8 md:gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-lg border border-slate-200 bg-white p-4 md:p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-800">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
