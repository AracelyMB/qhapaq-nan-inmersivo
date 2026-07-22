import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import { Compass, Sparkles, Heart, ArrowUp, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-andean-900 andean-grid text-andean-50 selection:bg-incagold-500 selection:text-andean-900 relative">
      {/* Header Sticky Navigation */}
      <Header onContactClick={() => scrollToSection("#contacto")} />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero onDiscoverClick={() => scrollToSection("#como-funciona")} />

        {/* About Company Section */}
        <About />

        {/* Services Showcase Section */}
        <Services />

        {/* Interactive Step Timeline Section */}
        <HowItWorks />

        {/* Value Proposition & Benefits Section */}
        <Benefits />

        {/* Immersive Photo Lightbox Gallery Section */}
        <Gallery />

        {/* B2B & Public Alliances Section */}
        <Partners />

        {/* Contact Form & WhatsApp CTA Section */}
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer className="bg-andean-900 border-t border-andean-500/10 py-16 relative overflow-hidden" id="site-footer">
        {/* Subtle decorative gold line at the top */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-incagold-500/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Logo Brand Footer Segment */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-terracotta-500 to-incagold-500 p-[1px]">
                <div className="w-full h-full bg-andean-900 rounded-[7px] flex items-center justify-center">
                  <Compass className="w-4 h-4 text-incagold-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-base text-white tracking-tight">
                  QhapaqRoute
                </span>
                <span className="font-mono text-[8px] tracking-wider text-techblue-400 uppercase font-semibold">
                  Gamificación Cultural & RA
                </span>
              </div>
            </div>

            <p className="text-xs text-andean-50/50 font-light max-w-sm leading-relaxed">
              Dedicados a revalorizar el legado prehispánico a través de soluciones de realidad aumentada, gamificación cultural y plataformas offline avanzadas para el viajero independiente y operadores turísticos.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Youtube, href: "#" }
              ].map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-andean-500/10 border border-andean-500/10 flex items-center justify-center text-andean-50/60 hover:text-white hover:bg-andean-500/25 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Segments */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[9px] text-andean-50/45 uppercase tracking-wider font-semibold">
              Estructura Web
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Sobre Nosotros", href: "#nosotros" },
                { name: "Servicios", href: "#servicios" },
                { name: "Cómo Funciona", href: "#como-funciona" },
                { name: "Beneficios", href: "#beneficios" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-andean-50/60 hover:text-white transition-colors duration-300 w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-[9px] text-andean-50/45 uppercase tracking-wider font-semibold">
              Compromiso de Sostenibilidad
            </h4>
            <p className="text-xs text-andean-50/50 font-light leading-relaxed">
              Nuestras reconstrucciones digitales reducen la huella de carbono turística y evitan la degradación de sitios arqueológicos declarados Patrimonio de la Humanidad por la UNESCO.
            </p>
            <p className="text-[11px] text-incagold-400 font-mono italic">
              Próximas rutas: Ingapirca, Cuenca histórica y el corredor andino.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-incagold-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider">TECNOLOGÍA RESPONSABLE</span>
            </div>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-andean-500/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-andean-50/40 font-mono">
          <span>
            © {new Date().getFullYear()} QhapaqRoute. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3 h-3 text-terracotta-500 fill-terracotta-500 animate-pulse" />
            <span>para el turismo andino.</span>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-terracotta-500 hover:bg-terracotta-600 border border-terracotta-600 text-white shadow-xl hover:shadow-terracotta-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-incagold-400 focus:ring-offset-2 focus:ring-offset-andean-900 cursor-pointer"
          aria-label="Volver arriba"
          id="btn-scroll-top"
        >
          <ArrowUp className="w-4 h-4 animate-bounce" />
        </button>
      )}
    </div>
  );
}

