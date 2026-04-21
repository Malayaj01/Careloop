import { MapPin, CheckCircle, Clock } from 'lucide-react';
import styles from './ServiceAvailability.module.css';

export default function ServiceAvailability() {
  const comingSoonCities = [
    "Delhi NCR", "Mumbai", "Bangalore", "Hyderabad",
    "Chennai", "Pune", "Kolkata", "Jaipur", "Lucknow", "Mirzapur"
  ];

  return (
    <section className={styles.availabilitySection}>
      <div className="container">
        <h2 className="section-title">Service Availability</h2>
        <p className={styles.subtitle}>Currently operating and expanding across India</p>

        {/* Active City */}
        <div className={styles.activeCity}>
          <div className={styles.activeBadge}>
            <CheckCircle size={20} />
            <span>NOW LIVE</span>
          </div>
          <div className={styles.activeCityName}>
            <MapPin size={28} />
            <h3>Varanasi</h3>
          </div>
          <p className={styles.activeCityDesc}>
            Post-discharge care, medicine delivery, and patient monitoring — fully operational.
          </p>
        </div>

        {/* Coming Soon Cities */}
        <h4 className={styles.comingSoonLabel}>
          <Clock size={18} />
          Coming Soon
        </h4>
        <div className={styles.citiesGrid}>
          {comingSoonCities.map((city, idx) => (
            <div key={idx} className={styles.cityPill}>
              <MapPin size={16} />
              <span>{city}</span>
            </div>
          ))}
        </div>

        <div className={styles.expansionBanner}>
          <div className={styles.bannerContent}>
            <h3>Expanding Rapidly</h3>
            <p>We are actively onboarding hospitals in new cities. Want Careloop in your city? Let us know!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
