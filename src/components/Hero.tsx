import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/kidiee558/StudioASUANA/main/ZdjeciePani%20(1).webp" 
          alt="Studio Asuana - Tło" 
          className="w-full h-full object-cover object-bottom md:object-center"
          referrerPolicy="no-referrer"
        />
        {/* Elegant gradient overlay: darker on the left for our text, transparent on the right for the image text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 md:from-black/80 md:via-black/40 md:to-transparent md:via-black/30"></div>
        {/* Subtle gradient at the top for the navbar */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-20 w-full mt-16">
        <div className="flex flex-col items-start text-left space-y-8 max-w-2xl">
          <p className="text-brand-light uppercase tracking-[0.3em] text-xs sm:text-sm font-medium mb-2 drop-shadow-md">
            Gabinet Kosmetologii Holistycznej
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight drop-shadow-lg">
            Twoja droga <br />
            <span className="italic font-light text-brand-accent">do piękna</span>
          </h1>
          <p className="text-brand-light/90 text-base md:text-xl max-w-xl leading-relaxed font-light drop-shadow-md">
            Specjalizujemy się w kosmetologii przeciwstarzeniowej i holistycznym podejściu do problemów skórnych.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-8 w-full sm:w-auto">
            <a 
              href="https://booksy.com/pl-pl/245569_studio-asuana_salon-kosmetyczny_7459_swidnik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors duration-300 uppercase tracking-widest text-sm shadow-lg w-full sm:w-auto"
            >
              Umów wizytę
            </a>
            <a 
              href="#oferta"
              className="inline-flex items-center justify-center px-10 py-4 border border-white text-white hover:bg-white hover:text-brand-dark transition-colors duration-300 uppercase tracking-widest text-sm w-full sm:w-auto"
            >
              Poznaj ofertę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
