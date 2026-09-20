export interface DishImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  tag?: string;
}

export const restaurantImages = {
  // Hero Imagery
  heroMain: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85", // Sizzling steak on dark rustic grill
  heroSecondary: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", // Elegant warm restaurant interior

  // About & Atmosphere
  interiorWarm: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80", // Restaurant ambient dining
  diningFamily: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80", // Elegant celebration banquet
  chefGrill: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80", // Chef plating gourmet food

  // Specialties
  newYorkSteak: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85", // Premium NY Strip Steak
  parrilladaMixta: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=85", // Big BBQ feast & meats
  filetMignon: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=85", // Tenderloin steak with sauce
  robaloCaribeno: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85", // Grilled fish fillets with fresh herbs
  camaronesAlAjillo: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=85", // Sizzling garlic shrimp skillet
  burgerGourmet: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85", // Gourmet burger with brioche bun
  coctelAutor: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85", // Craft signature cocktail
  postreVolcan: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85", // Chocolate fondant lava dessert
};

export const galleryImages = [
  {
    id: "gal-1",
    url: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=80",
    title: "Corte New York al Fuego",
    category: "platos",
    categoryLabel: "Platos",
    desc: "Corte selecto madurado en término perfecto con mantequilla clarificada y romero silvestre."
  },
  {
    id: "gal-2",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    title: "Salón Principal & Cava",
    category: "ambiente",
    categoryLabel: "Ambiente",
    desc: "Iluminación cálida y arquitectura contemporánea pensada para momentos especiales."
  },
  {
    id: "gal-3",
    url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80",
    title: "Celebraciones & Cumpleaños",
    category: "celebraciones",
    categoryLabel: "Celebraciones",
    desc: "Mesas decoradas, reservas para aniversarios y reuniones familiares con atención exclusiva."
  },
  {
    id: "gal-4",
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
    title: "Coctelería & Bar de Autor",
    category: "bar",
    categoryLabel: "Bar & Cócteles",
    desc: "Mixología clásica y creaciones con notas tropicales para iniciar la noche."
  },
  {
    id: "gal-5",
    url: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=80",
    title: "Langostinos & Frutos del Caribe",
    category: "platos",
    categoryLabel: "Platos",
    desc: "Ingredientes frescos de la región de Urabá preparados con técnica de alta cocina."
  },
  {
    id: "gal-6",
    url: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&q=80",
    title: "Parrillada Especial de la Casa",
    category: "platos",
    categoryLabel: "Platos",
    desc: "Combinación generosa de cortes finos, chorizo artesanal y guarniciones criollas."
  },
  {
    id: "gal-7",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    title: "Noche de Aniversario",
    category: "celebraciones",
    categoryLabel: "Celebraciones",
    desc: "Música ambiental y servicio de mesa personalizado para cenas románticas."
  },
  {
    id: "gal-8",
    url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80",
    title: "Terraza & Atmósfera Nocturna",
    category: "ambiente",
    categoryLabel: "Ambiente",
    desc: "Espacio fresco y acogedor para compartir cócteles y picadas con amigos."
  },
];

export const instagramPosts = [
  {
    id: "ig-1",
    url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    likes: 184,
    comments: 24,
    caption: "¡El fin de semana se vive a la brasa en Turbo! 🔥🥩 ¿Cuál es tu término favorito para nuestro Corte New York? #NewYorkRestaurant #TurboAntioquia #Parrilla",
    date: "Hace 2 días"
  },
  {
    id: "ig-2",
    url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    likes: 142,
    comments: 18,
    caption: "Tarde de cócteles refrescantes para bajar el calor de Urabá 🍹✨ Pide tu Passion Fruit Gin en nuestra terraza. #Cocktails #Turbo #Bar",
    date: "Hace 4 días"
  },
  {
    id: "ig-3",
    url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    likes: 265,
    comments: 39,
    caption: "¡Feliz cumpleaños a doña Carmen! Gracias por elegirnos para celebrar junto a toda la familia 🎉🎂 Reserva tu fecha especial al WhatsApp 3103639495.",
    date: "Hace 6 días"
  },
  {
    id: "ig-4",
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    likes: 198,
    comments: 27,
    caption: "Nuestra Burger NY Premium: 200g de carne Angus, queso cheddar fundido, tocineta crujiente y pan brioche artesanal 🍔🤤 #FoodieTurbo",
    date: "Hace 1 semana"
  },
  {
    id: "ig-5",
    url: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    likes: 173,
    comments: 15,
    caption: "Del mar a tu mesa: Robalo fresco en salsa de camarones acompañado de patacones crocantes y ensalada fresca 🐟🌊 #MariscosTurbo",
    date: "Hace 1 semana"
  },
  {
    id: "ig-6",
    url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    likes: 215,
    comments: 31,
    caption: "El final dulce que tu cena merece: Volcán de chocolate belga con helado de vainilla artesanal 🍫🍨 #Postres #NewYorkTurbo",
    date: "Hace 2 semanas"
  },
];
