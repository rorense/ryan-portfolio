import { motion } from 'framer-motion'
import { experience } from '../../data/experience'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const monthIndex: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
}

function parseMonthYear(value: string) {
  const [month, year] = value.trim().split(' ')
  const monthValue = monthIndex[month]
  const yearValue = Number(year)

  if (monthValue === undefined || Number.isNaN(yearValue)) {
    return null
  }

  return { month: monthValue, year: yearValue }
}

function formatDuration(period: string) {
  const [startRaw, endRaw] = period.split(' - ').map((part) => part.trim())
  const start = parseMonthYear(startRaw)
  if (!start) {
    return ''
  }

  const end =
    endRaw === 'Present'
      ? { month: new Date().getMonth(), year: new Date().getFullYear() }
      : parseMonthYear(endRaw)

  if (!end) {
    return ''
  }

  const totalMonths = (end.year - start.year) * 12 + (end.month - start.month) + 1
  if (totalMonths <= 0) {
    return ''
  }

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (years > 0 && months > 0) {
    return `${years} yr${years === 1 ? '' : 's'} ${months} mo${months === 1 ? '' : 's'}`
  }
  if (years > 0) {
    return `${years} yr${years === 1 ? '' : 's'}`
  }
  return `${months} mo${months === 1 ? '' : 's'}`
}

export function Experience() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="experience" className="px-4 py-14 md:px-6 md:py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-5xl border-t border-slate-200 pt-8 md:pt-12"
      >
        <p className="text-sm uppercase tracking-[0.18em] text-blue-600">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">Experience</h2>
        <div className="mt-8 border-l border-slate-300 pl-4 md:mt-10 md:pl-6">
          {experience.map((entry) => {
            const duration = formatDuration(entry.period)

            return (
              <article key={`${entry.company}-${entry.period}`} className="relative mb-8 rounded-lg border border-slate-200 bg-white p-4 last:mb-0 md:mb-10 md:p-5">
                <span className="absolute -left-[22px] top-5 h-3 w-3 rounded-full bg-blue-500 md:-left-[30px] md:top-6" />
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">{entry.role}</h3>
                  {entry.current && (
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      Present
                    </span>
                  )}
                </div>
                <p className="mt-2 text-slate-700">
                  {entry.companyUrl ? (
                    <a href={entry.companyUrl} target="_blank" rel="noreferrer" className="hover:text-sky-700">
                      {entry.company}
                      {entry.emoji ? ` ${entry.emoji}` : ''}
                    </a>
                  ) : (
                    entry.company
                  )}{' '}
                  · {entry.period}
                  {duration ? ` (${duration})` : ''}
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
