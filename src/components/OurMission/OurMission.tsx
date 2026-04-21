import { Users, ShieldPlus, HeartHandshake } from 'lucide-react';
import styles from './OurMission.module.css';

const missions = [
  {
    icon: <Users size={30} />,
    title: 'Patient-First Always',
    desc: 'Every decision we make starts with a single question — what is best for the patient? Their comfort, safety, and recovery are at the center of everything we build.',
    number: '01',
  },
  {
    icon: <ShieldPlus size={30} />,
    title: 'Clinical Excellence',
    desc: 'We partner with verified medical professionals and follow evidence-based protocols to deliver care that meets the highest clinical standards — at home.',
    number: '02',
  },
  {
    icon: <HeartHandshake size={30} />,
    title: 'Compassionate Support',
    desc: 'Healing is more than medicine. We provide emotional support, clear communication, and a human touch that makes patients and families feel truly cared for.',
    number: '03',
  },
];

export default function OurMission() {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <span className={styles.tag}>What Drives Us</span>
          <h2 className={styles.heading}>Our Mission</h2>
          <p className={styles.subheading}>
            Three core principles guide every step of our journey to redefine post-hospital care.
          </p>
        </div>

        <div className={styles.missionGrid}>
          {missions.map((mission, idx) => (
            <div key={idx} className={styles.missionCard} data-number={mission.number}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{mission.icon}</div>
                <span className={styles.numberBadge}>{mission.number}</span>
              </div>
              <h3 className={styles.cardTitle}>{mission.title}</h3>
              <p className={styles.cardDesc}>{mission.desc}</p>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
