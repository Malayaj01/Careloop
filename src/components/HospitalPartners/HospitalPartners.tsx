import { MapPin, Building2 } from 'lucide-react';
import styles from './HospitalPartners.module.css';

export default function HospitalPartners() {
  const partners = [
    {
      name: "Popular Hospital - Main Branch",
      address: "N-10 / 60, A-2, B.L.W. Road, Kakarmatta, Varanasi"
    },
    {
      name: "Popular Hospital - Bachhaon",
      address: "Chunar Road, Bachhaon, Varanasi"
    },
    {
      name: "Popular Hospital - Gopiganj",
      address: "G.T. Road, Parao, Near IndusInd Bank, Gopiganj"
    },
    {
      name: "Popular Hospital - Mirzapur",
      address: "Near Natwan Police Chowki, Jangi Road, Mirzapur"
    },
    {
      name: "City Hospital – Sigra",
      address: "Chandrika Nagar Colony, Sigra, Varanasi, Uttar Pradesh, India"
    }
  ];

  return (
    <section className={styles.partnersSection}>
      <div className="container">
        <h2 className="section-title">Our Hospital Partners</h2>
        <p className={styles.leadText}>
          We collaborate with the region&apos;s top medical facilities to ensure your post-discharge care is securely connected to your treating specialists.
        </p>
        
        <div className={styles.scrollWrapper}>
          <div className={styles.partnersTrack}>
            {/* Double the array to create a seamless infinite scroll loop */}
            {[...partners, ...partners].map((partner, idx) => (
              <div key={idx} className={styles.partnerCard}>
                <div className={styles.iconWrap}>
                  <Building2 size={24} />
                </div>
                <div className={styles.partnerInfo}>
                  <h3>{partner.name}</h3>
                  <div className={styles.addressLine}>
                    <MapPin size={16} className={styles.mapIcon} />
                    <span>{partner.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
