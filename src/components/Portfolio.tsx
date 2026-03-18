import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const images = [
    "https://raw.githubusercontent.com/kidiee558/StudioASUANA/main/511617452_1280195094112953_8174221848551632459_n.jpg",
    "https://raw.githubusercontent.com/kidiee558/StudioASUANA/main/554100177_1359027529563042_6963698006472625886_n.jpg",
    "https://raw.githubusercontent.com/kidiee558/StudioASUANA/main/556713142_1363407245791737_6214864822149209462_n.jpg",
    "https://raw.githubusercontent.com/kidiee558/StudioASUANA/main/616843442_1459837582815369_8674560473839451640_n.jpg",
    "https://raw.githubusercontent.com/kidiee558/StudioASUANA/main/641493492_1494156466050147_284723164048929586_n.jpg",
    "https://raw.githubusercontent.com/kidiee558/StudioASUANA/main/651254173_1509434287855698_6044534213391967117_n.jpg"
  ];

  return (
    <section id="portfolio" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-brand-accent mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight mb-6">
            Nasze <span className="italic text-brand-muted">prace</span>
          </h3>
          <p className="text-brand-dark/70 leading-relaxed">
            Zobacz efekty naszych zabiegów. Każdy klient to dla nas nowa, piękna historia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className="relative aspect-[4/5] overflow-hidden rounded-xl group shadow-sm border border-brand-dark/5 bg-white flex items-center justify-center p-1 md:p-2 cursor-pointer"
            >
              <img
                src={src}
                alt={`Praca ${index + 1}`}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none md:pointer-events-auto">
                <span className="text-white font-serif italic text-sm md:text-xl text-center px-2">Zobacz efekt</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 left-6 text-white hover:text-brand-accent transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={40} />
          </button>
          
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Powiększone zdjęcie" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
