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
          className="mb-6 text-sm uppercase tracking-[0.22em] text-sky-600"
        >
          Software Engineer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-6xl"
        >
          I build websites and apps that hold up in the real world.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-6 max-w-2xl text-lg text-slate-700"
        >
          I went from mechanical engineering to software, and I still bring that same systems
          thinking into every build: practical, fast, and stable.
        </motion.p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md border border-sky-500 bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            View work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Say hello
          </a>
        </div>
        </div>
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="border-l-2 border-sky-400 pl-5"
        >
          <p className="text-sm leading-relaxed text-slate-700">
            <span className="font-semibold text-slate-900">Quick context:</span> 100+ client builds,
            a Shopify store doing $600k+ yearly orders, and AWS Certified Cloud Practitioner
            (2025).
          </p>
        </motion.aside>
      </div>
    </section>
  )
}
