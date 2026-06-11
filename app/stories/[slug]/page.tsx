import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllStories, getStoryBySlug } from '@/lib/stories'
import { formatDate } from '@/lib/utils'
import ReadingProgress from '@/components/story/ReadingProgress'
import AuthorBox from '@/components/story/AuthorBox'
import ShareButtons from '@/components/story/ShareButtons'
import Tag from '@/components/ui/Tag'
import Image from 'next/image'
import Link from 'next/link'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  const stories = await getAllStories()
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = await getStoryBySlug(params.slug)
  if (!story) return {}
  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      type: 'article',
      publishedTime: story.date,
      authors: [story.author.name],
      tags: story.tags,
      ...(story.coverImage && { images: [{ url: story.coverImage, width: 1200, height: 630 }] }),
    },
  }
}

export default async function StoryPage({ params }: Props) {
  const story = await getStoryBySlug(params.slug)
  if (!story) notFound()

  return (
    <>
      <ReadingProgress />

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-10">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {story.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-ivory leading-tight">
            {story.title}
          </h1>

          <p className="mt-4 text-xl text-slate font-body leading-relaxed italic">
            {story.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-6 flex items-center gap-4 text-sm text-slate font-ui border-t border-b border-parchment dark:border-white/5 py-4">
            <span className="font-medium text-ink dark:text-ivory">{story.author.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={story.date}>{formatDate(story.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{story.readingTime}</span>
          </div>
        </header>

        {/* Cover image */}
        {story.coverImage && (
          <div className="relative aspect-[16/9] mb-12 rounded-sm overflow-hidden">
            <Image
              src={story.coverImage}
              alt={story.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Body */}
        <div
          className="prose prose-lg dark:prose-invert article-body max-w-none"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />

        {/* Bottom section */}
        <div className="mt-16 space-y-8">
          {/* Ink rule */}
          <div className="ink-rule">
            <span>✦</span>
          </div>

          {/* Share */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <ShareButtons url={`/stories/${story.slug}`} title={story.title} />
            <Link
              href="/stories"
              className="text-sm font-ui text-slate hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to stories
            </Link>
          </div>

          {/* Author box */}
          <AuthorBox author={story.author} />

          {/* Future: Comments placeholder */}
          {/* <CommentsSection storySlug={story.slug} /> */}
        </div>
      </article>
    </>
  )
}
