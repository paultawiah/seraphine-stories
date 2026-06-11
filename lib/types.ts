export interface Author {
  name: string
  bio: string
  avatar?: string
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
  content: string
  featured?: boolean
}

export interface StoryMeta extends Omit<Story, 'content'> {}
