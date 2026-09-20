export interface RestaurantInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappMessage: string;
  instagramHandle: string;
  instagramUrl: string;
  address: {
    street: string;
    city: string;
    department: string;
    country: string;
    full: string;
    reference: string;
  };
  hours: {
    days: string;
    time: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const restaurantInfo: RestaurantInfo = {
  name: "New York Restaurant",
  legalName: "Restaurante Bar New York",
  tagline: "Elegancia y sabor en el corazón de Turbo",
  shortDescription:
    "El destino gastronómico por excelencia en Turbo, Antioquia. Fusión de cortes a la parrilla estilo New York, frutos del mar caribeño y coctelería premium para compartir en familia y celebrar momentos inolvidables.",
  phone: "3103639495",
  phoneFormatted: "+57 310 363 9495",
  whatsappNumber: "573103639495",
  whatsappMessage: "¡Hola New York Restaurant! Me gustaría consultar disponibilidad para una mesa o hacer un pedido.",
  instagramHandle: "@newyorkrestaurant_",
  instagramUrl: "https://www.instagram.com/newyorkrestaurant_/",
  address: {
    street: "Cra. 14 #106-12 a 106-62",
    city: "Turbo",
    department: "Antioquia",
    country: "Colombia",
    full: "Cra. 14 #106-12 a 106-62, Turbo, Antioquia, Colombia",
    reference: "Zona céntrica y gastronómica de Turbo",
  },
  hours: [
    { days: "Lunes a Jueves", time: "11:30 AM – 10:00 PM" },
    { days: "Viernes y Sábados", time: "11:30 AM – 11:30 PM" },
    { days: "Domingos y Festivos", time: "12:00 PM – 10:30 PM" },
  ],
  stats: [
    { label: "Años de Tradición", value: "+8" },
    { label: "Cortes & Recetas", value: "35+" },
    { label: "Clientes Felices", value: "15k+" },
    { label: "Calificación Promedio", value: "4.9 ★" },
  ],
};

export const getWhatsAppUrl = (customText?: string) => {
  const text = encodeURIComponent(customText || restaurantInfo.whatsappMessage);
  return `https://wa.me/${restaurantInfo.whatsappNumber}?text=${text}`;
};
