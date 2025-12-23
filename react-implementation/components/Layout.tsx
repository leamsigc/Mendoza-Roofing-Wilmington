import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, ArrowRight, Clock, Sun, Moon, Globe, ShieldCheck } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import { useConfig } from '../context/ConfigContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, theme, toggleTheme, language, toggleLanguage } = useConfig();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    try {
      window.scrollTo(0, 0);
    } catch (e) {
      // Ignore scroll errors in sandboxed environments
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* Top Bar - Gold Stripe (Industrial Action Color) */}
      <div className="bg-gold-500 text-navy-900 py-1.5 px-4 text-xs md:text-sm font-bold uppercase tracking-wider relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
             <span className="hidden md:flex items-center gap-2"><ShieldCheck size={16} /> Licensed & Fully Insured</span>
             <span className="flex md:hidden items-center gap-2"><Phone size={14} /> {COMPANY_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-3">
               <button onClick={toggleTheme} className="hover:text-white transition-colors p-1" aria-label="Toggle Theme">
                 {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
               </button>
               <button onClick={toggleLanguage} className="flex items-center gap-1 hover:text-white transition-colors p-1" aria-label="Toggle Language">
                 <Globe size={16} /> {language}
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* Main Header - Deep Navy for Logo Contrast */}
      <header className="sticky top-0 z-40 bg-navy-900 border-b border-navy-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 md:h-24 flex justify-between items-center">
          
          {/* Logo Container */}
          <Link to="/" className="flex items-center gap-3 group h-full py-2">
            <img 
              src="https://roofingmendoza.com/img/logoTransparent.png" 
              alt="Mendoza Roofing Company" 
              className="h-full w-auto object-contain filter drop-shadow-lg" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center h-full">
            <nav className="flex items-center h-full mr-8">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="px-5 h-full flex items-center text-sm xl:text-base font-display font-bold text-gray-300 hover:text-gold-500 hover:bg-navy-800/50 transition-all uppercase tracking-widest border-b-4 border-transparent hover:border-gold-500"
                >
                  {t(link.nameKey)}
                </Link>
              ))}
            </nav>
            {/* Call Action Button */}
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-sm font-display font-bold text-lg transition-all shadow-hard-sm hover:shadow-hard hover:-translate-y-0.5 border border-teal-400 flex items-center gap-2"
            >
              <Phone size={20} className="animate-pulse" /> {COMPANY_INFO.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-navy-800 rounded-sm border border-navy-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-navy-900 border-t border-navy-700 absolute w-full left-0 shadow-2xl z-50">
            <div className="flex flex-col p-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-lg font-display font-bold text-gray-300 py-4 border-b border-navy-800 hover:text-gold-500 hover:pl-2 transition-all uppercase"
                >
                  {t(link.nameKey)}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-4">
                 <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <Clock size={16} className="text-gold-500" /> Mon - Fri: 8:00AM - 6:00PM
                 </div>
                 <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-teal-600 text-white text-center py-4 rounded-sm font-display font-bold text-xl shadow-hard border border-teal-500"
                >
                  {t('call_now')}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-concrete-50 dark:bg-navy-950">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-950 text-white pt-20 pb-10 border-t-4 border-gold-500 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tighter">Mendoza<span className="text-gold-500">Roofing</span></h3>
              <p className="text-gray-400 leading-relaxed">
                Over 50 years of delivering award-winning roofing solutions to homeowners and businesses in Brunswick County.
              </p>
              <div className="flex gap-4">
                 {/* Social placeholders */}
                 <div className="w-10 h-10 bg-navy-800 flex items-center justify-center rounded-sm hover:bg-gold-500 hover:text-navy-900 transition-colors cursor-pointer"><Globe size={20}/></div>
                 <div className="w-10 h-10 bg-navy-800 flex items-center justify-center rounded-sm hover:bg-gold-500 hover:text-navy-900 transition-colors cursor-pointer"><Mail size={20}/></div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-bold text-gold-500 mb-6 uppercase tracking-widest">{t('quick_links')}</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 inline-flex">
                      <ArrowRight size={14} className="text-teal-500" /> {t(link.nameKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-display font-bold text-gold-500 mb-6 uppercase tracking-widest">{t('contact_us')}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <MapPin className="text-teal-500 shrink-0 mt-1" size={20} />
                  <span>{COMPANY_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3 text-white font-bold text-lg">
                  <Phone className="text-teal-500 shrink-0" size={20} />
                  <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}>{COMPANY_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Mail className="text-teal-500 shrink-0" size={20} />
                  <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-display font-bold text-gold-500 mb-6 uppercase tracking-widest">{t('working_hours')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between border-b border-navy-800 pb-2"><span>Mon - Fri</span> <span className="text-white">8:00AM - 6:00PM</span></li>
                <li className="flex justify-between border-b border-navy-800 pb-2"><span>Sat - Sun</span> <span className="text-teal-500">Closed</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} Mendoza Roofing Company. {t('rights_reserved')}</p>
            <p>Designed for Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;