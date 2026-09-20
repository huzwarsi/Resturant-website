import React from 'react';
import { Utensils, Calendar, MessageCircle, MapPin, Star, Sparkles, ChevronDown } from 'lucide-react';
import { getWhatsAppUrl } from '../data/restaurantInfo';
import { restaurantImages } from '../data/images';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={restaurantImages.heroMain}
          alt="New York Restaurant Turbo - Cortes Premium y Alta Cocina"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          loading="eager"
        />
        {/* Multi-layered dark gradients for readability and elegance */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ny-bg via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ny-gold/10 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ny-card/90 border border-ny-gold/30 text-ny-gold text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-ny-gold" />
              <span>Restaurante & Bar en Turbo, Colombia</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ny-cream leading-[1.1]">
                Elegancia y sabor <br />
                <span className="text-gold-gradient italic font-normal">en el corazón</span> <br />
                de Turbo.
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-ny-cream/80 max-w-xl font-light leading-relaxed">
              Vive una experiencia gastronómica sin igual en <strong className="text-ny-cream font-semibold">New York Restaurant</strong>. Cortes premium al carbón, la frescura marina de Urabá y el ambiente perfecto para celebrar la vida en familia.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary CTA: Ver Menú */}
              <a
                href="#menu"
                className="flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-ny-gold to-ny-goldLight text-ny-bg font-bold text-sm sm:text-base uppercase tracking-wider shadow-gold-md hover:shadow-gold-glow hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <Utensils className="w-4 h-4 text-ny-bg" />
                <span>Ver Menú</span>
              </a>

              {/* Secondary CTA: Reservar Mesa */}
              <a
                href="#reservations"
                className="flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-ny-card/80 border border-ny-gold/40 text-ny-cream hover:text-ny-gold hover:border-ny-gold font-medium text-sm sm:text-base tracking-wider backdrop-blur-md hover:bg-ny-card transition-all"
              >
                <Calendar className="w-4 h-4 text-ny-gold" />
                <span>Reservar Mesa</span>
              </a>

              {/* WhatsApp Quick CTA */}
              <a
                href={getWhatsAppUrl('¡Hola! Me gustaría hacer un pedido o consultar disponibilidad en New York Restaurant Turbo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/40 hover:text-emerald-200 text-sm font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Highlight Badges / Social Proof */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-ny-card border border-ny-border flex items-center justify-center text-ny-gold">
                  <Star className="w-4 h-4 fill-ny-gold" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ny-cream">4.9 ★ Estrellas</div>
                  <div className="text-[11px] text-ny-muted">Valorado en Urabá</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-ny-card border border-ny-border flex items-center justify-center text-ny-gold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ny-cream">Turbo, Colombia</div>
                  <div className="text-[11px] text-ny-muted">Cra. 14 #106-12</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-lg bg-ny-card border border-ny-border flex items-center justify-center text-ny-gold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-ny-cream">Celebraciones</div>
                  <div className="text-[11px] text-ny-muted">Cumpleaños y eventos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Feature Card */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-ny-gold/30 to-amber-500/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative rounded-2xl overflow-hidden bg-ny-card border border-ny-gold/30 shadow-2xl p-3">
                <div className="relative h-[440px] rounded-xl overflow-hidden">
                  <img
                    src={restaurantImages.newYorkSteak}
                    alt="Plato Insignia New York Restaurant"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* Floating badge inside image */}
                  <div className="absolute top-4 right-4 bg-ny-bg/85 backdrop-blur-md border border-ny-gold/40 px-3 py-1.5 rounded-full text-xs font-semibold text-ny-gold">
                    Plato Insignia
                  </div>

                  {/* Bottom Dish Card Details */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-ny-card/90 backdrop-blur-md border border-ny-border text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-ny-gold font-semibold">Corte Signature</span>
                      <span className="text-sm font-bold text-ny-gold">$68.000 COP</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-ny-cream mt-1">Corte New York Strip 350g</h3>
                    <p className="text-xs text-ny-cream/70 line-clamp-2 mt-1 font-light">
                      Madurado al carbón con hierbas aromáticas silvestres y mantequilla artesanal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-ny-gold/60 flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-widest text-ny-muted">Descubre Más</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};
