// Core types — designed to be CMS-agnostic
// When switching to Sanity, replace the data layer in lib/stories.ts
// but keep these types as the contract for all components.

export interface Author {
  name: string
  bio: string
  avatar?: string
  // Future: social links, multi-author support
  // social?: { twitter?: string; instagram?: string }
}

export interface Story {
  slug: string
  title: string
  excerpt: string
  date: string
  coverImage?: string
  tags: string[]
  readingTime: string
  author: Author
  content: string // HTML string (from markdown) or MDX
  featured?: boolean
}

export interface StoryMeta extends Omit<Story, 'content'> {}

// Future: User type (Supabase-ready)
// export interface User {
//   id: string
//   email: string
//   displayName?: string
//   role: 'reader' | 'writer' | 'admin'
// }

// Future: Comment type
// export interface Comment {
//   id: string
//   storySlug: string
//   authorId: string
//   body: string
//   createdAt: string
// }
