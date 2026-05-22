export function Footer() {
  return (
    <footer className="bg-surface-deep border-t border-border-subtle py-12">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 max-w-container-max-width mx-auto gap-gutter">
        <div className="font-label-mono text-on-surface">Eeshaan Sethia / SOFTWARE ENGINEER</div>
        <div className="font-body-md text-body-md text-text-muted">© 2024 Eeshaan Sethia. Built for high-concurrency.</div>
        <div className="flex gap-6">
          <a className="text-text-muted hover:text-primary transition-colors font-label-mono text-label-mono" href="#">Source</a>
          <a className="text-text-muted hover:text-primary transition-colors font-label-mono text-label-mono" href="https://linkedin.com/eeshaansethia">LinkedIn</a>
          <a className="text-text-muted hover:text-primary transition-colors font-label-mono text-label-mono" href="#">Resume</a>
        </div>
      </div>
    </footer>
  );
}
