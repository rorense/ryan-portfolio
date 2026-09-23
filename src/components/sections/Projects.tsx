import { projects } from '../../data/projects'
import type { Project } from '../../types'

const lead = projects.filter((project) => project.featured)
const more = projects.filter((project) => !project.featured)

// The intro counts the data, spelled out while that reads well; past twelve it falls back to digits.
const count =
  ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'][
    projects.length
  ] ?? projects.length

// Links look like links: ink text, a visible underline, and a hit area 44px tall.
const linkClass =
  'label inline-block py-[0.8125rem] text-ink underline decoration-ink-soft decoration-1 underline-offset-[7px] transition-colors duration-200 hover:text-vermilion hover:decoration-vermilion'

// Category keeps the label voice; the stack keeps each tool's own casing.
function Meta({ project }: { project: Project }) {
  return (
    <p className="font-sans text-[0.8125rem] leading-snug text-ink-soft">
      <span className="label">{project.category}</span> | {project.stack.join(', ')}
    </p>
  )
}

function Links({ project }: { project: Project }) {
  if (!project.liveUrl && !project.githubUrl) return null

  return (
    <div className="mt-2 flex flex-wrap gap-x-8">
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className={linkClass}>
          {project.liveUrl.includes('apps.apple.com') ? 'View on the App Store' : 'Visit the site'}
          <span className="sr-only">: {project.title}</span>
        </a>
      )}
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className={linkClass}>
          Read the source
          <span className="sr-only">: {project.title}</span>
        </a>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="wrap scroll-mt-20 border-t border-rule py-14 md:py-20">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="section-title">Things I’ve shipped.</h2>
        </div>

        <div className="md:col-span-9">
          <p className="max-w-measure text-lg leading-[1.6] text-ink-mid">
            {count} projects, a mix of client work and my own. A couple of mine exist because I’d
            rather build an app than pay for one.
          </p>
        </div>
      </div>

      {/* Lead plates run the full measure. The image always sits left, so every title starts on one line. */}
      <div className="mt-10 md:mt-12">
        {lead.map((project, index) => {
          const href = project.liveUrl ?? project.githubUrl

          return (
            <article
              key={project.title}
              className="group grid gap-x-10 gap-y-6 border-t border-rule py-10 last:border-b md:grid-cols-2 md:py-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
            >
              {/* The image repeats the title link for pointer users; keyboard and screen readers use the title. */}
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="block self-start overflow-hidden bg-paper-deep"
              >
                <img
                  src={project.heroImage}
                  alt=""
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-settle group-hover:scale-[1.018]"
                />
              </a>

              <div>
                <h3 className="font-serif text-[clamp(2rem,4.5vw,3rem)] font-normal leading-[1.05] tracking-[-0.025em] text-ink">
                  <a href={href} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                {/* Register mark: a hairline that wipes in under the title on hover or keyboard focus. */}
                <div className="mt-2 h-px w-full origin-left scale-x-0 bg-vermilion transition-transform duration-500 ease-settle group-focus-within:scale-x-100 group-hover:scale-x-100" />

                <div className="mt-3">
                  <Meta project={project} />
                </div>

                <p className="mt-5 max-w-measure font-serif text-xl italic leading-snug text-ink md:text-[1.375rem]">
                  {project.outcome}
                </p>

                <p className="mt-4 max-w-measure leading-[1.6] text-ink-mid">{project.description}</p>

                <Links project={project} />
              </div>
            </article>
          )
        })}
      </div>

      {/* Everything else is an index: the same facts without a plate, so the lead work sets the pace. */}
      <div className="mt-14 grid gap-x-10 gap-y-6 md:mt-16 md:grid-cols-12">
        <div className="md:col-span-3">
          <h3 className="font-serif text-xl font-normal leading-[1.15] text-ink md:text-2xl">
            Also in the shed.
          </h3>
        </div>

        <ul className="md:col-span-9">
          {more.map((project) => (
            <li
              key={project.title}
              className="grid gap-x-10 gap-y-3 border-t border-rule py-6 last:border-b lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
            >
              <div>
                <h4 className="font-serif text-2xl font-normal leading-tight tracking-[-0.015em] text-ink">
                  {project.title}
                </h4>
                <div className="mt-2">
                  <Meta project={project} />
                </div>
              </div>

              <div>
                <p className="max-w-measure font-serif text-lg italic leading-snug text-ink">
                  {project.outcome}
                </p>
                <p className="mt-2 max-w-measure text-[0.9375rem] leading-[1.6] text-ink-mid">
                  {project.description}
                </p>
                <Links project={project} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
