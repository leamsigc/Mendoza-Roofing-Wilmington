import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SeoWrapper from '../components/SeoWrapper';
import { INITIAL_BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowLeft, Facebook, Linkedin, Twitter, Tag } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  
  const post = useMemo(() => INITIAL_BLOG_POSTS.find(p => p.id === id), [id]);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Article Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">The article you are looking for does not exist or has been moved.</p>
          <Link to="/blog" className="bg-primary-900 text-white px-6 py-3 rounded-lg font-bold">Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  // Simple Markdown-ish renderer
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      const trimLine = line.trim();
      if (trimLine.startsWith('## ')) {
        return <h2 key={index} className="text-2xl md:text-3xl font-heading font-bold text-primary-900 dark:text-white mt-10 mb-6 border-b border-secondary-500 pb-2 inline-block">{trimLine.replace('## ', '')}</h2>;
      }
      if (trimLine.startsWith('### ')) {
        return <h3 key={index} className="text-xl md:text-2xl font-heading font-bold text-slate-800 dark:text-slate-200 mt-8 mb-4">{trimLine.replace('### ', '')}</h3>;
      }
      if (trimLine.startsWith('**') && trimLine.endsWith('**')) {
        return <p key={index} className="font-bold text-secondary-700 dark:text-secondary-400 my-4 text-lg p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg border-l-4 border-secondary-500">{trimLine.replace(/\*\*/g, '')}</p>;
      }
      if (trimLine.match(/^\d\./)) {
         return <li key={index} className="ml-6 list-decimal text-slate-700 dark:text-slate-300 mb-3 pl-2 marker:text-primary-600 marker:font-bold">{trimLine.replace(/^\d\./, '').trim()}</li>
      }
      if (trimLine === '') return <br key={index} />;
      return <p key={index} className="text-slate-700 dark:text-slate-300 leading-8 mb-4 text-lg">{trimLine}</p>;
    });
  };

  return (
    <SeoWrapper title={post.title} description={post.excerpt}>
      <Layout>
        {/* Hero Header */}
        <div className="bg-primary-900 text-white relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={post.imageUrl} alt="Background" className="w-full h-full object-cover blur-sm" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center z-10">
            <div className="flex justify-center gap-2 mb-8">
              {post.tags.map(tag => (
                <span key={tag} className="bg-secondary-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black mb-8 leading-tight drop-shadow-md">{post.title}</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-200 font-medium text-sm md:text-base">
              <span className="flex items-center gap-2"><User size={18} className="text-secondary-400" /> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar size={18} className="text-secondary-400" /> {post.date}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3">
             <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 p-8 md:p-12 prose prose-lg prose-slate dark:prose-invert max-w-none">
               {renderContent(post.content)}
             </div>

             {/* Share */}
             <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8 flex items-center justify-between">
               <span className="font-bold text-slate-900 dark:text-white">Share this article:</span>
               <div className="flex gap-4">
                 <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"><Facebook size={20} /></button>
                 <button className="bg-sky-500 text-white p-2 rounded hover:bg-sky-600 transition-colors"><Twitter size={20} /></button>
                 <button className="bg-blue-800 text-white p-2 rounded hover:bg-blue-900 transition-colors"><Linkedin size={20} /></button>
               </div>
             </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* CTA Box */}
            <div className="bg-primary-800 text-white p-8 rounded-xl shadow-xl text-center border-t-4 border-secondary-500">
              <h3 className="text-2xl font-heading font-black mb-4">Need Roofing Help?</h3>
              <p className="mb-6 text-primary-200">Our experts are ready to inspect your roof today. Free estimates.</p>
              <Link to="/contact" className="block w-full bg-secondary-600 hover:bg-secondary-700 text-white py-4 rounded-lg font-black uppercase tracking-wide transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Related Topics */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Tag size={20} className="text-secondary-500" /> Related Topics
              </h3>
              <ul className="space-y-4">
                {INITIAL_BLOG_POSTS.filter(p => p.id !== post.id).map(p => (
                  <li key={p.id}>
                    <Link to={`/blog/${p.id}`} className="text-slate-700 dark:text-slate-300 hover:text-secondary-600 dark:hover:text-secondary-400 font-bold block pb-2 border-b border-slate-200 dark:border-slate-700">
                      {p.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="text-slate-700 dark:text-slate-300 hover:text-secondary-600 dark:hover:text-secondary-400 font-bold block">
                    Roof Repair Services
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Layout>
    </SeoWrapper>
  );
};

export default BlogPostPage;
