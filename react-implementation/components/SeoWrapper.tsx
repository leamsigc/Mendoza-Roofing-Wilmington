import React, { useEffect } from 'react';

interface SeoWrapperProps {
  title: string;
  description: string;
  canonicalPath?: string;
  children: React.ReactNode;
}

const SeoWrapper: React.FC<SeoWrapperProps> = ({ title, description, canonicalPath, children }) => {
  useEffect(() => {
    try {
      document.title = `${title} | Mendoza Roofing`;
      
      // Update meta description
      try {
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);
      } catch (e) {
        console.warn('Could not set meta description', e);
      }

      // Update canonical link (simulated for SPA)
      // Wrapped in try-catch to prevent errors in restricted environments (like blob URLs)
      try {
        let shouldSetCanonical = false;
        try {
            // Accessing location.protocol can throw SecurityError in some sandboxes
            if (window.location && window.location.protocol !== 'blob:') {
                shouldSetCanonical = true;
            }
        } catch (e) {
            // If access is denied, we are likely in a restricted sandbox, so don't set canonical
        }

        if (shouldSetCanonical) {
            let linkCanonical = document.querySelector('link[rel="canonical"]');
            if (!linkCanonical) {
              linkCanonical = document.createElement('link');
              linkCanonical.setAttribute('rel', 'canonical');
              document.head.appendChild(linkCanonical);
            }
            linkCanonical.setAttribute('href', `https://roofingmendoza.com${canonicalPath || ''}`);
        }
      } catch (e) {
        // Ignore canonical link errors in strict environments
        console.warn('Could not set canonical link', e);
      }

    } catch (error) {
      console.error("SEO update failed", error);
    }
  }, [title, description, canonicalPath]);

  return <>{children}</>;
};

export default SeoWrapper;