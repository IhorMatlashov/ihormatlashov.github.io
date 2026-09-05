'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects, categories, type Category } from '@/lib/site-data'
import { MediaGallery } from '@/components/media-gallery'

type Filter = 'All' | Category

export function WorkSection() {
  const [filter, setFilter] = useState<Filter>('All')

  const tabs = useMemo<Filter[]>(() => {
    // Only show category tabs that actually have projects.
    const active = categories.filter((c) => projects.some((p) => p.category === c))
    return ['All', ...active]
  }, [])

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length }
    for (const c of categories) map[c] = projects.filter((p) => p.category === c).length
    return map
  }, [])

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">Selected work</p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Projects & showreels
          </h2>
        </div>
        <span className="hidden shrink-0 font-mono text-sm text-muted-foreground sm:block">
          {String(visible.length).padStart(2, '0')} shown
        </span>
      </div>

      {/* Category filter tabs */}
      <div className="mb-14 flex flex-wrap gap-2" role="tablist" aria-label="Filter work by category">
        {tabs.map((tab) => {
          const isActive = filter === tab
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(tab)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-secondary text-secondary-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {tab}
              <span
                className={`font-mono text-xs ${isActive ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}
              >
                {String(counts[tab] ?? 0).padStart(2, '0')}
              </span>
            </button>
          )
        })}
      </div>

      {visible.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border px-6 py-16 text-center text-muted-foreground">
          No projects in this category yet.
        </p>
      ) : (
        <div className="flex flex-col gap-24">
          {visible.map((project, i) => (
            <article
              key={project.slug}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <MediaGallery project={project} />
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-primary">{project.category}</span>
                  <span className="text-primary">{project.year}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  <span>{project.engine}</span>
                  {project.status && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                      <span className="rounded-full border border-border px-2 py-0.5 text-foreground">
                        {project.status}
                      </span>
                    </>
                  )}
                </div>

                <h3 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-primary">{project.role}</p>

                {/* `summary` = what the project is. `description` = what you built. */}
                <h4 className="mt-8 mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  About the project
                </h4>
                <p className="leading-relaxed text-muted-foreground text-pretty">{project.summary}</p>

                <h4 className="mt-7 mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  My role
                </h4>
                <p className="leading-relaxed text-muted-foreground text-pretty">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="group inline-flex items-center gap-1 text-sm font-semibold text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
