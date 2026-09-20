import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Flame } from 'lucide-react';
import { menuItems } from '../data/menuData';
import { getWhatsAppUrl } from '../data/restaurantInfo';

export const SpecialtiesSection: React.FC = () => {
  const specialties = menuItems.filter((item) => item.isSpecialty).slice(0, 4);

  return (
    <section id="specialties" className="py-24 bg-[#0F0E13] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ny-gold/10 border border-ny-gold/20 text-ny-gold text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-ny-gold" />
            <span>Nuestras Especialidades de la Casa</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ny-cream">
            Creaciones Maestras <br />
            <span className="text-gold-gradient italic">del Fuego & del Mar</span>
          </h2>
          <p className="text-ny-cream/70 text-sm sm:text-base font-light">
            Seleccionamos minuciosamente cada corte y fruto marino, cocinados al punto exacto para despertar tus sentidos.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {specialties.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-ny-card border border-ny-border hover:border-ny-gold/50 transition-all duration-500 hover:shadow-gold-md flex flex-col"
            >
              {/* Image Container with Editorial Aspect Ratio */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ny-card via-black/30 to-transparent"></div>

                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-4 left-4 bg-ny-gold text-ny-bg text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                    {item.badge}
                  </div>
                )}

                {/* Price Pill */}
                <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md border border-ny-gold/40 text-ny-gold font-bold text-sm px-3.5 py-1.5 rounded-full">
                  {item.formattedPrice}
                </div>

                {/* Extra info badge */}
                {item.portion && (
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-ny-cream/80 text-[11px] px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                    <Flame className="w-3 h-3 text-ny-gold" />
                    <span>{item.portion}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-ny-cream group-hover:text-ny-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-ny-cream/75 text-sm sm:text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-ny-muted font-medium">
                    {item.cookingTime ? `Tiempo estimado: ${item.cookingTime}` : 'Preparado al instante'}
                  </span>

                  <a
                    href={getWhatsAppUrl(`¡Hola! Deseo pedir la especialidad "${item.name}" (${item.formattedPrice}). ¿Tienen disponibilidad?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ny-gold/15 hover:bg-ny-gold hover:text-ny-bg text-ny-gold font-semibold text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Pedir por WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore full menu banner */}
        <div className="mt-14 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-transparent border border-ny-gold/50 text-ny-cream hover:text-ny-gold hover:border-ny-gold text-sm uppercase tracking-wider font-semibold transition-all group"
          >
            <span>Explorar Todos los Platos de la Carta</span>
            <ArrowRight className="w-4 h-4 text-ny-gold group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
