import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { SkillCategoryCard } from "./components/SkillCategoryCard";

const SKILLS_DATA = [
  {
    icon: "terminal",
    title: "Backend",
    skills: ["Go", "Node.js", "Python", "Temporal", "Distributed Systems"],
  },
  {
    icon: "cloud",
    title: "Infrastructure",
    skills: ["Docker", "GitHub Actions", "Azure", "AWS EC2/S3"],
  },
  {
    icon: "query_stats",
    title: "Observability",
    skills: ["Grafana", "OpenTelemetry", "Prometheus"],
  },
  {
    icon: "devices",
    title: "Frontend",
    skills: ["Next.js", "React Native", "TypeScript"],
  },
  {
    icon: "storage",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
];

export function SkillsSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-deep" id="skills">
      <div className="max-w-container-max-width mx-auto px-margin-safe">
        <ScrollReveal className="mb-8 md:mb-16">
          <SectionLabel index="02" label="TECH STACK" />
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg">Engineered for Performance</h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-6">
          {SKILLS_DATA.map((category) => (
            <SkillCategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
