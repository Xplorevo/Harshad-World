import { Github, Linkedin } from "lucide-react";
import { links } from "@/config/links";

const profileLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: links.linkedin,
    description: "Connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    href: links.github,
    description: "Explore my code",
  },
  {
    icon: null,
    label: "E-Cell Mentor",
    href: links.ecell,
    description: "Startup mentoring",
  },
];

const AuthorConnect = () => (
  <aside className="mt-16 pt-10 border-t border-border">
    <div className="glass rounded-2xl p-6 md:p-8">
      <h2 className="text-sm font-semibold tracking-[0.22em] uppercase text-primary mb-3">
        About the author
      </h2>
      <p className="text-foreground font-heading font-bold text-xl md:text-2xl mb-3">
        Harshad Harishchandra Pakhale
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
        Founder & CEO of Xplorevo, AI full-stack builder, and mentor to student founders across
        E-Cell, Unstop and Changemaker Academy. I write about startups, AI products, and shipping
        ideas end to end.
      </p>

      <div className="flex flex-wrap gap-3">
        {profileLinks.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
          >
            {p.icon && <p.icon size={16} />}
            <span>{p.label}</span>
          </a>
        ))}
      </div>
    </div>
  </aside>
);

export default AuthorConnect;
