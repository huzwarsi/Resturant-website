import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/restaurantInfo';

export const StickyWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: '🥩 Consultar Menú & Precios', text: '¡Hola! Quisiera consultar la carta y precios de hoy.' },
    { label: '📅 Reservar una Mesa', text: '¡Hola! Me gustaría hacer una reserva en New York Restaurant Turbo.' },
    { label: '🛵 Pedido para Domicilio / Llevar', text: '¡Hola! Quiero hacer un pedido para recoger o entrega.' },
    { label: '🎉 Celebración de Cumpleaños', text: '¡Hola! Quiero información para celebrar un cumpleaños.' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Concierge Mini Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 rounded-3xl bg-ny-card border border-ny-border shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-800 to-emerald-950 text-white flex items-center justify-between border-b border-emerald-700/50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-ny-bg border border-ny-gold flex items-center justify-center text-ny-gold font-serif font-bold text-sm">
                  NY
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-ny-bg"></span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm leading-tight text-ny-cream">
                  New York Restaurant
                </h4>
                <span className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-ny-gold" />
                  En línea • Turbo, Colombia
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Cerrar ventana"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message bubble */}
          <div className="p-4 bg-[#100F14] space-y-3 text-left">
            <div className="p-3 rounded-2xl rounded-tl-none bg-[#1C1A24] border border-ny-border text-xs text-ny-cream/90 leading-relaxed shadow-sm">
              ¡Hola! 👋 Bienvenido a <strong>New York Restaurant</strong> en Turbo. ¿En qué podemos colaborarte hoy?
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-ny-muted tracking-wider block">
                Selecciona una consulta rápida:
              </span>
              {quickMessages.map((msg, i) => (
                <a
                  key={i}
                  href={getWhatsAppUrl(msg.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block p-2.5 rounded-xl bg-ny-card border border-ny-border/80 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-xs text-ny-cream/80 hover:text-emerald-300 transition-all font-medium"
                >
                  {msg.label}
                </a>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="p-3 bg-ny-card border-t border-white/5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir WhatsApp Directo</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3.5 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Abrir WhatsApp New York Restaurant"
      >
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-ny-bg"></span>
        </span>

        <MessageCircle className="w-6 h-6 fill-white text-white" />
        <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider pr-1">
          WhatsApp
        </span>
      </button>
    </div>
  );
};
