import React from 'react';
import { Leaf, Sparkles, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-brand-accent" />,
      title: "Podejście Holistyczne",
      description: "Zabiegi wspierają organizm w sprawnej regeneracji tkanek i utrzymaniu ich w dobrej kondycji."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-accent" />,
      title: "Jakość i Bezpieczeństwo",
      description: "Stawiamy na najwyższe standardy, pracując na profesjonalnych kosmetykach i nowoczesnej aparaturze."
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-accent" />,
      title: "Indywidualny Dobór",
      description: "Każdy plan zabiegowo-pielęgnacyjny jest szyty na miarę, bo jesteś dla nas wyjątkowa."
    }
  ];

  return (
    <section id="o-nas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-brand-accent mb-4">O nas</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight mb-6">
                Miejsce z <span className="italic text-brand-muted">wieloletnią tradycją</span>
              </h3>
              <p className="text-brand-dark/70 leading-relaxed mb-6">
                Nasze motto „Studio Asuana Twoja droga do piękna” traktujemy jako misję upiększania ludzi oraz poprawy ich samopoczucia. Prowadzimy sprzedaż kosmetyków profesjonalnych, które są doskonałym boosterem w pielęgnacji skóry, wzmocnieniem i utrwaleniem efektów zabiegów gabinetowych.
              </p>
              <p className="text-brand-dark/70 leading-relaxed">
                Jeżeli jesteś u nas po raz pierwszy zapraszamy do konsultacji przeprowadzonej z mgr kosmetologii aby zniwelować błędy w pielęgnacji skóry i dobrać z naszej oferty to co przy obecnym stanie skóry jest najbardziej efektywne w działaniu.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-brand-dark/10">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-serif text-lg text-brand-dark">{feature.title}</h4>
                  <p className="text-sm text-brand-dark/60 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-light shadow-xl">
              <img 
                src="https://raw.githubusercontent.com/kidiee558/StudioASUANA/main/ZdjeciePani3.png" 
                alt="Joanna Kasperska" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white/95 p-6 sm:p-8 rounded-2xl shadow-xl max-w-xs border border-white/50">
              <h4 className="font-serif text-2xl text-brand-dark mb-2">Joanna Kasperska</h4>
              <p className="text-sm uppercase tracking-widest text-brand-accent mb-4">Mgr Kosmetologii</p>
              <p className="text-sm text-brand-dark/80 leading-relaxed font-medium">
                Specjalizuje się w zabiegach z zakresu kosmetologii estetycznej. Preferuje holistyczne podejście do problemów skórnych i procesu starzenia.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
