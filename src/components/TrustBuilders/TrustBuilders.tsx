import { Quote, Star } from 'lucide-react';
import styles from './TrustBuilders.module.css';

export default function TrustBuilders() {
  const testimonials = [
    {
      name: "Ramesh K.",
      role: "Patient",
      text: "CareLoop made my recovery so much easier. The medication reminders and doctor chats kept me on track."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Doctor",
      text: "As a physician, CareLoop helps me monitor my patients post-discharge effortlessly. The dashboard is intuitive."
    },
    {
      name: "City Hospital",
      role: "Hospital Partner",
      text: "Since partnering with CareLoop, our readmission rates have dropped significantly. A game changer."
    }
  ];

  const stats = [
    { value: "10K+", label: "Patients Supported" },
    { value: "30%", label: "Reduction in Readmissions" },
    { value: "50+", label: "Hospital Partners" }
  ];

  return (
    <section className={styles.trustSection}>
      <div className="container">
        <h2 className="section-title">Trust Builders</h2>

        {/* Stats */}
        <div className={styles.statsRow}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statBubble}>
              <span className={styles.statVal}>{stat.value}</span>
              <span className={styles.statLbl}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <Quote size={24} className={styles.quoteIcon} />
              <p>{t.text}</p>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <div className={styles.author}>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
