'use client'

import { useState, useMemo } from 'react'
import StoryCard from '@/components/story/StoryCard'
import Tag from '@/components/ui/Tag'
import { StoryMeta } from '@/lib/types'

interface StoriesClientProps {
  stories: StoryMeta[]
  tags: string[]
}

export default function StoriesClient({ stories, tags }: StoriesClientProps) {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return stories.filter((s) => {
      const matchSearch = !search ||
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.excerpt.toLowerCase().includes(search.toLowerCase())
      const matchTag = !activeTag ||
        s.tags.map((t) => t.toLowerCase()).includes(activeTag.toLowerCase())
      return matchSearch && matchTag
    })
  }, [stories, search, activeTag])

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8">
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          type="search"
          placeholder="Search stories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 font-ui text-sm bg-parchment/50 dark:bg-white/5 border border-parchment dark:border-white/10 rounded-sm text-ink dark:text-ivory placeholder:text-slate focus:outline-none focus:border-gold/60 transition-colors"
        />
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1 rounded-full text-xs font-ui font-medium tracking-wide uppercase border transition-all duration-200 ${
            !activeTag
              ? 'bg-gold/15 border-gold/60 text-gold'
              : 'border-parchment dark:border-white/10 text-slate hover:border-gold/40 hover:text-gold'
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-3 py-1 rounded-full text-xs font-ui font-medium tracking-wide uppercase border transition-all duration-200 ${
              activeTag === tag
                ? 'bg-gold/15 border-gold/60 text-gold'
                : 'border-parchment dark:border-white/10 text-slate hover:border-gold/40 hover:text-gold'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <p className="font-display text-4xl text-gold/30 mb-3">✦</p>
          <p className="font-display text-xl text-slate">No stories found</p>
          <p className="text-sm text-slate/60 font-ui mt-1">Try a different search or tag</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      )}
    </div>
  )
}
