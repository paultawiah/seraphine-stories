import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getStoriesByTag, getAllTags } from '@/lib/stories'
import StoryCard from '@/components/story/StoryCard'
import Link from 'next/link'

interface Props { params: { tag: string } }

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map((tag) => ({ tag: tag.toLowerCase().replace(/\s+/g, '-') }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag).replace(/-/g, ' ')
  return {
    title: `${tag.charAt(0).toUpperCase() + tag.slice(1)} Stories`,
    description: `Browse all stories filed under "${tag}" by Seraphine Aishat.`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const tag = decodeURIComponent(params.tag).replace(/-/g, ' ')
  const stories = await getStoriesByTag(tag)
  if (stories.length === 0) notFound()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <Link href="/categories" className="inline-flex items-center gap-1.5 text-sm font-ui text-slate hover:text-gold transition-colors mb-6">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          All categories
        </Link>
        <p className="eyebrow mb-2">Category</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-ivory capitalize">{tag}</h1>
        <p className="mt-2 text-slate font-ui">{stories.length} {stories.length === 1 ? 'story' : 'stories'}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
    </div>
  )
}
