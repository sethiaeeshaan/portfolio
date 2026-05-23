import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";

export function AboutSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-safe" id="about">
      <div className="max-w-container-max-width mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <SectionLabel index="01" label="IDENTITY" />
            <h2 className="font-headline-lg text-headline-lg mb-6">Building with a Product-Engineer Mindset</h2>
            <div className="space-y-4 text-on-surface-variant">
              <p>I’m a software engineer from <b>Indian Institute of Technology Kharagpur</b> who believes technology becomes meaningful when combined with leadership, collaboration, and vision. During my time in college, I’ve led teams and large-scale initiatives as General Secretary and Web Head at Students' Association for Technology in Space and National Students' Space Challenge. These experiences shaped my ability to manage teams, drive execution under pressure, organize impactful technical events, and build communities around innovation and space technology.</p>
              <p>I enjoy building backend systems that stay reliable under scale and complexity. My work revolves around distributed systems, long-running workflows, and infrastructure observability — understanding not just how systems work, but how they fail, recover, and evolve over time. I’m naturally drawn to solving engineering problems that require deep thinking, clean architecture, and attention to reliability in production environments.</p>
              <p>Beyond engineering, I’m deeply interested in finance, economics, and startups. I’ve spent years studying equity markets and exploring how technology intersects with business and human behavior. Whether it’s designing scalable software, optimizing workflows, or experimenting with ambitious product ideas, I’m driven by curiosity and the desire to create meaningful impact through technology.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="relative hidden md:block">
            <div className="aspect-square glass-card rounded-2xl overflow-hidden group">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfWsjWUmYD-jQrkCy-R4iW-4yCk_V6WEVC1HyDDIZrrDuMJTGdWAetLN0e5CKQ-MDmW_6o5J1gB8O2l4s6gk1dcj31ZtwZhNnZg_NJMvcmbVLOU8ClwCLdEmxNd1H-5QJH3Fjt1MRf6OxWYsU0rVz0vfdGd03e5Ft-EyOMQFVky0zqzNVrSsWFsonvUTk91pM0ZGpJWHhFb__bfnOWzgHGq_EzKMlE9Oel6eYiXlHYt9jO3KCFoEYFpoiel3xU--s5RpAnMVrnOw"
                alt="A high-contrast, moody close-up of high-end server rack hardware with glowing blue and violet LED indicators in a dark, professional data center environment."
                width={600}
                height={600}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-deep via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-card rounded-full flex items-center justify-center border-primary/30 animate-pulse">
              <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
