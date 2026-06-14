import React, { useState } from 'react';
import { siteConfig } from '@/config/site-config';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onNavigate: (page: 'home' | 'services' | 'about-doctor' | 'appointment' | 'contact') => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Use local doctor image path with a resilient Unsplash fallback
  const [imageSrc, setImageSrc] = useState(siteConfig.doctor.avatarUrl);

  return (
    <div className="w-full" id="home-view-container">
      {/* SECTION 1: HERO DISPLAY - THE DOCTOR INTERFACE */}
      <section className="min-h-[80vh] flex items-center pt-2 lg:pt-8" id="hero-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* Hero Right Visual Column - Circular Premium Doctor Portrait on Top for Mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center order-first lg:order-last py-2"
            id="hero-right-visuals"
          >
            {/* Premium Circular Frame */}
            <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-88 md:h-88 lg:w-96 lg:h-96 xl:w-[380px] xl:h-[380px] aspect-square rounded-full border-4 border-plum-deep/20 p-2.5 bg-lavender-secondary shadow-xl transition-transform duration-500 hover:scale-[1.02] group">
              <div className="absolute inset-0 rounded-full border border-plum-deep/30 pointer-events-none z-10 m-3" />
              {/* Doctor Headshot Wrapper */}
              <div className="w-full h-full rounded-full overflow-hidden bg-plum-deep relative shadow-inner">
                <img 
                  src={imageSrc} 
                  onError={() => setImageSrc('https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=600&auto=format&fit=crop')}
                  alt={siteConfig.doctor.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
            {/* Visual indicator stamp */}
            <p className="mt-4 font-sans text-[11px] font-semibold text-plum-deep uppercase tracking-widest bg-plum-deep/10 px-4 py-2 rounded-full border border-plum-deep/15">
              Dr. U. Swathi MBBS, DGO — Gynecology & Women Care 
            </p>
          </motion.div>

          {/* Hero Left Information Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left order-last lg:order-first" id="hero-left-contents">
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-plum-deep/10 border border-plum-deep/15 text-plum-deep font-sans text-[11px] font-bold uppercase tracking-wider"
            >
              <Sparkles size={11} className="animate-pulse text-plum-deep" />
              <span>{siteConfig.specialization}</span>
            </motion.div>
            
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum-deep tracking-tight leading-[1.1]"
              >
                {siteConfig.doctor.name}
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="font-sans text-xl md:text-2xl text-plum-deep tracking-wide font-normal italic opacity-95">
                  {siteConfig.doctor.qualifications} &mdash; Reg No. {siteConfig.doctor.registrationNumber}
                </p>
                <div className="w-16 h-0.5 bg-plum-deep/30 rounded-full"></div>
                <div className="space-y-2.5 pt-1">
                  <p className="font-sans text-[11px] uppercase tracking-wider text-plum-deep font-bold">Specializations & Specialties:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-charcoal-text pb-2 max-w-xl">
                    <li className="flex items-center gap-2.5 bg-lavender-secondary/40 px-3.5 py-2.5 rounded-xl border border-lavender-secondary/60">
                      <span className="w-2 h-2 rounded-full bg-[#EC407A] shrink-0 animate-pulse" />
                      <span>Infertility Specialist</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-lavender-secondary/40 px-3.5 py-2.5 rounded-xl border border-lavender-secondary/60">
                      <span className="w-2 h-2 rounded-full bg-[#EC407A] shrink-0 animate-pulse" />
                      <span>Ladies Specialist</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-lavender-secondary/40 px-3.5 py-2.5 rounded-xl border border-lavender-secondary/60">
                      <span className="w-2 h-2 rounded-full bg-[#EC407A] shrink-0 animate-pulse" />
                      <span>Gynecologist</span>
                    </li>
                    <li className="flex items-center gap-2.5 bg-lavender-secondary/40 px-3.5 py-2.5 rounded-xl border border-lavender-secondary/60">
                      <span className="w-2 h-2 rounded-full bg-[#EC407A] shrink-0 animate-pulse" />
                      <span>Maternity Care Specialist</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-charcoal-text text-sm md:text-base leading-relaxed opacity-95 max-w-xl font-normal"
            >
              Providing premium, compassionate healthcare solutions for women, specializing in advanced infertility treatments, robust maternity programs, safe deliveries, and preventative gynecology in Jagtial, Telangana.
            </motion.p>

            {/* Hero Quick Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
              id="hero-cta-group"
            >
              <button 
                onClick={() => onNavigate('appointment')}
                className="px-6 py-3.5 rounded-xl bg-plum-deep text-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-plum-medium transition-all duration-300 shadow-md flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 pointer-events-auto cursor-pointer"
              >
                <span>Book Appointment</span>
                <ArrowRight size={13} />
              </button>

              <a 
                href={`tel:${siteConfig.contact.phones[0].value}`}
                className="px-5 py-3.5 rounded-xl border border-plum-deep text-plum-deep font-sans text-xs font-semibold uppercase tracking-widest hover:bg-plum-deep hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Phone size={13} />
                <span>Call Hospital</span>
              </a>

              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp.value.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.contact.whatsapp.welcomeMessage)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-3.5 rounded-xl bg-[#25D366] text-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-[#20ba59] transition-all duration-300 flex items-center gap-2 shadow-md"
              >
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white shrink-0">
                  <path d="M17.472 14.382c-.022-.014-.507-.25-5.863-1.606a.434.434 0 0 0-.251.048c-.08.067-.307.38-.377.475-.06.08-.12.1-.21.05-.4-.216-1.74-.707-2.63-1.493-.69-.61-1.16-1.36-1.29-1.59-.14-.24-.01-.37.11-.49.11-.11.25-.29.37-.43.12-.13.16-.23.24-.38.08-.15.04-.29-.02-.41-.06-.12-.58-1.393-.8-1.92-.21-.52-.42-.45-.58-.45-.15 0-.32 0-.49.01-.17 0-.45.06-.69.31-.24.25-.92.89-.92 2.18s.94 2.54 1.07 2.72c.13.17 1.86 2.83 4.5 3.97.63.27 1.11.43 1.49.55.63.2 1.22.17 1.68.1.51-.07 1.57-.64 1.79-1.26.22-.61.22-1.14.15-1.26-.07-.12-.22-.18-.44-.29zM12 0C5.373 0 0 5.373 0 12c0 2.112.551 4.184 1.59 6.035L0 24l6.135-1.564c1.802.977 3.82 1.491 5.863 1.491 6.623 0 12-5.377 12-12C24 5.373 18.623 0 12 0zm0 21.844c-1.895 0-3.71-.51-5.312-1.472l-.38-.225-3.654.931.968-3.5-.253-.396c-.95-1.495-1.455-3.23-1.455-5.013C2.164 6.782 6.582 2.36 12 2.36c5.414 0 9.832 4.418 9.832 9.832s-4.418 9.832-9.832 9.832z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
