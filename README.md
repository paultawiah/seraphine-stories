# Seraphine Aishat — Storytelling Platform

A modern editorial storytelling website built with Next.js 14, Tailwind CSS, and TypeScript.

---

## ⚡ Quick Start (Local Development)

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment

```bash
cp .env.example .env.local
# Edit .env.local if needed (optional for local dev)
```

### 3. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📝 Adding a New Story

Create a new `.md` file in `content/stories/`:

```bash
touch content/stories/my-new-story.md
```

Add frontmatter at the top:

```markdown
---
title: "Your Story Title"
slug: "your-story-title"
date: "2024-12-01"
excerpt: "A one or two sentence teaser that hooks the reader."
coverImage: "https://images.unsplash.com/photo-XXXXX?w=1200&q=80"
tags: ["Romance", "Drama"]
featured: false
---

Your story content in Markdown...
```

**Available tags:** Romance, Drama, Fiction, Social Issues, Identity, Faith  
**`featured: true`** puts the story in the homepage featured section.

---

## 🗂️ Folder Structure

```
seraphine/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout, metadata, Navbar, Footer
│   ├── page.tsx          # Homepage
│   ├── stories/
│   │   ├── page.tsx      # Stories listing with search + filter
│   │   ├── StoriesClient.tsx  # Client-side search/filter logic
│   │   └── [slug]/page.tsx   # Individual story page
│   ├── categories/
│   │   ├── page.tsx      # All categories
│   │   └── [tag]/page.tsx   # Stories by tag
│   └── about/page.tsx    # About Seraphine
│
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── story/            # StoryCard, ReadingProgress, ShareButtons, AuthorBox
│   └── ui/               # Tag, ThemeToggle
│
├── content/stories/      # All Markdown story files live here
│
├── lib/
│   ├── types.ts          # TypeScript interfaces (Story, Author, etc.)
│   ├── stories.ts        # Data layer — swap here for Sanity CMS
│   └── utils.ts          # formatDate, cn(), getTagColor()
│
└── public/               # Static assets
```

---

## 🚀 Deploy to Vercel

### Option A: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option B: Via GitHub

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-configures everything
4. Add environment variables from `.env.example` if needed

**The site builds statically** — stories are pre-rendered at build time. After adding new stories, re-deploy (or trigger a Vercel redeploy).

---

## 🔄 Switching to Sanity CMS (Future)

When ready to add a CMS:

1. `npm install @sanity/client next-sanity`
2. Set up your Sanity project: `npm create sanity@latest`
3. In `lib/stories.ts`, replace `getAllStories()` and `getStoryBySlug()` with GROQ queries
4. Keep the same `Story` / `StoryMeta` return shapes from `lib/types.ts` — all components will keep working

The separation between the data layer (`lib/stories.ts`) and UI components is intentional for this exact swap.

---

## 🛠️ Future Features (Architecture Ready)

| Feature | Where to add |
|--------|-------------|
| Newsletter | Footer placeholder + add ConvertKit/Mailchimp API in a new `app/api/subscribe/route.ts` |
| Comments | Add `CommentsSection` component in `app/stories/[slug]/page.tsx` (Supabase or Disqus) |
| User accounts | Supabase Auth — `lib/types.ts` has `User` type commented and ready |
| Multi-author | Add `authors/` directory + update `lib/types.ts` Author model |
| CMS | Swap `lib/stories.ts` data layer only |

---

## 🎨 Design System

| Token | Value | Use |
|-------|-------|-----|
| `ink` | `#0D0D0D` | Primary text, dark backgrounds |
| `ivory` | `#F7F3EE` | Light backgrounds |
| `parchment` | `#EDE8E1` | Subtle borders, card backgrounds |
| `gold` | `#C9A96E` | Accents, active states, drop caps |
| `slate` | `#6B7280` | Secondary text, metadata |

**Fonts:** Playfair Display (display/headlines), Lora (body/articles), Inter (UI)

