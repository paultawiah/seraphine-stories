import Link from 'next/link'
import Image from 'next/image'
import { StoryMeta } from '@/lib/types'
import { formatDate } from '@/lib/utils'
import Tag from '@/components/ui/Tag'

interface StoryCardProps {
  story: StoryMeta
  featured?: boolean
}

export default function StoryCard({ story, featured = false }: StoryCardProps) {
  return (
    <article className="story-card group">
      <Link href={`/stories/${story.slug}`} className="block">
        {/* Cover image */}
        <div className={`relative overflow-hidden rounded-sm bg-parchment dark:bg-white/5 ${featured ? 'aspect-[16/9]' : 'aspect-[3/2]'}`}>
          {story.coverImage ? (
            <Image
              src={story.coverImage}
              alt={story.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-6xl text-gold/20 select-none">
                {story.title.charAt(0)}
              </span>
            </div>
          )}
          {/* Ink overlay on hover */}
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="mt-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {story.tags.slice(0, 2).map((tag) => (
              <Tag key={tag} tag={tag} linked={false} />
            ))}
          </div>

          <h3 className={`font-display font-bold text-ink dark:text-ivory group-hover:text-gold dark:group-hover:text-gold transition-colors leading-snug ${featured ? 'text-2xl' : 'text-xl'}`}>
            {story.title}
          </h3>

          <p className="mt-2 text-slate text-sm leading-relaxed line-clamp-2 font-body">
            {story.excerpt}
          </p>

          <div className="mt-3 flex items-center gap-3 text-xs text-slate font-ui">
            <time dateTime={story.date}>{formatDate(story.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{story.readingTime}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
