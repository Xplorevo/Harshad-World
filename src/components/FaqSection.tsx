import SectionHeading from "@/components/shared/SectionHeading";

export const faqs = [
  {
    q: "Who is Harshad Pakhale?",
    a: "Harshad Harishchandra Pakhale is an AI entrepreneur and full stack developer from Pune, Maharashtra, India. He is the Founder & CEO of Xplorevo Pvt Ltd, Founder of the Xplorevo Tech Network, and Founder & President of the Entrepreneurship Cell at MES Wadia College of Engineering, Pune.",
  },
  {
    q: "What does Harshad Pakhale build?",
    a: "He builds AI-first products end to end — from idea and product strategy to development and deployment. His work includes Xplorevo (a TravelTech platform for student travel across India), YojanaRadar (an AI platform that matches citizens with relevant government schemes), and the Xplorevo Tech Network student developer community.",
  },
  {
    q: "What services does Harshad Pakhale offer?",
    a: "Mentorship and career roadmaps for students, MVP development, AI consulting, business strategy and pitch support for startups, and technology consulting, AI automation and product development for companies.",
  },
  {
    q: "How can I contact or collaborate with Harshad Pakhale?",
    a: "You can email ceo@xplorevo.tech, message +91 90675 72205 on WhatsApp, or connect on LinkedIn at linkedin.com/in/harshad-pakhale-221hp for collaborations, mentorship and partnership requests.",
  },
];

const FaqSection = () => (
  <section id="faq" className="relative py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading
        eyebrow="FAQ"
        title={<>About <span className="text-gradient-brand">Harshad Pakhale</span></>}
        subtitle="Quick answers about my work, products and how to collaborate."
      />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((f) => (
          <article key={f.q} className="glass rounded-2xl p-6">
            <h3 className="text-base font-heading font-bold text-foreground">{f.q}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.a}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
