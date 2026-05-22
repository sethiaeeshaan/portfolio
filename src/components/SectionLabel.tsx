export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <span className="font-label-mono text-label-mono text-primary mb-4 block">
      {index} // {label}
    </span>
  );
}
