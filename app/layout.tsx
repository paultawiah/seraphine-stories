import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://seraphineaishat.com'),
  title: { default: 'Seraphine Aishat — Storyteller & Ghostwriter', template: '%s | Seraphine Aishat' },
  description: 'Stories that breathe. Words that linger. Seraphine Aishat writes at the intersection of love, identity, and the African everyday.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Seraphine Aishat',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', creator: '@seraphineaishat' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
