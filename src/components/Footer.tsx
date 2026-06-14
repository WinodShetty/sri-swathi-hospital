import React from 'react';
import { siteConfig } from '@/config/site-config';
import LogoWidget from './LogoWidget';
import { Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'about-doctor' | 'appointment' | 'contact') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lavender-secondary bg-opacity-35 border-t border-lavender-secondary pt-12 pb-8 px-6 md:px-12" id="hospital-footer">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Upper Brand Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="cursor-pointer" onClick={() => onNavigate('home')} id="footer-logo-btn">
            <LogoWidget size={46} color="#5A2D82" />
          </div>
          <h2 className="font-serif text-xl md:text-2xl text-plum-deep font-semibold tracking-tight">
            {siteConfig.hospitalName}
          </h2>
          <p className="font-sans text-xs text-charcoal-text font-medium uppercase tracking-widest max-w-md">
            {siteConfig.specialization}
          </p>
          <div className="font-sans text-sm text-charcoal-text opacity-85 max-w-lg mt-2 font-normal leading-relaxed">
            {siteConfig.contact.address}
          </div>
          <p className="font-mono text-xs text-charcoal-text opacity-75 mt-1">
            OPD Hours: {siteConfig.contact.opdTimings}
          </p>
        </div>

        {/* Action Quick Links */}
        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8 font-sans text-xs font-semibold text-charcoal-text opacity-95 uppercase tracking-wider mb-8" id="footer-menu">
          <li>
            <button onClick={() => onNavigate('home')} className="hover:text-plum-deep transition-colors pointer-events-auto cursor-pointer">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate('services')} className="hover:text-plum-deep transition-colors pointer-events-auto cursor-pointer">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate('about-doctor')} className="hover:text-plum-deep transition-colors pointer-events-auto cursor-pointer">
              About Doctor
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate('appointment')} className="hover:text-plum-deep transition-colors pointer-events-auto cursor-pointer">
              Appointment
            </button>
          </li>
          <li>
            <button onClick={() => onNavigate('contact')} className="hover:text-plum-deep transition-colors pointer-events-auto cursor-pointer">
              Contact
            </button>
          </li>
        </ul>

        {/* Social Media Row (Facebook, Instagram, YouTube) */}
        <div className="flex items-center justify-center gap-5 text-plum-deep opacity-90 mb-8" id="footer-socials">
          <a
            href={siteConfig.contact.socials.facebook}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook Profile"
            className="p-2.5 rounded-full bg-lavender-primary hover:bg-plum-deep hover:text-white transition-all duration-300 shadow-sm"
          >
            <Facebook size={18} strokeWidth={1.8} />
          </a>
          <a
            href={siteConfig.contact.socials.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram Profile"
            className="p-2.5 rounded-full bg-lavender-primary hover:bg-plum-deep hover:text-white transition-all duration-300 shadow-sm"
          >
            <Instagram size={18} strokeWidth={1.8} />
          </a>
          <a
            href={siteConfig.contact.socials.youtube}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="YouTube Channel"
            className="p-2.5 rounded-full bg-lavender-primary hover:bg-plum-deep hover:text-white transition-all duration-300 shadow-sm"
          >
            <Youtube size={18} strokeWidth={1.8} />
          </a>
        </div>

        {/* Lower Credits Area */}
        <div className="w-full border-t border-lavender-secondary pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-xs font-sans font-medium text-charcoal-text opacity-75">
          <p>© {currentYear} {siteConfig.hospitalName}. All Rights Reserved.</p>
          <p className="tracking-wide">
            {siteConfig.credits}
          </p>
        </div>
      </div>
    </footer>
  );
}
