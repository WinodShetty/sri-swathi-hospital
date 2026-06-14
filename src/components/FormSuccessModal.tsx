import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Send } from 'lucide-react';

interface FormSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  whatsappUrl?: string; // Optional URL to direct to the whatsapp api
}

export default function FormSuccessModal({
  isOpen,
  onClose,
  title = "Appointment Request Registered!",
  message = "Your details have been beautifully formatted. Proceed to send directly to Dr. Swathi on WhatsApp to finalize your booking.",
  whatsappUrl
}: FormSuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-plum-deep bg-opacity-30 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-lavender-light border-2 border-lavender-secondary rounded-3xl p-8 shadow-2xl z-10 text-center flex flex-col items-center"
            id="modal-card"
          >
            {/* Soft pulsing green/lavender outer ring surrounding elegant success check icon */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 rounded-full bg-plum-deep opacity-10 animate-ping"></div>
              <div className="w-14 h-14 rounded-full bg-plum-deep flex items-center justify-center text-white shadow-md">
                <Check size={26} strokeWidth={2.5} />
              </div>
            </div>

            <h3 className="font-serif text-2xl text-plum-deep font-semibold tracking-tight mb-3">
              {title}
            </h3>
            
            <p className="font-sans text-sm text-charcoal-text opacity-90 leading-relaxed mb-6">
              {message}
            </p>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col gap-3 w-full">
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={onClose}
                  className="w-full py-3 px-6 rounded-xl bg-plum-deep text-white font-sans text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-plum-medium transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              id="send-whatsapp-confirm-btn"
                >
                  <Send size={15} />
                  Send via WhatsApp Now
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-6 rounded-xl border border-lavender-secondary bg-transparent hover:bg-lavender-secondary hover:bg-opacity-40 text-plum-deep font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 pointer-events-auto cursor-pointer"
              id="modal-close-btn"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
