import Image from 'next/image'
import Link from 'next/link'
import { Author } from '@/lib/types'

export default function AuthorBox({ author }: { author: Author }) {
  return (
    <div className="flex gap-5 items-start p-6 rounded-sm border border-parchment dark:border-white/5 bg-parchment/40 dark:bg-white/[0.03]">
      <div className="shrink-0 w-14 h-14 rounded-full overflow-hidden bg-gold/20 flex items-center justify-center">
        {author.avatar ? (
          <Image src={author.avatar} alt={author.name} width={56} height={56} className="object-cover" />
        ) : (
          <span className="font-display text-xl font-bold text-gold">
            {author.name.charAt(0)}
          </span>
        )}
      </div>
      <div>
        <p className="eyebrow mb-1">Written by</p>
        <Link href="/about" className="font-display font-bold text-lg text-ink dark:text-ivory hover:text-gold transition-colors">
          {author.name}
        </Link>
        <p className="mt-1 text-sm text-slate leading-relaxed font-body">{author.bio}</p>
      </div>
    </div>
  )
}
