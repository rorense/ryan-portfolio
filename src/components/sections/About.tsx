const credentials = [
  { award: 'B.E. (Hons) Mechanical Engineering', detail: 'University of Auckland · 2020' },
  { award: 'Postgraduate Certificate in IT', detail: 'University of Auckland · 2022' },
  { award: 'AWS Certified Cloud Practitioner', detail: '2025' },
]

export function About() {
  return (
    <section id="about" className="wrap scroll-mt-20 border-t border-rule py-14 md:py-20">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="section-title">Less mud, more merge conflicts.</h2>
        </div>

        <div className="md:col-span-9">
          <div className="max-w-measure space-y-5 text-lg leading-[1.65] text-ink-mid">
            <p>
              These days I’m at Gherkin Media, where most of my work is WordPress and Shopify, plus
              REST APIs. A lot of it is unglamorous and load-bearing, like migrations, performance
              work and the integration nobody else wants to touch. I’m oddly fond of that stuff. For
              my own projects I reach for React, Next.js and React Native.
            </p>
            <p>
              The job has plenty of AI in it too, mostly automating redundant, repetitive tasks. I
              built the in-house AI brain the team now runs on, and if something is boring and keeps
              coming back, it’s next on my list.
            </p>
            <p>
              I also mentor our interns. Not long ago I was the career-changer asking all the
              obvious questions, so I try to give them the patient, honest code reviews I wanted
              back then.
            </p>
            <p className="text-ink-soft">
              Outside work I’m usually hunting down Auckland’s best flat white or playing
              pickleball. Add a job at Gherkin Media and the pickle theme gets a bit out of hand.
            </p>
          </div>

          <dl className="mt-10 max-w-measure md:mt-12">
            {credentials.map((item) => (
              <div
                key={item.award}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-rule-soft py-3 last:border-b"
              >
                <dt className="text-[0.9375rem] text-ink">{item.award}</dt>
                <dd className="label tabular-nums">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
