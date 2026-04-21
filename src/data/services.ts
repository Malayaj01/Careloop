import React from 'react';
import { HeartPulse, FileText, Truck, TestTubeDiagonal, Activity, ShieldCheck, Clock, Users, ClipboardCheck, Zap, Bell, Tablet, Search, MapPin } from 'lucide-react';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  heroDesc: string;
  icon: React.ReactNode;
  features: ServiceFeature[];
  benefits: string[];
}

export const servicesData: Record<string, ServiceData> = {
  "post-discharge-care": {
    slug: "post-discharge-care",
    title: "Post-Discharge Care",
    subtitle: "Healing shouldn't stop at the hospital gates.",
    heroDesc: "Careloop Healthcare bridges the critical gap between hospital discharge and full recovery. We provide structured monitoring and personalized care plans to prevent readmissions and ensure peace of mind.",
    icon: React.createElement(HeartPulse, { size: 48 }),
    features: [
      {
        icon: React.createElement(Activity, { size: 40 }),
        title: "Daily Vitals Monitoring",
        desc: "Regular check-ins on heart rate, blood pressure, and recovery markers through our integrated platform."
      },
      {
        icon: React.createElement(Users, { size: 40 }),
        title: "Dedicated Care Coordinator",
        desc: "A single point of contact for all your post-surgery or post-treatment queries and assistance."
      },
      {
        icon: React.createElement(ClipboardCheck, { size: 40 }),
        title: "Personalized Recovery Plan",
        desc: "A milestone-based roadmap tailored specifically to your condition and doctor's advice."
      },
      {
        icon: React.createElement(Zap, { size: 40 }),
        title: "Early Warning System",
        desc: "Our algorithms detect subtle physiological changes and alert your medical team before complications arise."
      }
    ],
    benefits: [
      "Reduced risk of hospital readmission",
      "Faster restoration of daily activities",
      "Expert guidance during the first 30 days",
      "Seamless communication with treating doctors"
    ]
  },
  "ehr": {
    slug: "ehr",
    title: "EHR (Electronic Health Record)",
    subtitle: "Your entire medical history, securely in your pocket.",
    heroDesc: "Stop carrying heavy medical files. Careloop Healthcare stores your entire health journey — from historical reports to current prescriptions — in a secure, easy-to-access digital format.",
    icon: React.createElement(FileText, { size: 48 }),
    features: [
      {
        icon: React.createElement(ShieldCheck, { size: 40 }),
        title: "Secure Vault Storage",
        desc: "Bank-grade encryption ensures your sensitive medical data is safe and private at all times."
      },
      {
        icon: React.createElement(Search, { size: 40 }),
        title: "Smart Search & Retrieval",
        desc: "Instantly find a lab report from 2 years ago or a specific prescription in seconds."
      },
      {
        icon: React.createElement(Tablet, { size: 40 }),
        title: "Integrated Insights",
        desc: "Our platform analyzes your data trends over time to provide a deeper understanding of your health."
      },
      {
        icon: React.createElement(Users, { size: 40 }),
        title: "Easy Sharing",
        desc: "Securely share specific documents with family members or consulting doctors with one click."
      }
    ],
    benefits: [
      "No more lost prescriptions or reports",
      "Unified view of health trends",
      "24/7 access from any device",
      "Healthcare data standard compliance"
    ]
  },
  "medicine-delivery": {
    slug: "medicine-delivery",
    title: "Medicine Delivery",
    subtitle: "Authentic medicines, delivered with care.",
    heroDesc: "Focus on recovery, not pharmacy visits. Careloop Healthcare provides fast, doorstep delivery of your prescribed medications with a 100% authenticity guarantee.",
    icon: React.createElement(Truck, { size: 48 }),
    features: [
      {
        icon: React.createElement(Clock, { size: 40 }),
        title: "Express Delivery",
        desc: "Get your post-discharge medications delivered to your home within hours of ordering."
      },
      {
        icon: React.createElement(Bell, { size: 40 }),
        title: "Refill Reminders",
        desc: "Our app tracks your stock and reminds you to reorder before you run out of essential meds."
      },
      {
        icon: React.createElement(ShieldCheck, { size: 40 }),
        title: "Verification Logs",
        desc: "Every medicine box is verified against your EHR prescription to ensure zero errors."
      },
      {
        icon: React.createElement(Zap, { size: 40 }),
        title: "Direct Prescription Sync",
        desc: "Order directly from the digital prescription stored in your EHR for maximum convenience."
      }
    ],
    benefits: [
      "100% Genuine medication sourcing",
      "Hassle-free chronic medicine management",
      "Transparent pricing and discounts",
      "Temperature-controlled delivery for cold-chain meds"
    ]
  },
  "lab-tests": {
    slug: "lab-tests",
    title: "Lab Tests at Home",
    subtitle: "The diagnostic lab comes to your doorstep.",
    heroDesc: "Avoid the risk of infections and the fatigue of travel. Get clinical-grade lab tests and radiology bookings done from the comfort and safety of your home.",
    icon: React.createElement(TestTubeDiagonal, { size: 48 }),
    features: [
      {
        icon: React.createElement(MapPin, { size: 40 }),
        title: "Home Sample Collection",
        desc: "Certified phlebotomists visit your home for painless sample collection following strict safety protocols."
      },
      {
        icon: React.createElement(Tablet, { size: 40 }),
        title: "Digital Report Delivery",
        desc: "Receive your results directly in your CareLoop EHR as soon as they are ready from the lab."
      },
      {
        icon: React.createElement(Activity, { size: 40 }),
        title: "Radiology Booking",
        desc: "Priority slots for MRI, CT scans, and X-rays at the city's top diagnostic centers."
      },
      {
        icon: React.createElement(Bell, { size: 40 }),
        title: "Trend Analysis",
        desc: "Compare current lab results with past ones to see your recovery progress on a graph."
      }
    ],
    benefits: [
      "Safe, hygienic home environment",
      "NABL-accredited laboratory partners",
      "Faster turnaround for reports",
      "Ambulance booking for specialized imaging"
    ]
  }
};
