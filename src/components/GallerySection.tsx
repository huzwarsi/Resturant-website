import React, { useState } from 'react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/images';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'platos', label: 'Platos & Cortes' },
    { id: 'ambiente', label: 'Ambiente & Salón' },
    { id: 'celebraciones', label: 'Celebraciones' },
    { id: 'bar', label: 'Bar & Cócteles' },
  ];

  const filteredImages = galleryImages.filter(
    (img) => activeFilter === 'todos' || img.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-ny-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ny-card border border-ny-gold/30 text-ny-gold text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-ny-gold" />
            <span>Nuestra Galería Fotográfica</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ny-cream">
            Postales de Sabor <br />
            <span className="text-gold-gradient italic">& Buenos Momentos</span>
          </h2>
          <p className="text-ny-cream/70 text-sm sm:text-base font-light">
            Echa un vistazo a la presentación de nuestros platos, la calidez de nuestras mesas y la alegría de nuestros comensales en Turbo.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-ny-gold text-ny-bg font-bold shadow-gold-sm'
                    : 'bg-ny-card border border-ny-border text-ny-cream/70 hover:text-ny-gold hover:border-ny-gold/40'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-ny-card border border-ny-border hover:border-ny-gold/50 transition-all duration-300 aspect-square cursor-pointer shadow-md"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 backdrop-blur-[2px]">
                <div className="self-end">
                  <div className="w-8 h-8 rounded-full bg-ny-gold/90 text-ny-bg flex items-center justify-center shadow-lg">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-ny-gold tracking-widest">
                    {img.categoryLabel}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-ny-cream leading-snug">
                    {img.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Cerrar vista completa"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image & Info */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="max-h-[75vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs uppercase tracking-widest text-ny-gold font-semibold">
                {filteredImages[lightboxIndex].categoryLabel} • {lightboxIndex + 1} de {filteredImages.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ny-cream mt-1">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-ny-cream/70 mt-1">
                {filteredImages[lightboxIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
