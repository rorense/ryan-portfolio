import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="px-6 pb-16 pt-24 md:pt-28">
      <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[1.25fr_0.75fr]">
        <div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-blue-600"
        >
          Software Engineer from Auckland
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl"
        >
          I build websites and apps that people actually use.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-6 max-w-2xl text-lg text-slate-800"
        >
          I started in mechanical engineering, moved into software, and now build full stack
          products that are practical, fast, and reliable.
        </motion.p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
          >
            Get in touch
          </a>
        </div>
        </div>
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-lg border border-slate-200 bg-white p-5"
        >
          <p className="text-sm leading-relaxed text-slate-700">
            <span className="font-semibold text-slate-900">Quick context:</span> 100+ client
            projects, a Shopify store doing $600k+ yearly orders, and AWS Certified Cloud
            Practitioner (2025).
          </p>
        </motion.aside>
      </div>
    </section>
  )
}
