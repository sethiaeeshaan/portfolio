import { ScrollReveal } from "./ScrollReveal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-margin-safe overflow-hidden">
      <ScrollReveal className="max-w-5xl w-full mx-auto active">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 text-left">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-[11px] font-label-mono uppercase tracking-[0.2em] text-primary">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              Backend Engineer
            </div>

            <h1 className="text-[clamp(40px,6vw,90px)] leading-[0.9] font-bold tracking-tight hero-gradient-text mb-8">
              Eeshaan Sethia
            </h1>

            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
              Building reliable backend infrastructure for high-growth startups. Specialized in fault-tolerant systems and scalable architecture at FinBox.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                className="px-8 py-3.5 bg-primary-container text-on-primary-container font-semibold rounded-full hover:shadow-[0_0_30px_rgba(99,91,255,0.4)] transition-all active:scale-95 text-sm"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a
                className="px-8 py-3.5 border border-white/10 hover:bg-white/5 rounded-full font-medium transition-all text-sm"
                href="#experience"
              >
                Work History
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-transparent max-w-sm mx-auto md:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Eeshaan Sethia portrait"
                className="w-full h-full object-contain object-bottom relative z-10"
                src="/portrait.png"
              />
            </div>
          </div>
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
