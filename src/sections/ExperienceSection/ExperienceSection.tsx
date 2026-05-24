import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { TimelineEntry } from "./components/TimelineEntry";

const EXPERIENCES = [
  {
    company: "FinBox",
    role: "Backend Engineer",
    period: "2025 - Present",
    side: "left" as const,
    highlighted: true,
    bullets: [
      "Implemented Temporal-based workflow engines to eliminate hard-coded logic.",
      "Developed internal 'Thanos' tool for large-scale config management.",
      "Implemented OpenTelemetry across microservices to enhance system observability.",
    ],
  },
  {
    company: "Qualitative Financials",
    role: "Full Stack Engineer",
    period: "2024 - 2025",
    side: "right" as const,
    bullets: [
      "Integrated PayPal and OAuth providers for secure global transactions.",
      "Incorporated the Google Maps API to facilitate the discovery of 500+ creators.",
      "Optimized video streaming performance for mobile devices.",
    ],
  },
  {
    company: "MyGate",
    role: "Tech Intern",
    period: "2024",
    side: "left" as const,
    bullets: [
      "Automated brand onboarding, significantly reducing manual effort and operational overhead.",
      "Developed internal dashboards for operations team monitoring.",
      "Worked closely with senior architects on high-concurrency gateway logic.",
    ],
  },
  {
    company: "Rean Watertech Pvt. Ltd.",
    role: "Software Development Intern",
    period: "2023",
    side: "right" as const,
    bullets: [
      "Built a Selenium scraper extracting 25,000+ government water tenders, with CAPTCHA solving.",
      "Engineered an Employee Management System with an admin dashboard and mobile app.",
      "Shipped payslip, attendance, and leave-request workflows for employees.",
    ],
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    period: "2019 - Present",
    side: "left" as const,
    bullets: [
      "Shipped real-time chat over WebSockets and low-latency video calls for an early-stage startup.",
      "Delivered 1000+ virtual lab assignments across Network Security, Java, and SQL coursework globally.",
      "Partnered with founders and teams across timezones to scope and ship features on quick cycles.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="py-section-gap-mobile md:py-section-gap-desktop" id="experience">
      <div className="max-w-container-max-width mx-auto px-margin-safe">
        <ScrollReveal className="mb-8 md:mb-16">
          <SectionLabel index="03" label="CAREER PATH" />
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg">Building Impact</h2>
        </ScrollReveal>

        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2"></div>
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px timeline-line"></div>

          {EXPERIENCES.map((exp, i) => (
            <TimelineEntry key={exp.company} {...exp} isLast={i === EXPERIENCES.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
