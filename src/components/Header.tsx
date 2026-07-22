import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Compass, Smartphone, ArrowRight } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Cómo Funciona", href: "#como-funciona" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Galería", href: "#galeria" },
    { name: "Alianzas", href: "#alianzas" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
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

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-andean-900/85 backdrop-blur-md border-b border-andean-500/20 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Branding */}
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, "#inicio")}
          className="flex items-center gap-3.5 group focus:outline-none"
          id="logo-brand"
        >
          <div className="w-9 h-9 border-2 border-incagold-500 rounded-sm rotate-45 flex items-center justify-center transition-transform duration-500 group-hover:rotate-135 relative">
            <div className="w-3.5 h-3.5 bg-incagold-500"></div>
            {/* Pulsing light behind logo */}
            <div className="absolute inset-0 -z-10 bg-incagold-500/20 blur-xs rounded-none"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter leading-none text-white">
              QHAPAQ ÑAN
            </span>
            <span className="text-[10px] tracking-[0.35em] text-techblue-400 font-bold leading-none mt-1">
              INMERSIVO
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-andean-900/40 border border-andean-500/10 rounded-full px-2 py-1.5 backdrop-blur-sm" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-andean-50/80 hover:text-white hover:bg-andean-500/15 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onContactClick}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-500/20 focus:outline-none"
            id="btn-nav-cta"
          >
            {/* Background transitions */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-terracotta-500 to-terracotta-600"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-incagold-600 to-terracotta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            
            <span className="relative flex items-center gap-1.5">
              Descubrir Experiencia
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-andean-500/10 hover:bg-andean-500/20 border border-andean-500/20 text-andean-50 transition-all duration-300"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-andean-900 border-b border-andean-500/20 shadow-xl overflow-hidden backdrop-blur-lg"
            id="mobile-nav-panel"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="py-2.5 px-4 rounded-xl text-sm font-medium text-andean-50/75 hover:text-white hover:bg-andean-500/10 transition-all duration-300 border-l-2 border-transparent hover:border-incagold-500"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="h-px bg-andean-500/10 my-2"></div>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white font-semibold text-sm hover:from-terracotta-600 hover:to-terracotta-700 transition-all duration-300"
                id="btn-mobile-cta"
              >
                <Smartphone className="w-4 h-4" />
                Descubrir Experiencia
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
