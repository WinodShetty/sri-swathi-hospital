import React from 'react';
import { siteConfig } from '@/config/site-config';
import { Phone, MessageSquare, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  const primaryPhone = siteConfig.contact.phones[0].value;
  const whatsappNumber = siteConfig.contact.whatsapp.value;
  const welcomeText = encodeURIComponent(siteConfig.contact.whatsapp.welcomeMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${welcomeText}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5" id="floating-actions-dock">
      {/* Dynamic pulse background to raise ambient curiosity */}
      
      {/* Floating 1-Tap Mobile Call Button */}
      <motion.a
        href={`tel:${primaryPhone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 rounded-full bg-plum-deep text-white flex items-center justify-center shadow-lg hover:bg-plum-medium transition-all duration-300 relative group"
        id="floating-call-trigger"
        aria-label="Call Hospital Reception"
      >
        <Phone size={20} className="stroke-[2.2]" />
        
        {/* Tooltip */}
        <span className="absolute right-15 bg-plum-deep text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          Call Now
        </span>
      </motion.a>

      {/* Floating Responsive WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer noopener"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#20ba59] transition-all duration-300 relative group"
        id="floating-whatsapp-trigger"
        aria-label="Contact our team on WhatsApp"
      >
        {/* Glowing surrounding wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping -z-10" />
        
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-white"
        >
          <path d="M17.472 14.382c-.022-.014-.507-.25-5.863-1.606a.434.434 0 0 0-.251.048c-.08.067-.307.38-.377.475-.06.08-.12.1-.21.05-.4-.216-1.74-.707-2.63-1.493-.69-.61-1.16-1.36-1.29-1.59-.14-.24-.01-.37.11-.49.11-.11.25-.29.37-.43.12-.13.16-.23.24-.38.08-.15.04-.29-.02-.41-.06-.12-.58-1.393-.8-1.92-.21-.52-.42-.45-.58-.45-.15 0-.32 0-.49.01-.17 0-.45.06-.69.31-.24.25-.92.89-.92 2.18s.94 2.54 1.07 2.72c.13.17 1.86 2.83 4.5 3.97.63.27 1.11.43 1.49.55.63.2 1.22.17 1.68.1.51-.07 1.57-.64 1.79-1.26.22-.61.22-1.14.15-1.26-.07-.12-.22-.18-.44-.29zM12 0C5.373 0 0 5.373 0 12c0 2.112.551 4.184 1.59 6.035L0 24l6.135-1.564c1.802.977 3.82 1.491 5.863 1.491 6.623 0 12-5.377 12-12C24 5.373 18.623 0 12 0zm0 21.844c-1.895 0-3.71-.51-5.312-1.472l-.38-.225-3.654.931.968-3.5-.253-.396c-.95-1.495-1.455-3.23-1.455-5.013C2.164 6.782 6.582 2.36 12 2.36c5.414 0 9.832 4.418 9.832 9.832s-4.418 9.832-9.832 9.832z" />
        </svg>
        
        {/* Tooltip */}
        <span className="absolute right-15 bg-charcoal-text text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
          WhatsApp Dr. Swathi
        </span>
      </motion.a>
    </div>
  );
}
