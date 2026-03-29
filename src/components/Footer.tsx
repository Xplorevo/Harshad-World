import xplorevoLogo from "@/assets/xplorevo-logo.jpg";
import ecellLogo from "@/assets/ecell-logo.png";
import xtnLogo from "@/assets/xtn-logo.png";

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-6">
        {/* Logos */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <img src={xtnLogo} alt="XTN - Xplorevo Tech Network" className="h-10 rounded-lg object-contain" />
          <img src={ecellLogo} alt="E-Cell MESWCOE" className="h-10 rounded-lg object-contain bg-primary-foreground/10 p-1" />
          <img src={xplorevoLogo} alt="Xplorevo" className="h-10 rounded-lg object-contain" />
        </div>
        <p className="text-sm text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} Mr. Harshad Harishchandra Pakhale. Built with passion & purpose.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
