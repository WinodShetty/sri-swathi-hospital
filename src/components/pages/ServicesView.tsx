import React from 'react';
import { siteConfig } from '@/config/site-config';
import { Sparkles, HeartPulse, Activity, User, Shield, CalendarDays, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesViewProps {
  onNavigate: (page: 'home' | 'services' | 'about-doctor' | 'appointment' | 'contact') => void;
}

export default function ServicesView({ onNavigate }: ServicesViewProps) {
  // Icon mapping helper
  const getIcon = (name: string, size = 26) => {
    switch (name) {
      case 'User': return <User size={size} />;
      case 'HeartPulse': return <HeartPulse size={size} />;
      case 'Sparkles': return <Sparkles size={size} />;
      case 'Activity': return <Activity size={size} />;
      case 'Shield': return <Shield size={size} />;
      case 'CalendarDays': return <CalendarDays size={size} />;
      default: return <HeartPulse size={size} />;
    }
  };

  return (
    <div className="space-y-16 py-8 text-left" id="services-view-container">
      
      {/* Services Title Section */}
      <section className="text-center max-w-2xl mx-auto space-y-4" id="services-header">
        <p className="font-sans text-xs text-plum-deep font-bold uppercase tracking-widest">
          Comprehensive Healthcare
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-plum-deep font-bold tracking-tight">
          Specialty Ladies Center
        </h1>
        <div className="w-14 h-1 bg-plum-deep mx-auto rounded-full"></div>
        <p className="font-sans text-xs md:text-sm text-charcoal-text opacity-90 leading-relaxed max-w-xl">
          Designed with luxury, privacy, and clinical guidelines to ensure safe motherhood and comprehensive gynecologic treatments.
        </p>
      </section>

      {/* Services Detailed List Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-detailed-grid">
        {siteConfig.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-lavender-secondary rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300 group hover:border-plum-deep/20"
            id={`service-card-${service.id}`}
          >
            <div className="space-y-4">
              {/* Premium Icon Circle */}
              <div className="w-14 h-14 rounded-2xl bg-plum-deep/10 text-plum-deep flex items-center justify-center border border-plum-deep/15">
                {getIcon(service.iconName, 24)}
              </div>

              <h2 className="font-serif text-2xl font-bold text-plum-deep tracking-tight">
                {service.title}
              </h2>

              <p className="font-sans text-sm text-charcoal-text leading-relaxed opacity-90">
                {service.longDesc}
              </p>
            </div>

            <div className="pt-8 border-t border-lavender-secondary/40 mt-8 flex items-center justify-between">
              <span className="font-sans text-[10px] font-bold text-plum-deep uppercase tracking-widest bg-plum-deep/10 px-2.5 py-1 rounded-md">
                Certified Program
              </span>
              
              <button
                onClick={() => onNavigate('appointment')}
                className="text-plum-deep hover:text-plum-medium font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer pointer-events-auto"
              >
                <span>Request Custom Consult</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* High-end decorative reassuring banner */}
      <section className="bg-plum-deep text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden" id="services-cta-banner">
        <div className="absolute inset-0 bg-gradient-to-r from-plum-medium/50 to-plum-deep mix-blend-multiply opacity-50 pointer-events-none" />
        
        {/* Soft abstract circle graphics to add high-end feel */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-lavender-secondary opacity-10 blur-xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-lavender-primary opacity-10 blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto space-y-6">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight">
            Schedule an Exclusive Care Consultation
          </h3>
          <p className="font-sans text-xs md:text-sm opacity-90 leading-relaxed">
            Every concern is treated with maximum discretion and direct clinical leadership under Dr. Swathi. Start your parenthood transition with expert prenatal guides now.
          </p>
          <button 
            onClick={() => onNavigate('appointment')}
            className="px-6 py-3.5 bg-lavender-primary hover:bg-lavender-secondary text-plum-deep font-sans text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer pointer-events-auto"
            id="services-banner-btn"
          >
            Direct Appointment Form
          </button>
        </div>
      </section>

    </div>
  );
}
