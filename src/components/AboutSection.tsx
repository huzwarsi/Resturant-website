import React from 'react';
import { Heart, Users, Flame, Wine, CheckCircle2 } from 'lucide-react';
import { restaurantImages } from '../data/images';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Flame,
      title: 'Parrilla & Cortes Selectos',
      desc: 'Técnicas de asado al carbón con carnes maduradas y cortes estilo New York con sazón inigualable.',
    },
    {
      icon: Users,
      title: 'Ambiente Familiar',
      desc: 'Un espacio acogedor diseñado para reunir a familias, amigos y crear memorias alrededor de la mesa.',
    },
    {
      icon: Heart,
      title: 'El Hogar de tus Celebraciones',
      desc: 'Cumpleaños, aniversarios, cenas románticas y reuniones de empresa con atención personalizada.',
    },
    {
      icon: Wine,
      title: 'Bar & Coctelería de Autor',
      desc: 'Licores selectos, cocteles refrescantes y cervezas bien frías para acompañar cada velada.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-ny-bg relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-ny-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Imagery Grid (Editorial Collage) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Main large image */}
              <div className="col-span-8 overflow-hidden rounded-2xl border border-ny-border shadow-2xl relative group">
                <img
                  src={restaurantImages.interiorWarm}
                  alt="Interior New York Restaurant Turbo"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs uppercase tracking-wider text-ny-gold font-semibold">Salón Principal</span>
                  <p className="text-sm text-ny-cream font-medium">Calidez, comodidad y elegancia en Turbo</p>
                </div>
              </div>

              {/* Offset secondary image */}
              <div className="col-span-4 flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl border border-ny-border h-44 sm:h-48 group">
                  <img
                    src={restaurantImages.diningFamily}
                    alt="Celebraciones familiares"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-ny-border h-32 sm:h-44 group">
                  <img
                    src={restaurantImages.chefGrill}
                    alt="Parrilla y cocina al fuego"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-ny-card border border-ny-gold/40 p-4 rounded-2xl shadow-gold-md backdrop-blur-md max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-ny-gold/20 flex items-center justify-center text-ny-gold font-serif font-bold text-2xl">
                  +8
                </div>
                <div>
                  <div className="font-bold text-ny-cream text-sm">Años Creando Momentos</div>
                  <div className="text-xs text-ny-muted">Tradición y buen gusto en Turbo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-ny-gold text-xs font-semibold tracking-widest uppercase">
              <span className="w-8 h-px bg-ny-gold"></span>
              <span>Nuestra Esencia & Tradición</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ny-cream leading-tight">
              Más que un restaurante, un <br />
              <span className="text-gold-gradient italic">lugar de encuentro</span> para celebrar.
            </h2>

            <p className="text-ny-cream/80 text-base sm:text-lg leading-relaxed font-light">
              Nacimos en <strong>Turbo, Antioquia</strong> con el firme propósito de brindarle a nuestra comunidad un espacio sofisticado, cálido y familiar. Combinamos la pasión por las carnes premium a la brasa con la riqueza de la cocina caribeña y cócteles preparados con maestría.
            </p>

            <p className="text-ny-cream/70 text-sm sm:text-base leading-relaxed font-light">
              Cada rincón de New York Restaurant ha sido concebido para convertir un almuerzo cotidiano en un deleite y una cena de cumpleaños o aniversario en un recuerdo inolvidable.
            </p>

            {/* Feature Bullets */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-ny-card/60 border border-ny-border/60 hover:border-ny-gold/40 transition-all hover:bg-ny-card"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-ny-gold/10 text-ny-gold flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-ny-cream">{item.title}</h3>
                      <p className="text-xs text-ny-muted mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Values summary */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-ny-cream/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-ny-gold" />
                Ingredientes 100% frescos locales
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-ny-gold" />
                Salón climatizado y terraza al aire libre
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-ny-gold" />
                Atención cálida y personalizada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
