import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { TechTag } from "./TechTag";

const SKILLS_DATA = [
  {
    icon: "terminal",
    title: "Backend",
    skills: ["Go", "Node.js", "Python", "Temporal", "Distributed Systems"]
  },
  {
    icon: "cloud",
    title: "Infrastructure",
    skills: ["Docker", "GitHub Actions", "Azure", "AWS EC2/S3"]
  },
  {
    icon: "query_stats",
    title: "Observability",
    skills: ["Grafana", "OpenTelemetry", "Prometheus", "Thanos"]
  },
  {
    icon: "devices",
    title: "Frontend",
    skills: ["Next.js", "React Native", "TypeScript"]
  },
  {
    icon: "storage",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    icon: "architecture",
    title: "Architecture",
    skills: ["Event-Driven", "Microservices", "CI/CD"]
  }
];

export function SkillsSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-deep" id="skills">
      <div className="max-w-container-max-width mx-auto px-margin-safe">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel index="02" label="TECH STACK" />
          <h2 className="font-headline-lg text-headline-lg">Engineered for Performance</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_DATA.map((category, index) => (
            <ScrollReveal key={index} className="glass-card p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">{category.icon}</span>
              <h3 className="font-headline-md text-headline-md mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechTag key={skill} label={skill} />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
