import { MapPin } from 'lucide-react';
import styles from './ServiceAvailability.module.css';

export default function ServiceAvailability() {
  const cities = [
    "Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", 
    "Chennai", "Pune", "Kolkata", "Jaipur"
  ];

  return (
    <section className={styles.availabilitySection}>
      <div className="container">
        <h2 className="section-title">Service Availability</h2>
        <p className={styles.subtitle}>Available in your city — and expanding fast</p>
        
        <div className={styles.citiesGrid}>
          {cities.map((city, idx) => (
            <div key={idx} className={styles.cityPill}>
              <MapPin size={16} />
              <span>{city}</span>
            </div>
          ))}
        </div>

        <div className={styles.expansionBanner}>
          <div className={styles.bannerContent}>
            <h3>Expanding Soon</h3>
            <p>We are rapidly expanding to more cities across India. Stay tuned for updates!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
