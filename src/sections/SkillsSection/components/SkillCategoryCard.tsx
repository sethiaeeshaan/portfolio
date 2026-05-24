import { ScrollReveal } from "@/components/ScrollReveal";
import { TechTag } from "@/components/TechTag";

type SkillCategoryCardProps = {
  icon: string;
  title: string;
  skills: string[];
};

export function SkillCategoryCard({ icon, title, skills }: SkillCategoryCardProps) {
  return (
    <ScrollReveal className="glass-card p-4 md:p-8 rounded-xl w-full md:w-[calc((100%-3rem)/3)]">
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
        <h3 className="font-headline-md text-xl font-semibold md:text-headline-md">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <TechTag key={skill} label={skill} />
        ))}
      </div>
    </ScrollReveal>
  );
}
