import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-display text-8xl font-bold text-gold/20 select-none">404</p>
      <h2 className="font-display text-3xl font-bold text-ink dark:text-ivory mt-4">
        This page wandered off
      </h2>
      <p className="mt-3 text-slate font-body max-w-sm">
        Like a character who left the story too early. Whatever you were looking for isn't here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-parchment dark:border-white/10 text-ink dark:text-ivory font-ui text-sm hover:border-gold/60 hover:text-gold transition-all duration-300 rounded-sm"
      >
        Return home
      </Link>
    </div>
  )
}
