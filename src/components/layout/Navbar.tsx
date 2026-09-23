const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <nav className="wrap flex items-baseline justify-between py-3 md:py-4">
        <a
          href="#top"
          className="font-serif text-base tracking-[-0.01em] text-ink transition-colors duration-200 hover:text-vermilion md:text-lg"
        >
          Ryan Orense
        </a>

        <ul className="hidden items-baseline gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="label py-3 transition-colors duration-200 hover:text-vermilion"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile keeps only the one link that matters; the page is a single scroll. */}
        <a href="#contact" className="label -my-3 py-3 transition-colors duration-200 hover:text-vermilion md:hidden">
          Contact
        </a>
      </nav>
    </header>
  )
}
