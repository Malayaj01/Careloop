import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import { Heart, ClipboardList, Bell, Activity, Shield, Users, Smartphone, CheckCircle } from 'lucide-react';
import styles from './mycare.module.css';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Care',
  description: 'Your personal health dashboard. Manage digital health records, medication reminders, and post-discharge recovery seamlessly.',
};

export default function MyCarePage() {
  const features = [
    {
      icon: <ClipboardList size={40} />,
      title: "Digital Health Records",
      desc: "Access all your medical records, prescriptions, lab reports, and discharge summaries in one secure place."
    },
    {
      icon: <Bell size={40} />,
      title: "Medication Reminders",
      desc: "Never miss a dose — get timely push notifications for all your medications and follow-up appointments."
    },
    {
      icon: <Activity size={40} />,
      title: "Recovery Score",
      desc: "Track your recovery journey with a personalized health score updated daily based on your vitals and activity."
    },
    {
      icon: <Heart size={40} />,
      title: "Post-Discharge Care Plan",
      desc: "Receive a personalized recovery plan crafted by your care team, with milestones and check-ins."
    },
    {
      icon: <Shield size={40} />,
      title: "Secure & Private",
      desc: "Your health data is encrypted and secure. Only you and your authorized caregivers can access it."
    },
    {
      icon: <Users size={40} />,
      title: "Caregiver Access",
      desc: "Share your care plan with family members so they can support your recovery journey."
    }
  ];

  const appHighlights = [
    "One-click doctor consultation",
    "Instant ambulance booking",
    "Digital medicine refills",
    "Daily health tips & milestones",
    "24/7 Care coordinator chat",
    "Family sharing & alerts"
  ];

  return (
    <main>
      <Navbar />
      
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className="hero-title">My Care</h1>
          <p className={styles.heroSubtitle}>
            Your personal health dashboard — everything you need to manage your recovery, all in one place.
          </p>
        </div>
      </section>

      {/* App Preview Section */}
      <section className={styles.appPreviewSection}>
        <div className="container">
          <div className={styles.previewGrid}>
            <div className={styles.previewContent}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                Your Recovery, <br />
                <span className="text-primary">In Your Pocket</span>
              </h2>
              <p className={styles.previewLead}>
                The CareLoop mobile app is designed to be your constant companion after hospital discharge. 
                Simple, intuitive, and life-saving.
              </p>
              <div className={styles.highlights}>
                {appHighlights.map((item, id) => (
                  <div key={id} className={styles.highlightItem}>
                    <CheckCircle size={20} className={styles.checkIcon} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className={styles.storeButtons}>
                <button className={styles.storeBtn}>
                  <Smartphone size={20} />
                  App Store
                </button>
                <button className={styles.storeBtn}>
                  <Activity size={20} />
                  Play Store
                </button>
              </div>
            </div>
            <div className={styles.phoneStack}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreen}>
                  <div className={styles.appMockupHeader}>
                    <div className={styles.avatar}></div>
                    <div className={styles.mockupInfo}>
                      <div className={styles.lineSmall}></div>
                      <div className={styles.lineLarge}></div>
                    </div>
                  </div>
                  <div className={styles.mockupChart}>
                    <div className={styles.chartBar} style={{ height: '40%' }}></div>
                    <div className={styles.chartBar} style={{ height: '70%' }}></div>
                    <div className={styles.chartBar} style={{ height: '90%' }}></div>
                    <div className={styles.chartBar} style={{ height: '60%' }}></div>
                  </div>
                  <div className={styles.mockupCards}>
                    <div className={styles.mCard}></div>
                    <div className={styles.mCard}></div>
                  </div>
                </div>
              </div>
              {/* Decorative background element */}
              <div className={styles.phoneBlur}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className="section-title">Everything You Need</h2>
          <div className={styles.grid}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.iconWrap}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Ready to take control of your health?</h2>
            <p>Download the CareLoop app and start your recovery journey today.</p>
            <button className="btn-primary">Download Now</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
