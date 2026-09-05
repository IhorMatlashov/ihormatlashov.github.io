import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WorkSection } from '@/components/work-section'
import { AboutSection } from '@/components/about-section'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactFooter />
    </main>
  )
}
