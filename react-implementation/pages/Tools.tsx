import React, { useState } from 'react';
import Layout from '../components/Layout';
import SeoWrapper from '../components/SeoWrapper';
import { Calculator, CheckSquare, AlertTriangle, ArrowRight, DollarSign, Home, RefreshCw, Tag, Search, Phone, CalendarCheck } from 'lucide-react';
import { useConfig } from '../context/ConfigContext';
import { Link } from 'react-router-dom';
import { SEO_KEYWORDS, COMPANY_INFO } from '../constants';

const ToolsPage = () => {
  const { t } = useConfig();
  
  // Calculator State
  const [sqFt, setSqFt] = useState<number>(2000);
  const [material, setMaterial] = useState<'asphalt' | 'metal' | 'tile'>('asphalt');
  const [complexity, setComplexity] = useState<'simple' | 'average' | 'complex'>('average');

  // Checklist State
  const [checklist, setChecklist] = useState({
    missingShingles: false,
    leaks: false,
    granules: false,
    age: false,
    sagging: false
  });

  const calculateCost = () => {
    let baseRate = 0;
    switch(material) {
        case 'asphalt': baseRate = 4.50; break;
        case 'metal': baseRate = 12.00; break;
        case 'tile': baseRate = 18.00; break;
    }
    
    let complexityMultiplier = 1;
    switch(complexity) {
        case 'simple': complexityMultiplier = 1; break;
        case 'average': complexityMultiplier = 1.2; break;
        case 'complex': complexityMultiplier = 1.5; break;
    }

    const min = Math.round(sqFt * baseRate * complexityMultiplier);
    const max = Math.round(min * 1.25);
    
    return { min, max };
  };

  const estimate = calculateCost();

  const handleChecklistChange = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getChecklistResult = () => {
    const count = Object.values(checklist).filter(Boolean).length;
    if (count === 0) return { text: "Your roof seems okay, but an annual inspection is recommended.", color: "text-teal-500" };
    if (count <= 2) return { text: "Some warning signs detected. You should schedule a professional inspection soon.", color: "text-gold-500" };
    return { text: "CRITICAL: Major issues detected. Contact us immediately for an emergency evaluation.", color: "text-red-500" };
  };

  const checklistResult = getChecklistResult();

  return (
    <SeoWrapper 
        title="Homeowner Tools & Resources" 
        description="Free roof cost calculator and storm damage checklist for homeowners in Wilmington and Supply, NC."
    >
      <Layout>
        {/* Header */}
        <div className="bg-navy-900 text-white py-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
             <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase">Homeowner Tools</h1>
                <p className="text-xl text-primary-200">Plan your project and protect your investment.</p>
             </div>
        </div>

        <div className="bg-concrete-50 dark:bg-navy-950 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Tools Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    
                    {/* Calculator Tool */}
                    <div className="bg-white dark:bg-navy-900 rounded-sm shadow-hard border border-gray-200 dark:border-navy-800 overflow-hidden">
                        <div className="bg-teal-600 p-6 flex items-center gap-3 text-white">
                            <Calculator size={32} />
                            <h2 className="text-2xl font-display font-bold uppercase tracking-wide">Replacement Estimator</h2>
                        </div>
                        <div className="p-8">
                            <p className="mb-8 text-gray-600 dark:text-gray-300">
                                Get a rough estimate for a full roof replacement. Note: This is strictly for planning purposes. Actual costs vary based on site conditions.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <label className="block font-bold text-navy-900 dark:text-white mb-2">Home Size (Square Feet)</label>
                                    <div className="flex items-center gap-4">
                                        <input 
                                            type="range" 
                                            min="800" 
                                            max="5000" 
                                            step="100"
                                            value={sqFt}
                                            onChange={(e) => setSqFt(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                                        />
                                        <span className="font-mono font-bold w-20 text-right text-navy-900 dark:text-white">{sqFt} sqft</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-bold text-navy-900 dark:text-white mb-2">Material</label>
                                        <select 
                                            className="w-full p-3 bg-gray-100 dark:bg-navy-800 border border-gray-300 dark:border-navy-700 rounded-sm"
                                            value={material}
                                            onChange={(e) => setMaterial(e.target.value as any)}
                                        >
                                            <option value="asphalt">Asphalt Shingles (Standard)</option>
                                            <option value="metal">Metal (Premium)</option>
                                            <option value="tile">Tile/Slate (Luxury)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block font-bold text-navy-900 dark:text-white mb-2">Complexity</label>
                                        <select 
                                            className="w-full p-3 bg-gray-100 dark:bg-navy-800 border border-gray-300 dark:border-navy-700 rounded-sm"
                                            value={complexity}
                                            onChange={(e) => setComplexity(e.target.value as any)}
                                        >
                                            <option value="simple">Simple (Gable)</option>
                                            <option value="average">Average (Some Hips/Valleys)</option>
                                            <option value="complex">Complex (Steep/Many Angles)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-8 p-6 bg-navy-50 dark:bg-navy-800 border-2 border-dashed border-teal-500 rounded-sm text-center">
                                    <p className="text-sm font-bold uppercase text-gray-500 mb-1">Estimated Range</p>
                                    <p className="text-4xl font-display font-bold text-navy-900 dark:text-white">
                                        ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
                                    </p>
                                </div>
                                
                                <Link to="/contact" className="block w-full text-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold uppercase py-4 rounded-sm shadow-hard transition-all">
                                    Get Official Quote
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Storm Damage Checklist */}
                    <div className="bg-white dark:bg-navy-900 rounded-sm shadow-hard border border-gray-200 dark:border-navy-800 overflow-hidden">
                        <div className="bg-navy-800 p-6 flex items-center gap-3 text-white">
                            <CheckSquare size={32} className="text-gold-500" />
                            <h2 className="text-2xl font-display font-bold uppercase tracking-wide">Self-Inspection Checklist</h2>
                        </div>
                        <div className="p-8">
                            <p className="mb-8 text-gray-600 dark:text-gray-300">
                                Identify common signs of roof failure before they become expensive leaks. Check all that apply:
                            </p>

                            <div className="space-y-4 mb-8">
                                <label className="flex items-center gap-4 p-4 border border-gray-200 dark:border-navy-700 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors">
                                    <div className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center ${checklist.missingShingles ? 'bg-gold-500 border-gold-500' : 'border-gray-300'}`}>
                                        {checklist.missingShingles && <CheckSquare size={16} className="text-white" />}
                                    </div>
                                    <input type="checkbox" className="hidden" checked={checklist.missingShingles} onChange={() => handleChecklistChange('missingShingles')} />
                                    <span className="font-bold text-navy-900 dark:text-white">Missing or Cracked Shingles</span>
                                </label>

                                <label className="flex items-center gap-4 p-4 border border-gray-200 dark:border-navy-700 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors">
                                    <div className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center ${checklist.leaks ? 'bg-gold-500 border-gold-500' : 'border-gray-300'}`}>
                                        {checklist.leaks && <CheckSquare size={16} className="text-white" />}
                                    </div>
                                    <input type="checkbox" className="hidden" checked={checklist.leaks} onChange={() => handleChecklistChange('leaks')} />
                                    <span className="font-bold text-navy-900 dark:text-white">Water Stains on Ceiling / Attic</span>
                                </label>

                                <label className="flex items-center gap-4 p-4 border border-gray-200 dark:border-navy-700 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors">
                                    <div className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center ${checklist.granules ? 'bg-gold-500 border-gold-500' : 'border-gray-300'}`}>
                                        {checklist.granules && <CheckSquare size={16} className="text-white" />}
                                    </div>
                                    <input type="checkbox" className="hidden" checked={checklist.granules} onChange={() => handleChecklistChange('granules')} />
                                    <span className="font-bold text-navy-900 dark:text-white">Granules in Gutters (Sand-like texture)</span>
                                </label>

                                 <label className="flex items-center gap-4 p-4 border border-gray-200 dark:border-navy-700 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-navy-800 transition-colors">
                                    <div className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center ${checklist.age ? 'bg-gold-500 border-gold-500' : 'border-gray-300'}`}>
                                        {checklist.age && <CheckSquare size={16} className="text-white" />}
                                    </div>
                                    <input type="checkbox" className="hidden" checked={checklist.age} onChange={() => handleChecklistChange('age')} />
                                    <span className="font-bold text-navy-900 dark:text-white">Roof is over 20 years old</span>
                                </label>
                            </div>

                            <div className="bg-gray-100 dark:bg-navy-800 p-6 rounded-sm flex gap-4 items-start">
                                 <AlertTriangle size={32} className={`${checklistResult.color} shrink-0 mt-1`} />
                                 <div>
                                     <h4 className={`font-bold text-lg mb-1 ${checklistResult.color}`}>Analysis Result:</h4>
                                     <p className="text-gray-700 dark:text-gray-300">{checklistResult.text}</p>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prominent CTA Section */}
                <div className="bg-navy-900 rounded-sm shadow-hard border-t-4 border-gold-500 p-8 md:p-12 mb-16 relative overflow-hidden text-center md:text-left group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                        <CalendarCheck size={180} className="text-white" />
                    </div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div>
                            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                                <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Free Service</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-4 leading-tight">
                                Don't Guess. <span className="text-teal-400">Get Expert Advice.</span>
                            </h2>
                            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                                Our online tools are a great starting point, but nothing beats a professional inspection. 
                                We will provide a guaranteed price quote and detailed roof health report at no cost to you.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
                            <Link 
                                to="/contact" 
                                className="bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded-sm font-display font-bold text-xl uppercase tracking-widest shadow-hard transform transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <CalendarCheck size={24} />
                                Schedule Now
                            </Link>
                            <a 
                                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-sm font-display font-bold text-xl uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                            >
                                <Phone size={24} />
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* SEO Keywords Section */}
                <div className="bg-white dark:bg-navy-900 rounded-sm shadow-hard border border-gray-200 dark:border-navy-800 p-8 md:p-12">
                   <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-8 border-b border-gray-100 dark:border-navy-800 pb-8">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-navy-900 dark:text-white mb-2 flex items-center gap-3">
                           <Search className="text-gold-500" size={28} />
                           Local Search Topics
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                           We specialize in specific roofing needs across our service area. Select a topic to find relevant information or request a service.
                        </p>
                      </div>
                      <Link to="/contact" className="shrink-0 bg-teal-600 text-white px-6 py-3 rounded-sm font-bold uppercase hover:bg-teal-700 transition-colors shadow-sm">
                         Request Service
                      </Link>
                   </div>
                   
                   <div className="flex flex-wrap gap-3">
                      {SEO_KEYWORDS.slice(0, 10).map((keyword, idx) => (
                         <Link 
                           key={idx} 
                           to={idx % 2 === 0 ? "/contact" : "/blog"} 
                           className="group flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-navy-950 border border-gray-200 dark:border-navy-800 rounded-sm text-sm font-bold text-navy-700 dark:text-gray-300 uppercase tracking-wide hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-500 transition-all"
                         >
                           <Tag size={14} className="text-gray-400 group-hover:text-gold-500 transition-colors" />
                           {keyword}
                         </Link>
                      ))}
                   </div>
                </div>

            </div>
        </div>
      </Layout>
    </SeoWrapper>
  );
};

export default ToolsPage;