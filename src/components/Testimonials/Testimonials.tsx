import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Lead Cardiologist, City Hospital",
      quote: "CareLoop has transformed how we handle patient follow-ups. The medicine adherence tracking is a game-changer for cardiac recovery.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Patient Family Member",
      quote: "Managing my father's post-surgery care was stressful until we found CareLoop. Having all reports and reminders in one place is a blessing.",
      rating: 5
    },
    {
      name: "Dr. Anjali Mehta",
      role: "Internal Medicine Specialist",
      quote: "The personalized recovery scores allow me to intervene proactively when a patient's vitals dip. It's the future of remote monitoring.",
      rating: 5
    }
  ];

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <h2 className="section-title">Trusted by Doctors & Families</h2>
        
        <div className={styles.testimonialGrid}>
          {testimonials.map((item, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <Quote size={32} />
              </div>
              <div className={styles.stars}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className={styles.quoteText}>&quot;{item.quote}&quot;</p>
              <div className={styles.authorInfo}>
                <div className={styles.avatarPlaceholder}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.authorName}>{item.name}</h4>
                  <p className={styles.authorRole}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
