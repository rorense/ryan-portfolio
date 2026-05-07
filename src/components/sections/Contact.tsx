export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl border-t border-slate-200 pt-12">
        <p className="text-sm uppercase tracking-[0.18em] text-blue-600">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">Contact</h2>
        <p className="mt-3 text-slate-700">
          If you are hiring or have a project in mind, feel free to reach out.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a
            href="mailto:rkorense@gmail.com"
            className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Email</p>
            <p className="mt-2 text-sm text-slate-900">rkorense@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-orense/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">LinkedIn</p>
            <p className="mt-2 text-sm text-slate-900">linkedin.com/in/ryan-orense</p>
          </a>
          <a
            href="https://github.com/rorense"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">GitHub</p>
            <p className="mt-2 text-sm text-slate-900">github.com/rorense</p>
          </a>
        </div>
      </div>
    </section>
  )
}
