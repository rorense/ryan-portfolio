import { skillGroups } from '../../data/skills'

export function Skills() {
  return (
    <section id="skills" className="wrap scroll-mt-20 border-t border-rule py-14 md:py-20">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="section-title">What I build with.</h2>
        </div>

        <dl className="md:col-span-9">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-x-10 gap-y-2 border-t border-rule-soft py-5 last:border-b md:grid-cols-[9rem_1fr]"
            >
              <dt className="label md:pt-1.5">{group.label}</dt>
              {/* Run-in list, set as a sentence. Tags in boxes are a grid pretending to be content. */}
              <dd className="text-lg leading-[1.55] text-ink-mid">{group.skills.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
