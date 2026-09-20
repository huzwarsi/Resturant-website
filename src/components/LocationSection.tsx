import React from 'react';
import { MapPin, Clock, Phone, Navigation, Car, Sparkles, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Cra. 14 #106-12, Turbo, Antioquia, Colombia'
  )}`;

  return (
    <section id="location" className="py-24 bg-ny-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ny-card border border-ny-gold/30 text-ny-gold text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-ny-gold" />
            <span>Encuéntranos en Turbo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ny-cream">
            Ubicación & Horarios <br />
            <span className="text-gold-gradient italic">de Atención</span>
          </h2>
          <p className="text-ny-cream/70 text-sm sm:text-base font-light">
            Estamos ubicados estratégicamente en el corazón de Turbo, Antioquia, con fácil acceso y estacionamiento cercano.
          </p>
        </div>

        {/* 2 Column Layout: Details and Map Embed */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-ny-card border border-ny-border space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-ny-gold/15 text-ny-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-ny-cream">Dirección</h3>
                  <p className="text-sm text-ny-cream/80 mt-1 font-medium">
                    {restaurantInfo.address.full}
                  </p>
                  <p className="text-xs text-ny-muted mt-1">
                    {restaurantInfo.address.reference}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F1E26] hover:bg-ny-gold/20 text-ny-gold border border-ny-gold/30 text-xs font-semibold transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Cómo llegar en Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-3xl bg-ny-card border border-ny-border space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-ny-gold/15 text-ny-gold flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-lg font-bold text-ny-cream">Horario de Atención</h3>
                  <div className="mt-3 space-y-2">
                    {restaurantInfo.hours.map((h, i) => (
                      <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                        <span className="text-ny-cream/80 font-medium">{h.days}</span>
                        <span className="text-ny-gold font-semibold">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Amenities */}
            <div className="p-6 rounded-3xl bg-ny-card border border-ny-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-ny-gold/15 text-ny-gold flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ny-cream">Parqueadero</h4>
                  <p className="text-[11px] text-ny-muted">Zona de fácil parqueo sobre la vía</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-ny-cream">Llamadas</h4>
                  <a href={`tel:${restaurantInfo.phone}`} className="text-[11px] text-emerald-400 font-semibold hover:underline">
                    {restaurantInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 min-h-[380px] rounded-3xl overflow-hidden border border-ny-border relative shadow-2xl bg-ny-card flex flex-col">
            <iframe
              title="Mapa Ubicación New York Restaurant Turbo Antioquia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.507612782803!2d-76.7352000!3d8.0925000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e501a35dcdaae99%3A0x6b6c4cf7f2824e88!2sCra.%2014%20%23106-12%2C%20Turbo%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', flex: 1, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map bottom overlay banner */}
            <div className="p-4 bg-ny-card/95 border-t border-ny-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-ny-cream/80">
                <MapPin className="w-4 h-4 text-ny-gold" />
                <span>Turbo, Golfo de Urabá, Antioquia</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ny-gold font-bold hover:underline flex items-center gap-1"
              >
                Abrir en aplicación de mapas
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
