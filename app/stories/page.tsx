import { Metadata } from 'next'
import { getAllStories, getAllTags } from '@/lib/stories'
import StoriesClient from './StoriesClient'

export const metadata: Metadata = {
  title: 'Stories',
  description: 'Browse all stories by Seraphine Aishat — romance, drama, fiction, and social commentary.',
}

export default async function StoriesPage() {
  const [stories, tags] = await Promise.all([getAllStories(), getAllTags()])

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="eyebrow mb-2">The Archive</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-ivory">
          All Stories
        </h1>
        <p className="mt-3 text-slate font-body text-lg max-w-lg">
          {stories.length} {stories.length === 1 ? 'story' : 'stories'}, each one a world worth entering.
        </p>
      </div>
      <StoriesClient stories={stories} tags={tags} />
    </div>
  )
}
