export const TRANSLATIONS = {
    // ... (Identical to React, effectively used for fallback or strict typing if needed)
    // Actually we are using i18n module, so we might not need this object for translations, 
    // but we can keep it if we want to seed the json files from it.
    // I will omit the huge Translation object since we have en.json and es.json now.
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
    { nameKey: 'services', path: '/services' },
    { nameKey: 'tools', path: '/tools' },
    { nameKey: 'blog', path: '/blog' },
    { nameKey: 'contact', path: '/contact' },
];

export const SERVICES = [
    {
        id: '1',
        title: 'Re-Roof & Restorations',
        description: 'We restore your roof to the original look. Complete installation for new constructions or full replacement for aging homes.',
        iconName: 'i-heroicons-home', // Mapped to Heroicons
        link: '/contact'
    },
    {
        id: '2',
        title: 'Metal & Specialty',
        description: 'Expert installation of Metal, Tile, Slate, and Asphalt shingles. We have over 50 years of experience with these complex materials.',
        iconName: 'i-heroicons-shield-check',
        link: '/contact'
    },
    {
        id: '3',
        title: 'Commercial Flat Roofs',
        description: 'Specialists in Flat Roofs and Approved Installers for EDS Waterproof membranes for commercial and residential applications.',
        iconName: 'i-heroicons-clipboard-document-check',
        link: '/contact'
    },
    {
        id: '4',
        title: 'Repairs & Maintenance',
        description: 'Chimney repairs, pointing, leak repairs, pressure cleaning, and coating to extend the life of your roof.',
        iconName: 'i-heroicons-wrench-screwdriver',
        link: '/contact'
    },
    {
        id: '5',
        title: 'Gutters, Fascia & Soffits',
        description: 'Complete exterior protection including fascia, soffits, and guttering installation and repair to prevent water damage.',
        iconName: 'i-heroicons-home-modern',
        link: '/contact'
    },
    {
        id: '6',
        title: 'Inspections & Reports',
        description: 'Detailed roof evaluations and reports for real estate transactions, insurance claims, or preventative maintenance.',
        iconName: 'i-heroicons-clipboard-document-list',
        link: '/contact'
    },
    {
        id: '7',
        title: 'Roofing Contractor Wilmington NC',
        description: 'Licensed roofing contractor in Wilmington NC providing expert roof installation, repair, and replacement services. With over 50 years of combined experience, Mendoza Roofing Company delivers high-quality workmanship using premium materials for both residential and commercial properties in the Wilmington area.',
        iconName: 'i-heroicons-home',
        link: '/contact'
    },
    {
        id: '8',
        title: 'Roof Repair Wilmington NC',
        description: 'Professional roof repair services in Wilmington NC specializing in leak fixes, storm damage restoration, and emergency repairs. Our certified technicians respond quickly to assess and repair roof issues, preventing further damage and extending the life of your roofing system.',
        iconName: 'i-heroicons-wrench-screwdriver',
        link: '/contact'
    },
    {
        id: '9',
        title: 'Roof Replacement Wilmington NC',
        description: 'Complete roof replacement services in Wilmington NC using top-quality shingles, metal, and flat roofing materials. Mendoza Roofing Company offers free estimates and financing options, ensuring your new roof provides superior protection and energy efficiency for years to come.',
        iconName: 'i-heroicons-home-modern',
        link: '/contact'
    },
    {
        id: '10',
        title: 'Roofing Company Wilmington NC',
        description: 'Trusted roofing company in Wilmington NC with a reputation for excellence in residential and commercial roofing. We handle everything from minor repairs to full re-roofing projects, backed by our satisfaction guarantee and commitment to customer service.',
        iconName: 'i-heroicons-shield-check',
        link: '/contact'
    },
    {
        id: '11',
        title: 'Commercial Roofing Wilmington NC',
        description: 'Specialized commercial roofing services in Wilmington NC for businesses, warehouses, and industrial properties. Our team is experienced with flat roofs, metal panels, and waterproof membranes, providing durable solutions that minimize downtime and protect your investment.',
        iconName: 'i-heroicons-clipboard-document-check',
        link: '/contact'
    },
    {
        id: '12',
        title: 'Residential Roofing Wilmington NC',
        description: 'Comprehensive residential roofing services in Wilmington NC for homeowners seeking reliable contractors. From asphalt shingles to tile roofs, we provide expert installation, maintenance, and repair services tailored to the unique needs of your home.',
        iconName: 'i-heroicons-home',
        link: '/contact'
    },
    {
        id: '13',
        title: 'Flat Roof Repair Wilmington NC',
        description: 'Expert flat roof repair in Wilmington NC using advanced waterproofing techniques and materials. Mendoza Roofing Company specializes in EPDM, TPO, and modified bitumen systems, offering long-term solutions for flat roof maintenance and restoration.',
        iconName: 'i-heroicons-wrench-screwdriver',
        link: '/contact'
    },
    {
        id: '14',
        title: 'Metal Roofing Wilmington NC',
        description: 'Premium metal roofing installation and repair services in Wilmington NC. We work with steel, aluminum, and copper panels, providing energy-efficient, low-maintenance roofing solutions that withstand harsh coastal weather conditions.',
        iconName: 'i-heroicons-shield-check',
        link: '/contact'
    },
    {
        id: '15',
        title: 'Emergency Roof Repair Wilmington NC',
        description: '24/7 emergency roof repair services in Wilmington NC for urgent storm damage, leaks, and structural issues. Our rapid response team is equipped to handle emergency situations, providing temporary fixes and comprehensive repairs to protect your property.',
        iconName: 'i-heroicons-exclamation-triangle',
        link: '/contact'
    },
    {
        id: '16',
        title: 'Roofing Contractor Supply NC',
        description: 'Reliable roofing contractor in Supply NC serving Brunswick County with quality roofing services. Mendoza Roofing Company brings our expertise to the Supply area, offering residential and commercial roofing solutions backed by local knowledge and professional standards.',
        iconName: 'i-heroicons-home',
        link: '/contact'
    },
    {
        id: '17',
        title: 'Roofing Company Supply NC',
        description: 'Established roofing company in Supply NC providing comprehensive roofing services for the local community. Our experienced team handles all types of roofing projects, from minor repairs to complete installations, ensuring customer satisfaction and long-lasting results.',
        iconName: 'i-heroicons-shield-check',
        link: '/contact'
    },
    {
        id: '18',
        title: 'Roofing Contractor Brunswick County NC',
        description: 'Professional roofing contractor serving all of Brunswick County NC, including Supply, Calabash, and surrounding areas. Mendoza Roofing Company offers expert roofing services with a focus on quality materials, skilled craftsmanship, and exceptional customer service.',
        iconName: 'i-heroicons-home',
        link: '/contact'
    },
    {
        id: '19',
        title: 'Roof Repair Brunswick County NC',
        description: 'Expert roof repair services throughout Brunswick County NC. We specialize in diagnosing and fixing roof issues quickly and effectively, using proven techniques to restore roof integrity and prevent future problems for homeowners and businesses.',
        iconName: 'i-heroicons-wrench-screwdriver',
        link: '/contact'
    }
];

export const TESTIMONIALS = [
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
