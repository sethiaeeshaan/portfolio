import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

export function ExperienceSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop" id="experience">
      <div className="max-w-container-max-width mx-auto px-margin-safe">
        <ScrollReveal className="mb-16">
          <SectionLabel index="03" label="CAREER PATH" />
          <h2 className="font-headline-lg text-headline-lg">Building Impact</h2>
        </ScrollReveal>

        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2"></div>
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px timeline-line"></div>

          {/* FinBox */}
          <ScrollReveal className="relative mb-20">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-primary/10"></div>
            <div className="md:hidden absolute -left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-primary/10"></div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-24">
              <div className="md:text-right">
                <h3 className="font-headline-md text-headline-md text-primary">FinBox</h3>
                <div className="font-label-mono text-label-mono text-text-muted">Backend Engineer // 2023 - Present</div>
              </div>
              <div className="glass-card p-6 rounded-xl border-primary/50 bg-primary/5">
                <ul className="space-y-3 list-disc list-inside text-on-surface-variant">
                  <li>Implemented Temporal-based workflow engines to eliminate hard-coded logic and improve system flexibility.</li>
                  <li>Developed internal 'Thanos' tool for large-scale data processing and management.</li>
                  <li>Implemented OpenTelemetry across microservices to enhance system observability.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Qualitative Financials */}
          <ScrollReveal className="relative mb-20">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary"></div>
            <div className="md:hidden absolute -left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary"></div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-24">
              <div className="md:order-2">
                <h3 className="font-headline-md text-headline-md text-primary">Qualitative Financials</h3>
                <div className="font-label-mono text-label-mono text-text-muted">Full Stack Engineer // 2022 - 2023</div>
              </div>
              <div className="glass-card p-6 rounded-xl md:order-1">
                <ul className="space-y-3 list-disc list-inside text-on-surface-variant">
                  <li>Integrated PayPal and OAuth providers for secure global transactions.</li>
                  <li>Incorporated the Google Maps API to facilitate the discovery of 500+ creators.</li>
                  <li>Optimized video streaming performance for mobile devices.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* MyGate */}
          <ScrollReveal className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary"></div>
            <div className="md:hidden absolute -left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary"></div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-24">
              <div className="md:text-right">
                <h3 className="font-headline-md text-headline-md text-primary">MyGate</h3>
                <div className="font-label-mono text-label-mono text-text-muted">Tech Intern // 2021</div>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <ul className="space-y-3 list-disc list-inside text-on-surface-variant">
                  <li>Automated brand onboarding, significantly reducing manual effort and operational overhead.</li>
                  <li>Developed internal dashboards for operations team monitoring.</li>
                  <li>Worked closely with senior architects on high-concurrency gateway logic.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
