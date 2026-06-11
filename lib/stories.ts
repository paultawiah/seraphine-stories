import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import readingTime from 'reading-time'
import { Story, StoryMeta } from './types'

const STORIES_DIR = path.join(process.cwd(), 'content/stories')

const DEFAULT_AUTHOR = {
  name: 'Seraphine Aishat',
  bio: 'Seraphine Aishat is a storyteller and ghostwriter based in Accra, Ghana.',
  avatar: '/images/seraphine-avatar.jpg',
}

async function parseMarkdown(content: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content)
  return result.toString()
}

export async function getStoryBySlug(slug: string): Promise<Story | null> {
  try {
    const fullPath = path.join(STORIES_DIR, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const htmlContent = await parseMarkdown(content)
    const stats = readingTime(content)
    return {
      slug,
      title: data.title ?? 'Untitled',
      excerpt: data.excerpt ?? '',
      date: data.date ?? new Date().toISOString(),
      coverImage: data.coverImage,
      tags: data.tags ?? [],
      readingTime: stats.text,
      featured: data.featured ?? false,
      author: DEFAULT_AUTHOR,
      content: htmlContent,
    }
  } catch {
    return null
  }
}

export async function getAllStories(): Promise<StoryMeta[]> {
  if (!fs.existsSync(STORIES_DIR)) return []
  const filenames = fs.readdirSync(STORIES_DIR).filter((f) => f.endsWith('.md'))
  const stories = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(STORIES_DIR, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)
      return {
        slug,
        title: data.title ?? 'Untitled',
        excerpt: data.excerpt ?? '',
        date: data.date ?? new Date().toISOString(),
        coverImage: data.coverImage,
        tags: data.tags ?? [],
        readingTime: stats.text,
        featured: data.featured ?? false,
        author: DEFAULT_AUTHOR,
      } satisfies StoryMeta
    })
  )
  return stories.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getFeaturedStories(): Promise<StoryMeta[]> {
  const all = await getAllStories()
  const featured = all.filter((s) => s.featured)
  return featured.length > 0 ? featured : all.slice(0, 3)
}

export async function getStoriesByTag(tag: string): Promise<StoryMeta[]> {
  const all = await getAllStories()
  return all.filter((s) => s.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()))
}

export async function getAllTags(): Promise<string[]> {
  const all = await getAllStories()
  const tags = new Set(all.flatMap((s) => s.tags))
  return Array.from(tags).sort()
}
