import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Phone, MessageSquare, Check, Sparkles, AlertCircle } from 'lucide-react';
import { restaurantInfo, getWhatsAppUrl } from '../data/restaurantInfo';

export const ReservationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2');
  const [occasion, setOccasion] = useState('Cena Familiar');
  const [seating, setSeating] = useState('Salón Principal Climatizado');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Default date to tomorrow if empty
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const bookingMessage = `¡Hola New York Restaurant! 👋 Deseo solicitar una reserva en Turbo:
• Nombre: ${name}
• Teléfono: ${phone}
• Fecha: ${date}
• Hora: ${time}
• Personas: ${guests}
• Ocasión: ${occasion}
• Zona preferida: ${seating}
${notes ? `• Notas adicionales: ${notes}` : ''}

¿Tienen disponibilidad para esta fecha? ¡Gracias!`;

    const waUrl = getWhatsAppUrl(bookingMessage);
    // Open WhatsApp in new window
    window.open(waUrl, '_blank');
  };

  return (
    <section id="reservations" className="py-24 bg-[#0E0D12] relative border-t border-white/5">
      {/* Glow highlight */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-ny-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Information & Value proposition */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ny-card border border-ny-gold/30 text-ny-gold text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-ny-gold" />
              <span>Reserva tu Mesa en Turbo</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ny-cream leading-tight">
              Asegura tu lugar para una <br />
              <span className="text-gold-gradient italic">velada inolvidable</span>
            </h2>

            <p className="text-ny-cream/80 text-sm sm:text-base leading-relaxed font-light">
              Para garantizar la mejor experiencia gastronómica y atención personalizada, te recomendamos reservar tu mesa con anticipación, especialmente para fines de semana y celebraciones familiares.
            </p>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-ny-card border border-ny-border space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ny-gold/15 text-ny-gold flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-ny-muted">Línea directa de atención:</div>
                  <a
                    href={`tel:${restaurantInfo.phone}`}
                    className="text-lg font-bold text-ny-cream hover:text-ny-gold transition-colors"
                  >
                    {restaurantInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-ny-muted">WhatsApp de Reservas:</div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-400 hover:underline"
                  >
                    {restaurantInfo.phone} (Respuesta rápida)
                  </a>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-2 text-xs text-ny-muted">
              <div className="flex items-center gap-2 text-ny-cream/80">
                <Check className="w-4 h-4 text-ny-gold" />
                <span>Confirmación directa e inmediata por WhatsApp.</span>
              </div>
              <div className="flex items-center gap-2 text-ny-cream/80">
                <Check className="w-4 h-4 text-ny-gold" />
                <span>Opciones de decoración para cumpleaños y aniversarios.</span>
              </div>
              <div className="flex items-center gap-2 text-ny-cream/80">
                <Check className="w-4 h-4 text-ny-gold" />
                <span>Sin costos adicionales de reserva.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-ny-card border border-ny-border shadow-2xl relative">
              <div className="mb-6 pb-4 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ny-cream">Solicitud de Reserva</h3>
                  <p className="text-xs text-ny-muted mt-1">
                    Completa tus datos y te confirmaremos vía WhatsApp en minutos.
                  </p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-[11px] uppercase tracking-wider text-ny-gold font-bold px-2.5 py-1 rounded-full bg-ny-gold/10 border border-ny-gold/20">
                    Turbo, Antioquia
                  </span>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block text-emerald-200">¡Solicitud enviada a WhatsApp!</strong>
                    <span>Tu mensaje fue preparado con éxito. Estamos esperando tu envío en WhatsApp para confirmar la mesa.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleReservationSubmit} className="space-y-4 text-left">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-ny-cream/80 mb-1.5">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-ny-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Ej: Carlos Gómez"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1A1920] border border-ny-border text-ny-cream text-sm focus:outline-none focus:border-ny-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ny-cream/80 mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-ny-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="Ej: 310 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1A1920] border border-ny-border text-ny-cream text-sm focus:outline-none focus:border-ny-gold transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-ny-cream/80 mb-1.5">
                      Fecha de Reserva *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-ny-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        required
                        min={getMinDate()}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1A1920] border border-ny-border text-ny-cream text-sm focus:outline-none focus:border-ny-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ny-cream/80 mb-1.5">
                      Hora de Llegada *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-ny-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1A1920] border border-ny-border text-ny-cream text-sm focus:outline-none focus:border-ny-gold transition-colors"
                      >
                        <option value="12:00">12:00 PM (Almuerzo)</option>
                        <option value="13:00">01:00 PM (Almuerzo)</option>
                        <option value="14:00">02:00 PM (Almuerzo)</option>
                        <option value="18:30">06:30 PM (Cena)</option>
                        <option value="19:00">07:00 PM (Cena)</option>
                        <option value="19:30">07:30 PM (Cena)</option>
                        <option value="20:00">08:00 PM (Cena)</option>
                        <option value="20:30">08:30 PM (Cena)</option>
                        <option value="21:00">09:00 PM (Cena)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Number of Guests & Occasion */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-ny-cream/80 mb-1.5">
                      Número de Invitados *
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-ny-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1A1920] border border-ny-border text-ny-cream text-sm focus:outline-none focus:border-ny-gold transition-colors"
                      >
                        <option value="1">1 Persona</option>
                        <option value="2">2 Personas (Pareja)</option>
                        <option value="3-4">3 a 4 Personas (Familia)</option>
                        <option value="5-8">5 a 8 Personas (Grupo)</option>
                        <option value="9+">Más de 9 Personas (Evento especial)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ny-cream/80 mb-1.5">
                      Motivo / Ocasión
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1920] border border-ny-border text-ny-cream text-sm focus:outline-none focus:border-ny-gold transition-colors"
                    >
                      <option value="Cena Familiar">Cena Familiar</option>
                      <option value="Cumpleaños">Cumpleaños 🎉</option>
                      <option value="Aniversario / Romántica">Aniversario / Cita Romántica 🌹</option>
                      <option value="Reunión de Negocios">Reunión de Negocios</option>
                      <option value="Salida de Amigos">Salida de Amigos / After-Office</option>
                      <option value="Otra Ocasión">Otra Ocasión</option>
                    </select>
                  </div>
                </div>

                {/* Seating preference */}
                <div>
                  <label className="block text-xs font-semibold text-ny-cream/80 mb-1.5">
                    Preferencia de Ambiente
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSeating('Salón Principal Climatizado')}
                      className={`p-3 rounded-xl border text-xs text-left transition-all ${
                        seating === 'Salón Principal Climatizado'
                          ? 'border-ny-gold bg-ny-gold/15 text-ny-cream font-semibold'
                          : 'border-ny-border bg-[#1A1920] text-ny-cream/70 hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold">Salón Principal</div>
                      <div className="text-[10px] text-ny-muted">Aire acondicionado & luz cálida</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSeating('Terraza al Aire Libre')}
                      className={`p-3 rounded-xl border text-xs text-left transition-all ${
                        seating === 'Terraza al Aire Libre'
                          ? 'border-ny-gold bg-ny-gold/15 text-ny-cream font-semibold'
                          : 'border-ny-border bg-[#1A1920] text-ny-cream/70 hover:border-white/20'
                      }`}
                    >
                      <div className="font-semibold">Terraza Exterior</div>
                      <div className="text-[10px] text-ny-muted">Brisa caribeña & ambiente vivo</div>
                    </button>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-ny-cream/80 mb-1.5">
                    Comentarios o peticiones especiales (opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ej: Cumpleañera aficionada al chocolate, necesitamos silla para bebé, etc."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#1A1920] border border-ny-border text-ny-cream text-sm focus:outline-none focus:border-ny-gold transition-colors"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-ny-gold via-ny-goldLight to-ny-gold text-ny-bg font-bold text-sm uppercase tracking-wider shadow-gold-md hover:shadow-gold-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-ny-bg" />
                    <span>Confirmar Reserva por WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-ny-muted mt-2 flex items-center justify-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-ny-gold" />
                    Se abrirá WhatsApp con el resumen de tu solicitud para enviarlo al restaurante.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
