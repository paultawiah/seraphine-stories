import { clsx, type ClassValue } from 'clsx'
import { format, parseISO } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(dateStr: string): string {
  try {
    return format(parseISO(dateStr), 'MMMM d, yyyy')
  } catch {
    return dateStr
  }
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim()
}

const TAG_COLORS: Record<string, string> = {
  romance: 'text-rose-600 border-rose-300 dark:text-rose-400 dark:border-rose-700',
  drama: 'text-violet-600 border-violet-300 dark:text-violet-400 dark:border-violet-700',
  fiction: 'text-blue-600 border-blue-300 dark:text-blue-400 dark:border-blue-700',
  'social issues': 'text-amber-600 border-amber-300 dark:text-amber-400 dark:border-amber-700',
  identity: 'text-emerald-600 border-emerald-300 dark:text-emerald-400 dark:border-emerald-700',
  faith: 'text-sky-600 border-sky-300 dark:text-sky-400 dark:border-sky-700',
}

export function getTagColor(tag: string): string {
  return TAG_COLORS[tag.toLowerCase()] ?? 'text-gold border-gold/40'
}
