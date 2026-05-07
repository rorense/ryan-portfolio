export function Footer() {
  return (
    <footer className="border-t border-sky-100 px-6 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col justify-between gap-2 text-sm text-slate-600 md:flex-row">
        <p>Built with React, TypeScript, and Tailwind.</p>
        <p>© {new Date().getFullYear()} Ryan Orense</p>
      </div>
      {/* 🥒 */}
    </footer>
  )
}
