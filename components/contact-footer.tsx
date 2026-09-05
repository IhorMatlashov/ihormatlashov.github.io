import { Mail, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-data'

export function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">Contact</p>
        <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          Let&apos;s build something worth playing.
        </h2>
        <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground text-pretty">
          Open to contract and full-time Unity roles, remote or on-site. If your project needs
          combat and gameplay systems, custom rendering, or tooling that unblocks the rest of the
          team — send a message.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-8 inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          {siteConfig.email}
        </a>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {siteConfig.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
