import { Mail, Phone, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 gradient-navy">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <p className="text-sm font-semibold text-gold tracking-widest uppercase mb-3">Contact</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Let's Build Something Impactful</h2>
        <p className="text-primary-foreground/70 mb-10 max-w-md mx-auto">Whether it's a startup idea, collaboration, or just a conversation — I'm always open.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="mailto:ceo@xplorevo.tech" className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-5 py-3 rounded-xl text-sm font-medium hover:bg-primary-foreground/15 transition-colors">
            <Mail size={16} /> ceo@xplorevo.tech
          </a>
          <a href="tel:+919067572205" className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-5 py-3 rounded-xl text-sm font-medium hover:bg-primary-foreground/15 transition-colors">
            <Phone size={16} /> +91 9067572205
          </a>
          <a href="https://www.linkedin.com/in/harshad-pakhale-221hp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-5 py-3 rounded-xl text-sm font-medium hover:bg-primary-foreground/15 transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://www.instagram.com/harshad.h.pakhale.01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-5 py-3 rounded-xl text-sm font-medium hover:bg-primary-foreground/15 transition-colors">
            <Instagram size={16} /> Instagram
          </a>
        </div>
        <a href="https://wa.me/919067572205" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-primary-foreground px-8 py-3.5 rounded-xl text-base font-bold hover:bg-green-600 transition-colors">
          <MessageCircle size={20} /> Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
