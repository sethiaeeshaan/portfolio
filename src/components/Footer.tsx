export function Footer() {
  return (
    <footer className="py-6 border-t border-border-subtle bg-background" id="footer">
      <div className="max-w-container-max-width mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
        <div className="flex flex-col gap-1.5 md:gap-2 items-center justify-center text-center">
          <div className="text-base md:text-lg font-bold text-on-surface">Eeshaan Sethia</div>
          <div className="text-xs md:text-sm font-label-mono text-text-muted">© 2026. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
