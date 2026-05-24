type SocialLinkProps = {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
};

export function SocialLink({ href, icon, label, external = true }: SocialLinkProps) {
  return (
    <a
      className="group"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:text-primary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <span className="font-label-mono text-caption mt-2 block">{label}</span>
    </a>
  );
}
