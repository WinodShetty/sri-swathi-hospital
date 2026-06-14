import React, { useState } from 'react';
import { siteConfig } from '@/config/site-config';
import MapComponent from '../MapComponent';
import { Mail, Phone, MapPin, Clock, MessageSquare, Facebook, Instagram, Youtube, Send, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import FormSuccessModal from '../FormSuccessModal';

export default function ContactView() {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [whatsappShareUrl, setWhatsappShareUrl] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.message) return;

    // Build specialized WhatsApp text
    const formattedText = 
      `*CONTACT MESSAGING* - Sri Swathi Hospitals\n` +
      `-----------------------------------------\n` +
      `• *Sender Name*   : ${contactForm.name}\n` +
      `• *Phone Number*   : ${contactForm.phone}\n` +
      `• *Message/Request*: ${contactForm.message}\n` +
      `-----------------------------------------\n` +
      `_Submitted via Contact Form_`;

    const cleanPhone = siteConfig.contact.whatsapp.value.replace(/[^0-9]/g, '');
    const finalUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedText)}`;
    
    setWhatsappShareUrl(finalUrl);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="space-y-16 py-8 text-left" id="contact-view-container">
      
      {/* Contact Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3" id="contact-header">
        <p className="font-sans text-xs text-plum-deep font-bold uppercase tracking-widest">
          Connect With Us
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-plum-deep font-bold tracking-tight">
          Help Desk & Location
        </h1>
        <div className="w-12 h-1 bg-plum-deep mx-auto rounded-full"></div>
        <p className="font-sans text-xs md:text-sm text-charcoal-text opacity-90 leading-relaxed max-w-xl">
          Get in touch with us for medical scheduling, maternity inquiries, or general support in Jagtial.
        </p>
      </section>

      {/* Grid: Contact Information details and Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-info-form-grid">
        
        {/* Left Side: Detailed Contact Information Blocks */}
        <div className="lg:col-span-5 space-y-8" id="contact-details-cards">
          
          <div className="bg-lavender-secondary border-2 border-lavender-medium/50 rounded-3xl p-6.5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-plum-deep tracking-tight">
              Hospital Contact Details
            </h3>

            <div className="space-y-5 text-charcoal-text font-sans text-xs md:text-sm">
              {/* Address Block */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-plum-deep shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-plum-deep uppercase tracking-wider text-[10px] mb-0.5">Location Address</h4>
                  <p className="opacity-90 leading-relaxed">{siteConfig.contact.address}</p>
                  <p className="text-[11px] font-mono opacity-85 mt-1">Pincode: {siteConfig.contact.pincode}</p>
                </div>
              </div>

              {/* Telephone Numbers */}
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-plum-deep shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-plum-deep uppercase tracking-wider text-[10px] mb-0.5">Direct Helpdesk</h4>
                  <div className="flex flex-col gap-1 font-semibold mt-0.5">
                    {siteConfig.contact.phones.map((phone, i) => (
                      <a key={i} href={`tel:${phone.value}`} className="hover:text-plum-deep transition-all">
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* OPD Timings */}
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-plum-deep shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-plum-deep uppercase tracking-wider text-[10px] mb-0.5">OPD Scheduling Hours</h4>
                  <p className="opacity-90">{siteConfig.contact.opdTimings}</p>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="flex items-start gap-3">
                <MessageSquare size={18} className="text-plum-deep shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-plum-deep uppercase tracking-wider text-[10px] mb-0.5">Direct WhatsApp Action</h4>
                  <p className="opacity-90">Send direct texts straight to the coordinator: </p>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.value.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-plum-deep mt-1 hover:underline"
                  >
                    💬 Chat +91 {siteConfig.contact.whatsapp.display} →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social channels section */}
            <div className="border-t border-lavender-secondary/80 pt-5 space-y-3">
              <h4 className="font-sans font-bold text-plum-deep uppercase tracking-wider text-[10px]">
                Hospital Social Broadcasters
              </h4>
              <div className="flex items-center gap-3.5 text-plum-deep">
                <a
                  href={siteConfig.contact.socials.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Visit Facebook Profile"
                  className="p-2 rounded-full border border-lavender-secondary hover:bg-plum-deep hover:text-white hover:border-plum-deep transition-all"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={siteConfig.contact.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Visit Instagram Profile"
                  className="p-2 rounded-full border border-lavender-secondary hover:bg-plum-deep hover:text-white hover:border-plum-deep transition-all"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={siteConfig.contact.socials.youtube}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Visit YouTube Channel"
                  className="p-2 rounded-full border border-lavender-secondary hover:bg-plum-deep hover:text-white hover:border-plum-deep transition-all"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Contact Messaging Form Column */}
        <div className="lg:col-span-7 bg-white border border-lavender-secondary rounded-3xl p-6 md:p-8 shadow-sm" id="contact-form-card">
          <h3 className="font-serif text-2xl font-bold text-plum-deep tracking-tight mb-5">
            Leave a Message
          </h3>

          <form onSubmit={handleContactSubmit} className="space-y-4" id="contact-help-form">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-sender-name" className="font-sans text-[11px] font-semibold text-plum-deep uppercase tracking-wider block">
                Your Full Name *
              </label>
              <input
                id="contact-sender-name"
                name="contact-sender-name"
                type="text"
                required
                placeholder="Enter full name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full bg-lavender-primary/45 border border-lavender-secondary focus:border-plum-deep rounded-xl px-4 py-3 text-sm font-sans placeholder-charcoal-text/50 outline-none transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label htmlFor="contact-sender-phone" className="font-sans text-[11px] font-semibold text-plum-deep uppercase tracking-wider block">
                Phone Number *
              </label>
              <input
                id="contact-sender-phone"
                name="contact-sender-phone"
                type="tel"
                required
                placeholder="Enter phone number"
                value={contactForm.phone}
                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                className="w-full bg-lavender-primary/45 border border-lavender-secondary focus:border-plum-deep rounded-xl px-4 py-3 text-sm font-sans placeholder-charcoal-text/50 outline-none transition-colors"
              />
            </div>

            {/* Core Message */}
            <div className="space-y-1.5">
              <label htmlFor="contact-sender-msg" className="font-sans text-[11px] font-semibold text-plum-deep uppercase tracking-wider block">
                Inquiry / Question Details *
              </label>
              <textarea
                id="contact-sender-msg"
                name="contact-sender-msg"
                required
                rows={4}
                placeholder="Write message details or inquiry points here..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-lavender-primary/45 border border-lavender-secondary focus:border-plum-deep rounded-xl px-4 py-3 text-sm font-sans placeholder-charcoal-text/50 outline-none resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 mt-2 rounded-xl bg-plum-deep text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-plum-medium transition-all shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer pointer-events-auto"
              id="contact-form-submit-btn"
            >
              <span>Verify & Send Message</span>
              <Send size={13} />
            </button>
          </form>
        </div>

      </section>

      {/* Google Maps Embed Full Container */}
      <section className="space-y-4" id="contact-map-block">
        <div className="text-left">
          <h3 className="font-serif text-xl font-bold text-plum-deep">
            Interactive Directional Map
          </h3>
          <p className="font-sans text-xs text-charcoal-text opacity-80 mt-1">
            Located near Jambi-Gadde, beside Lotus Pharmacy and opposite ATM Hospital, enabling straightforward transit mappings across Jagtial districts.
          </p>
        </div>
        
        <MapComponent />
      </section>

      {/* Quick Validation Success Modal */}
      <FormSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false);
          setContactForm({ name: '', phone: '', message: '' });
        }}
        whatsappUrl={whatsappShareUrl}
      />

    </div>
  );
}
