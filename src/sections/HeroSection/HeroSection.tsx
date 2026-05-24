import { ScrollReveal } from "@/components/ScrollReveal";

export function HeroSection() {
  return (
    <section className="relative py-section-gap-mobile md:py-section-gap-desktop flex flex-col items-center justify-center px-margin-safe overflow-hidden" id="eeshaan">
      <ScrollReveal className="max-w-5xl w-full mx-auto active">
        <div className="grid md:grid-cols-12 md:gap-12 items-center">
          <div className="md:col-span-5 md:order-2 relative">
            <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-transparent max-w-[260px] sm:max-w-xs mx-auto md:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Eeshaan Sethia portrait"
                className="w-full h-full object-contain object-bottom relative z-10"
                src="/portrait.png"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 mb-4 md:mb-8 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-[11px] font-label-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0"></span>
              <span>Backend Engineer</span>
            </div>

            <h1 className="text-[clamp(36px,9vw,90px)] leading-[0.95] md:leading-[0.9] font-bold tracking-tight hero-gradient-text mb-4 md:mb-8">
              Eeshaan Sethia
            </h1>

            <p className="font-body-lg text-base sm:text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto md:mx-0 mb-6 md:mb-12 leading-relaxed">
              Building reliable backend infrastructure for high-growth startups.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6">
              <a
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-primary-container text-on-primary-container font-semibold rounded-full hover:shadow-[0_0_30px_rgba(99,91,255,0.4)] transition-all active:scale-95 text-sm text-center"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                className="px-6 sm:px-8 py-3 sm:py-3.5 border border-white/10 hover:bg-white/5 rounded-full font-medium transition-all text-sm text-center"
                href="#experience"
              >
                Work History
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-16 flex justify-center gap-5 sm:gap-6 md:gap-8 grayscale opacity-50">
          <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">database</span>
          <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">hub</span>
          <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">monitoring</span>
          <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">cloud_done</span>
        </div>
      </ScrollReveal>
    </section>
  );
}
