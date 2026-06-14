/**
 * SRI SWATHI HOSPITALS - Site Configuration File
 * Updates to this file will immediately reflect across the entire application.
 */

export const siteConfig = {
  hospitalName: "Sri Swathi Hospital",
  specialization: "Gynecology & Maternity Center",
  
  doctor: {
    name: "Dr. U. Swathi",
    qualifications: "MBBS, DGO",
    registrationNumber: "86794",
    role: "Senior Consultant Gynecologist & Maternity Care Specialist",
    bio: "Dr. U. Swathi is a highly qualified and trusted Gynecology and Maternity Care specialist with MBBS and DGO qualifications. With professional registration number 86704, she is dedicated to providing compassionate, evidence-based care for women at all stages of life—specializing in advanced infertility treatments, comprehensive pregnancy care, high-risk maternity management, and comprehensive women's wellness.",
    avatarUrl: "/Swathi.png", // High-end royalty-free professional portrait placeholder
    specializations: [
      "Infertility Specialist",
      "Ladies Specialist",
      "Gynecologist",
      "Maternity Care Specialist"
    ]
  },

  contact: {
    phones: [
      { display: "91000 02977", value: "+919100002977" },
      { display: "91000 02988", value: "+919100002988" }
    ],
    whatsapp: {
      display: "91000 02977",
      value: "+919100002977",
      welcomeMessage: "Hello Dr. Swathi, I would like to book an appointment at Sri Swathi Hospitals."
    },
    location: "Jagtial, Telangana",
    pincode: "505327",
    address: "Near Jambi-Gadde, Street Beside Lotus Pharmacy, Opposite ATM Hospital, Jagtial, Telangana – 505327",
    opdTimings: "Monday - Saturday: 10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM (Sunday Closed)",
    googleMapEmbedUrl: `<iframe
  src="https://www.google.com/maps/embed?pb=!4v1781436713782!6m8!1m7!1sMa5Nm-XZlA0TD6gU0asmmw!2m2!1d18.79540553936938!2d78.92226336887876!3f211.3821981671345!4f4.614859341751355!5f0.4000000000000002"
  width="100%"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>`,

    socials: {
      facebook: "https://facebook.com/sriswathihospitals",
      instagram: "https://instagram.com/sriswathihospitals",
      youtube: "https://youtube.com/c/sriswathihospitals"
    }
  },

  services: [
    {
      id: "gynecology",
      title: "Gynecology",
      shortDesc: "Complete healthcare for women of all ages, managing menstrual disorders, PCOS, fibroids, and general reproductive wellness.",
      longDesc: "Comprehensive gynecological services including screenings, treatments for common reproductive disorders, hormone management, adolescent healthcare, and lifestyle counseling to keep you healthy at every stage.",
      iconName: "User"
    },
    {
      id: "maternity-care",
      title: "Maternity Care",
      shortDesc: "Comprehensive maternity services delivering expert, round-the-clock supportive prenatal care and safe deliveries.",
      longDesc: "From preconception planning through a safe delivery, our maternity program provides supportive care, fetal monitoring, advanced medical facilities, and post-natal guides.",
      iconName: "HeartPulse"
    },
    {
      id: "pregnancy-care",
      title: "Pregnancy Care",
      shortDesc: "Highly personalized prenatal care tracking development and managing high-risk pregnancies with clinical excellence.",
      longDesc: "Pre-natal counseling, continuous fetal assessments, regular scans, health coaching, and full preparation maps for a joyful, healthy pregnancy transition.",
      iconName: "Sparkles"
    },
    {
      id: "infertility-treatment",
      title: "Infertility Treatment",
      shortDesc: "Expert fertility consultations, diagnostic assessments, and modern therapies to support couples on their parenthood path.",
      longDesc: "Advanced reproductive evaluations, ovulation induction, structured fertility counseling, and supportive procedures executed with the utmost confidentiality and high success rates.",
      iconName: "Activity"
    },
    {
      id: "womens-wellness",
      title: "Women's Wellness",
      shortDesc: "Preventative screenings, diagnostic checks, vaccination schedules, and lifestyle integration for comprehensive female care.",
      longDesc: "Routine health examinations, cervical cancer vaccinations, breast wellness assessments, custom diet plans, and medical checkups for long-term health assurance.",
      iconName: "Shield"
    },
    {
      id: "family-planning",
      title: "Family Planning",
      shortDesc: "Safe, confidential advice and state-of-the-art options for family planning, tailored to your reproductive health and timing choices.",
      longDesc: "Offering comprehensive counseling regarding contraceptive methodologies, health checks, temporary and permanent planning choices in a highly respectful, private environment.",
      iconName: "CalendarDays"
    }
  ],

  seo: {
    title: "Dr. U. Swathi | Best Gynecologist & Maternity Hospital in Jagtial | Sri Swathi Hospitals",
    description: "Sri Swathi Hospitals in Jagtial, Telangana. Led by Dr. U. Swathi (MBBS, DGO), specializes in Gynecology, maternity care, pregnancy guidance & infertility treatment.",
    keywords: "Best Gynecologist in Jagtial, Best Ladies Hospital in Jagtial, Best Maternity Hospital in Jagtial, Best Women's Hospital in Jagtial, Best Infertility Specialist in Jagtial, Dr U Swathi, Sri Swathi Hospitals Jagtial, Gynecology clinic Telangana",
    siteUrl: "https://sriswathihospitals.com", // Will adapt canonicals dynamically
    canonical: "https://sriswathihospitals.com",
    ogTitle: "Sri Swathi Hospitals - Best Gynecology & Maternity Center in Jagtial",
    ogDescription: "Expert care for women under Dr. U. Swathi (MBBS, DGO). Leading Gynecology, Obstetrics, Infertility, and Maternity center in Jagtial, Telangana.",
    ogImage: "/assets/dr_swathi.png",
    metaAuthor: "Sri Swathi Hospitals"
  },

  colorRatio: {
    lavender: "80% (Systemic Base)",
    plum: "15% (Premium Depth)",
    white: "5% (Clean Modernity)"
  },

  credits: "Developed by Vinod Shetty"
};
