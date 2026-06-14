/**
 * Structured types and interfaces for Sri Swathi Hospitals applications.
 */

export interface DoctorSpecialization {
  title: string;
}

export interface DoctorProfile {
  name: string;
  qualifications: string;
  registrationNumber: string;
  role: string;
  bio: string;
  avatarUrl: string;
  specializations: string[];
}

export interface PhoneContact {
  display: string;
  value: string;
}

export interface WhatsAppContact {
  display: string;
  value: string;
  welcomeMessage: string;
}

export interface HospitalContact {
  phones: PhoneContact[];
  whatsapp: WhatsAppContact;
  location: string;
  pincode: string;
  address: string;
  opdTimings: string;
  googleMapEmbedUrl: string;
  socials: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  siteUrl: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  metaAuthor: string;
}

export interface SiteConfigSchema {
  hospitalName: string;
  specialization: string;
  doctor: DoctorProfile;
  contact: HospitalContact;
  services: ServiceItem[];
  seo: SEOMetadata;
  colorRatio: {
    lavender: string;
    plum: string;
    white: string;
  };
  credits: string;
}

export type ActivePage = 'home' | 'services' | 'about-doctor' | 'appointment' | 'contact';
