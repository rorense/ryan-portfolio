export function Footer() {
  return (
    <footer className="border-t border-rule py-10 md:py-12">
      <div className="wrap grid gap-6 md:grid-cols-12 md:gap-x-10">
        <p className="label md:col-span-3">Colophon</p>
        <div className="space-y-2 text-sm text-ink-mid md:col-span-9">
          <p>
            Set in Newsreader and Archivo. Built with React, TypeScript and Tailwind, and deployed
            from a single branch.
          </p>
          <p className="text-ink-soft">
            © {new Date().getFullYear()} Ryan Orense · Auckland, New Zealand
          </p>
        </div>
      </div>
      {/* 🥒 */}
    </footer>
  )
}
