import React from 'react';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-brand-accent mb-4">Kontakt</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight mb-6">
                Odwiedź <span className="italic text-brand-muted">nas</span>
              </h3>
              <p className="text-brand-dark/70 leading-relaxed">
                Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami telefonicznie lub umów wizytę online.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark mb-2">Adres</h4>
                  <p className="text-brand-dark/70 leading-relaxed">
                    ul. Kardynała Stefana Wyszyńskiego 14<br />
                    (1 piętro)<br />
                    Świdnik
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark mb-2">Recepcja</h4>
                  <a href="tel:887835794" className="text-brand-dark/70 hover:text-brand-accent transition-colors text-lg">
                    887-835-794
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark mb-2">Godziny otwarcia</h4>
                  <ul className="text-brand-dark/70 leading-relaxed space-y-1">
                    <li>Poniedziałek: 16:00 - 18:00</li>
                    <li>Wtorek - Piątek: 11:00 - 19:00</li>
                    <li>Sobota: 09:00 - 14:00</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="https://booksy.com/pl-pl/245569_studio-asuana_salon-kosmetyczny_7459_swidnik"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-brand-light hover:bg-brand-accent transition-colors duration-300 uppercase tracking-widest text-sm space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Zarezerwuj wizytę online</span>
              </a>
            </div>
          </div>

          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-brand-dark/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.882483864115!2d22.697401!3d51.2185066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722544f990b9749%3A0xfbbfdd4de33c1562!2sStudio%20kosmetologii%20holistycznej%20Asuana!5e0!3m2!1spl!2spl!4v1710771398000!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '500px' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa dojazdu do Studio Asuana"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
