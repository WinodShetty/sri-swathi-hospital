/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import FloatingActions from '@/src/components/FloatingActions';
import HomeView from '@/src/components/pages/HomeView';
import ServicesView from '@/src/components/pages/ServicesView';
import AboutDoctorView from '@/src/components/pages/AboutDoctorView';
import AppointmentView from '@/src/components/pages/AppointmentView';
import ContactView from '@/src/components/pages/ContactView';
import { ActivePage } from '@/src/types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  // Custom high-end smooth scroll function with navbar offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Fixed navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Intersection Observer for scroll spying to highlight correct navigation link automatically
  useEffect(() => {
    const sections = ['home', 'services', 'about-doctor', 'appointment', 'contact'];
    
    // Setting up root margin specifically to track which section dominates the screen view
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id as ActivePage);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-lavender-primary text-charcoal-text font-sans antialiased selection:bg-plum-deep/10 selection:text-plum-deep" id="sri-swathi-hospitals-app">
      {/* Dynamic Sticky Header Navigation */}
      <Navbar activePage={activePage} onNavigate={scrollToSection} />

      {/* Main Continuous Flow Scroller Area */}
      <main className="flex-grow pt-24 pb-16 px-4 md:px-12 max-w-7xl mx-auto w-full relative z-10 space-y-24" id="main-scroller-viewport">
        {/* SECTION 1: HOME */}
        <section id="home" className="scroll-mt-28 min-h-[85vh] flex items-center">
          <HomeView onNavigate={scrollToSection} />
        </section>

        {/* SECTION 2: SERVICES */}
        <section id="services" className="scroll-mt-28 pt-8 border-t border-plum-deep/10">
          <ServicesView onNavigate={scrollToSection} />
        </section>

        {/* SECTION 3: ABOUT DOCTOR */}
        <section id="about-doctor" className="scroll-mt-28 pt-8 border-t border-plum-deep/10">
          <AboutDoctorView onNavigate={scrollToSection} />
        </section>

        {/* SECTION 4: APPOINTMENT */}
        <section id="appointment" className="scroll-mt-28 pt-8 border-t border-plum-deep/10">
          <AppointmentView />
        </section>

        {/* SECTION 5: CONTACT */}
        <section id="contact" className="scroll-mt-28 pt-8 border-t border-plum-deep/10">
          <ContactView />
        </section>
      </main>

      {/* Footer Area with section maps and credits */}
      <Footer onNavigate={scrollToSection} />

      {/* Official Fixed WhatsApp Floating Button & receptionist dial desk */}
      <FloatingActions />
    </div>
  );
}
