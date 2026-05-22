export function TechTag({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 bg-white/5 rounded border border-white/10 font-label-mono text-caption">
      {label}
    </span>
  );
}
