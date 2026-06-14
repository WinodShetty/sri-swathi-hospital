import React, { useState } from 'react';
import { siteConfig } from '@/config/site-config';

export default function MapComponent() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-lavender-secondary bg-lavender-light shadow-sm" id="google-maps-frame bg-opacity-70">
      {/* Premium Shimmer Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-lavender-light animate-pulse">
          <div className="w-12 h-12 rounded-full border-4 border-plum-deep border-t-transparent animate-spin mb-3"></div>
          <p className="font-sans text-xs text-plum-deep font-medium tracking-wide">
            Loading maps of Jagtial, Telangana...
          </p>
        </div>
      )}
      
      {/* Seamless Iframe with low opacity until fully loaded */}
      <iframe
        title="Sri Swathi Hospitals Location Map"
        src={siteConfig.contact.googleMapEmbedUrl}
        width="100%"
        height="380"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        className={`w-full transition-opacity duration-700 ease-in-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      ></iframe>
      
      {/* Decorative premium coordinate sub-bar */}
      <div className="bg-lavender-secondary bg-opacity-40 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-charcoal-text border-t border-lavender-secondary">
        <span>GPS: Jagtial, TS, India</span>
        <a 
          href="https://maps.google.com/?q=Jagtial+Telangana" 
          target="_blank" 
          rel="noreferrer noopener"
          className="text-plum-deep hover:underline font-medium uppercase tracking-wider"
        >
          Open in Maps →
        </a>
      </div>
    </div>
  );
}
