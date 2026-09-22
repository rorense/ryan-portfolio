import { projects } from '../../data/projects'

export function Projects() {
  return (
    <section id="projects" className="wrap scroll-mt-20 border-t border-rule py-14 md:py-20">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="section-title">Selected work.</h2>
        </div>

        <div className="md:col-span-9">
          <p className="max-w-measure text-lg leading-[1.6] text-ink-mid">
            Five projects, from a Shopify storefront turning over $600k a year to a recipe app I
            built because I didn’t want to pay for one.
          </p>
        </div>
      </div>

      {/* The plates run the full measure of the page: image and text abreast, not stacked. */}
      <div className="mt-10 md:mt-12">
        {projects.map((project, index) => {
          const href = project.liveUrl ?? project.githubUrl

          return (
            <article
              key={project.title}
              className="group grid items-center gap-x-10 gap-y-6 border-t border-rule py-8 last:border-b md:grid-cols-2 md:py-10"
            >
              {/* Odd plates cross to the right, so the eye zigzags down the page. */}
              <div
                className={`overflow-hidden bg-paper-deep ${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <img
                  src={project.heroImage}
                  alt={`Screenshot of ${project.title}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-settle group-hover:scale-[1.018]"
                />
              </div>

              <div>
                {/* Run-in meta, set as a line: category and stack read as one breath. */}
                <p className="label">
                  {project.category} | {project.stack.join(', ')}
                </p>

                <h3
                  className={`mt-3 font-serif font-normal leading-[1.05] tracking-[-0.025em] text-ink ${
                    project.featured
                      ? 'text-[clamp(2rem,4.5vw,3rem)]'
                      : 'text-[clamp(1.75rem,3.5vw,2.375rem)]'
                  }`}
                >
                  {project.title}
                </h3>
                {/* Register mark: a hairline that wipes in under the title on hover. */}
                <div className="mt-2 h-px w-full origin-left scale-x-0 bg-vermilion transition-transform duration-500 ease-settle group-hover:scale-x-100" />

                <p className="mt-4 max-w-measure font-serif text-xl italic leading-snug text-ink md:text-[1.375rem]">
                  {project.outcome}
                </p>

                <p className="mt-4 max-w-measure leading-[1.6] text-ink-mid">
                  {project.description}
                </p>

                {href && (
                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="label underline decoration-rule decoration-1 underline-offset-[7px] transition-colors duration-200 hover:text-vermilion hover:decoration-vermilion"
                      >
                        Visit the site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="label underline decoration-rule decoration-1 underline-offset-[7px] transition-colors duration-200 hover:text-vermilion hover:decoration-vermilion"
                      >
                        Read the source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

