const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-wide text-slate-900">
          Ryan Orense
        </a>
        <ul className="hidden gap-6 text-sm text-slate-700 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-sky-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
