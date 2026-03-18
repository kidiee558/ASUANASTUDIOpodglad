import React from 'react';

export default function Pricing() {
  const pricingCategories = [
    {
      title: "Konsultacje",
      items: [
        { name: "Konsultacja kosmetologiczna Premium", price: "170 zł" },
        { name: "Konsultacja kosmetologiczna Vip", price: "270 zł" },
      ]
    },
    {
      title: "Oczyszczanie i Peelingi",
      items: [
        { name: "Oczyszczanie twarzy", price: "250 zł" },
        { name: "Oczyszczanie wodorowe twarzy H2peel", price: "250 zł" },
        { name: "Peeling Azac", price: "230 zł" },
        { name: "Peeling J.Evolution /Fenoll peel", price: "280 zł" },
        { name: "Peeling retinol+ wit. C", price: "280 zł" },
        { name: "Spersonalizowany peeling", price: "250 zł" },
        { name: "Multifunkcyjny peeling okolic oczu", price: "130 zł" },
        { name: "Peeling Migdałowy hybrydowy", price: "250 zł" },
        { name: "Peeling kawitacyjny + maska", price: "150 zł" },
        { name: "Zabieg z peelingiem peptydowym", price: "250 zł" },
      ]
    },
    {
      title: "Zabiegi na Twarz",
      items: [
        { name: "Spersonalizowany zabieg pielęgnacyjny twarzy podstawowy", price: "250 zł" },
        { name: "Radiofrekwencja twarz + szyja+ dekolt", price: "1000 zł" },
        { name: "Radiofrekwencja twarz", price: "600 zł" },
        { name: "Elektrostymulacja mięśni twarzy-Bioskinlift- fitness dla mięśni", price: "150 zł" },
        { name: "Terapia egzosomami", price: "780 zł" },
        { name: "Kosmetologiczne pinezkowanie skóry", price: "290 zł" },
        { name: "Zamykanie naczynek", price: "od 100 zł" },
        { name: "Japoński masaż twarzy Kobido Plus", price: "200 zł" },
      ]
    },
    {
      title: "Oprawa Oczu",
      items: [
        { name: "Henna brwi + regulacja", price: "70 zł" },
        { name: "Stylizacja brwi laminacja", price: "150 zł" },
        { name: "Laminacja rzęs", price: "150 zł" },
      ]
    },
    {
      title: "Kosmetyka Ciała",
      items: [
        { name: "Liposukcja ultradźwiękowa / 1 partia", price: "150 zł" },
        { name: "Zabieg na ciało falami radiowymi RF / 1 partia", price: "220 zł" },
        { name: "Rf + liposukcja ultradźwiękowa / 1 partia", price: "300 zł" },
        { name: "Rf + liposukcja ultradźwiękowa pakiet 5 zabiegów", price: "1200 zł" },
      ]
    },
    {
      title: "Depilacja",
      items: [
        { name: "Depilacja woskiem pach", price: "50 zł" },
        { name: "Depilacja woskiem bikini klasyczne", price: "50 zł" },
      ]
    },
    {
      title: "Makijaż",
      items: [
        { name: "Makijaż specjalistyczny mineralny", price: "120 zł" },
        { name: "Kurs specjalistycznego makijażu mineralnego", price: "300 zł" },
      ]
    },
    {
      title: "Pozostałe",
      items: [
        { name: "Zabieg spa na dłonie", price: "100 zł" },
        { name: "Przekłuwanie uszu", price: "130 zł" },
      ]
    }
  ];

  return (
    <section id="cennik" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-brand-accent mb-4">Cennik</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight mb-6">
            Inwestycja w <span className="italic text-brand-muted">siebie</span>
          </h3>
          <p className="text-brand-dark/70 leading-relaxed max-w-2xl mx-auto">
            Ceny mogą ulec zmianie w zależności od indywidualnych potrzeb i zużycia materiałów.
          </p>
        </div>

        <div className="columns-1 lg:columns-2 gap-4 lg:gap-6">
          {pricingCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className="bg-brand-light rounded-3xl p-6 sm:p-8 shadow-sm border border-brand-dark/5 break-inside-avoid mb-4 lg:mb-6 inline-block w-full"
            >
              <h4 className="font-serif text-2xl text-brand-accent mb-6 border-b border-brand-dark/10 pb-4">
                {category.title}
              </h4>
              <ul className="divide-y divide-brand-dark/5">
                {category.items.map((item, index) => (
                  <li key={index} className="py-3 flex justify-between items-center group">
                    <span className="text-brand-dark/80 text-sm sm:text-base font-medium pr-4 group-hover:text-brand-accent transition-colors duration-300">
                      {item.name}
                    </span>
                    <span className="font-serif text-brand-dark whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://booksy.com/pl-pl/245569_studio-asuana_salon-kosmetyczny_7459_swidnik"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-dark text-brand-light hover:bg-brand-accent transition-colors duration-300 uppercase tracking-widest text-sm rounded-full shadow-lg"
          >
            Zarezerwuj termin na Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
