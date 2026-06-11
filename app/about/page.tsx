import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Seraphine',
  description: 'Seraphine Aishat is a storyteller and ghostwriter based in Accra, Ghana.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-16">
        <p className="eyebrow mb-3">The Storyteller</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-ink dark:text-ivory leading-tight">
          Seraphine<br />
          <span className="italic text-gold">Aishat</span>
        </h1>
      </div>

      {/* Avatar / hero */}
      <div className="mb-12 flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
          <span className="font-display text-4xl font-bold text-gold">S</span>
        </div>
        <div>
          <p className="font-display text-lg font-semibold text-ink dark:text-ivory">Seraphine Aishat</p>
          <p className="text-slate font-ui text-sm">Accra, Ghana · Storyteller & Ghostwriter</p>
        </div>
      </div>

      {/* Bio */}
      <div className="prose prose-lg dark:prose-invert max-w-none font-body">
        <p>
          I write because silence is too loud. Because the stories I needed growing up were never
          written in the languages I spoke — the language of the Accra heat, of aunties who love too
          loudly, of first heartbreaks that happen over bad network calls, of faith tested by Tuesday.
        </p>

        <p>
          My writing sits at the intersection of love, identity, and the African everyday. I am
          interested in the quiet moments that carry the most weight: a look held too long, a meal
          made with resentment, a letter never sent. I believe every ordinary life contains
          extraordinary stories waiting for someone patient enough to tell them.
        </p>

        <p>
          As a ghostwriter, I help founders, CEOs, and public voices put their real stories into
          the world — stories that don't just impress, but connect. Because the most powerful
          thing any voice can do is make another person feel less alone.
        </p>

        <h2>The Writing Mission</h2>
        <p>
          To create a body of work that makes people from Accra, Lagos, Nairobi, Kingston —
          anywhere the diaspora reaches — feel that their stories matter. That their love is
          worth dramatizing. That their grief is worth sitting with. That their joy is worth
          celebrating with the full force of language.
        </p>

        <p>
          And for readers who didn't grow up with those names and those streets: to open a window
          into worlds that will expand what you believe is possible in fiction.
        </p>

        <h2>Education & Work</h2>
        <p>
          Seraphine is currently a student at UPSA (University of Professional Studies, Accra),
          pursuing her undergraduate degree while building a writing practice that she hopes will
          outlast both of them.
        </p>
      </div>

      {/* Ink rule */}
      <div className="ink-rule my-12">
        <span>✦</span>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="font-display text-2xl text-ink dark:text-ivory mb-4">
          Want to work together?
        </p>
        <p className="text-slate font-body mb-6">
          Whether you need a ghostwriter, a collaborator, or just want to say hello — she reads every message.
        </p>
        <a
          href="mailto:hello@seraphineaishat.com"
          className="inline-flex items-center gap-2 px-8 py-3 bg-ink dark:bg-ivory text-ivory dark:text-ink font-ui font-medium text-sm rounded-sm hover:bg-gold hover:text-white dark:hover:bg-gold dark:hover:text-white transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  )
}
