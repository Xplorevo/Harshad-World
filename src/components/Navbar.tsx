import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { links } from "@/config/links";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#who-am-i" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Magazines", href: "#magazines" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-[var(--shadow-card)]" : "bg-transparent border-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-2.5">
          <img
            src={profileImg}
            alt="Harshad Pakhale"
            className="w-9 h-9 rounded-full object-cover object-top ring-1 ring-primary/30"
          />
          <span className="font-heading text-lg font-bold text-foreground hidden sm:inline">
            Harshad<span className="text-cyan">.</span>
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                active === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="xl:hidden w-10 h-10 rounded-lg glass flex items-center justify-center text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="xl:hidden glass border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2.5 border-b border-border/40"
              >
                {link.label}
              </a>
            ))}
            <a
              href={links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-semibold text-center mt-3"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
