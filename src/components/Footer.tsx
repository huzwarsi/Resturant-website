import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Heart, ArrowUp } from 'lucide-react';
import { restaurantInfo, getWhatsAppUrl } from '../data/restaurantInfo';
import { InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08070A] text-ny-cream border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5 text-left">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-ny-gold/50 flex items-center justify-center bg-ny-card">
                <span className="font-serif text-lg font-bold text-ny-gold">NY</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider text-ny-cream uppercase">
                  New York
                </span>
                <span className="text-[10px] tracking-[0.25em] text-ny-gold uppercase font-medium">
                  Restaurant • Turbo
                </span>
              </div>
            </div>

            <p className="text-ny-cream/70 text-xs sm:text-sm leading-relaxed font-light max-w-sm">
              Elegancia, tradición y los mejores cortes y mariscos al carbón en Turbo, Antioquia. El punto de encuentro para celebrar los grandes momentos de la vida.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={restaurantInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ny-card border border-ny-border text-ny-gold hover:border-ny-gold hover:bg-ny-gold hover:text-ny-bg transition-all flex items-center justify-center"
                aria-label="Instagram New York Restaurant"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-ny-card border border-ny-border text-emerald-400 hover:border-emerald-400 hover:bg-emerald-500 hover:text-white transition-all flex items-center justify-center"
                aria-label="WhatsApp New York Restaurant"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${restaurantInfo.phone}`}
                className="w-9 h-9 rounded-full bg-ny-card border border-ny-border text-ny-cream hover:border-ny-gold hover:text-ny-gold transition-all flex items-center justify-center"
                aria-label="Llamar a New York Restaurant"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-ny-gold uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-ny-cream/70">
              <li>
                <a href="#hero" className="hover:text-ny-gold transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-ny-gold transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-ny-gold transition-colors">Carta & Menú</a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-ny-gold transition-colors">Especialidades</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-ny-gold transition-colors">Experiencia</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-ny-gold transition-colors">Galería</a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-ny-gold transition-colors">Reservas</a>
              </li>
              <li>
                <a href="#location" className="hover:text-ny-gold transition-colors">Ubicación</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-ny-gold uppercase tracking-wider">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-xs text-ny-cream/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-ny-gold shrink-0 mt-0.5" />
                <span>{restaurantInfo.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ny-gold shrink-0" />
                <a href={`tel:${restaurantInfo.phone}`} className="hover:text-ny-gold transition-colors">
                  {restaurantInfo.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  WhatsApp: +57 310 363 9495
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-pink-400 shrink-0" />
                <a href={restaurantInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ny-gold transition-colors">
                  {restaurantInfo.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-ny-gold uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-ny-gold" />
              <span>Horarios</span>
            </h4>
            <div className="space-y-2 text-xs">
              {restaurantInfo.hours.map((h, i) => (
                <div key={i} className="pb-1.5 border-b border-white/5">
                  <span className="text-ny-cream/60 block">{h.days}</span>
                  <span className="text-ny-gold font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright and to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ny-muted">
          <p>© {new Date().getFullYear()} New York Restaurant. Todos los derechos reservados. Turbo, Antioquia, Colombia.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Hecho con <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> en Turbo
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-ny-card border border-ny-border text-ny-gold hover:bg-ny-gold hover:text-ny-bg transition-all"
              aria-label="Volver arriba"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
