import React, { useState, useMemo } from 'react';
import {
  UtensilsCrossed,
  Flame,
  Award,
  Fish,
  Sandwich,
  Wine,
  Cake,
  Search,
  MessageCircle,
  Plus,
} from 'lucide-react';
import { menuCategories, menuItems, type MenuItem, type MenuCategory } from '../data/menuData';
import { getWhatsAppUrl } from '../data/restaurantInfo';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory['id']>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'Award': return <Award className="w-4 h-4" />;
      case 'Fish': return <Fish className="w-4 h-4" />;
      case 'Sandwich': return <Sandwich className="w-4 h-4" />;
      case 'Wine': return <Wine className="w-4 h-4" />;
      case 'Cake': return <Cake className="w-4 h-4" />;
      default: return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-ny-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ny-card border border-ny-gold/30 text-ny-gold text-xs font-semibold tracking-widest uppercase">
            <span>Nuestra Carta Gastronómica</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ny-cream">
            Menú & Delicias <br />
            <span className="text-gold-gradient italic">en New York Restaurant</span>
          </h2>
          <p className="text-ny-cream/70 text-sm sm:text-base font-light">
            Recetas auténticas preparadas al momento con los más altos estándares de calidad e higiene.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-4 h-4 text-ny-gold/70 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por plato, ingrediente o corte..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-ny-card border border-ny-border text-ny-cream text-sm placeholder:text-ny-muted focus:outline-none focus:border-ny-gold/60 focus:ring-1 focus:ring-ny-gold/50 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-ny-muted hover:text-ny-cream"
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Category Tabs Pill Carousel */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-ny-gold text-ny-bg shadow-gold-sm font-bold scale-105'
                    : 'bg-ny-card border border-ny-border text-ny-cream/80 hover:text-ny-gold hover:border-ny-gold/40'
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-ny-card/40 rounded-3xl border border-dashed border-ny-border">
            <p className="text-ny-muted text-base">No encontramos ningún plato que coincida con tu búsqueda.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-ny-gold/20 text-ny-gold text-xs font-semibold hover:bg-ny-gold hover:text-ny-bg transition-all"
            >
              Ver todos los platos
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-ny-card border border-ny-border hover:border-ny-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-md flex flex-col justify-between"
              >
                {/* Image Top */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ny-card via-black/20 to-transparent"></div>

                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-ny-gold/95 backdrop-blur-sm text-ny-bg font-bold text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}

                  {/* Price Tag */}
                  <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-ny-gold/30 text-ny-gold font-bold text-sm px-3 py-1 rounded-full">
                    {item.formattedPrice}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl font-bold text-ny-cream group-hover:text-ny-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-ny-cream/70 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedDish(item)}
                      className="text-xs text-ny-muted hover:text-ny-cream flex items-center gap-1 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5 text-ny-gold" />
                      <span>Ver detalles</span>
                    </button>

                    <a
                      href={getWhatsAppUrl(`¡Hola! Deseo ordenar "${item.name}" (${item.formattedPrice}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500 hover:text-white text-xs font-medium transition-all"
                      title="Pedir por WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Pedir</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WhatsApp Custom Order Notice */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-ny-card via-ny-cardHover to-ny-card border border-ny-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-ny-cream">
              ¿Deseas una preparación especial o menú para grupos?
            </h4>
            <p className="text-xs sm:text-sm text-ny-muted">
              Contáctanos directamente por WhatsApp para banquetes, fechas especiales o solicitudes personalizadas.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('¡Hola! Me gustaría consultar por opciones de menú especial o para grupos grandes.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Hablar con el Chef / Admin</span>
          </a>
        </div>
      </div>

      {/* Dish Detail Dialog Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-ny-card border border-ny-border rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative">
            <div className="relative h-64 w-full">
              <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-ny-cream flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
              {selectedDish.badge && (
                <span className="absolute top-4 left-4 bg-ny-gold text-ny-bg font-bold text-xs px-3 py-1 rounded-full uppercase">
                  {selectedDish.badge}
                </span>
              )}
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-ny-cream">{selectedDish.name}</h3>
                <span className="text-xl font-bold text-ny-gold">{selectedDish.formattedPrice}</span>
              </div>

              <p className="text-ny-cream/80 text-sm leading-relaxed">{selectedDish.description}</p>

              <div className="grid grid-cols-2 gap-3 text-xs text-ny-muted pt-2 border-t border-white/5">
                <div>
                  <span className="block text-ny-cream font-medium">Porción:</span>
                  <span>{selectedDish.portion || 'Individual / Especial'}</span>
                </div>
                <div>
                  <span className="block text-ny-cream font-medium">Tiempo de Cocina:</span>
                  <span>{selectedDish.cookingTime || '15 - 20 minutos'}</span>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <a
                  href={getWhatsAppUrl(`¡Hola! Deseo pedir el plato "${selectedDish.name}" (${selectedDish.formattedPrice}). ¿Me confirman disponibilidad?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir ahora por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
