import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { SocialLink } from "./components/SocialLink";

const SOCIAL_LINKS = [
  { href: "https://github.com/sethiaeeshaan", icon: "terminal", label: "GitHub" },
  { href: "https://linkedin.com/in/eeshaansethia", icon: "share", label: "LinkedIn" },
  { href: "/resume.pdf", icon: "description", label: "Resume" },
];

export function ContactSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop relative overflow-hidden" id="contact">
      <div className="max-w-container-max-width mx-auto px-margin-safe">
        <ScrollReveal className="mb-8 md:mb-16">
          <SectionLabel index="05" label="COLLABORATE" />
          <h2 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero mb-8 text-center">Let&apos;s build together.</h2>
        </ScrollReveal>

        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-12">Currently seeking opportunities to build and scale reliable backend infrastructure in high-growth startups.</p>

          <div className="flex flex-col items-center gap-6">
            <a className="font-headline-lg text-xl md:text-headline-lg break-all border-b border-border-subtle hover:border-primary transition-all pb-2" href="mailto:eeshaans05@gmail.com">eeshaans05@gmail.com</a>

            <div className="flex gap-8 mt-8">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
