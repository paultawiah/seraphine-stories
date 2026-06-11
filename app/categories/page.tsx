import { Metadata } from 'next'
import Link from 'next/link'
import { getAllTags, getStoriesByTag, getAllStories } from '@/lib/stories'

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Browse stories by theme: romance, drama, fiction, social issues, and more.',
}

const TAG_DESCRIPTIONS: Record<string, string> = {
  romance: 'Love in all its tender, complicated, breathtaking forms.',
  drama: 'Tension. Consequence. The moments that define us.',
  fiction: 'Worlds built from language, lives lived on the page.',
  'social issues': 'Stories that hold a mirror to society.',
  identity: 'Who we are, who we become, who we refuse to be.',
  faith: 'The sacred spaces between doubt and belief.',
}

export default async function CategoriesPage() {
  const tags = await getAllTags()
  const stories = await getAllStories()

  const tagsWithCount = tags.map((tag) => ({
    tag,
    count: stories.filter((s) => s.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())).length,
    description: TAG_DESCRIPTIONS[tag.toLowerCase()] ?? 'Stories filed under this theme.',
  }))

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="eyebrow mb-2">Browse by Theme</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-ivory">Categories</h1>
        <p className="mt-3 text-slate font-body text-lg">Find stories by the worlds they inhabit.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {tagsWithCount.map(({ tag, count, description }) => (
          <Link
            key={tag}
            href={`/categories/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`}
            className="group p-6 border border-parchment dark:border-white/5 rounded-sm hover:border-gold/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="font-display text-xl font-bold text-ink dark:text-ivory group-hover:text-gold transition-colors capitalize">
                {tag}
              </h2>
              <span className="text-xs font-ui text-slate mt-1 shrink-0">{count} {count === 1 ? 'story' : 'stories'}</span>
            </div>
            <p className="text-sm text-slate font-body leading-relaxed">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
