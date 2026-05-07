import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function About() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="about" className="px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto grid max-w-5xl gap-10 border-t border-sky-100 pt-12 md:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-sky-600">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">From engineering sites to shipping software.</h2>
          <p className="mt-4 text-slate-700">
            I started on Auckland&apos;s Central Interceptor as a mechanical engineer. On-site, I
            kept noticing the same thing: when operations had better software, everything moved
            faster.
          </p>
          <p className="mt-4 text-slate-700">
            That pushed me into web development. These days I build with React, Node.js, and cloud
            tools for teams that care about results, not vanity features.
          </p>
          <p className="mt-6 text-slate-600">
            When I&apos;m not coding, I&apos;m on a pickleball court or a Shorinji Kempo mat.
          </p>
        </div>
        <div className="grid gap-3 text-sm">
          {[
            '100+ clients delivered',
            'AWS Certified Cloud Practitioner (2025)',
            'Postgraduate Certificate in IT, University of Auckland',
            'B.E. (Hons) Mechanical Engineering, University of Auckland',
            'Based in Auckland, NZ',
          ].map((item) => (
            <div key={item} className="rounded-md border border-sky-100 bg-white/80 px-4 py-3 text-slate-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
