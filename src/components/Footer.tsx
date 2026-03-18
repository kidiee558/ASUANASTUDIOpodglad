import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-brand-light/10 pb-12">
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl tracking-wider">ASUANA</h2>
            <p className="text-brand-light/60 text-sm leading-relaxed max-w-xs">
              Studio kosmetologii holistycznej. Twoja droga do piękna.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-brand-accent">Szybkie linki</h3>
            <ul className="space-y-3 text-brand-light/60 text-sm">
              <li><a href="#o-nas" className="hover:text-brand-accent transition-colors">O nas</a></li>
              <li><a href="#oferta" className="hover:text-brand-accent transition-colors">Oferta</a></li>
              <li><a href="#cennik" className="hover:text-brand-accent transition-colors">Cennik</a></li>
              <li><a href="#portfolio" className="hover:text-brand-accent transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-brand-accent">Rezerwacja</h3>
            <p className="text-brand-light/60 text-sm leading-relaxed">
              Umów się na wizytę online przez system Booksy lub telefonicznie.
            </p>
            <a 
              href="https://booksy.com/pl-pl/245569_studio-asuana_salon-kosmetyczny_7459_swidnik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white transition-colors text-xs uppercase tracking-widest"
            >
              Booksy
            </a>
          </div>

        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-light/40">
          <p>&copy; {new Date().getFullYear()} Studio Asuana. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2 md:mt-0">
            Projekt i wykonanie: <a href="https://www.pawelstudio.pl/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">PAWELSTUDIO</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
