// Authored as three lines, not wrapped into three, so the breaks fall where they were set.
const headline = ['Software', 'engineer,', 'ex-mechanical.']

const masthead = [
  { label: 'Based', value: 'Auckland, New Zealand' },
  { label: 'Now', value: 'Full stack developer, Gherkin Media' },
  { label: 'Maintained', value: '600+ client websites' },
  { label: 'Commerce', value: '$1 million+ yearly Shopify orders' },
  { label: 'Certified', value: 'AWS Cloud Practitioner, 2025' },
]

export function Hero() {
  return (
    <section className="wrap pb-16 pt-14 md:pb-28 md:pt-24">
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="font-serif text-[clamp(2.5rem,9.5vw,6rem)] font-normal leading-[0.95] tracking-[-0.035em] text-ink">
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="rule-draw mt-7 h-px bg-ink md:mt-9" />

          <p className="mt-7 max-w-measure text-lg leading-[1.6] text-ink-mid md:text-xl">
            I started on Auckland’s Central Interceptor, looking after plant and equipment. What I
            kept noticing was simpler than the tunnel: when operations had better software,
            everything moved faster. So I learned to build it. Now I ship full stack products for
            teams that need software to work properly, day to day.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-11">
            <a
              href="#projects"
              className="bg-ink px-7 py-3.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.13em] text-paper transition-colors duration-200 hover:bg-vermilion"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="label py-3.5 text-ink underline decoration-ink-soft decoration-1 underline-offset-[7px] transition-colors duration-200 hover:text-vermilion hover:decoration-vermilion"
            >
              Get in touch
            </a>
          </div>
        </div>

        <dl className="self-end md:col-span-4 md:col-start-9">
          {masthead.map((item) => (
            <div key={item.label} className="border-t border-rule py-3 last:border-b">
              <dt className="label">{item.label}</dt>
              <dd className="mt-1 text-[0.9375rem] leading-snug text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
