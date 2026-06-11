import Link from 'next/link'
import { getFeaturedStories, getAllStories } from '@/lib/stories'
import StoryCard from '@/components/story/StoryCard'
import { formatDate } from '@/lib/utils'

export default async function HomePage() {
  const [featured, latest] = await Promise.all([
    getFeaturedStories(),
    getAllStories(),
  ])
  const latestStories = latest.slice(0, 6)

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Decorative ink wash background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ivory via-parchment/60 to-ivory dark:from-ink dark:via-ink-soft/80 dark:to-ink" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 dark:opacity-10"
          style={{ background: 'radial-gradient(circle at 70% 30%, #C9A96E 0%, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6 animate-fade-in">Storyteller & Ghostwriter</p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-ink dark:text-ivory animate-fade-up">
              Stories that{' '}
              <span className="italic text-gold">breathe.</span>
              <br />
              Words that{' '}
              <span className="italic text-gold">linger.</span>
            </h1>

            <p className="mt-6 text-lg text-slate leading-relaxed font-body max-w-lg animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Seraphine Aishat writes at the intersection of love, identity, and the African everyday —
              crafting narratives that make you feel seen, then thinking about them long after you've closed the page.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-ivory text-ivory dark:text-ink font-ui font-medium text-sm rounded-sm hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-white transition-all duration-300"
              >
                Read the Stories
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-parchment dark:border-white/20 text-ink dark:text-ivory font-ui font-medium text-sm rounded-sm hover:border-gold/60 hover:text-gold transition-all duration-300"
              >
                About Seraphine
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative vertical text */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <p className="font-display text-xs tracking-[0.4em] text-gold/30 uppercase" style={{ writingMode: 'vertical-rl' }}>
            Written in Accra · Felt Everywhere
          </p>
        </div>
      </section>

      {/* ── Ink rule ── */}
      <div className="ink-rule max-w-6xl mx-auto px-6">
        <span>✦</span>
      </div>

      {/* ── Featured Stories ── */}
      {featured.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="eyebrow mb-1">Editor's Picks</p>
              <h2 className="font-display text-3xl font-bold text-ink dark:text-ivory">Featured Stories</h2>
            </div>
            <Link href="/stories" className="hidden sm:flex items-center gap-1.5 text-sm font-ui text-slate hover:text-gold transition-colors">
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.slice(0, 3).map((story) => (
              <StoryCard key={story.slug} story={story} featured />
            ))}
          </div>
        </section>
      )}

      {/* ── Latest ── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <p className="eyebrow mb-1">Fresh Ink</p>
          <h2 className="font-display text-3xl font-bold text-ink dark:text-ivory">Latest Stories</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestStories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>

        {latest.length > 6 && (
          <div className="mt-12 text-center">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 px-8 py-3 border border-parchment dark:border-white/10 text-ink dark:text-ivory font-ui text-sm hover:border-gold/60 hover:text-gold transition-all duration-300 rounded-sm"
            >
              All {latest.length} Stories
            </Link>
          </div>
        )}
      </section>

      {/* ── About strip ── */}
      <section className="bg-parchment dark:bg-white/[0.03] border-y border-parchment dark:border-white/5 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
            <span className="font-display text-3xl font-bold text-gold">S</span>
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-ink dark:text-ivory mb-2">
              Seraphine Aishat
            </p>
            <p className="text-slate leading-relaxed font-body">
              Storyteller. Ghostwriter. Student of the human condition.
              Based in Accra, Ghana, writing stories that refuse to be forgotten.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 px-6 py-3 border border-gold/40 text-gold font-ui text-sm hover:bg-gold/10 transition-all duration-200 rounded-sm"
          >
            Read Full Bio
          </Link>
        </div>
      </section>
    </div>
  )
}
