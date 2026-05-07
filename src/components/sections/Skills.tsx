import { motion } from 'framer-motion'
import { skillGroups } from '../../data/skills'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function Skills() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="skills" className="px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl border-t border-sky-100 pt-12"
      >
        <p className="text-sm uppercase tracking-[0.18em] text-sky-600">Skills</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">Stack I work with</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-md border border-sky-100 bg-white/85 p-5 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-800">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-slate-700">
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
