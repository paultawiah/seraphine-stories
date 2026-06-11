'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { href: '/stories', label: 'Stories' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-ivory/90 dark:bg-ink/90 backdrop-blur-md border-b border-parchment/60 dark:border-white/5'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold text-ink dark:text-ivory hover:text-gold dark:hover:text-gold transition-colors"
        >
          Seraphine<span className="text-gold">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'font-ui text-sm font-medium transition-colors duration-200',
                pathname === href || pathname.startsWith(href + '/')
                  ? 'text-gold'
                  : 'text-slate hover:text-ink dark:text-slate dark:hover:text-ivory'
              )}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-slate hover:text-ink dark:hover:text-ivory transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1.5">
              <span className={cn('block h-px bg-current transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
              <span className={cn('block h-px bg-current transition-all duration-300', menuOpen && 'opacity-0')} />
              <span className={cn('block h-px bg-current transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-64 border-b border-parchment dark:border-white/5' : 'max-h-0'
        )}
      >
        <div className="bg-ivory dark:bg-ink px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                'font-ui text-sm font-medium py-1',
                pathname === href ? 'text-gold' : 'text-slate'
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
