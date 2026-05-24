import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

type ProjectCardProps = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({ href, image, imageAlt, title, description, tags }: ProjectCardProps) {
  return (
    <ScrollReveal className="group glass-card overflow-hidden rounded-2xl">
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 md:p-8">
          <h3 className="font-headline-md text-xl font-semibold md:text-headline-md mb-4 group-hover:text-primary transition-colors text-center md:text-left">{title}</h3>
          <p className="text-on-surface-variant mb-6 text-sm md:text-base">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="font-label-mono text-caption text-primary">{tag}</span>
            ))}
          </div>
        </div>
      </a>
    </ScrollReveal>
  );
}
