import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site-config';
import LogoWidget from './LogoWidget';
import { Menu, X, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ActivePage } from '@/src/types';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: ActivePage }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Doctor', value: 'about-doctor' },
    { label: 'Appointment', value: 'appointment' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-lavender-primary/90 backdrop-blur-md border-b border-lavender-secondary/60 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
      id="main-app-header"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo and Title */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group pointer-events-auto"
          id="navbar-brand-logo"
        >
          <img
  src="/logo.png"
  alt="Sri Swathi Hospitals"
  className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover border-2 border-white shadow-lg transition-transform duration-500 group-hover:scale-105"
/>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-plum-deep leading-none">
              {siteConfig.hospitalName}
            </span>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-charcoal-text opacity-75 mt-0.5 leading-none">
              {siteConfig.specialization}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-menubar">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activePage === item.value;
              return (
                <li key={item.value}>
                  <button
                    onClick={() => handleNavClick(item.value)}
                    className={`relative font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-300 py-1 pointer-events-auto cursor-pointer ${
                      isActive ? 'text-plum-deep' : 'text-charcoal-text/80 hover:text-plum-deep'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-plum-deep rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Call-to-Action Book Appointment Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phones[0].value}`}
            className="flex items-center gap-1.5 font-sans text-xs font-bold text-plum-deep hover:text-plum-medium transition-colors border border-plum-deep hover:border-plum-medium px-4 py-2 rounded-xl"
            id="nav-call-phone-link"
          >
            <PhoneCall size={12} />
            <span>Call Recieption</span>
          </a>
          <button
            onClick={() => handleNavClick('appointment')}
            className="font-sans text-xs font-semibold uppercase tracking-wider bg-plum-deep text-white px-5 py-2.5 rounded-xl hover:bg-plum-medium transition-all duration-300 shadow-sm flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 pointer-events-auto cursor-pointer"
            id="nav-book-btn"
          >
            <span>Book Appointment</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Mobile Menu Open Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-plum-deep focus:outline-none pointer-events-auto cursor-pointer"
          aria-label="Toggle Navigation Menu"
          id="mobile-menu-burger"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-lavender-primary border-b border-lavender-secondary absolute top-full left-0 right-0 overflow-hidden shadow-lg z-50"
            id="mobile-drawer-view"
          >
            <nav className="flex flex-col px-8 py-6 space-y-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = activePage === item.value;
                  return (
                    <li key={item.value}>
                      <button
                        onClick={() => handleNavClick(item.value)}
                        className={`w-full text-left font-sans text-sm font-semibold uppercase tracking-wider py-1.5 transition-colors duration-200 pointer-events-auto cursor-pointer ${
                          isActive ? 'text-plum-deep font-bold border-l-2 border-plum-deep pl-2' : 'text-charcoal-text pl-2'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
              
              <div className="flex flex-col pt-4 border-t border-lavender-secondary gap-3">
                <a
                  href={`tel:${siteConfig.contact.phones[0].value}`}
                  className="w-full text-center font-sans text-xs font-bold text-plum-deep border border-plum-deep py-2.5 rounded-xl flex items-center justify-center gap-2"
                >
                  <PhoneCall size={13} />
                  Call Reception
                </a>
                
                <button
                  onClick={() => handleNavClick('appointment')}
                  className="w-full text-center font-sans text-xs font-semibold uppercase tracking-wider bg-plum-deep text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-plum-medium cursor-pointer"
                >
                  Book Appointment
                  <ArrowRight size={13} />
                </button>
              </div>

              {/* Registration certification stamp inside the drawer */}
              <div className="flex items-center gap-1.5 justify-center pt-2 text-[10px] text-charcoal-text opacity-70">
                <ShieldCheck size={11} className="text-plum-deep" />
                <span>Dr. U. Swathi (Reg No. {siteConfig.doctor.registrationNumber})</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
