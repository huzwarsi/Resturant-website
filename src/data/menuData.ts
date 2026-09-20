export interface MenuItem {
  id: string;
  name: string;
  category: 'cortes' | 'especialidades' | 'mariscos' | 'hamburguesas' | 'bebidas' | 'postres';
  description: string;
  price: number;
  formattedPrice: string;
  image: string;
  badge?: string;
  isSpecialty?: boolean;
  portion?: string;
  cookingTime?: string;
}

export interface MenuCategory {
  id: MenuItem['category'] | 'todos';
  label: string;
  iconName: string;
  description: string;
}

export const menuCategories: MenuCategory[] = [
  { id: 'todos', label: 'Toda la Carta', iconName: 'UtensilsCrossed', description: 'Explora nuestra completa selección culinaria' },
  { id: 'cortes', label: 'Cortes & Parrilla', iconName: 'Flame', description: 'Carnes selectas maduradas y asadas al carbón' },
  { id: 'especialidades', label: 'Especialidades', iconName: 'Award', description: 'Platos insignia con el sello New York' },
  { id: 'mariscos', label: 'Mariscos & Pesca', iconName: 'Fish', description: 'Frescura del Golfo de Urabá y el Caribe' },
  { id: 'hamburguesas', label: 'Hamburguesas & Picadas', iconName: 'Sandwich', description: 'Opciones generosas para compartir' },
  { id: 'bebidas', label: 'Cócteles & Bar', iconName: 'Wine', description: 'Mixología clásica y licores premium' },
  { id: 'postres', label: 'Postres Artesanales', iconName: 'Cake', description: 'El dulce toque para culminar tu velada' },
];

export const menuItems: MenuItem[] = [
  // CORTES & PARRILLA
  {
    id: 'corte-1',
    name: 'Corte New York Strip 350g',
    category: 'cortes',
    description: 'Corte de res Angus madurado a la brasa con costra de sal marina, chimichurri de la casa y mantequilla de hierbas aromáticas. Acompañado de papas rústicas o patacón.',
    price: 68000,
    formattedPrice: '$68.000 COP',
    image: './images/dishes/ny-strip.jpg',
    badge: 'Insignia',
    isSpecialty: true,
    portion: '350 gramos',
    cookingTime: '20-25 min',
  },
  {
    id: 'corte-2',
    name: 'Baby Beef al Carbón 300g',
    category: 'cortes',
    description: 'Corte magro extra suave sellado al término de su elección, bañado en reducción de romero y ajo confitado. Servido con puré de papa criolla o yuca al vapor.',
    price: 62000,
    formattedPrice: '$62.000 COP',
    image: './images/dishes/baby-beef.jpg',
    badge: 'Popular',
    portion: '300 gramos',
    cookingTime: '18-20 min',
  },
  {
    id: 'corte-3',
    name: 'Parrillada Familiar New York',
    category: 'cortes',
    description: 'Banquete para compartir: lomo de res, pechuga parrillera, costillas BBQ, chorizo antioqueño artesanal, morcilla, patacones con queso costeño y arepitas.',
    price: 135000,
    formattedPrice: '$135.000 COP',
    image: './images/dishes/parrillada.jpg',
    badge: 'Familiar (3-4 personas)',
    isSpecialty: true,
    portion: 'Para 3 - 4 personas',
    cookingTime: '25 min',
  },
  {
    id: 'corte-4',
    name: 'Costillas de Cerdo en Salsa BBQ Guayaba',
    category: 'cortes',
    description: 'Costillas cocinadas a fuego lento durante 6 horas, caramelizadas con salsa BBQ artesanal con toques de guayaba agridulce y ajonjolí tostado.',
    price: 54000,
    formattedPrice: '$54.000 COP',
    image: './images/dishes/ribs.jpg',
    badge: 'Recomendado',
    portion: '450 gramos',
    cookingTime: '20 min',
  },

  // ESPECIALIDADES
  {
    id: 'esp-trilogia',
    name: 'Trilogía Mar y Tierra Imperial',
    category: 'especialidades',
    description: 'Plato estrella de concurso de @newyorkrestaurant_: corte fino de lomo al carbón, langostinos tigre glaseados y pesca fresca del Caribe en reducción del chef.',
    price: 75000,
    formattedPrice: '$75.000 COP',
    image: './images/dishes/ny-strip.jpg',
    badge: 'Festival Culinario 🏆',
    isSpecialty: true,
    portion: 'Plato Fuerte Especial',
    cookingTime: '20-25 min',
  },
  {
    id: 'esp-1',
    name: 'Filet Mignon en Salsa de Champiñones',
    category: 'especialidades',
    description: 'Medallón de lomo fino albardado con tocineta ahumada crujiente, cubierto en una suave y cremosa salsa de champiñones frescos y vino tinto.',
    price: 66000,
    formattedPrice: '$66.000 COP',
    image: './images/dishes/filet-mignon.jpg',
    badge: 'Chef Choice',
    isSpecialty: true,
    portion: '320 gramos',
    cookingTime: '22 min',
  },
  {
    id: 'esp-2',
    name: 'Pechuga Gratinada en Cuatro Quesos',
    category: 'especialidades',
    description: 'Suprema de pechuga a la plancha cubierta con gratín de mozzarella, parmesano, queso azul y quesillo criollo, coronada con espinacas salteadas.',
    price: 48000,
    formattedPrice: '$48.000 COP',
    image: './images/dishes/pechuga-gratinada.jpg',
    portion: '300 gramos',
    cookingTime: '15 min',
  },
  {
    id: 'esp-3',
    name: 'Lomo al Trapo con Especias',
    category: 'especialidades',
    description: 'Técnica clásica colombiana de salazón y hierbas envueltas que mantiene el jugo natural de la carne con una costra dorada única.',
    price: 72000,
    formattedPrice: '$72.000 COP',
    image: './images/dishes/baby-beef.jpg',
    badge: 'Exclusivo',
    portion: '350 gramos',
    cookingTime: '25 min',
  },

  // MARISCOS & PESCA
  {
    id: 'mar-1',
    name: 'Filete de Robalo al Ajillo Criollo',
    category: 'mariscos',
    description: 'Filete de robalo fresco del Golfo de Urabá preparado a la plancha y bañado en mantequilla dorada de ajo, perejil y vino blanco. Con patacón y ensalada de aguacate.',
    price: 58000,
    formattedPrice: '$58.000 COP',
    image: './images/dishes/robalo.jpg',
    badge: 'Del Golfo',
    isSpecialty: true,
    portion: '320 gramos',
    cookingTime: '18 min',
  },
  {
    id: 'mar-2',
    name: 'Cazuela de Mariscos New York',
    category: 'mariscos',
    description: 'Concentrado cremoso de frutos del mar: camarones, calamares, almejas y trozos de pescado blanco cocidos en leche de coco y queso gratinado.',
    price: 64000,
    formattedPrice: '$64.000 COP',
    image: './images/dishes/cazuela-mariscos.jpg',
    badge: 'Imperdible',
    portion: 'Cazuela grande',
    cookingTime: '20 min',
  },
  {
    id: 'mar-3',
    name: 'Camarones Apanados al Panko',
    category: 'mariscos',
    description: 'Camarones tigre jumbo apanados con costra crujiente de panko y coco rallado, acompañados de salsa tártara de la casa y mermelada de uchuva.',
    price: 52000,
    formattedPrice: '$52.000 COP',
    image: './images/dishes/camarones.jpg',
    portion: '10 unidades',
    cookingTime: '15 min',
  },

  // HAMBURGUESAS & PICADAS
  {
    id: 'hbg-1',
    name: 'Burger New York Monumental',
    category: 'hamburguesas',
    description: '220g de carne de res molida en casa, queso cheddar madurado, tocineta crujiente, aros de cebolla morada caramelizada, lechuga romana y salsa secreta en pan brioche artesanal.',
    price: 38000,
    formattedPrice: '$38.000 COP',
    image: './images/dishes/burger.jpg',
    badge: 'Más Vendida',
    isSpecialty: true,
    portion: 'Con papas a la francesa',
    cookingTime: '15 min',
  },
  {
    id: 'hbg-2',
    name: 'Picada Mixta New York Bar',
    category: 'hamburguesas',
    description: 'Chicharrón carnudo crocante, trozos de carne a la parrilla, patacones con suero costeño, papas criollas doradas, arepitas y chimichurri.',
    price: 78000,
    formattedPrice: '$78.000 COP',
    image: './images/dishes/parrillada.jpg',
    badge: 'Para Compartir',
    portion: 'Para 2 - 3 personas',
    cookingTime: '20 min',
  },

  // BEBIDAS & BAR
  {
    id: 'beb-1',
    name: 'Coctel Signature New York Night',
    category: 'bebidas',
    description: 'Whisky Bourbon, licor de café colombiano, jarabe de vainilla bourbon, toques de naranja confitada y ahumado en madera de roble.',
    price: 34000,
    formattedPrice: '$34.000 COP',
    image: './images/dishes/coctel-night.jpg',
    badge: 'Firma de la Casa',
    isSpecialty: true,
  },
  {
    id: 'beb-2',
    name: 'Mojito Maracuyá del Caribe',
    category: 'bebidas',
    description: 'Ron blanco añejo, hierbabuena fresca machacada, pulpa de maracuyá natural, azúcar morena, zumo de lima y toque de soda bien fría.',
    price: 28000,
    formattedPrice: '$28.000 COP',
    image: './images/dishes/mojito.jpg',
    badge: 'Refrescante',
  },
  {
    id: 'beb-3',
    name: 'Limonada de Coco Frappé',
    category: 'bebidas',
    description: 'Bebida insignia caribeña, cremosa preparación con leche de coco natural, zumo de limón recién exprimido y hielo frappé.',
    price: 18000,
    formattedPrice: '$18.000 COP',
    image: './images/dishes/limonada.jpg',
  },

  // POSTRES
  {
    id: 'pos-1',
    name: 'Volcán de Chocolate Belga',
    category: 'postres',
    description: 'Bizcocho tibio de chocolate 70% con centro líquido derretido, acompañado de helado de vainilla artesanal y lluvia de frutos secos.',
    price: 24000,
    formattedPrice: '$24.000 COP',
    image: './images/dishes/volcan-chocolate.jpg',
    badge: 'Favorito',
  },
  {
    id: 'pos-2',
    name: 'Cheesecake de Frutos Rojos',
    category: 'postres',
    description: 'Clásico pastel de queso estilo neoyorquino con base de galleta crocante y reducción casera de moras y fresas silvestres.',
    price: 22000,
    formattedPrice: '$22.000 COP',
    image: './images/dishes/cheesecake.jpg',
  },
];
