import React, { useState } from 'react';
import { siteConfig } from '@/config/site-config';
import { ShieldCheck, GraduationCap, Stethoscope, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutDoctorViewProps {
  onNavigate: (page: 'home' | 'services' | 'about-doctor' | 'appointment' | 'contact') => void;
}

export default function AboutDoctorView({ onNavigate }: AboutDoctorViewProps) {
  // Safe local image path with responsive online fallback
  const [imageSrc, setImageSrc] = useState(siteConfig.doctor.avatarUrl);

  return (
    <div className="space-y-16 py-8 text-left" id="about-doctor-view-container">
      
      {/* Page Title Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3" id="about-doctor-header">
        <p className="font-sans text-xs text-plum-deep font-bold uppercase tracking-widest">
          Clinical Guidance
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-plum-deep font-bold tracking-tight">
          Dr. U. Swathi (MBBS, DGO)
        </h1>
        <div className="w-12 h-1 bg-plum-deep mx-auto rounded-full"></div>
        <p className="font-sans text-xs md:text-sm text-charcoal-text opacity-90 leading-relaxed max-w-xl">
          A respected obstetrician-gynecologist committed to elevating female wellness and safe maternity care in Jagtial and northern Telangana.
        </p>
      </section>

      {/* Main Doctor Bio Block */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="doctor-profile-grid">
        
        {/* Left Side: Large Doctor Portrait Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center animate-fade-in"
          id="doctor-large-img-container"
        >
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-lavender-secondary bg-lavender-medium p-4 shadow-xl">
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-plum-deep/30 to-transparent z-10 rounded-2xl pointer-events-none" />
            
            {/* Main Portrait Object */}
            <div className="w-full h-full rounded-2xl overflow-hidden bg-plum-deep">
              <img 
                src={imageSrc} 
                onError={() => setImageSrc('https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=600&auto=format&fit=crop')}
                alt={`${siteConfig.doctor.name} - Portrait`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Professional Details Column */}
        <div className="lg:col-span-7 space-y-6" id="doctor-profile-content">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl font-bold text-plum-deep tracking-tight">
              Clinical Background
            </h2>
            <p className="font-sans text-xs uppercase tracking-wider text-plum-deep font-semibold">
              {siteConfig.doctor.role}
            </p>
          </div>

          <p className="font-sans text-sm md:text-base text-charcoal-text leading-relaxed opacity-95">
            {siteConfig.doctor.bio}
          </p>

          {/* Quick Doctor Profile Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="doctor-bio-stats">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-lavender-secondary shadow-sm">
              <GraduationCap className="text-plum-deep shrink-0 w-5 h-5 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs text-plum-deep uppercase tracking-wider">Qualifications</h4>
                <p className="font-serif text-sm font-bold text-charcoal-text mt-0.5">{siteConfig.doctor.qualifications}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-lavender-secondary shadow-sm">
              <ShieldCheck className="text-plum-deep shrink-0 w-5 h-5 mt-0.5" />
              <div>
                <h4 className="font-semibold text-xs text-plum-deep uppercase tracking-wider">Medical Board Reg</h4>
                <p className="font-mono text-sm font-bold text-charcoal-text mt-0.5">No. {siteConfig.doctor.registrationNumber}</p>
              </div>
            </div>
          </div>

          {/* Specializations bullets */}
          <div className="space-y-3 pt-2">
            <h3 className="font-serif text-lg font-bold text-plum-deep">
              Key Focus Areas
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" id="doctor-focus-checkboxes">
              {siteConfig.doctor.specializations.map((spec, index) => (
                <div key={index} className="flex items-center gap-2 text-xs font-semibold text-charcoal-text bg-lavender-secondary/30 px-3 py-2 rounded-xl border border-lavender-secondary/40">
                  <Stethoscope size={13} className="text-plum-deep" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion links within profile */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('appointment')}
              className="px-5 py-3 rounded-xl bg-plum-deep text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-plum-medium transition-all shadow-sm flex items-center gap-2 cursor-pointer pointer-events-auto"
            >
              <span>Book Appointment with Dr. Swathi</span>
              <ChevronRight size={13} />
            </button>

            <a
              href={`tel:${siteConfig.contact.phones[0].value}`}
              className="px-5 py-3 rounded-xl border border-plum-deep text-plum-deep font-sans text-xs font-semibold uppercase tracking-wider hover:bg-plum-deep hover:text-white transition-all text-center"
            >
              Consult Now
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
