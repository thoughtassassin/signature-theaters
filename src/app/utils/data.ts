export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  location: string;
  images: string[];
  tags: string[];
}

export interface ProductCategory {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Home Theater Design",
    description: "Fully custom screening rooms engineered for perfect acoustics, optics, and luxury comfort.",
  },
  {
    id: 2,
    title: "Custom Audio / Video",
    description: "Reference-grade AV systems curated and calibrated to deliver studio-quality performance.",
  },
  {
    id: 3,
    title: "Smart Home Integration",
    description: "Unified control of every system in your home — lighting, climate, security, and entertainment.",
  },
  {
    id: 4,
    title: "Outdoor Entertainment",
    description: "Weather-resistant displays and audio systems that bring the theater experience outside.",
  },
  {
    id: 5,
    title: "Lighting & Control",
    description: "Automated lighting scenes that set the perfect mood for every room and occasion.",
  },
  {
    id: 6,
    title: "White-Glove Service",
    description: "Dedicated concierge support, on-site calibration, and ongoing maintenance for every installation.",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Hord Cuthbert",
    location: "",
    images: ["hord_cuthbert_1.jpg", "hord_cuthbert_2.jpg"],
    tags: ["Home Theater", "AV"],
  },
  {
    id: 2,
    name: "Saulsbury Hangar",
    location: "",
    images: ["saulsbury_hangar_1.jpg", "saulsbury_hangar_2.jpg"],
    tags: ["Lighting", "Smart Home"],
  },
  {
    id: 3,
    name: "Saulsbury San Subia",
    location: "",
    images: ["saulsbury_san_subia_1.jpg", "saulsbury_san_subia_2.jpg"],
    tags: ["Outdoor", "AV"],
  },
  {
    id: 4,
    name: "Smith Kahala",
    location: "",
    images: ["smith_kahala_1.jpg", "smith_kahala_2.jpg", "smith_kahala_3.jpg"],
    tags: ["Home Theater", "Outdoor"],
  },
  {
    id: 5,
    name: "Stevens Winfield",
    location: "",
    images: ["stevens_winfield_1.jpg"],
    tags: ["Smart Home", "AV"],
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: 1,
    title: "Displays",
    description: "Ultra-HD OLED and microLED panels from the world's leading manufacturers, installed with precision.",
    image: "smith_kahala_1.jpg",
  },
  {
    id: 2,
    title: "Projectors & Screens",
    description: "4K laser projection with motorized acoustic screens for a true cinematic experience at home.",
    image: "hord_cuthbert_1.jpg",
  },
  {
    id: 3,
    title: "Audio Systems",
    description: "Dolby Atmos and DTS:X surround systems engineered and tuned for your specific room.",
    image: "saulsbury_hangar_1.jpg",
  },
  {
    id: 4,
    title: "Smart Control",
    description: "Savant and Control4 automation platforms for seamless whole-home management from any device.",
    image: "hord_cuthbert_2.jpg",
  },
  {
    id: 5,
    title: "Seating",
    description: "Hand-crafted luxury theater seating with motorized recline, USB charging, and premium upholstery.",
    image: "smith_kahala_2.jpg",
  },
  {
    id: 6,
    title: "Lighting",
    description: "Lutron intelligent lighting design with custom scene programming for every room and moment.",
    image: "saulsbury_san_subia_1.jpg",
  },
];
