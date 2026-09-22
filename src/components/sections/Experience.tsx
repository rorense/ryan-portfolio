import { experience } from '../../data/experience'

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
  return (
    <section id="experience" className="wrap scroll-mt-20 border-t border-rule py-14 md:py-20">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="section-title">Where I’ve worked.</h2>
        </div>

        <div className="md:col-span-9">
          {experience.map((entry) => {
            const duration = formatDuration(entry.period)

            return (
              <article
                key={`${entry.company}-${entry.period}`}
                className="grid gap-x-10 gap-y-4 border-t border-rule py-8 last:border-b md:grid-cols-[9rem_1fr] md:py-10"
              >
                <div className="md:pt-2">
                  <p className="label tabular-nums">{entry.period.replace(' - ', ' – ')}</p>
                  {duration && (
                    <p className="mt-1 text-sm tabular-nums text-ink-soft">{duration}</p>
                  )}
                  {entry.current && (
                    <p className="label mt-3 text-vermilion">Current</p>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-normal leading-tight tracking-[-0.015em] text-ink md:text-[1.75rem]">
                    {entry.role}
                  </h3>
                  <p className="mt-1.5 text-ink-soft">
                    {entry.companyUrl ? (
                      <a
                        href={entry.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-200 hover:text-vermilion hover:decoration-vermilion"
                      >
                        {entry.company}
                      </a>
                    ) : (
                      entry.company
                    )}
                    {entry.emoji ? ` ${entry.emoji}` : ''}
                  </p>

                  <ul className="mt-5 max-w-measure space-y-2.5 text-ink-mid">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 leading-[1.6]">
                        <span aria-hidden="true" className="select-none text-ink-soft">
                          &#8212;
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
