import { BlogPost, ServiceItem, Testimonial, Translation } from './types';

export const TRANSLATIONS: Translation = {
  'home': { en: 'Home', es: 'Inicio' },
  'about': { en: 'About Us', es: 'Nosotros' },
  'services': { en: 'Services', es: 'Servicios' },
  'blog': { en: 'Insights', es: 'Blog' },
  'tools': { en: 'Tools', es: 'Herramientas' },
  'contact': { en: 'Contact', es: 'Contacto' },
  'free_estimate': { en: 'Free Estimate', es: 'Presupuesto Gratis' },
  'call_now': { en: 'CALL NOW', es: 'LLAME AHORA' },
  'get_quote': { en: 'Get Quote', es: 'Cotizar' },
  'working_hours': { en: 'Operating Hours', es: 'Horas Laborales' },
  'mon_fri': { en: 'Mon - Fri', es: 'Lun - Vie' },
  'address': { en: 'HQ Address', es: 'Dirección' },
  'phone': { en: 'Phone Line', es: 'Teléfono' },
  'email': { en: 'Email Support', es: 'Correo' },
  'quick_links': { en: 'Navigation', es: 'Navegación' },
  'serving_area': { en: 'Serving Wilmington & Brunswick County', es: 'Sirviendo Wilmington y Brunswick' },
  'license': { en: 'Lic#', es: 'Licencia#' },
  'rights_reserved': { en: 'All rights reserved.', es: 'Todos los derechos reservados.' },
  'hero_title': { en: 'Installation, Repair & Replacement', es: 'Instalación, Reparación y Reemplazo' },
  'hero_subtitle': { en: 'Specializing in Residential and Commercial roofing systems.', es: 'Especialistas en sistemas de techado residencial y comercial.' },
  'years_experience': { en: '50+ Years Experience', es: '50+ Años de Experiencia' },
  'checklist_title': { en: 'The Standard of Excellence', es: 'El Estándar de Excelencia' },
  'trust_text': { en: 'The job is not done until you are satisfied!', es: '¡El trabajo no termina hasta que esté satisfecho!' },
  'our_services': { en: 'Core Services', es: 'Servicios Principales' },
  'what_we_do': { en: 'Capabilities', es: 'Capacidades' },
  'contact_us': { en: 'Get In Touch', es: 'Contáctenos' },
  'need_help': { en: 'Emergency?', es: '¿Emergencia?' },
  'send_request': { en: 'Submit Request', es: 'Enviar Solicitud' },
  'message_sent': { en: 'Message Sent Successfully', es: 'Mensaje Enviado con Éxito' },
  'thank_you': { en: 'Thank you', es: 'Gracias' },
  'back_home': { en: 'Return Home', es: 'Volver al Inicio' },
  'calc_title': { en: 'Roof Cost Estimator', es: 'Estimador de Costos' },
  'calc_desc': { en: 'Get a ballpark estimate for your roof replacement.', es: 'Obtenga un estimado aproximado para el reemplazo de su techo.' }
};

export const COMPANY_INFO = {
  name: "Mendoza Roofing Company",
  phone: "910-367-7628",
  email: "contact@roofingmendoza.com",
  address: "P.O Box 952 Supply NC 28462",
  hours: {
    mon: "8:00AM - 6.00PM",
    tue: "8:00AM - 6.00PM",
    wed: "8:00AM - 6.00PM",
    thu: "8:00AM - 6.00PM",
    fri: "8:00AM - 6.00PM",
  },
  socials: {
    facebook: "#",
    twitter: "#",
    instagram: "#"
  }
};

export const NAV_LINKS = [
  { nameKey: 'home', path: '/' },
  { nameKey: 'about', path: '/about' },
  { nameKey: 'services', path: '/' }, // Changed from /#services to / to prevent HashRouter confusion
  { nameKey: 'tools', path: '/tools' },
  { nameKey: 'blog', path: '/blog' },
  { nameKey: 'contact', path: '/contact' },
];

export const SEO_KEYWORDS = [
  "Roof Repair Mendoza", "New Construction Roofing", "Metal Roofs Wilmington", "Tile Roofs Brunswick County", 
  "Slate Roofs NC", "Flat Roof Repair", "Asphalt Shingles", "Chimney Repairs", "Roof Inspections", 
  "Fascia and Soffits", "Guttering Services", "Roof Coating", "Pressure Cleaning Roof", "Roof Restoration", 
  "Solar Panel Roofs", "Emergency Roof Repair", "Commercial Roofing Wilmington", "Residential Roofing Supply NC", 
  "Licensed Roofing Contractor", "Insurance Claim Roofing", "Leak Detection", "Waterproof Membranes", 
  "Re-Roofing Specialists", "Roof Maintenance Plans", "Local Roofing Company", "Affordable Roofing", 
  "Best Roofers 910", "Storm Damage Repair", "Roof Financing", "Free Roof Estimates",
  "Shingle Replacement", "Lead Roofing", "EDS Waterproof Membranes", "Roofing Reports", "Roof Evaluation",
  "Preventive Maintenance", "Roof Cleaning", "Working Hours Roofing", "Dependable Roofers", "Certified Roofers",
  "Wilmington Roofing Contractors", "Supply NC Roofers", "Hail Damage Repair", "Wind Damage Repair"
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Re-Roof & Restorations',
    description: 'We restore your roof to the original look. Complete installation for new constructions or full replacement for aging homes.',
    iconName: 'Home',
    link: '/contact'
  },
  {
    id: '2',
    title: 'Metal & Specialty',
    description: 'Expert installation of Metal, Tile, Slate, and Asphalt shingles. We have over 50 years of experience with these complex materials.',
    iconName: 'Shield',
    link: '/contact'
  },
  {
    id: '3',
    title: 'Commercial Flat Roofs',
    description: 'Specialists in Flat Roofs and Approved Installers for EDS Waterproof membranes for commercial and residential applications.',
    iconName: 'ClipboardCheck',
    link: '/contact'
  },
  {
    id: '4',
    title: 'Repairs & Maintenance',
    description: 'Chimney repairs, pointing, leak repairs, pressure cleaning, and coating to extend the life of your roof.',
    iconName: 'Hammer',
    link: '/contact'
  },
  {
    id: '5',
    title: 'Gutters, Fascia & Soffits',
    description: 'Complete exterior protection including fascia, soffits, and guttering installation and repair to prevent water damage.',
    iconName: 'Home', 
    link: '/contact'
  },
  {
    id: '6',
    title: 'Inspections & Reports',
    description: 'Detailed roof evaluations and reports for real estate transactions, insurance claims, or preventative maintenance.',
    iconName: 'ClipboardCheck',
    link: '/contact'
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'checklist-good-roofing-company',
    title: 'The Mendoza Checklist: Choosing a Roofer',
    excerpt: 'Avoid scams and poor workmanship. Here is what you need to look for before hiring a roofer in Brunswick County.',
    content: `
      ## Choosing the Right Roofer

      Hiring a roofer is a big decision. Here is the Mendoza Roofing checklist to ensure you are protected:

      1. **Required Liability and Workman’s Comp Insurance:** Never hire a company that doesn't cover its employees.
      2. **State Licensed:** Ensure they are in good current standing with the state.
      3. **Local Company:** Look for local crews who know the area and weather patterns.
      4. **Years in Business:** We have over 50 years of experience.
      5. **Dependable:** A good company keeps their word.
      6. **Clear Contracts:** No hidden costs.

      At Mendoza Roofing, we meet every single one of these criteria.
    `,
    author: 'Mendoza Team',
    date: 'February 10, 2024',
    imageUrl: 'https://picsum.photos/id/164/800/400',
    tags: ['Tips', 'Trust', 'Hiring Guide']
  },
  {
    id: '2',
    slug: 'benefits-of-new-construction-roofing',
    title: 'New Construction Roofing Standards',
    excerpt: 'Yes, we also do new constructions. Learn about our rigorous process for new homes.',
    content: `
      ## Building a New Home?

      Mendoza Roofing isn't just for repairs. We specialize in new construction roofing for both Residential and Commercial properties.
      
      We use only the highest quality products to insure that your new roof is built with the integrity and craftsmanship to last for many years to come.
      
      From Metal to Asphalt, we can handle any material specification your architect requires.
    `,
    author: 'Mendoza Team',
    date: 'January 15, 2024',
    imageUrl: 'https://picsum.photos/id/195/800/400',
    tags: ['New Construction', 'Residential', 'Commercial']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Jana O.',
    role: 'Wilmington, NC',
    content: 'Mendoza roofing does a great job. They are very responsive to calls and show up on time. They have done repair work for me, as well as installed a new roof and I have been very pleased. I would recommend them!',
    rating: 5
  },
  {
    id: '2',
    name: 'Paul C.',
    role: 'Local Homeowner',
    content: 'Mendoza Roofing did an excellent job for me. Mr. Mendoza was able to evaluate my problem, match my existing shingle color, and had the job completed within two days of my call. I was very impressed!',
    rating: 5
  },
  {
    id: '3',
    name: 'Rick H.',
    role: 'Supply, NC',
    content: 'Very professional. Did an excellent job. They were there when they said they would be there. They did a great job cleaning up. I would highly recommend them to anyone.',
    rating: 5
  },
  {
    id: '4',
    name: 'Mary M.',
    role: 'Brunswick County',
    content: 'Mr. Mendoza and his crew were very professional and efficient. I am very pleased with their work and would highly recommend them to anyone needing roof work.',
    rating: 5
  },
  {
    id: '5',
    name: 'Carlos F.',
    role: 'Commercial Client',
    content: 'The team was efficient, clean, and the quality of the new metal roof is outstanding. Best pricing in the area for the quality provided.',
    rating: 5
  }
];