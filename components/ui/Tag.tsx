import Link from 'next/link'
import { cn, getTagColor } from '@/lib/utils'

interface TagProps {
  tag: string
  linked?: boolean
  className?: string
}

export default function Tag({ tag, linked = true, className }: TagProps) {
  const colorClass = getTagColor(tag)
  const classes = cn(
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-ui font-medium tracking-wide uppercase border transition-colors duration-200',
    colorClass,
    'hover:opacity-80',
    className
  )

  if (linked) {
    return (
      <Link href={`/categories/${tag.toLowerCase().replace(/\s+/g, '-')}`} className={classes}>
        {tag}
      </Link>
    )
  }
  return <span className={classes}>{tag}</span>
}
