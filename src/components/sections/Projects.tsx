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
        className="mx-auto max-w-5xl border-t border-slate-200 pt-12"
      >
        <p className="text-sm uppercase tracking-[0.18em] text-blue-600">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">Projects</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Real projects built for real users.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-lg border bg-white transition hover:border-slate-300 ${
                project.featured
                  ? 'border-blue-300'
                  : 'border-slate-200'
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-slate-200 bg-slate-100">
                <img
                  src={project.heroImage}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                  {project.category}
                </p>
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
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="font-semibold text-sky-700 hover:text-sky-900">
                      Live site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="font-semibold text-slate-600 hover:text-slate-900">
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
