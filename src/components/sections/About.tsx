const credentials = [
  { award: 'B.E. (Hons) Mechanical Engineering', detail: 'University of Auckland' },
  { award: 'Postgraduate Certificate in IT', detail: 'University of Auckland' },
  { award: 'AWS Certified Cloud Practitioner', detail: '2025' },
]

export function About() {
  return (
    <section id="about" className="wrap scroll-mt-20 border-t border-rule py-14 md:py-20">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="section-title">
            From engineering sites to shipping software.
          </h2>
        </div>

        <div className="md:col-span-9">
          <div className="max-w-measure space-y-5 text-lg leading-[1.65] text-ink-mid">
            <p>
              These days I build with React, Node and cloud tooling at Gherkin Media: client web
              apps, REST APIs, WordPress work, and the in-house AI brain the team now runs on. Most
              of what I ship is unglamorous and load-bearing. Migrations, performance work, the
              integration nobody wants to own.
            </p>
            <p>
              I also mentor the interns. Code reviews, pair programming, and the kind of structured
              feedback I wish I’d had when I switched careers.
            </p>
            <p className="text-ink-soft">
              When I’m not coding, I’m on a pickleball court or chasing a good flat white around
            Auckland.
            </p>
          </div>

          <dl className="mt-10 max-w-measure md:mt-12">
            {credentials.map((item) => (
              <div
                key={item.award}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-rule-soft py-3 last:border-b"
              >
                <dt className="text-[0.9375rem] text-ink">{item.award}</dt>
                <dd className="label">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
