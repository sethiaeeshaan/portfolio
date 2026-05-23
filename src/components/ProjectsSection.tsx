import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

export function ProjectsSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-deep" id="projects">
      <div className="max-w-container-max-width mx-auto px-margin-safe">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <SectionLabel index="04" label="CASE STUDIES" />
            <h2 className="font-headline-lg text-headline-lg">Solving Complex Problems</h2>
          </div>
          <a className="text-primary hover:underline font-label-mono flex items-center gap-2" href="#">
            View GitHub <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <ScrollReveal className="group glass-card overflow-hidden rounded-2xl">
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src="/nssc.png" 
                alt="National Students Space Challenge Project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="font-headline-md text-headline-md mb-4">National Students’ Space Challenge</h3>
              <p className="text-on-surface-variant mb-6">Built a high-availability event management system handling 5000+ QR validations. Integrated an admin portal with real-time analytics and CI/CD pipelines.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-label-mono text-caption text-primary">Node.js</span>
                <span className="font-label-mono text-caption text-primary">MongoDB</span>
                <span className="font-label-mono text-caption text-primary">React</span>
                <span className="font-label-mono text-caption text-primary">Firebase</span>
                <span className="font-label-mono text-caption text-primary">Docker</span>
                <span className="font-label-mono text-caption text-primary">Google OAuth</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Project 2 */}
          <ScrollReveal className="group glass-card overflow-hidden rounded-2xl">
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src="/air_canvas.png" 
                alt="Air Canvas Project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="font-headline-md text-headline-md mb-4">Air Canvas</h3>
              <p className="text-on-surface-variant mb-6">Built a virtual painting application using Python, OpenCV, and MediaPipe that enables real-time hand gesture-based drawing and interaction through a webcam.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-label-mono text-caption text-primary">Python</span>
                <span className="font-label-mono text-caption text-primary">OpenCV</span>
                <span className="font-label-mono text-caption text-primary">MediaPipe</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
