"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "contact"];
      const triggerLine = window.innerHeight / 2;   
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerLine && rect.bottom >= triggerLine) {   
            current = section;
            break;         
          }
        }
      }

      const scrolledToBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;
      if (scrolledToBottom) {
        current = sections[sections.length - 1];
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-surface/80 backdrop-blur-md text-primary font-body-md text-body-md docked full-width top-0 sticky z-50 border-b border-border-subtle">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-container-max-width mx-auto">
        <div className="font-headline-md text-lg md:text-headline-md font-bold tracking-tighter text-on-surface"> <a href="#eeshaan">Eeshaan Sethia</a></div>
        
        <div className="hidden md:flex items-center md:gap-4 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 ${
                activeSection === link.href.substring(1)
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* <div className="flex items-center gap-4">
          <span className="material-symbols-outlined hover:bg-white/5 transition-all duration-300 p-2 rounded-lg">code</span>
          <span className="material-symbols-outlined hover:bg-white/5 transition-all duration-300 p-2 rounded-lg">terminal</span>
          <span className="material-symbols-outlined hover:bg-white/5 transition-all duration-300 p-2 rounded-lg">alternate_email</span>
        </div> */}
        <a className="px-5 py-2.5 bg-on-surface text-background font-medium text-xs md:text-sm rounded-full hover:bg-primary transition-all active:scale-95" href="#contact">
            Let's Connect
        </a>
      </div>
    </nav>
  );
}
