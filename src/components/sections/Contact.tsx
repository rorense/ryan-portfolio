const channels = [
  { label: 'Email', value: 'rkorense@gmail.com', href: 'mailto:rkorense@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ryan-orense',
    href: 'https://www.linkedin.com/in/ryan-orense/',
  },
  { label: 'GitHub', value: 'github.com/rorense', href: 'https://github.com/rorense' },
]

export function Contact() {
  return (
    <section id="contact" className="wrap scroll-mt-20 border-t border-rule py-14 md:py-20">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="section-title">Say hello.</h2>
        </div>

        <div className="md:col-span-9">
          <p className="max-w-measure text-lg leading-[1.6] text-ink-mid">
            Hiring, or have something that needs building? Email is the quickest way to reach me.
            I read them all, including the ones from recruiters.
          </p>

          <ul className="mt-10 md:mt-12">
            {channels.map((channel) => (
              <li key={channel.label} className="border-t border-rule last:border-b">
                <a
                  href={channel.href}
                  {...(channel.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                  className="group flex flex-wrap items-baseline gap-x-8 gap-y-1 py-5 transition-colors duration-200 hover:text-vermilion focus-visible:text-vermilion md:gap-x-10 md:py-6"
                >
                  <span className="label w-24 transition-colors duration-200 group-hover:text-vermilion group-focus-visible:text-vermilion">
                    {channel.label}
                  </span>
                  <span className="font-serif text-xl tracking-[-0.01em] md:text-2xl">
                    {channel.value}
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-auto hidden translate-x-0 font-sans text-sm text-ink-soft transition-[transform,color] duration-300 ease-settle group-hover:translate-x-1.5 group-hover:text-vermilion group-focus-visible:translate-x-1.5 group-focus-visible:text-vermilion md:block"
                  >
                    &#8594;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
