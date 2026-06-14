import React, { useState } from 'react';
import { siteConfig } from '@/config/site-config';
import { Calendar, Phone, User, Hourglass, MessageSquare, ChevronRight, CheckCircle, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import FormSuccessModal from '../FormSuccessModal';

export default function AppointmentView() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    age: '',
    preferredDate: '',
    service: '',
    message: ''
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [whatsappShareUrl, setWhatsappShareUrl] = useState('');

  const servicesList = siteConfig.services;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.preferredDate || !form.service) return;

    // Formatting date neatly
    const userDate = form.preferredDate;

    // Compiling high-luxury WhatsApp message format
    const formattedText = 
      `*NEW APPOINTMENT BOOKING REQUEST*\n` +
      `-----------------------------------------\n` +
      `• *Patient Name*  : ${form.name}\n` +
      `• *Phone Number*  : ${form.phone}\n` +
      `• *Patient Age*   : ${form.age || 'N/A'}\n` +
      `• *Preferred Date*: ${userDate}\n` +
      `• *Requested Dept*: ${form.service}\n` +
      `• *Brief Message* : ${form.message || 'Direct Consultation'}\n` +
      `-----------------------------------------\n` +
      `_Requested via Sri Swathi Hospitals Website_`;

    const cleanPhone = siteConfig.contact.whatsapp.value.replace(/[^0-9]/g, '');
    const finalUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedText)}`;
    
    setWhatsappShareUrl(finalUrl);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="space-y-16 py-8 text-left" id="appointment-view-container">
      
      {/* Appointment Page Header */}
      <section className="text-center max-w-2xl mx-auto space-y-3" id="appointment-header">
        <p className="font-sans text-xs text-plum-deep font-bold uppercase tracking-widest">
          Secure Scheduling
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-plum-deep font-bold tracking-tight">
          Book an Appointment
        </h1>
        <div className="w-12 h-1 bg-plum-deep mx-auto rounded-full"></div>
        <p className="font-sans text-xs md:text-sm text-charcoal-text opacity-90 leading-relaxed max-w-xl">
          Fill out your consultation details. Review and click "Confirm" to send them to Dr. Swathi on WhatsApp instantly.
        </p>
      </section>

      {/* Grid: Form and Information */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="appointment-grid-layout">
        
        {/* Left Side: Luxury Form Column */}
        <div className="lg:col-span-7 bg-white border border-lavender-secondary rounded-3xl p-6 md:p-8 shadow-sm" id="full-appointment-form-wrapper">
          <form onSubmit={handleSubmit} className="space-y-5" id="main-booking-form">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Patient Name */}
              <div className="space-y-1.5">
                <label htmlFor="patient-name" className="font-sans text-[11px] font-semibold text-plum-deep uppercase tracking-wider block">
                  Patient Name *
                </label>
                <div className="relative">
                  <input
                    id="patient-name"
                    name="patient-name"
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-lavender-primary/45 border border-lavender-secondary focus:border-plum-deep rounded-xl pl-10 pr-4 py-3 text-sm font-sans placeholder-charcoal-text/50 outline-none transition-colors"
                  />
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-deep opacity-60">
                    <User size={15} />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label htmlFor="patient-phone" className="font-sans text-[11px] font-semibold text-plum-deep uppercase tracking-wider block">
                  Phone Number *
                </label>
                <div className="relative">
                  <input
                    id="patient-phone"
                    name="patient-phone"
                    type="tel"
                    required
                    placeholder="Enter active mob number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-lavender-primary/45 border border-lavender-secondary focus:border-plum-deep rounded-xl pl-10 pr-4 py-3 text-sm font-sans placeholder-charcoal-text/50 outline-none transition-colors"
                  />
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-deep opacity-60">
                    <Phone size={15} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Age */}
              <div className="space-y-1.5">
                <label htmlFor="patient-age" className="font-sans text-[11px] font-semibold text-plum-deep uppercase tracking-wider block">
                  Age of Patient
                </label>
                <div className="relative">
                  <input
                    id="patient-age"
                    name="patient-age"
                    type="number"
                    min="1"
                    max="120"
                    placeholder="Years (e.g., 28)"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    className="w-full bg-lavender-primary/45 border border-lavender-secondary focus:border-plum-deep rounded-xl pl-10 pr-4 py-3 text-sm font-sans placeholder-charcoal-text/50 outline-none transition-colors"
                  />
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-deep opacity-60">
                    <Hourglass size={15} />
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-1.5">
                <label htmlFor="preferred-date" className="font-sans text-[11px] font-semibold text-plum-deep uppercase tracking-wider block">
                  Preferred Date *
                </label>
                <div className="relative text-charcoal-text">
                  <input
                    id="preferred-date"
                    name="preferred-date"
                    type="date"
                    required
                    value={form.preferredDate}
                    onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                    className="w-full bg-lavender-primary/45 border border-lavender-secondary focus:border-plum-deep rounded-xl pl-10 pr-4 py-3 text-sm font-sans placeholder-charcoal-text/50 outline-none transition-colors text-charcoal-text bg-white"
                  />
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-plum-deep opacity-60 pointer-events-none">
                    <Calendar size={15} />
                  </div>
                </div>
              </div>
            </div>

            {/* Specialty Service Selection */}
            <div className="space-y-1.5">
              <label htmlFor="requested-service" className="font-sans text-[11px] font-semibold text-plum-deep uppercase tracking-wider block">
                Required Specialty Center *
              </label>
              <select
                id="requested-service"
                name="requested-service"
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-lavender-primary/45 border border-lavender-secondary focus:border-plum-deep rounded-xl px-4 py-3 text-sm font-sans outline-none transition-colors bg-white text-charcoal-text block"
              >
                <option value="" disabled className="text-charcoal-text/50">-- Choose Category --</option>
                {servicesList.map((service) => (
                  <option key={service.id} value={service.title} className="text-charcoal-text">
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Note/Message */}
            <div className="space-y-1.5">
              <label htmlFor="patient-desc" className="font-sans text-[11px] font-semibold text-plum-deep uppercase tracking-wider block">
                Additional Health Details / Message
              </label>
              <div className="relative">
                <textarea
                  id="patient-desc"
                  name="patient-desc"
                  rows={4}
                  placeholder="Mention medical concerns, requirements, or history if applicable."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-lavender-primary/45 border border-lavender-secondary focus:border-plum-deep rounded-xl px-4 py-3 text-sm font-sans placeholder-charcoal-text/50 outline-none resize-none transition-colors"
                />
              </div>
            </div>

            {/* Warning disclosure regarding privacy/WhatsApp dispatch */}
            <div className="flex items-start gap-2.5 p-3.5 bg-lavender-primary/40 rounded-2xl border border-lavender-secondary text-[11px] text-charcoal-text leading-relaxed">
              <CheckCircle size={15} className="text-plum-deep shrink-0 mt-0.5" />
              <span>
                <strong>Confidentiality Assured:</strong> Bookings submitted translate instantly to encrypted WhatsApp messages dispatched straight to the clinical team.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-plum-deep text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-plum-medium transition-all shadow-md flex items-center justify-center gap-2 transform hover:-translate-y-0.5 pointer-events-auto cursor-pointer"
              id="full-form-submit-btn"
            >
              <span>Verify & Send to WhatsApp</span>
              <ChevronRight size={14} />
            </button>
          </form>
        </div>

        {/* Right Side: Informative Consultation Rules Card */}
        <div className="lg:col-span-5 space-y-6" id="appointment-guidelines-sidebar">
          
          <div className="bg-lavender-secondary border-2 border-lavender-medium/50 p-6.5 rounded-3xl text-left space-y-4">
            <h3 className="font-serif text-xl font-bold text-plum-deep tracking-tight">
              Hospital OPD Guidelines
            </h3>
            <p className="font-sans text-xs text-charcoal-text opacity-95 leading-relaxed">
              To support efficient workflows and decrease client waittimes, please note the following OPD regulations:
            </p>

            <ul className="space-y-3 font-sans text-[11px] md:text-xs text-charcoal-text" id="opd-guideline-bullets">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-plum-deep shrink-0 mt-1.5" />
                <span>Appointments are confirmed only upon matching schedules on WhatsApp with Dr. Swathi&apos;s receptionist.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-plum-deep shrink-0 mt-1.5" />
                <span>Please arrive at the clinic <strong>15 minutes prior</strong> to your scheduled consulting slot.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-plum-deep shrink-0 mt-1.5" />
                <span>Remember to bring files, diagnostic reports, and medical history documents with you.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-plum-deep shrink-0 mt-1.5" />
                <span>Emergency situations can occasionally disrupt the slot timing. We appreciate your patience.</span>
              </li>
            </ul>

            <div className="border-t border-lavender-secondary/60 pt-4 space-y-2">
              <p className="font-sans text-[10px] font-bold text-plum-deep uppercase tracking-wider">
                Emergency Calling Support
              </p>
              <p className="font-sans text-xs text-charcoal-text">
                For high-urgency labor, maternity, or medical concerns, call the primary reception desk directly:
              </p>
              <div className="flex flex-col gap-1 pt-1">
                {siteConfig.contact.phones.map((phone, i) => (
                  <a key={i} href={`tel:${phone.value}`} className="font-mono text-sm font-bold text-plum-deep hover:underline">
                    📞 {phone.display}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Structured Validation Modal */}
      <FormSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false);
          setForm({ name: '', phone: '', age: '', preferredDate: '', service: '', message: '' });
        }}
        whatsappUrl={whatsappShareUrl}
      />

    </div>
  );
}
