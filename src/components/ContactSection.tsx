import { useState } from "react";
import {
  CalendarCheck,
  Check,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { links, mailto, tel } from "@/config/links";

const channels = [
  { icon: Mail, label: "Email", value: links.email, href: mailto },
  { icon: Phone, label: "Phone", value: links.phoneDisplay, href: tel },
  { icon: Linkedin, label: "LinkedIn", value: "harshad-pakhale-221hp", href: links.linkedin },
  { icon: Instagram, label: "Instagram", value: "harshad.h.pakhale.01", href: links.instagram },
  { icon: Github, label: "GitHub", value: "harshadpakhale", href: links.github },
  { icon: CalendarCheck, label: "Topmate", value: "Book a 1:1 session", href: links.topmate },
];

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 gradient-navy overflow-hidden noise">
      <div className="absolute inset-0 aurora" aria-hidden="true" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          invert
          eyebrow="Contact"
          title={<>Let's build something <span className="text-gradient-brand">impactful</span></>}
          subtitle="Startup idea, collaboration, mentorship, or a partnership — I'm always open."
        />

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="glass-strong rounded-3xl p-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-4 flex items-start gap-3 hover:scale-[1.03] transition-transform"
                >
                  <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric/25 to-violet/25 flex items-center justify-center flex-shrink-0">
                    <c.icon size={16} className="text-cyan" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-primary-foreground/60">{c.label}</span>
                    <span className="block text-sm font-medium text-primary-foreground truncate">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-electric to-violet text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:scale-105 transition-transform"
              >
                <CalendarCheck size={17} /> Book a Meeting
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 glass text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:scale-105 transition-transform"
              >
                {copied ? <Check size={17} className="text-green-400" /> : <Copy size={17} />}
                {copied ? "Email copied" : "Copy email"}
              </button>
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-3 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 text-primary-foreground/80 text-sm">
              <MapPin size={16} className="text-cyan" /> Pune, Maharashtra, India
            </div>
            <iframe
              title="Pune, India — location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=73.72%2C18.42%2C73.99%2C18.65&layer=mapnik"
              loading="lazy"
              className="w-full h-[22rem] rounded-2xl border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
