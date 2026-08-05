import { useState } from "react";
import { Github, Instagram, Linkedin, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import xplorevoLogo from "@/assets/xplorevo-logo.jpg";
import ecellLogo from "@/assets/ecell-logo.png";
import xtnLogo from "@/assets/xtn-logo.png";
import { links, mailto } from "@/config/links";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: links.linkedin },
  { icon: Instagram, label: "Instagram", href: links.instagram },
  { icon: Github, label: "GitHub", href: links.github },
  { icon: Sparkles, label: "X (Twitter)", href: links.x },
  { icon: Mail, label: "Email", href: mailto },
  { icon: MessageCircle, label: "WhatsApp", href: links.whatsapp },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative bg-navy-dark pt-16 pb-8 overflow-hidden noise">
      <div className="absolute inset-0 aurora opacity-70" aria-hidden="true" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <p className="font-heading text-2xl font-bold text-white">
              Harshad Pakhale<span className="text-cyan">.</span>
            </p>
            <p className="text-sm text-white/60 mt-3 max-w-sm leading-relaxed">
              Founder &amp; CEO of Xplorevo Pvt Ltd. Building products, people, and ecosystems at the
              intersection of AI, technology, and entrepreneurship.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-6">
              <a href={links.xtn} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={xtnLogo} alt="Xplorevo Tech Network" loading="lazy" className="h-9 rounded-lg object-contain" />
              </a>
              <a href={links.ecell} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={ecellLogo} alt="E-Cell MESWCOE" loading="lazy" className="h-9 rounded-lg object-contain bg-white/10 p-1" />
              </a>
              <a href={links.xplorevo} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={xplorevoLogo} alt="Xplorevo" loading="lazy" className="h-9 rounded-lg object-contain" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-heading font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/60 hover:text-cyan transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-heading font-bold text-white mb-4">Newsletter</h2>
            <p className="text-sm text-white/60 mb-4">Occasional notes on startups, AI, and building.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `${mailto}?subject=${encodeURIComponent("Newsletter subscription")}&body=${encodeURIComponent(`Please subscribe me: ${email}`)}`;
              }}
              className="flex gap-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 min-w-0 rounded-xl bg-white/10 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="w-11 h-11 rounded-xl bg-gradient-to-r from-electric to-violet flex items-center justify-center text-white hover:scale-105 transition-transform"
              >
                <Send size={16} />
              </button>
            </form>

            <div className="flex flex-wrap gap-2 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-cyan hover:scale-110 transition-all"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Harshad Harishchandra Pakhale. All rights reserved.
          </p>
          <p className="text-xs text-white/50">Built with passion &amp; purpose in Pune, India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
