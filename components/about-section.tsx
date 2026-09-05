import { skills, siteConfig, experience, education, spokenLanguages } from '@/lib/site-data'

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-border bg-card/40"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">About</p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            I build the technical backbone of a project.
          </h2>
        </div>

        <div>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            I&apos;m a senior Unity developer with 6 years and 8 shipped titles across PC, WebGL, Android
            and Yandex Games. My work is the layer underneath the game: async and multithreaded C#
            gameplay systems, combat frameworks, custom HLSL rendering and shadow pipelines, and the
            editor tooling that lets designers, artists and writers move without waiting on an
            engineer.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            I&apos;m currently the sole developer of a complete action-RPG tech stack — combat,
            quests, dialogue, input, rendering and tools. Performance is the constant: 60 FPS on
            hardware from 2 GB Android phones to mid-range PC.
          </p>

          <h3 className="mt-10 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Core skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            {siteConfig.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Experience timeline */}
      <div className="mx-auto max-w-6xl border-t border-border px-4 py-24 sm:px-6">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">Experience</p>
        <h2 className="mb-14 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Where I&apos;ve shipped
        </h2>

        <ol className="flex flex-col gap-12 border-l border-border pl-6 sm:pl-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span
                className="absolute -left-7 top-2 h-2 w-2 rounded-full bg-primary sm:-left-9"
                aria-hidden="true"
              />
              <p className="font-mono text-xs uppercase tracking-wider text-primary">{job.period}</p>
              <h3 className="mt-2 font-heading text-xl font-bold tracking-tight sm:text-2xl">
                {job.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{job.company}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{job.summary}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {job.highlights.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 text-sm leading-relaxed text-muted-foreground text-pretty before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-primary"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-border pt-12 sm:grid-cols-2">
          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Education &amp; certifications
            </h3>
            <ul className="flex flex-col gap-6">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="font-heading text-base font-bold">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                  <p className="mt-1 font-mono text-xs text-primary">{item.period}</p>
                  {item.note && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {item.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Languages
            </h3>
            <ul className="flex flex-wrap gap-2">
              {spokenLanguages.map((lang) => (
                <li
                  key={lang}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
