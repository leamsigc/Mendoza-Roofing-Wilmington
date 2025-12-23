import React, { useState } from 'react';
import Layout from '../components/Layout';
import SeoWrapper from '../components/SeoWrapper';
import { MapPin, Phone, Mail, Send, Loader2, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { useConfig } from '../context/ConfigContext';

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS'>('IDLE');
  const { t } = useConfig();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    setTimeout(() => {
      setStatus('SUCCESS');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <SeoWrapper title="Contact Us" description="Get a free roofing estimate from Mendoza Roofing. Serving Supply, NC and Wilmington.">
      <Layout>
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-heading font-black text-primary-900 dark:text-white mb-6 uppercase">Get In Contact Now</h1>
              <div className="inline-block bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 px-6 py-2 rounded-full">
                <p className="text-xl font-bold uppercase tracking-wide">
                  * {t('free_estimate')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Contact Info Sidebar - Navy Blue */}
              <div className="bg-primary-900 text-white p-10 md:p-16 flex flex-col justify-center">
                <h3 className="text-3xl font-heading font-bold mb-10 text-secondary-400 border-b border-primary-800 pb-4">Info</h3>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-5 group">
                    <div className="bg-primary-800 p-3 rounded-lg group-hover:bg-secondary-600 transition-colors">
                      <MapPin size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-primary-200">{t('address')}</h4>
                      <p className="text-lg text-white font-medium">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="bg-primary-800 p-3 rounded-lg group-hover:bg-secondary-600 transition-colors">
                       <Phone size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-primary-200">{t('phone')}</h4>
                      <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-3xl font-heading font-black text-white hover:text-secondary-400 transition-colors block">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="bg-primary-800 p-3 rounded-lg group-hover:bg-secondary-600 transition-colors">
                      <Mail size={28} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-primary-200">{t('email')}</h4>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg text-white hover:text-secondary-400 transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 pt-10 border-t border-primary-800">
                    <div className="bg-primary-800 p-3 rounded-lg">
                      <Clock size={28} className="text-white" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-bold text-xl mb-4 text-primary-200">{t('working_hours')}</h4>
                      <div className="flex justify-between border-b border-primary-800 pb-2 text-lg">
                        <span className="font-medium">{t('mon_fri')}:</span> 
                        <span className="font-bold">8:00AM - 6:00PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form - White/Dark */}
              <div className="p-10 md:p-16 bg-white dark:bg-slate-800">
                <form onSubmit={handleSubmit}>
                  {status === 'SUCCESS' ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                      <div className="w-24 h-24 bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-400 rounded-full flex items-center justify-center mb-6 border-4 border-secondary-500">
                        <Send size={48} />
                      </div>
                      <h3 className="text-3xl font-bold text-primary-900 dark:text-white mb-2">{t('message_sent')}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">{t('thank_you')}, {formState.name}.</p>
                      <button 
                        type="button" 
                        onClick={() => setStatus('IDLE')}
                        className="text-primary-600 dark:text-primary-400 font-bold hover:underline text-lg uppercase tracking-wide"
                      >
                        Send another
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-3xl font-heading font-black text-primary-900 dark:text-white mb-10">{t('get_quote')}</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-5 py-4 rounded-lg bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-secondary-500 focus:outline-none transition-colors text-lg text-slate-900 dark:text-white"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={e => setFormState({...formState, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">E-Mail</label>
                          <input 
                            required
                            type="email" 
                            className="w-full px-5 py-4 rounded-lg bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-secondary-500 focus:outline-none transition-colors text-lg text-slate-900 dark:text-white"
                            placeholder="name@example.com"
                            value={formState.email}
                            onChange={e => setFormState({...formState, email: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">Message</label>
                          <textarea 
                            required
                            rows={5}
                            className="w-full px-5 py-4 rounded-lg bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-secondary-500 focus:outline-none transition-colors text-lg text-slate-900 dark:text-white resize-none"
                            placeholder="I need a roof inspection..."
                            value={formState.message}
                            onChange={e => setFormState({...formState, message: e.target.value})}
                          ></textarea>
                        </div>
                        <button 
                          type="submit" 
                          disabled={status === 'SENDING'}
                          className="w-full bg-secondary-600 text-white font-heading font-black text-xl py-5 rounded-lg hover:bg-secondary-700 transition-all shadow-lg hover:shadow-xl flex justify-center items-center gap-2 disabled:opacity-70 uppercase tracking-widest mt-4"
                        >
                          {status === 'SENDING' ? <Loader2 className="animate-spin" /> : t('send_request')}
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </SeoWrapper>
  );
};

export default ContactPage;
