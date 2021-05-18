// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// import "tailwindcss/tailwind.css";
import "~/assets/styles.css";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;900&display=swap",
  });
  head.meta.push({
    name: 'keywords',
    content: 'Mendoza Roofing Wilmington,Shallotte Roofing Company,'
  })
  head.meta.push({
    name: 'description',
    content: 'Mendoza Roofing Company Wilmington offers roof repair and replacement. If you are looking for an Affordable and responsible  Roofing Company you will want to give us a chance!. Call us today for your free estimate Mendoza Roofing.'
  })
  head.meta.push({
    name: 'og:locale',
    content: 'en_US'
  })
  head.meta.push({
    name: 'og:type',
    content: 'website'
  })
  head.meta.push({
    name: 'title',
    content: 'Mendoza Roofing Company | Mendoza Roofing Company'
  })
  head.meta.push({
    name: 'og:description',
    content:"Mendoza Roofing Company Wilmington offers roof repair and replacement. If you are looking for an Affordable and responsible  Roofing Company you will want to give us a chance!. Call us today for your free estimate Mendoza Roofing."
  })
  head.meta.push({
    name: 'twitter:card',
    content:"Mendoza Roofing Company Wilmington offers roof repair and replacement. If you are looking for an Affordable and responsible  Roofing Company you will want to give us a chance!. Call us today for your free estimate Mendoza Roofing."
  })
  head.meta.push({
    name: 'twitter:title',
    content:"Mendoza Roofing Company Wilmington offers roof repair and replacement. If you are looking for an Affordable and responsible  Roofing Company you will want to give us a chance!. Call us today for your free estimate Mendoza Roofing."
  })
  head.meta.push({
    name: 'og:url',
    content:"https://roofingmendoza.com"
  })


  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
