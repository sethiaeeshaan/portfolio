import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

export function AboutSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-safe" id="about">
      <div className="max-w-container-max-width mx-auto">
        <ScrollReveal>
          <SectionLabel index="01" label="IDENTITY" />
          <h2 className="font-headline-lg text-headline-lg mb-6">Building with a Product-Engineer Mindset</h2>
          <div className="space-y-4 text-on-surface-variant">
            <p>I&apos;m a software engineer from <b>Indian Institute of Technology Kharagpur</b> who believes technology becomes meaningful when combined with leadership, collaboration, and vision. During my time in college, I&apos;ve led teams and large-scale initiatives as General Secretary and Web Head at Students&apos; Association for Technology in Space and National Students&apos; Space Challenge. These experiences shaped my ability to manage teams, drive execution under pressure, organize impactful technical events, and build communities around innovation and space technology.</p>
            <p>I enjoy building backend systems that stay reliable under scale and complexity. My work revolves around distributed systems, long-running workflows, and infrastructure observability — understanding not just how systems work, but how they fail, recover, and evolve over time. I&apos;m naturally drawn to solving engineering problems that require deep thinking, clean architecture, and attention to reliability in production environments.</p>
            <p>Beyond engineering, I&apos;m deeply interested in finance, economics, and startups. I&apos;ve spent years studying equity markets and exploring how technology intersects with business and human behavior. Whether it&apos;s designing scalable software, optimizing workflows, or experimenting with ambitious product ideas, I’m driven by curiosity and the desire to create meaningful impact through technology.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
