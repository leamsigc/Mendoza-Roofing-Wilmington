import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Shield, Clock, Award, Hammer, Home, ClipboardCheck, Phone, Star, HardHat, Umbrella, PenTool, CheckSquare } from 'lucide-react';
import Layout from '../components/Layout';
import SeoWrapper from '../components/SeoWrapper';
import { SERVICES, COMPANY_INFO, TESTIMONIALS } from '../constants';
import { useConfig } from '../context/ConfigContext';

const icons = {
  Hammer: Hammer,
  Home: Home,
  Shield: Shield,
  ClipboardCheck: ClipboardCheck
};

const HomePage = () => {
  const { t } = useConfig();

  return (
    <SeoWrapper 
      title="Mendoza Roofing" 
      description="Premier Roofing Contractor in Wilmington & Supply, NC. 50+ Years Experience in Residential & Commercial Roofing. Licensed & Insured."
    >
      <Layout>
        {/* HERO SECTION - Immersive Dark Theme */}
        <section className="relative bg-navy-900 text-white min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
               alt="Roofing Construction Detail" 
               className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/90 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full pt-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-gold-500 font-display font-bold tracking-widest uppercase mb-6 animate-fade-in">
                <Star size={20} fill="currentColor" />
                <span>Premier Solutions since 1974</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 text-white drop-shadow-2xl">
                MASTERING <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">THE ART OF</span> <br/>
                ROOFING
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed border-l-4 border-gold-500 pl-6">
                Specializing in <strong className="text-white">Residential</strong> and <strong className="text-white">Commercial</strong> projects in Wilmington, Supply, and Brunswick County.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-gold-500 text-navy-900 px-8 py-4 rounded-sm font-display font-bold text-xl hover:bg-white transition-all shadow-hard flex justify-center items-center gap-3 uppercase tracking-wider"
                >
                  <Phone size={24} /> {t('call_now')}
                </a>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-display font-bold text-xl hover:bg-white hover:text-navy-900 transition-all flex justify-center items-center gap-3 uppercase tracking-wider"
                >
                   {t('get_quote')}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-gray-500">
             <ArrowRight className="rotate-90" size={32} />
          </div>
        </section>

        {/* TRUST BAR - High Contrast Stats */}
        <section className="bg-gold-500 text-navy-950 py-12 relative z-20 shadow-xl">
           <div className="max-w-7xl mx-auto px-4 md:px-8">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-navy-900/10">
               <div>
                 <p className="text-4xl md:text-5xl font-display font-bold mb-1">50+</p>
                 <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years Experience</p>
               </div>
               <div>
                 <p className="text-4xl md:text-5xl font-display font-bold mb-1">5.0</p>
                 <p className="text-sm font-bold uppercase tracking-widest opacity-80 flex items-center justify-center gap-1"><Star size={14} fill="black" /> Google Rating</p>
               </div>
               <div>
                 <p className="text-4xl md:text-5xl font-display font-bold mb-1">24/7</p>
                 <p className="text-sm font-bold uppercase tracking-widest opacity-80">Emergency Support</p>
               </div>
               <div>
                 <p className="text-4xl md:text-5xl font-display font-bold mb-1">A+</p>
                 <p className="text-sm font-bold uppercase tracking-widest opacity-80">Rated Service</p>
               </div>
             </div>
           </div>
        </section>

        {/* BENTO GRID SERVICES - Modern Layout */}
        <section className="py-24 bg-concrete-50 dark:bg-navy-950" id="services">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-2 block font-display">Our Expertise</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-navy-900 dark:text-white uppercase leading-none">
                  Built to <span className="text-outline-navy dark:text-outline-white text-transparent bg-clip-text bg-gradient-to-br from-navy-800 to-navy-600 dark:from-white dark:to-gray-400">Last</span>
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-md text-lg leading-relaxed text-right md:text-left">
                From new constructions to historic restorations, we handle every aspect of roofing with precision.
              </p>
            </div>

            {/* The Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              
              {/* Main Feature - Large */}
              <div className="md:col-span-2 md:row-span-2 bg-navy-900 rounded-sm p-10 relative overflow-hidden group border border-navy-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="w-16 h-16 bg-teal-600 rounded-sm flex items-center justify-center text-white mb-6 shadow-hard">
                     <HardHat size={32} />
                   </div>
                   <div>
                     <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">New Constructions</h3>
                     <p className="text-gray-300 text-lg mb-8 max-w-lg">
                       Yes, we also do new constructions. We use only the highest quality products to insure that your new roof is built with the integrity and craftsmanship to last for many years to come.
                     </p>
                     <Link to="/contact" className="text-gold-500 font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all">
                       Start Project <ArrowRight size={18} />
                     </Link>
                   </div>
                </div>
              </div>

              {/* Service Cards */}
              {SERVICES.slice(1, 4).map((service, idx) => {
                 const Icon = icons[service.iconName];
                 return (
                  <div key={service.id} className="bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-800 p-8 rounded-sm hover:border-gold-500 transition-colors group flex flex-col justify-between shadow-sm hover:shadow-hard">
                    <div className="flex justify-between items-start">
                       <Icon size={40} className="text-navy-900 dark:text-white group-hover:text-gold-500 transition-colors" strokeWidth={1.5} />
                       <span className="text-gray-200 dark:text-navy-800 text-6xl font-display font-bold -mt-4 opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 2}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-navy-900 dark:text-white mb-2">{service.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4">{service.description}</p>
                      <Link to={service.link} className="inline-block p-2 bg-gray-100 dark:bg-navy-800 rounded-full hover:bg-gold-500 hover:text-navy-900 transition-colors">
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                 )
              })}

               {/* Dark Card */}
               <div className="bg-teal-700 p-8 rounded-sm flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <Umbrella size={48} className="text-white mb-4" />
                  <h3 className="text-2xl font-display font-bold text-white mb-2">EDS Waterproofing</h3>
                  <p className="text-teal-100 mb-6">Approved Installers for high-performance membranes.</p>
                  <Link to="/contact" className="bg-white text-teal-800 px-6 py-2 rounded-sm font-bold uppercase text-sm hover:bg-navy-900 hover:text-white transition-colors">
                    Learn More
                  </Link>
               </div>
            </div>

            {/* Chips for SEO */}
            <div className="mt-12 flex flex-wrap gap-2 justify-center">
              {["Metal Roofs", "Slate", "Tile", "Shingles", "Flat Roofs", "Lead Roofing", "Chimney Repair", "Soffits", "Fascia", "Roof Coating"].map(tag => (
                <span key={tag} className="border border-gray-300 dark:border-navy-700 px-4 py-1.5 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-500 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS TEASER - Interactivity/SEO Boost */}
        <section className="py-20 bg-teal-50 dark:bg-navy-800 border-y border-teal-100 dark:border-navy-700">
           <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 dark:text-white mb-6">
                   Planning a Roof Replacement?
                 </h2>
                 <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                   Use our free online tools to get a cost estimate or check for storm damage before calling a professional. Empowering homeowners is our priority.
                 </p>
                 <div className="flex gap-4">
                    <Link to="/tools" className="bg-teal-600 text-white px-6 py-3 rounded-sm font-bold uppercase shadow-hard hover:bg-teal-700 flex items-center gap-2">
                       <Calculator size={20} /> Cost Estimator
                    </Link>
                    <Link to="/tools" className="bg-white text-navy-900 border border-gray-300 px-6 py-3 rounded-sm font-bold uppercase shadow-sm hover:bg-gray-50 flex items-center gap-2">
                       <CheckSquare size={20} /> Safety Checklist
                    </Link>
                 </div>
              </div>
              <div className="relative h-64 md:h-80 bg-navy-900 rounded-sm overflow-hidden shadow-hard">
                 <img src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Roof Inspection" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold flex items-center gap-2"><PenTool size={16} className="text-gold-500" /> Free Tools Available</p>
                 </div>
              </div>
           </div>
        </section>

        {/* CHECKLIST SECTION - Dark Industrial */}
        <section className="py-24 bg-navy-950 text-white relative border-y border-navy-800">
           <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-20">
             
             <div className="lg:w-1/2">
                <div className="sticky top-32">
                  <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase leading-none">
                    The Mendoza <br/>
                    <span className="text-gold-500">Standard</span>
                  </h2>
                  <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                    We don't just meet industry standards; we set them. Our checklist ensures every project is delivered with maximum security and quality.
                  </p>
                  
                  <div className="p-8 bg-navy-900 border border-navy-800 rounded-sm relative">
                    <div className="absolute -left-1 top-8 h-12 w-1 bg-gold-500"></div>
                    <blockquote className="text-2xl font-display italic text-gray-200">
                      "The job is not done until you are satisfied! We restore your roof to the original look."
                    </blockquote>
                  </div>
                </div>
             </div>

             <div className="lg:w-1/2">
               <div className="space-y-6">
                 {[
                   { title: "Fully Insured", desc: "Required Liability and Workman’s Comp Insurance on all employees." },
                   { title: "State Licensed", desc: "In good current standing with all local and state regulations." },
                   { title: "Local Crews", desc: "Brunswick County natives. We know the local weather and architecture." },
                   { title: "Clear Contracts", desc: "Transparent pricing. No hidden costs. We keep our word." },
                   { title: "Established Reputation", desc: "Credibility in the community with references of previous work." },
                   { title: "Free Estimates", desc: "Detailed inspections and reports before we start." }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                         <div className="w-12 h-12 bg-navy-800 border border-navy-700 text-teal-500 rounded-sm flex items-center justify-center font-bold text-xl group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:border-gold-500 transition-all shadow-hard">
                           {idx + 1}
                         </div>
                         {idx !== 5 && <div className="w-px h-full bg-navy-800 my-2 group-hover:bg-navy-700"></div>}
                      </div>
                      <div className="pb-8">
                        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
             </div>

           </div>
        </section>
        
        {/* TESTIMONIALS - Real Data */}
        <section className="py-24 bg-concrete-100 dark:bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 dark:text-white uppercase mb-4">What Neighbors Say</h2>
               <div className="inline-flex items-center gap-2 bg-white dark:bg-navy-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-navy-700">
                  <span className="font-bold text-navy-900 dark:text-white">5.0</span>
                  <div className="flex text-gold-500">
                     {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">on Google Reviews</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {TESTIMONIALS.map((t) => (
                 <div key={t.id} className="bg-white dark:bg-navy-950 p-8 rounded-sm shadow-sm border-t-4 border-gold-500 relative flex flex-col h-full">
                   <div className="flex text-gold-500 mb-4">
                     {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="text-gray-600 dark:text-gray-300 text-lg italic mb-6 flex-grow">"{t.content}"</p>
                   <div className="pt-4 border-t border-gray-100 dark:border-navy-800">
                     <p className="font-display font-bold text-navy-900 dark:text-white uppercase">{t.name}</p>
                     <p className="text-sm text-gray-500 uppercase tracking-widest">{t.role}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* CTA - Bold Action */}
        <section className="py-20 bg-teal-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 uppercase leading-none">{t('need_help')}</h2>
            <p className="text-2xl font-light mb-12 opacity-90 max-w-2xl mx-auto">Don't wait for a leak to become a disaster. Get your free professional evaluation today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="bg-navy-900 text-white px-10 py-5 rounded-sm font-display font-bold text-2xl hover:bg-navy-800 transition-colors shadow-hard border-2 border-navy-900 uppercase">
                 Call {COMPANY_INFO.phone}
               </a>
               <Link to="/contact" className="bg-white text-teal-800 px-10 py-5 rounded-sm font-display font-bold text-2xl hover:bg-gray-100 transition-colors shadow-hard uppercase">
                 Get Free Quote
               </Link>
            </div>
          </div>
        </section>
      </Layout>
    </SeoWrapper>
  );
};

export default HomePage;