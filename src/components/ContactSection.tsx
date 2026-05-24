import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

export function ContactSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop relative overflow-hidden" id="contact">
      <div className="max-w-container-max-width mx-auto px-margin-safe">
        <ScrollReveal className="mb-6 md:mb-16">
          <SectionLabel index="05" label="COLLABORATE" />
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg">Let&apos;s build together.</h2>
        </ScrollReveal>

        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant mb-6 md:mb-12">Currently seeking opportunities to build and scale reliable backend infrastructure in high-growth startups.</p>

          <div className="flex flex-col items-center gap-6">
            <a className="font-headline-md text-xl md:text-headline-md break-all border-b border-border-subtle hover:border-primary transition-all pb-2" href="mailto:eeshaans05@gmail.com">eeshaans05@gmail.com</a>

            <div className="flex gap-8 mt-0 md:mt-8">
              <a className="group" href="https://github.com/sethiaeeshaan" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:text-primary">
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <span className="font-label-mono text-caption mt-2 block">GitHub</span>
              </a>

              <a className="group" href="https://linkedin.com/in/eeshaansethia" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:text-primary">
                  <span className="material-symbols-outlined">share</span>
                </div>
                <span className="font-label-mono text-caption mt-2 block">LinkedIn</span>
              </a>

              <a className="group" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:text-primary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <span className="font-label-mono text-caption mt-2 block">Resume</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
