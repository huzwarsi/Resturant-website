import React from 'react';
import { Sparkles, GlassWater, Users2, Music, PartyPopper } from 'lucide-react';
import { restaurantImages } from '../data/images';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      icon: Users2,
      title: 'Reuniones Familiares & Niños',
      subtitle: 'Espacio Cálido para Toda la Familia',
      description: 'Mesas amplias, atenciones especiales para los más pequeños y un ambiente donde todos se sienten como en casa.',
      image: restaurantImages.familyKids,
    },
    {
      icon: PartyPopper,
      title: 'Cumpleaños Inolvidables',
      subtitle: 'Celebraciones con Amor en Turbo',
      description: 'Decoración de mesa, torta con velitas, sangría y toda la alegría para cantarle a los que más amas.',
      image: restaurantImages.birthdayFamily,
    },
    {
      icon: GlassWater,
      title: 'Coctelería con Fuego & Estilo',
      subtitle: 'Bebidas de Autor & Show en Mesa',
      description: 'Nuestras copas exclusivas presentadas con chispas de fuego y flores naturales para brindar como nunca antes.',
      image: restaurantImages.cocktailExperience,
    },
    {
      icon: Music,
      title: 'Noches Mágicas de Celebración',
      subtitle: 'Luces, Música & Ambiente VIP',
      description: 'Luces neón, ambientación nocturna y salones climatizados para tus fechas y cenas más memorables.',
      image: restaurantImages.celebrationNight,
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#0A090D] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ny-card border border-ny-gold/30 text-ny-gold text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-ny-gold" />
            <span>La Experiencia New York</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ny-cream">
            Vive Cada Instante <br />
            <span className="text-gold-gradient italic">como una Ocasión Especial</span>
          </h2>
          <p className="text-ny-cream/70 text-sm sm:text-base font-light">
            En New York Restaurant cuidamos cada detalle: desde el fuego de la parrilla hasta la sonrisa con la que te recibimos.
          </p>
        </div>

        {/* 4 Cards Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-ny-card border border-ny-border hover:border-ny-gold/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Preview Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ny-card via-black/40 to-transparent"></div>
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-ny-card/90 backdrop-blur-md border border-ny-gold/40 flex items-center justify-center text-ny-gold shadow-md">
                  <exp.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-ny-gold uppercase tracking-wider block">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ny-cream mt-1 group-hover:text-ny-gold transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-ny-cream/70 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[11px] text-ny-muted font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-ny-gold"></span>
                    Disponible todos los días
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
