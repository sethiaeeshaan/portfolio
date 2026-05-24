import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

export function AboutSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop" id="about">
      <div className="max-w-container-max-width mx-auto px-margin-safe">
        <ScrollReveal>
          <SectionLabel index="01" label="IDENTITY" />
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg mb-6">Building with a Product-Engineer Mindset</h2>
          <div className="space-y-4 text-on-surface-variant">
            <p>I&apos;m a Software Engineer graduated from <b>Indian Institute of Technology Kharagpur</b>, where I led teams, ran large technical events, and built communities around space tech.</p>
            <p>I enjoy building backend systems — distributed systems, long-running workflows, and observability. I&apos;m drawn to problems that demand clean architecture and a sharp eye for how things fail and recover in production.</p>
            <p>Outside engineering, I&apos;m into finance and economics — curious about how technology shapes business and human behavior.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
