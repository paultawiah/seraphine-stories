import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-parchment dark:border-white/5 bg-ivory dark:bg-ink">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-2xl font-bold text-ink dark:text-ivory">
              Seraphine<span className="text-gold">.</span>
            </Link>
            <p className="mt-3 text-sm text-slate leading-relaxed font-ui max-w-xs">
              Stories that breathe. Words that linger. Voices that deserve to be heard.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/stories', 'All Stories'], ['/categories', 'Categories'], ['/about', 'About']].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate hover:text-gold dark:hover:text-gold font-ui transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter placeholder */}
          <div>
            <p className="eyebrow mb-4">Stay Connected</p>
            <p className="text-sm text-slate font-ui mb-3">
              Newsletter coming soon — be the first to receive new stories.
            </p>
            {/* Future: plug in ConvertKit / Mailchimp here */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                disabled
                className="flex-1 px-3 py-2 text-sm font-ui border border-parchment dark:border-white/10 bg-parchment/50 dark:bg-white/5 rounded text-slate placeholder:text-slate/50 cursor-not-allowed"
              />
              <button
                disabled
                className="px-4 py-2 text-sm font-ui bg-gold/20 text-gold rounded cursor-not-allowed"
              >
                Soon
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-parchment dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate font-ui">
            © {new Date().getFullYear()} Seraphine Aishat. All rights reserved.
          </p>
          <p className="text-xs text-slate/60 font-ui italic">
            Written in Accra, felt everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}
