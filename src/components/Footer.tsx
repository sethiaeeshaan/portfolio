export function Footer() {
  return (
    <footer className="py-12 md:py-20 border-t border-border-subtle bg-background" id="footer">
      <div className="max-w-container-max-width mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 text-center md:text-left">
        <div className="flex flex-col gap-1.5 md:gap-2 items-center md:items-start">
          <div className="text-base md:text-lg font-bold text-on-surface">Eeshaan Sethia</div>
          <div className="text-xs md:text-sm font-label-mono text-text-muted">© 2026. All rights reserved.</div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1.5 md:gap-2">
          <div className="text-xs md:text-sm font-label-mono text-text-muted">Built for high-concurrency &amp; high-impact.</div>
          <div className="text-[10px] md:text-xs text-text-muted/50 uppercase tracking-widest">Optimized for reliability.</div>
        </div>
      </div>
    </footer>
  );
}
