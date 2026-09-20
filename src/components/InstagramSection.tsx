import React from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { instagramPosts } from '../data/images';
import { restaurantInfo } from '../data/restaurantInfo';
import { InstagramIcon } from './Icons';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0A0E] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with IG Badge & CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-ny-gold text-xs font-semibold tracking-widest uppercase">
              <InstagramIcon className="w-4 h-4" />
              <span>Síguenos en Redes Sociales</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ny-cream">
              Momentos en <span className="text-gold-gradient italic">{restaurantInfo.instagramHandle}</span>
            </h2>
            <p className="text-ny-cream/70 text-sm max-w-lg font-light">
              Conéctate con nuestra comunidad en Turbo. Etiquétanos en tus fotos y videos usando <span className="text-ny-gold font-medium">#NewYorkRestaurantTurbo</span>.
            </p>
          </div>

          <a
            href={restaurantInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-semibold text-sm hover:opacity-95 hover:scale-105 transition-all shadow-lg shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Seguir @newyorkrestaurant_</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>

        {/* 6 Post Grid Replicating Instagram Feed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={restaurantInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square bg-ny-card border border-ny-border/60 hover:border-ny-gold/50 transition-all duration-300 block shadow-md"
            >
              <img
                src={post.url}
                alt="Instagram post New York Restaurant"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay with engagement count and caption */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between text-white backdrop-blur-[2px]">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-red-400 font-bold">
                    <Heart className="w-3.5 h-3.5 fill-red-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-ny-cream/80 text-[11px]">
                    <MessageCircle className="w-3 h-3" />
                    {post.comments}
                  </span>
                </div>

                <p className="text-[10px] sm:text-[11px] text-ny-cream/90 line-clamp-3 leading-tight font-light">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[9px] text-ny-gold font-semibold pt-1 border-t border-white/10">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-0.5">
                    Ver <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
