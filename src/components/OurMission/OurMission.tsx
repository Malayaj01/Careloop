import { Users, ShieldPlus, HeartHandshake } from 'lucide-react';
import styles from './OurMission.module.css';

export default function OurMission() {
  const missions = [
    {
      title: "Patient-First Always",
      icon: <Users size={48} className={styles.icon} />
    },
    {
      title: "Clinical Excellence",
      icon: <ShieldPlus size={48} className={styles.icon} />
    },
    {
      title: "Compassionate Support",
      icon: <HeartHandshake size={48} className={styles.icon} />
    }
  ];

  return (
    <section className={styles.missionSection}>
      <div className="container">
        <h2 className="section-title">Our Mission</h2>
        <div className={styles.missionGrid}>
          {missions.map((mission, idx) => (
            <div key={idx} className={styles.missionCard}>
              <div className={styles.iconWrapper}>
                {mission.icon}
              </div>
              <h3>{mission.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
