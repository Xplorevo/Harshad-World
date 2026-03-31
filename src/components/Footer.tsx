import xplorevoLogo from "@/assets/xplorevo-logo.jpg";
import ecellLogo from "@/assets/ecell-logo.png";
import xtnLogo from "@/assets/xtn-logo.png";

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center gap-6">
        {/* Logos */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a href="https://xplorevo.tech" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src={xtnLogo} alt="XTN - Xplorevo Tech Network" className="h-10 rounded-lg object-contain" />
          </a>
          <a href="https://ecellmeswcoe.netlify.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src={ecellLogo} alt="E-Cell MESWCOE" className="h-10 rounded-lg object-contain bg-primary-foreground/10 p-1" />
          </a>
          <a href="https://xplorevo.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src={xplorevoLogo} alt="Xplorevo" className="h-10 rounded-lg object-contain" />
          </a>
        </div>
        <p className="text-sm text-primary-foreground/60 text-center">
          © {new Date().getFullYear()} Mr. Harshad Harishchandra Pakhale. Built with passion & purpose.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
