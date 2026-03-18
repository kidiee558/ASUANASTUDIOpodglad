import React from 'react';
import { Sparkles, Eye, Hand, Activity, Scissors, Brush } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-brand-accent" />,
      title: "Kosmetologia",
      description: "Zabiegi manualne i aparaturowe szyte na miarę. Duży nacisk na konsultację kosmetologiczną i ocenę wstępną problemu."
    },
    {
      icon: <Eye className="w-8 h-8 text-brand-accent" />,
      title: "Upiększanie Oprawy Oczu",
      description: "Przedłużanie rzęs metodą 1:1, farbowanie henną lub farbkami, henna pudrowa z serii eco wzmacniająca włoski."
    },
    {
      icon: <Hand className="w-8 h-8 text-brand-accent" />,
      title: "Dłonie i Stopy",
      description: "Przedłużanie paznokci, manicure japoński, hybrydowy, klasyczny, biologiczny, frezarkowy oraz pedicure i zabiegi z parafiną."
    },
    {
      icon: <Activity className="w-8 h-8 text-brand-accent" />,
      title: "Kosmetyka Ciała",
      description: "Zabiegi wspomagane nowoczesną aparaturą i aromatoterapią. Liposukcja kawitacyjna jako uzupełnienie terapii antycellulitowych."
    },
    {
      icon: <Scissors className="w-8 h-8 text-brand-accent" />,
      title: "Depilacja",
      description: "Woskowanie na ciepło dostosowane do obszaru ciała oraz elektroliza - trwała metoda usuwania owłosienia."
    },
    {
      icon: <Brush className="w-8 h-8 text-brand-accent" />,
      title: "Pozostałe Zabiegi",
      description: "Makijaż dzienny i wieczorowy o niezawodnej trwałości. Sprzedaż kosmetyków mineralnych i lekcje makijażu Promineral."
    }
  ];

  return (
    <section id="oferta" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-brand-accent mb-4">Nasza Oferta</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight mb-6">
            Kompleksowa <span className="italic text-brand-muted">pielęgnacja</span>
          </h3>
          <p className="text-brand-dark/70 leading-relaxed">
            Filozofią firmy jest indywidualne podejście do klienta, a więc i oferta spersonalizowana tzw. „szyta na miarę”.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-dark/5 hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="font-serif text-2xl text-brand-dark mb-4">{service.title}</h4>
              <p className="text-brand-dark/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
