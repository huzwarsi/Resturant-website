export interface VideoReel {
  id: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  tag: string;
  description: string;
  likes: number;
}

export const restaurantImages = {
  // Real Authentic Photos from Instagram @newyorkrestaurant_
  teamEntrance: "./images/instagram/team-entrance.jpg",
  birthdayFamily: "./images/instagram/birthday-family.png",
  cocktailExperience: "./images/instagram/cocktail-experience.png",
  celebrationNight: "./images/instagram/celebration-night.png",
  familyKids: "./images/instagram/family-kids.png",

  // High-Resolution Local Food Imagery
  heroMain: "./images/dishes/hero-steak.jpg",
  newYorkSteak: "./images/dishes/ny-strip.jpg",
  parrilladaMixta: "./images/dishes/parrillada.jpg",
  filetMignon: "./images/dishes/filet-mignon.jpg",
  robaloCaribeno: "./images/dishes/robalo.jpg",
  camaronesAlAjillo: "./images/dishes/camarones.jpg",
  burgerGourmet: "./images/dishes/burger.jpg",
  coctelAutor: "./images/dishes/coctel-night.jpg",
  postreVolcan: "./images/dishes/volcan-chocolate.jpg",
};

export const restaurantVideos: VideoReel[] = [
  {
    id: "reel-1",
    title: "Trilogía Mar y Tierra Imperial",
    subtitle: "Plato Insignia de Competencia Culinaria",
    videoUrl: "./videos/video-trilogia.mp4",
    tag: "Especialidad Estrella",
    description: "El plato estelar con el que @newyorkrestaurant_ participó y conquistó los paladares en Turbo: corte fino, langostinos y pesca con salsa reducción del chef.",
    likes: 489,
  },
  {
    id: "reel-2",
    title: "¡Tu Cumpleaños es el Mejor Día!",
    subtitle: "Celebraciones Inolvidables en Turbo",
    videoUrl: "./videos/video-cumpleanos.mp4",
    tag: "Celebraciones",
    description: "En New York Restaurant hacemos que tu día especial sea mágico: música en vivo, postre con velita, ambientación y la mejor energía para festejar con tu familia.",
    likes: 542,
  },
  {
    id: "reel-3",
    title: "Tus Momentos Son en New York",
    subtitle: "Recorrido de Sala, Bar & Sabor",
    videoUrl: "./videos/video-momentos.mp4",
    tag: "Experiencia & Bar",
    description: "Espacios climatizados, iluminación tenue, coctelería de autor y la mejor atención en Urabá. Llámanos o contáctanos al 3103639495.",
    likes: 388,
  },
  {
    id: "reel-4",
    title: "Amigos, Comida & Brindis",
    subtitle: "La Combinación Perfecta en Turbo",
    videoUrl: "./videos/video-amigos.mp4",
    tag: "Vida Social & Familia",
    description: "Reuniones de amigos, parrilladas compartidas y cócteles helados para disfrutar lo mejor de Turbo, Antioquia.",
    likes: 315,
  },
];

export const galleryImages = [
  {
    id: "gal-real-1",
    url: "./images/instagram/team-entrance.jpg",
    title: "Nuestro Equipo y Familia New York",
    category: "ambiente",
    categoryLabel: "Nuestro Equipo",
    desc: "El corazón y alma de New York Restaurant en Turbo: nuestro dedicado equipo de cocina y servicio listos para recibirte con una sonrisa."
  },
  {
    id: "gal-real-2",
    url: "./images/instagram/birthday-family.png",
    title: "Cumpleaños en Familia",
    category: "celebraciones",
    categoryLabel: "Celebraciones",
    desc: "Cenas especiales, sangría, tortas de cumpleaños y sonrisas que duran para siempre en nuestras mesas decoradas."
  },
  {
    id: "gal-real-3",
    url: "./images/instagram/cocktail-experience.png",
    title: "Experiencia Cóctel con Fuego & Flores",
    category: "bar",
    categoryLabel: "Bar & Cócteles",
    desc: "Coctelería artística presentada en mesa con detalles florales, chispas y copas exclusivas para brindar."
  },
  {
    id: "gal-real-4",
    url: "./images/instagram/celebration-night.png",
    title: "Noche de Luces & Celebración",
    category: "celebraciones",
    categoryLabel: "Celebraciones",
    desc: "Ambiente festivo con luces neón púrpura, globos y atención personalizada para grupos y aniversarios."
  },
  {
    id: "gal-real-5",
    url: "./images/instagram/family-kids.png",
    title: "Tardes Infantiles & Alegría Familiar",
    category: "celebraciones",
    categoryLabel: "Familia",
    desc: "Un restaurante que abraza a toda la comunidad de Turbo, con atenciones y sorpresas especiales para los más pequeños."
  },
  {
    id: "gal-food-1",
    url: "./images/dishes/ny-strip.jpg",
    title: "Corte New York al Fuego",
    category: "platos",
    categoryLabel: "Platos",
    desc: "Corte selecto madurado en término perfecto con mantequilla clarificada y romero silvestre."
  },
  {
    id: "gal-food-2",
    url: "./images/dishes/cazuela-mariscos.jpg",
    title: "Langostinos & Frutos del Caribe",
    category: "platos",
    categoryLabel: "Platos",
    desc: "Ingredientes frescos del Golfo de Urabá preparados con técnica de alta cocina."
  },
  {
    id: "gal-food-3",
    url: "./images/dishes/parrillada.jpg",
    title: "Parrillada Especial de la Casa",
    category: "platos",
    categoryLabel: "Platos",
    desc: "Combinación generosa de cortes finos, chorizo artesanal y patacones crocantes con suero costeño."
  },
];

export const instagramPosts = [
  {
    id: "ig-real-1",
    url: "./images/instagram/team-entrance.jpg",
    likes: 312,
    comments: 42,
    caption: "¡Bienvenidos a su casa! Todo el equipo de New York Restaurant en Turbo listos para brindarles la mejor experiencia gastronómica de Urabá 🤍✨ #NewYorkRestaurant #Turbo #Familia",
    date: "Publicación Destacada"
  },
  {
    id: "ig-real-2",
    url: "./images/instagram/birthday-family.png",
    likes: 428,
    comments: 53,
    caption: "¡Los momentos más lindos se viven en familia! 🎉🎂 Gracias por confiar en nosotros para celebrar este cumpleaños inolvidable. Reservas al 3103639495.",
    date: "Hace 3 días"
  },
  {
    id: "ig-real-3",
    url: "./images/instagram/cocktail-experience.png",
    likes: 295,
    comments: 31,
    caption: "Brindis con estilo y fuego ✨🍹 Nuestras bebidas de autor vienen acompañadas de una experiencia sensorial única. ¿Ya probaste nuestro cóctel insignia?",
    date: "Hace 5 días"
  },
  {
    id: "ig-real-4",
    url: "./images/instagram/celebration-night.png",
    likes: 340,
    comments: 38,
    caption: "Noches mágicas de celebración en New York Restaurant 💜🎈 Creamos el ambiente ideal con luces y detalles para tus festejos en Turbo Antioquia.",
    date: "Hace 1 semana"
  },
  {
    id: "ig-real-5",
    url: "./images/instagram/family-kids.png",
    likes: 387,
    comments: 49,
    caption: "La sonrisa de los niños es nuestra mayor recompensa 🎁👧👦 ¡Un restaurante 100% familiar pensado para el bienestar y la alegría de todos!",
    date: "Hace 2 semanas"
  },
  {
    id: "ig-food-6",
    url: "./images/dishes/ny-strip.jpg",
    likes: 254,
    comments: 29,
    caption: "Carne a la brasa en su punto perfecto 🔥🥩 Calidad y sabor que solo encuentras en New York Restaurant. ¡Te esperamos hoy en Turbo!",
    date: "Hace 2 semanas"
  },
];
