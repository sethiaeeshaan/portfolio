import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

export function ProjectsSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-deep" id="projects">
      <div className="max-w-container-max-width mx-auto px-margin-safe">
        <ScrollReveal className="mb-8 md:mb-16">
          <SectionLabel index="04" label="PROJECTS" />
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg">Solving Complex Problems</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {/* NSSC */}
          <ScrollReveal className="group glass-card overflow-hidden rounded-2xl">
            <a href="https://2023.nssc.in" target="_blank" rel="noopener noreferrer" className="block">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/nssc.png"
                  alt="National Students Space Challenge Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-8">
                <h3 className="font-headline-md text-xl font-semibold md:text-headline-md mb-4 group-hover:text-primary transition-colors text-center md:text-left">National Students&apos; Space Challenge</h3>
                <p className="text-on-surface-variant mb-6 text-sm md:text-base">Built a high-availability event management system handling 5000+ QR validations. Integrated an admin portal with real-time analytics and CI/CD pipelines.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="font-label-mono text-caption text-primary">Node.js</span>
                  <span className="font-label-mono text-caption text-primary">MongoDB</span>
                  <span className="font-label-mono text-caption text-primary">React</span>
                  <span className="font-label-mono text-caption text-primary">Firebase</span>
                  <span className="font-label-mono text-caption text-primary">Docker</span>
                  <span className="font-label-mono text-caption text-primary">Google OAuth</span>
                </div>
              </div>
            </a>
          </ScrollReveal>

          {/* AirCanvas */}
          <ScrollReveal className="group glass-card overflow-hidden rounded-2xl">
            <a href="https://github.com/sethiaeeshaan/aircanvas" target="_blank" rel="noopener noreferrer" className="block">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/air_canvas.png"
                  alt="Air Canvas Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-8">
                <h3 className="font-headline-md text-xl font-semibold md:text-headline-md mb-4 group-hover:text-primary transition-colors text-center md:text-left">Air Canvas</h3>
                <p className="text-on-surface-variant mb-6 text-sm md:text-base">Built a virtual painting application using Python, OpenCV, and MediaPipe that enables real-time hand gesture-based drawing and interaction through a webcam.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="font-label-mono text-caption text-primary">Python</span>
                  <span className="font-label-mono text-caption text-primary">OpenCV</span>
                  <span className="font-label-mono text-caption text-primary">MediaPipe</span>
                </div>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
