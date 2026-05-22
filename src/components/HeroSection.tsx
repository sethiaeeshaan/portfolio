import { ScrollReveal } from "./ScrollReveal";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-margin-safe pt-24">
      <ScrollReveal className="max-w-4xl mx-auto active">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-primary-container/10 border border-primary/20 text-primary font-label-mono text-label-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AVAILABLE FOR COLLABORATION
        </div>
        
        <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero hero-gradient-text mb-6">
          Building Scalable Systems for High-Growth Startups.
        </h1>
        
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Engineering fault-tolerant distributed systems with a product-first mindset. Currently building at FinBox.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a className="px-8 py-3 bg-primary-container text-on-primary-container rounded font-medium hover:bg-primary-container/90 transition-all active:scale-95" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
          <a className="px-8 py-3 border border-border-subtle bg-surface-raised/50 backdrop-blur text-on-surface rounded font-medium hover:bg-white/5 transition-all active:scale-95" href="#contact">
            Get in touch
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 grayscale opacity-50">
          <span className="material-symbols-outlined text-4xl">database</span>
          <span className="material-symbols-outlined text-4xl">hub</span>
          <span className="material-symbols-outlined text-4xl">monitoring</span>
          <span className="material-symbols-outlined text-4xl">cloud_done</span>
        </div>
      </ScrollReveal>
    </section>
  );
}
