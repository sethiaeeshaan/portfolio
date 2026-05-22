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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV5XNBQEd-IvKrCaCSZ-lA_iERsi-ygy7O362qtZCIV-Yr_YbH3fXAVUTjUdzLNR2nRqzMSaFJU-anWh5eKlH0PjN4U8acYyLh_3NzSuC9wVWAqfALAilLoqFOTFzMUq-bFcZ-SpX8tWWm1VxJV0TielbG6BEIXqkqPEoxPkIN7mykU9hiza_eKqShpafc7Rq8vBhED-3sUyyWkA2c5IbFlidHsTihB8XPDbSwWpvAhlY90BvxvLjwE1ASqjznHW7KSlGWJ6jNDA" 
                alt="National Students Space Challenge Project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-6 py-2 bg-white text-black font-bold rounded">Case Study</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-headline-md text-headline-md mb-4">National Students’ Space Challenge</h3>
              <p className="text-on-surface-variant mb-6">Built a high-availability event management system handling 5000+ QR validations. Integrated an admin portal with real-time analytics and CI/CD pipelines.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-label-mono text-caption text-primary">Node.js</span>
                <span className="font-label-mono text-caption text-primary">PostgreSQL</span>
                <span className="font-label-mono text-caption text-primary">React</span>
                <span className="font-label-mono text-caption text-primary">Docker</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Project 2 */}
          <ScrollReveal className="group glass-card overflow-hidden rounded-2xl">
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoT_dqL13pJOPaIKUSKiXYbeAaG4GATfX-UR4UtFpNwQPAbpzFiSwDl-3U-RcmqxvtDo_JOAkp95k2RihS8lQdjwqFeKk4YGfevRifsbHZZI8mWPFkiljLetz5YstwAj09N0Rocoeln6z58a7J4LYG8G6SGDtR3R5wPQOwWQ6OOB0sifmZFrs7FHcMG1AJVSpfpyFcWkMX-gHQtqmo3GEnJNHgqvdWz4-eiVyDHViodwP2p805ZEeGlCwrOX7eBlPtNRMj4P4aMw" 
                alt="Employee Claim Management Project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-6 py-2 bg-white text-black font-bold rounded">Case Study</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-headline-md text-headline-md mb-4">Employee Claim Management</h3>
              <p className="text-on-surface-variant mb-6">Hierarchical authentication system with Google Maps API integration. Streamlined claim approvals for distributed workforce with automated audit trails.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-label-mono text-caption text-primary">Python</span>
                <span className="font-label-mono text-caption text-primary">Django</span>
                <span className="font-label-mono text-caption text-primary">Redis</span>
                <span className="font-label-mono text-caption text-primary">OAuth</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
