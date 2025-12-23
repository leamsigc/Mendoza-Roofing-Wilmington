import React from 'react';
import Layout from '../components/Layout';
import SeoWrapper from '../components/SeoWrapper';
import { Award, Users, ShieldCheck, CheckCircle } from 'lucide-react';
import { useConfig } from '../context/ConfigContext';

const AboutPage = () => {
  const { t } = useConfig();
  
  return (
    <SeoWrapper title="About Mendoza Roofing" description="Trusted roofing company in Wilmington and Brunswick County with 50 years experience.">
      <Layout>
        <section className="bg-primary-900 text-white py-24 relative overflow-hidden">
           {/* Abstract shape */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-8 tracking-tight">About Mendoza Roofing</h1>
            <div className="inline-block border-2 border-secondary-500 px-6 py-2 rounded-full">
              <p className="text-xl md:text-2xl text-secondary-400 font-bold uppercase tracking-widest">{t('years_experience')}</p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="prose prose-xl prose-slate dark:prose-invert mx-auto">
              <p className="lead font-bold text-2xl mb-8 text-primary-900 dark:text-white">
                Mendoza Roofing is one of the most trusted roofing companies in Wilmington, serving in the Brunswick County.
              </p>
              
              <p className="mb-6 text-slate-600 dark:text-slate-300">
                We do both residential and commercial roofing for all types of roofs. At Mendoza Roofing we use only the highest quality products to insure that your new roof is built with the integrity and craftsmanship to last for many years to come.
              </p>

              <p className="mb-8 text-slate-600 dark:text-slate-300">
                We are a certified, dependable, licensed, and fully insured roofing company. All Mendoza Roofing employees are fully covered by Workers Compensation Insurance and Liability Insurance.
              </p>

              <div className="bg-primary-50 dark:bg-primary-900/30 border-l-8 border-primary-900 dark:border-primary-400 p-8 my-12 rounded-r-lg">
                <h3 className="text-2xl font-bold text-primary-900 dark:text-white mb-4">Our Guarantee</h3>
                <p className="text-xl font-medium italic text-slate-700 dark:text-slate-300">"{t('trust_text')}"</p>
                <p className="mt-4 font-bold text-secondary-600 dark:text-secondary-400">We can restore Your roof to the original look.</p>
              </div>

              <h3 className="text-3xl font-heading font-black text-primary-900 dark:text-white mt-16 mb-8 text-center">Why Neighbors Trust Us</h3>
              
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                <div className="flex gap-5 items-start p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                   <Award className="text-secondary-500 shrink-0" size={32} />
                   <div>
                     <h4 className="font-bold text-xl text-primary-900 dark:text-white mb-2">Credibility</h4>
                     <p className="text-slate-600 dark:text-slate-400 text-base">Respected members of the local community and business groups.</p>
                   </div>
                </div>
                <div className="flex gap-5 items-start p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                   <Users className="text-secondary-500 shrink-0" size={32} />
                   <div>
                     <h4 className="font-bold text-xl text-primary-900 dark:text-white mb-2">Local Crews</h4>
                     <p className="text-slate-600 dark:text-slate-400 text-base">We are a local company with local crews. We don't outsource.</p>
                   </div>
                </div>
                <div className="flex gap-5 items-start p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                   <ShieldCheck className="text-secondary-500 shrink-0" size={32} />
                   <div>
                     <h4 className="font-bold text-xl text-primary-900 dark:text-white mb-2">Fully Insured</h4>
                     <p className="text-slate-600 dark:text-slate-400 text-base">Required Liability and Workman’s Comp Insurance on all employees.</p>
                   </div>
                </div>
                <div className="flex gap-5 items-start p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                   <CheckCircle className="text-secondary-500 shrink-0" size={32} />
                   <div>
                     <h4 className="font-bold text-xl text-primary-900 dark:text-white mb-2">Dependable</h4>
                     <p className="text-slate-600 dark:text-slate-400 text-base">We keep our word. Contract terms are clear with no hidden costs.</p>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </Layout>
    </SeoWrapper>
  );
};

export default AboutPage;
