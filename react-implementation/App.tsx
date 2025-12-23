import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import BlogList from './pages/BlogList';
import BlogPostPage from './pages/BlogPost';
import ToolsPage from './pages/Tools';
import { ConfigProvider } from './context/ConfigContext';

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;