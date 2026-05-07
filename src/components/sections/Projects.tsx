import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function Projects() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="projects" className="px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl border-t border-sky-100 pt-12"
      >
        <p className="text-sm uppercase tracking-[0.18em] text-sky-600">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">Selected work</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Not mock projects. These are production builds with real users and measurable outcomes.
        </p>
        <div className="mt-10 grid gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-sm border bg-white/85 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                project.featured
                  ? 'border-sky-400/80 shadow-[0_0_0_1px_rgba(14,165,233,0.25)]'
                  : 'border-sky-100'
              }`}
            >
              <div className="border-b border-sky-100 bg-gradient-to-r from-sky-50 to-amber-50 px-6 py-4">
                <p className="text-xs uppercase tracking-[0.14em] text-sky-700">{project.category}</p>
                <p className="mt-2 max-w-xl text-2xl font-semibold leading-tight text-slate-900">{project.outcome}</p>
              </div>
              <div className="p-6 md:grid md:grid-cols-[1fr_auto] md:gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-slate-700">{project.description}</p>
                  <p className="mt-4 text-sm text-slate-500">
                    <span className="text-slate-700">Stack:</span> {project.stack.join(' · ')}
                  </p>
                </div>
                <div className="mt-5 flex gap-4 text-sm md:col-span-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sky-700 hover:text-sky-800">
                      Live site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
