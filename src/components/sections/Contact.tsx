export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl border-t border-slate-800 pt-12">
        <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Say hello</h2>
        <p className="mt-3 text-slate-200">
          If you are hiring or need a reliable engineer on a project, reach out directly.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a
            href="mailto:rkorense@gmail.com"
            className="rounded-md border border-slate-600 bg-slate-900/70 p-4 transition hover:border-cyan-200"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Email</p>
            <p className="mt-2 text-sm text-white">rkorense@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-orense/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-600 bg-slate-900/70 p-4 transition hover:border-cyan-200"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">LinkedIn</p>
            <p className="mt-2 text-sm text-white">linkedin.com/in/ryan-orense</p>
          </a>
          <a
            href="https://github.com/rorense"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-600 bg-slate-900/70 p-4 transition hover:border-cyan-200"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">GitHub</p>
            <p className="mt-2 text-sm text-white">github.com/rorense</p>
          </a>
        </div>
      </div>
    </section>
  )
}
