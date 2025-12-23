import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SeoWrapper from '../components/SeoWrapper';
import { INITIAL_BLOG_POSTS, SEO_KEYWORDS } from '../constants';
import { BlogPost, LoadingState } from '../types';
import { Calendar, User, ArrowRight, Sparkles, Loader2, Tag, Search } from 'lucide-react';
import { generateBlogTopicIdea, generateFullBlogPost } from '../services/geminiService';

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const [searchTerm, setSearchTerm] = useState('');

  const handleGenerateAIContent = async () => {
    setLoadingState(LoadingState.LOADING);
    const topic = await generateBlogTopicIdea();
    const newPostData = await generateFullBlogPost(topic);

    if (newPostData && newPostData.title && newPostData.content) {
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: newPostData.title,
        excerpt: newPostData.excerpt || "Fresh content from our experts.",
        content: newPostData.content,
        author: "Mendoza AI Assistant",
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        imageUrl: `https://picsum.photos/800/400?random=${Date.now()}`,
        tags: newPostData.tags || ['Roofing'],
        slug: newPostData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      };

      setPosts([newPost, ...posts]);
      setLoadingState(LoadingState.SUCCESS);
    } else {
      setLoadingState(LoadingState.ERROR);
    }
    setTimeout(() => setLoadingState(LoadingState.IDLE), 3000);
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SeoWrapper title="Roofing Blog" description="Expert roofing tips, maintenance advice, and industry news from Mendoza Roofing.">
      <Layout>
        {/* Page Header */}
        <div className="bg-primary-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-6">Expert Roofing Insights</h1>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto font-medium">
              Stay informed with the latest maintenance tips, trends, and advice from our certified professionals.
            </p>
          </div>
        </div>

        <section className="bg-slate-50 dark:bg-slate-950 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Area */}
            <div className="lg:w-2/3">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
                <div className="relative w-full sm:w-auto flex-grow max-w-md">
                   <input 
                     type="text" 
                     placeholder="Search articles..." 
                     className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-secondary-500 focus:outline-none transition-all shadow-sm"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                   />
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
                
                <button 
                  onClick={handleGenerateAIContent}
                  disabled={loadingState === LoadingState.LOADING}
                  className="w-full sm:w-auto shrink-0 group relative bg-gradient-to-r from-primary-600 to-primary-800 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-primary-500/30 transition-all overflow-hidden flex items-center justify-center gap-2"
                >
                  {loadingState === LoadingState.LOADING ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <Sparkles size={20} className="text-yellow-300" />
                  )}
                  <span className="relative z-10">
                    {loadingState === LoadingState.LOADING ? 'Writing...' : 'AI Generate'}
                  </span>
                </button>
              </div>

              {/* Status Messages */}
              {loadingState === LoadingState.ERROR && (
                 <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 p-4 rounded-lg mb-8 animate-fade-in border border-red-200 dark:border-red-800">
                   Failed to generate content. Please check API configuration.
                 </div>
              )}
              {loadingState === LoadingState.SUCCESS && (
                 <div className="bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-200 p-4 rounded-lg mb-8 animate-fade-in border border-secondary-200 dark:border-secondary-800">
                   New article generated successfully! Check the top of the list.
                 </div>
              )}

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group border border-slate-100 dark:border-slate-800 hover:border-secondary-500 dark:hover:border-secondary-500">
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                         {post.tags.slice(0, 1).map(tag => (
                           <span key={tag} className="bg-primary-900 text-white text-xs font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wide">
                             {tag}
                           </span>
                         ))}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4 font-bold uppercase tracking-wide">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                      </div>
                      <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="inline-flex items-center text-primary-700 dark:text-primary-400 font-bold text-sm hover:gap-2 transition-all mt-auto uppercase tracking-wide"
                      >
                        Read Article <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border-t-4 border-primary-900">
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <Tag className="text-secondary-500" size={20} /> Popular Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SEO_KEYWORDS.slice(0, 15).map((keyword, idx) => (
                    <Link 
                      key={idx} 
                      to="/blog" 
                      className="text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-2 rounded hover:bg-secondary-600 hover:text-white transition-colors uppercase"
                    >
                      {keyword}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-primary-900 text-white p-8 rounded-xl shadow-xl text-center">
                <h3 className="text-2xl font-heading font-black mb-4">Need a Quote?</h3>
                <p className="mb-8 text-primary-200">Our experts are ready to inspect your roof today. Free estimates.</p>
                <Link to="/contact" className="block w-full bg-secondary-600 hover:bg-secondary-700 text-white py-4 rounded-lg font-black uppercase tracking-wide transition-colors shadow-lg">
                  Contact Us
                </Link>
              </div>
            </aside>

          </div>
        </section>
      </Layout>
    </SeoWrapper>
  );
};

export default BlogList;
