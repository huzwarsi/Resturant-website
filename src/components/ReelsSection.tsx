import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { restaurantVideos, type VideoReel } from '../data/images';
import { getWhatsAppUrl } from '../data/restaurantInfo';

export const ReelsSection: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [muted, setMuted] = useState<boolean>(true);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause any currently playing video
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      video.play();
      setPlayingId(id);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !muted;
    setMuted(newMuted);
    Object.values(videoRefs.current).forEach((v) => {
      if (v) v.muted = newMuted;
    });
  };

  return (
    <section id="reels" className="py-24 bg-[#0A090D] relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ny-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ny-card border border-ny-gold/30 text-ny-gold text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-ny-gold" />
              <span>Nuestra Cocina & Vida en Video</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ny-cream">
              Momentos Reales <br />
              <span className="text-gold-gradient italic">en New York Restaurant</span>
            </h2>
            <p className="text-ny-cream/70 text-sm sm:text-base max-w-xl font-light">
              Mira en vivo nuestros platos estrella como la <strong className="text-ny-gold">Trilogía Mar y Tierra</strong>, las celebraciones familiares y la magia que se vive día a día en Turbo.
            </p>
          </div>

          {/* Sound Control Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleMute}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-ny-card border border-ny-border text-ny-cream hover:border-ny-gold hover:text-ny-gold transition-all text-xs font-medium"
            >
              {muted ? <VolumeX className="w-4 h-4 text-ny-gold" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              <span>{muted ? 'Activar Sonido' : 'Sonido Activo'}</span>
            </button>
          </div>
        </div>

        {/* 4 Video Reels Grid (9:16 aspect ratio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurantVideos.map((reel: VideoReel) => {
            const isPlaying = playingId === reel.id;

            return (
              <div
                key={reel.id}
                className="group relative rounded-3xl overflow-hidden bg-ny-card border border-ny-border hover:border-ny-gold/60 transition-all duration-500 shadow-2xl flex flex-col"
              >
                {/* Video Player Container */}
                <div
                  className="relative h-[440px] w-full overflow-hidden cursor-pointer bg-black"
                  onClick={() => togglePlay(reel.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[reel.id] = el;
                    }}
                    src={reel.videoUrl}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    muted={muted}
                    preload="metadata"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none"></div>

                  {/* Top Badge: Category Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="bg-ny-bg/85 backdrop-blur-md border border-ny-gold/40 text-ny-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {reel.tag}
                    </span>

                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md text-red-400 text-xs px-2.5 py-1 rounded-full border border-white/10">
                      <Heart className="w-3 h-3 fill-red-400" />
                      <span className="font-semibold text-[11px]">{reel.likes}</span>
                    </span>
                  </div>

                  {/* Play / Pause Center Button */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      isPlaying ? 'opacity-0 group-hover:opacity-80' : 'opacity-100'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-ny-gold/90 text-ny-bg flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform">
                      {isPlaying ? <Pause className="w-6 h-6 fill-ny-bg" /> : <Play className="w-6 h-6 fill-ny-bg ml-1" />}
                    </div>
                  </div>

                  {/* Video Title & Subtitle inside player */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none space-y-1">
                    <span className="text-[10px] text-ny-gold uppercase tracking-wider font-semibold block">
                      {reel.subtitle}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-ny-cream leading-snug drop-shadow-md">
                      {reel.title}
                    </h3>
                  </div>
                </div>

                {/* Card Footer with Description and CTA */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-ny-card">
                  <p className="text-xs text-ny-cream/70 line-clamp-3 leading-relaxed font-light">
                    {reel.description}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => togglePlay(reel.id)}
                      className="text-xs text-ny-gold hover:underline font-semibold flex items-center gap-1"
                    >
                      {isPlaying ? 'Pausar video' : 'Reproducir video'}
                    </button>

                    <a
                      href={getWhatsAppUrl(`¡Hola! Vi el video de "${reel.title}" en su web y me encantaría tener más información o reservar.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500 hover:text-white text-xs font-semibold transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Consultar</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Banner under Reels */}
        <div className="mt-14 p-6 rounded-3xl bg-ny-card border border-ny-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-ny-cream">
              ¿Quieres probar la Trilogía Mar y Tierra o celebrar tu cumpleaños con nosotros?
            </h4>
            <p className="text-xs text-ny-muted mt-0.5">
              Haz tu reserva anticipada y disfruta del mejor servicio en Turbo, Antioquia.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('¡Hola! Quiero reservar una mesa para celebrar un momento especial en New York Restaurant.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-ny-gold to-ny-goldLight text-ny-bg font-bold text-xs uppercase tracking-wider shadow-gold-sm hover:scale-105 transition-all"
          >
            <span>Reservar Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
