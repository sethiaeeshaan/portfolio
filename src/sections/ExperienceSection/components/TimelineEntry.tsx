import { ScrollReveal } from "@/components/ScrollReveal";

type TimelineEntryProps = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  side: "left" | "right";
  highlighted?: boolean;
  isLast?: boolean;
};

export function TimelineEntry({
  company,
  role,
  period,
  bullets,
  side,
  highlighted = false,
  isLast = false,
}: TimelineEntryProps) {
  const headerAlignment = side === "left" ? "md:text-right" : "md:order-2";
  const cardOrder = side === "left" ? "" : "md:order-1";
  const cardAccent = highlighted ? "border-primary/50 bg-primary/5" : "";
  const markerStyle = highlighted
    ? "bg-primary ring-8 ring-primary/10"
    : "bg-surface border-2 border-primary";

  return (
    <ScrollReveal className={`relative ${isLast ? "" : "mb-6 md:mb-20"}`}>
      <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${markerStyle}`}></div>
      <div className={`md:hidden absolute -left-8 -translate-x-1/2 w-4 h-4 rounded-full ${markerStyle}`}></div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-24">
        <div className={headerAlignment}>
          <h3 className="font-headline-md text-xl font-semibold md:text-headline-md text-primary">{company}</h3>
          <div className="font-label-mono text-label-mono text-text-muted">{role} // {period}</div>
        </div>
        <div className={`glass-card p-4 md:p-6 rounded-xl ${cardOrder} ${cardAccent}`}>
          <ul className="space-y-3 list-disc list-inside text-on-surface-variant">
            {bullets.map((bullet, i) => (
              <li key={i} className="text-sm md:text-base">{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
