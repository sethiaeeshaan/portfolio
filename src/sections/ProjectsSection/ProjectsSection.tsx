import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "./components/ProjectCard";

const PROJECTS = [
  {
    href: "https://2023.nssc.in",
    image: "/nssc.png",
    imageAlt: "National Students Space Challenge Project",
    title: "National Students' Space Challenge",
    description: "Built a high-availability event management system handling 5000+ QR validations. Integrated an admin portal with real-time analytics and CI/CD pipelines.",
    tags: ["Node.js", "MongoDB", "React", "Firebase", "Docker", "Google OAuth"],
  },
  {
    href: "https://github.com/sethiaeeshaan/aircanvas",
    image: "/air_canvas.png",
    imageAlt: "Air Canvas Project",
    title: "Air Canvas",
    description: "Built a virtual painting application using Python, OpenCV, and MediaPipe that enables real-time hand gesture-based drawing and interaction through a webcam.",
    tags: ["Python", "OpenCV", "MediaPipe"],
  },
];

export function ProjectsSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-deep" id="projects">
      <div className="max-w-container-max-width mx-auto px-margin-safe">
        <ScrollReveal className="mb-8 md:mb-16">
          <SectionLabel index="04" label="PROJECTS" />
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg">Solving Complex Problems</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
