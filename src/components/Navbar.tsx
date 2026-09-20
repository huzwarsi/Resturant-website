import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, MessageCircle } from 'lucide-react';
import { restaurantInfo, getWhatsAppUrl } from '../data/restaurantInfo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Especialidades', href: '#specialties' },
    { name: 'Menú', href: '#menu' },
    { name: 'Videos', href: '#reels' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Reservas', href: '#reservations' },
    { name: 'Ubicación', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ny-bg/95 backdrop-blur-md py-3 shadow-lg border-b border-ny-border'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-ny-gold/40 flex items-center justify-center bg-ny-card group-hover:border-ny-gold transition-colors shadow-gold-sm">
            <span className="font-serif text-lg font-bold text-ny-gold tracking-tighter">NY</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-ny-cream group-hover:text-ny-gold transition-colors uppercase">
              New York
            </span>
            <span className="text-[10px] tracking-[0.25em] text-ny-gold/80 uppercase font-medium">
              Restaurant • Turbo
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ny-cream/80 hover:text-ny-gold transition-colors tracking-wide py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-ny-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getWhatsAppUrl('¡Hola! Me gustaría información sobre el menú o reservas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 text-xs font-semibold tracking-wider transition-all"
            title="Chat directo por WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#reservations"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-ny-gold to-ny-goldLight text-ny-bg font-semibold text-xs uppercase tracking-wider hover:shadow-gold-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Reservar Mesa</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="p-2 rounded-full border border-ny-border text-ny-gold hover:bg-ny-card transition-colors"
            title="Llamar"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-ny-cream hover:text-ny-gold focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ny-card/98 backdrop-blur-xl border-b border-ny-border px-6 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-ny-cream hover:text-ny-gold transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="#reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-ny-gold to-ny-goldLight text-ny-bg font-bold text-sm uppercase tracking-wider shadow-gold-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar Mesa en Turbo</span>
            </a>
            <a
              href={getWhatsAppUrl('¡Hola! Me gustaría hacer una consulta o pedido.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-emerald-500/40 text-emerald-400 bg-emerald-500/10 font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
