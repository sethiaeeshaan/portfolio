export function Footer() {
  return (
    <footer className="py-20 border-t border-border-subtle bg-background" id="footer">
      <div className="max-w-container-max-width mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold text-on-surface">Eeshaan Sethia</div>
          <div className="text-sm font-label-mono text-text-muted">© 2026. All rights reserved.</div>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <div className="text-sm font-label-mono text-text-muted">Built for high-concurrency &amp; high-impact.</div>
          <div className="text-xs text-text-muted/50 uppercase tracking-widest">Optimized for reliability.</div>
        </div>
      </div>
    </footer>
  );
}
