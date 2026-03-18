import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Oferta', href: '#oferta' },
    { name: 'Cennik', href: '#cennik' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-brand-light shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 z-[60]">
            <a href="#" className="block">
              <img 
                src="https://raw.githubusercontent.com/kidiee558/StudioASUANA/main/Logo%20Studio%20Asuana.png" 
                alt="Studio Asuana Logo" 
                className={`h-12 md:h-16 w-auto object-contain transition-all duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'brightness-100' : 'brightness-0 invert'
                }`}
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  isScrolled ? 'text-brand-dark/80 hover:text-brand-accent' : 'text-white/90 hover:text-brand-accent drop-shadow-md'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://booksy.com/pl-pl/245569_studio-asuana_salon-kosmetyczny_7459_swidnik"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 border transition-colors text-sm uppercase tracking-widest ${
                isScrolled 
                  ? 'border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-brand-dark'
              }`}
            >
              Umów wizytę
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-[60]">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-brand-dark' : 'text-white drop-shadow-md'
              }`}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-light z-50 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl uppercase tracking-[0.3em] text-brand-dark hover:text-brand-accent transition-all duration-300 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://booksy.com/pl-pl/245569_studio-asuana_salon-kosmetyczny_7459_swidnik"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`px-10 py-4 border border-brand-accent text-brand-accent uppercase tracking-[0.2em] text-sm hover:bg-brand-accent hover:text-white transition-all duration-500 transform ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            Zarezerwuj wizytę
          </a>
        </div>
      </div>
    </nav>
  );
}
